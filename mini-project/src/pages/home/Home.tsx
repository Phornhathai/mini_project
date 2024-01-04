import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../libs/firebase";
import { ChangeEvent, useEffect, useState } from "react";
import "./home.scss";
import FileUpload from "../../components/fileUpload/FileUpload";
import ShowPDF from "../../components/showPDF/showPDF";
import Base64ToPDF from "../../components/ิBase64toPDF/base64ToPDF";
import { PDFtobase64 } from "../../services/CommonFunction";

const Home = () => {
  // สร้าง state เพื่อเก็บข้อมูลผู้ใช้ที่ login
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() =>
    // ใช้ onAuthStateChanged เพื่อตรวจสอบการเปลี่ยนแปลงในการ authenticate
    {
      // onAuthStateChanged คืนค่า currentUser กลับมา
      const unsubscribe = onAuthStateChanged(auth, (CurrentUser) => {
        if (CurrentUser) {
          setUser(CurrentUser);
        } else {
          setUser(null);
        }
      });

      return () => {
        unsubscribe();
      };
    }, []);

  const handleLogout = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const handlePDFtobase64 = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files?.[0];
      if (file) {
        const base64Sring = await PDFtobase64(file);
        console.log(base64Sring);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleLogout} className="home">
      {/* create left box for showing information */}
      <div className="userInfo">
        {user && (
          <div className="loginDetail">
            <p>Email : {user.email}</p>
            <p>Uid : {user.uid}</p>
            <p>Display Name : {user.displayName}</p>
            <p>Token : {user.idToken}</p>
            <button type="submit">Logout</button>
          </div>
        )}
      </div>
      <div className="Info">
        <input
          type="file"
          name="pdfUpload"
          id="pdfUpload"
          onChange={handlePDFtobase64}
        />
      </div>
    </form>
  );
};

export default Home;
