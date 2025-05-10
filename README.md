# 📦 File Compression and Decompression using Huffman coding.

> ⚠️ **Status**: This project is currently in the **working phase**. Some features may be incomplete or under development.

A lightweight, lossless compression tool that uses **Huffman Coding** to compress and decompress text-based files. Built entirely in **C++**, this project demonstrates the power of greedy algorithms and binary trees in real-world data handling.

---

## 🧠 Project Overview

Huffman Coding is a classic **lossless data compression algorithm** that assigns shorter binary codes to more frequent characters and longer codes to less frequent ones. This project implements the full compression-decompression cycle, making it suitable for educational, practical, and bioinformatics use cases.

---

## 🚀 Features

- ✅ Compress and decompress `.txt`, `.csv`, `.json`, `.log`, `.xml`, `.html`, `.yaml`, and other text files
- ✅ Efficient binary encoding using Huffman Tree
- ✅ Supports large files (e.g., DNA sequences, logs)
- ✅ Clean modular structure (C++ source files and headers)
- ✅ Frequency analysis + file size comparison included
- 🚧 Optional web interface using HTML/CSS/JS _(in progress)_

---

## 📂 Folder Structure

```
HuffmanCompression/
├── src/              # C++ source files
│   ├── main.cpp
│   ├── huffman.cpp
├── include/          # Header files
│   └── huffman.h
├── test_files/       # Sample files to compress
│   └── sample.txt
│   └── dna_sample.txt
├── output/           # Compressed and decompressed outputs
├── README.md         # Project documentation
```

---

## 🛠️ Technologies Used

- **C++** (Core logic and file handling)
- **Priority Queue / Min-Heap** for tree construction
- **Custom Tree Struct** for Huffman nodes
- _(Optional)_ HTML/CSS/JavaScript for web interface (planned)

---

## 🧪 How It Works

1. Read the input file
2. Count frequency of each character
3. Build Huffman Tree using priority queue
4. Generate binary codes via tree traversal
5. Encode the file and save it as compressed output
6. Decode using saved tree structure or frequency table
7. Restore the original file content with 100% accuracy

---

## 📁 Supported File Formats

This tool works best with uncompressed, text-based files:

- `.txt`, `.csv`, `.json`, `.xml`, `.log`, `.html`, `.yaml`

## How to Run.

### On Unix/Linux/macOS:

```bash
mkdir -p output
g++ -Iinclude src/huffman.cpp src/utils.cpp src/main.cpp -o output/huffman
```

### On Windows with MinGW:

1. Ensure MinGW is installed and added to your PATH
2. Open PowerShell or Command Prompt and navigate to the project folder
3. Compile it using:

```powershell
g++ -Iinclude src/huffman.cpp src/utils.cpp src/main.cpp -o output/huffman.exe
```

4. Run the program from the output directory:

```powershell
cd output
./huffman.exe -c ..\test_files\sample.txt compressed.bin
./huffman.exe -d compressed.bin decompressed.txt
```

## Running the Program

After building, the executable will be in the `output` directory.

### For file compression:

```
./huffman.exe -c ..\test_files\sample.txt compressed.bin
```

### For file decompression:

```
./huffman.exe -d compressed.bin decompressed.txt
```
