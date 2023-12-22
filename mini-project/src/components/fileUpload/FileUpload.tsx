import { ChangeEvent, useState } from "react";

const FileUpload = () => {
  const [base64String, setBase64String] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        //ใช้ split แต่ละค่าด้วย , แล้วเลือกค่าสุดท้ายออกมาด้วย pop()
        const resultArray = result.split(",").pop() || null;
        setBase64String(resultArray);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fileUpload">
      <input
        type="file"
        name="fileUpload"
        id="fileUpload"
        onChange={handleFileChange}
      />
      {base64String && (
        <div>
          <textarea
            value={base64String}
            readOnly
            cols={70}
            rows={10}
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
