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
