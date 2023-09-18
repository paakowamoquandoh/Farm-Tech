import { useState, useRef, ChangeEvent } from "react";


interface Lecturer {
  firstname: string;
  lastname: string;
  email: string;
}

function EditModal() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [typeError, setTypeError] = useState<string | null>(null);
  const [lecturerData, setLecturerData] = useState<Lecturer[]>([]);

  
const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
  const fileTypes = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv'];
  const selectedFile = e.target.files && e.target.files[0];
  if (selectedFile) {
    if (selectedFile && fileTypes.includes(selectedFile.type)) {
      setTypeError(null);
      const reader = new FileReader();
      reader.readAsText(selectedFile);
      reader.onload = (e) => {
        const csvText = e.target?.result as string; // Type assertion here
        const lines = csvText?.split('\n');
        if (lines) {
          const headers = lines[0].split(',');
          const data = [];

          for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',');
            if (values.length === headers.length) {
              const entry: Lecturer = {
                firstname: values[0],
                lastname: values[1],
                email: values[2],
              };
              data.push(entry);
            }
          }
          setLecturerData(data); 
        console.log(data)     
        }
      };
    } else {
      setTypeError('Please select only excel file types');
    }
  } else {
    console.log('Please select your file');
  }
}
  const handleUploadButtonClick = () => {
    fileInputRef.current?.click();
  }

  return (
    <div className="wrapper">
      <form className="form-group custom-form" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={fileInputRef}
          type="file"
          className="form-control"
          style={{ display: 'none' }}
          required
          onChange={handleFile}
        />
        <label
          htmlFor="fileInput"
          className="btn btn-success btn-md"
          onClick={handleUploadButtonClick}
        >
          UPLOAD
        </label>
        {typeError && (
          <div className="alert alert-danger" role="alert">{typeError}</div>
        )}
      </form>

      <div className="viewer">
      {lecturerData.map((lecturer, index) => (
                  <tr key={index}>
                    <td>{lecturer.firstname}</td>
                    <td>{lecturer.lastname}</td>
                    <td>{lecturer.email}</td>
                  </tr>
                ))}
      </div>
    </div>
  );
}



export default EditModal;
