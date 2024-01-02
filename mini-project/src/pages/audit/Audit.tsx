import "./audit.scss";
import Base64InputTextArea from "../../components/Base64InputTextArea/Base64InputTextArea";
import Base64ToPDF from "../../components/ิBase64toPDF/base64ToPDF";

const Audit = () => {
  return (
    <div className="audit">
      audit page
      <Base64ToPDF />
      <div className="showPDF"></div>
    </div>
  );
};

export default Audit;
