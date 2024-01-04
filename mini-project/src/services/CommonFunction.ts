import { PDFDocument } from "pdf-lib";
import { pdfjs } from "react-pdf";

export function PDFtobase64(file: File): Promise<string | null> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const result = reader.result as string;

      if (result) {
        const base64String = result.split(",").pop() || null;
        resolve(base64String);
      } else {
        reject(new Error("ไม่สามารถอ่านไฟล์ PDF ได้"));
      }
    };

    // อ่านไฟล์ PDF เป็น Data URL
    reader.readAsDataURL(file);
  });
}

export async function base64toPDF(base64Strings: string[]) {
  pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

  const iframeSrcs = [];
  try {
    for (const base64String of base64Strings) {
      const uint8Array = Uint8Array.from(atob(base64String), (c) =>
        c.charCodeAt(0)
      );

      const pdfDoc = await PDFDocument.load(uint8Array);

      //save the pdfDocument to a file
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });

      const blobURL = URL.createObjectURL(blob);
      iframeSrcs.push(blobURL);
    }
  } catch (error) {
    console.error("Error processing base64 strings", error);
  }

  return iframeSrcs;
}
