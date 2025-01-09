import { ChangeEvent, useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  }
  return (
    <div>
      <input
        type="file"
        name="myFile"
        id="myFile"
        style={{}}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileUpload;
