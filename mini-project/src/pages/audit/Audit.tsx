import Base64InputTextArea from "../../components/Base64InputTextArea/Base64InputTextArea";
import "./audit.scss";

const Audit = () => {
  return (
    <div className="audit">
      audit page
      <Base64InputTextArea />
      <div className="showPDF"></div>
    </div>
  );
};

export default Audit;
