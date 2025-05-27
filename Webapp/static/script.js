const compressFileInput = document.getElementById("compressFile");
const compressSubmitBtn = document.getElementById("compressSubmit");
const compressSelectedFile = document.getElementById("compressSelectedFile");
const compressFileName = document.getElementById("compressFileName");

const decompressFileInput = document.getElementById("decompressFile");
const decompressSubmitBtn = document.getElementById("decompressSubmit");
const decompressSelectedFile = document.getElementById(
  "decompressSelectedFile"
);
const decompressFileName = document.getElementById("decompressFileName");

compressFileInput.addEventListener("change", function (e) {
  if (e.target.files.length > 0) {
    const file = e.target.files[0];
    compressFileName.textContent = file.name;
    compressSelectedFile.style.display = "block";
    compressSubmitBtn.disabled = false;
  } else {
    compressSelectedFile.style.display = "none";
    compressSubmitBtn.disabled = true;
  }
});

decompressFileInput.addEventListener("change", function (e) {
  if (e.target.files.length > 0) {
    const file = e.target.files[0];
    decompressFileName.textContent = file.name;
    decompressSelectedFile.style.display = "block";
    decompressSubmitBtn.disabled = false;
  } else {
    decompressSelectedFile.style.display = "none";
    decompressSubmitBtn.disabled = true;
  }
});

function setupDragAndDrop(uploadArea, fileInput) {
  uploadArea.addEventListener("dragover", function (e) {
    e.preventDefault();
    uploadArea.classList.add("dragover");
  });

  uploadArea.addEventListener("dragleave", function (e) {
    e.preventDefault();
    uploadArea.classList.remove("dragover");
  });

  uploadArea.addEventListener("drop", function (e) {
    e.preventDefault();
    uploadArea.classList.remove("dragover");

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      fileInput.files = files;
      fileInput.dispatchEvent(new Event("change"));
    }
  });
}

const compressUploadArea = document.querySelector(
  ".compress-card .upload-area"
);
const decompressUploadArea = document.querySelector(
  ".decompress-card .upload-area"
);

setupDragAndDrop(compressUploadArea, compressFileInput);
setupDragAndDrop(decompressUploadArea, decompressFileInput);

document
  .getElementById("compressForm")
  .addEventListener("submit", function (e) {
    compressSubmitBtn.textContent = "Compressed";
    compressSubmitBtn.disabled = true;
  });

document
  .getElementById("decompressForm")
  .addEventListener("submit", function (e) {
    decompressSubmitBtn.textContent = "Decompressed";
    decompressSubmitBtn.disabled = true;
  });
