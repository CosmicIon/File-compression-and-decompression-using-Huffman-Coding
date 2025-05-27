from flask import Flask, request, send_from_directory, render_template
import subprocess
import os

app = Flask(__name__)
UPLOAD_FOLDER = "uploads"
OUTPUT_FOLDER = "output"
HUFFMAN_EXE = "huffman.exe"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

if not os.path.exists(HUFFMAN_EXE):
    raise RuntimeError(f"Executable not found: {HUFFMAN_EXE}")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/compress", methods=["POST"])
def compress():
    file = request.files["file"]
    input_path = os.path.join(UPLOAD_FOLDER, file.filename)
    output_path = os.path.join(OUTPUT_FOLDER, "compressed.txt")
    file.save(input_path)

    original_size = os.path.getsize(input_path)

    subprocess.run([HUFFMAN_EXE, "-c", input_path, output_path], check=True)

    compressed_size = os.path.getsize(output_path)

    if original_size > 0:
        compression_ratio = compressed_size / original_size
        percent_reduced = (1 - compression_ratio) * 100
    else:
        compression_ratio = 0
        percent_reduced = 0

    return render_template(
        "result.html",
        original_size=original_size,
        compressed_size=compressed_size,
        compression_ratio=round(compression_ratio, 2),
        percent_reduced=round(percent_reduced, 2),
        download_link="compressed.txt"
    )
@app.route("/decompress", methods=["POST"])
def decompress():
    file = request.files["file"]
    input_path = os.path.join(UPLOAD_FOLDER, file.filename)
    output_path = os.path.join(OUTPUT_FOLDER, "decompressed.txt")
    file.save(input_path)

    subprocess.run([HUFFMAN_EXE, "-d", input_path, output_path], check=True)

    return send_from_directory(OUTPUT_FOLDER, "decompressed.txt", as_attachment=True)

@app.route("/download/<filename>")
def download_file(filename):
    return send_from_directory(OUTPUT_FOLDER, filename, as_attachment=True)

if __name__ == "__main__":
    app.run(debug=True)