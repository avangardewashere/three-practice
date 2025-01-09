import { ChangeEvent, useState } from "react";

type UploadStatus = "idle" | "uploading" | "successs" | "error";

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<UploadStatus>("idle");

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  }
  return (
    <div style={{ display: "flex", gap: "0 4" }}>
      <input
        type="file"
        name="myFile"
        id="myFile"
        style={{}}
        onChange={handleFileChange}
      />

      {file && (
        <div style={{ fontSize: "11px", marginBottom: "4px" }}>
          <p>File name: {file.name}</p>
          <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
          <p>Type : {file.type}</p>
        </div>
      )}
      {file && status !== "uploading" && <button>Upload</button>}
    </div>
  );
};

export default FileUpload;
