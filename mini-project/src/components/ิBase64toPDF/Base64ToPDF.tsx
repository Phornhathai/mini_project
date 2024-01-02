import { PDFDocument } from "pdf-lib";
import { useState } from "react";
import { pdfjs } from "react-pdf";

const Base64ToPDF = () => {
  const [iframeSrc, setIframeSrc] = useState<string | null>(null);

  const processBase64Strings = async (base64Strings: string[]) => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

    try {
      for (const base64String of base64Strings) {
        const uint8Array = Uint8Array.from(atob(base64String), (c) =>
          c.charCodeAt(0)
        );

        const pdfDoc = await PDFDocument.load(uint8Array);

        // Do something with the PDFDocument, e.g., save or manipulate it
        // ...

        //Save the PDFDocument to a file
        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: "application/pdf" });

        const blobURL = URL.createObjectURL(blob);
        //render to Iframe and download file pdf
        setIframeSrc(blobURL);
      }
    } catch (error) {
      console.error("Error processing base64 strings:", error);
    }
  };

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const inputText = event.target.value;
    const base64Strings = inputText
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
    processBase64Strings(base64Strings);
  };

  return (
    <div>
      <textarea
        placeholder="Enter base64 strings (one per line)"
        rows={5}
        cols={40}
        onChange={handleTextAreaChange}
      />
      {iframeSrc && (
        <iframe
          title="pdf-viewer"
          src={iframeSrc}
          width="fit-content"
          height="600px"
        />
      )}
    </div>
  );
};

export default Base64ToPDF;
