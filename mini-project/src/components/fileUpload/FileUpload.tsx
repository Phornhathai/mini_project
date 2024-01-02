import { PDFDocument, pdfDocEncodingDecode } from "pdf-lib";
import { ChangeEvent, useState } from "react";
import { pdfjs } from "react-pdf";

const FileUpload = () => {
  const [base64String, setBase64String] = useState<string[] | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        //ใช้ split แต่ละค่าด้วย , แล้วเลือกค่าสุดท้ายออกมาด้วย pop()
        const resultArray = result.split(",").pop() || null;
        // setBase64String(resultArray);
        console.log(resultArray);
        if (resultArray) {
          setBase64String([resultArray]);
          console.log([resultArray]);
          // processBase64Strings([resultArray]);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // const processBase64Strings = async (base64Strings: string[]) => {
  //   pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

  //   try {
  //     for (const base64 of base64Strings) {
  //       const uint8Array = Uint8Array.from(atob(base64), (c) =>
  //         c.charCodeAt(0)
  //       );
  //       const pdfDoc = await PDFDocument.load(uint8Array);
  //       const pdfBytes = await pdfDoc.save();
  //       const blob = new Blob([pdfBytes], { type: "application/pdf" });
  //       const link = document.createElement("a");
  //       link.href = URL.createObjectURL(blob);
  //       link.download = "output.pdf";
  //       link.click();
  //     }
  //   } catch (error) {}
  // };

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
