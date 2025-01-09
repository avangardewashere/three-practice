import { ChangeEvent, useState } from "react";

type UploadStatus = "idle" | "uploading" | "success" | "error";

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<UploadStatus>("idle");

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  }

  async function handleFileUpload() {
    if (!file) return;

    setStatus("uploading");

    const formData = new FormData();
    formData.append("file", file);

    try {
      
      const res =  await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: file,
      });

      console.log(res)
      setStatus("success")
    } catch {
        setStatus("error")
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
      {file && status !== "uploading" && <button  onClick={handleFileUpload}>Upload</button>}

      {status === "error" && (
        <p style={{ color: "red" }}>Upload failed. Please try again</p>
      )}

      

      {status === "success" && (
        <p style={{ color: "green" }}>Success</p>
      )}
      {status === "uploading" && (
        <p style={{ color: "green" }}>Uploading</p>
      )}
    </div>
  );
};

export default FileUpload;
