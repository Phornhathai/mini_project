import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../libs/firebase";
import { useEffect, useState } from "react";
import "./home.scss";
import FileUpload from "../../components/fileUpload/FileUpload";

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

  return (
    <form onSubmit={handleLogout} className="home">
      {/* create left box for showing information */}
      <div className="userInfo">
        {user && (
          <div>
            <p>Email : {user.email}</p>
            <p>Uid : {user.uid}</p>
            <p>Display Name : {user.displayName}</p>
            <p>Token : {user.idToken}</p>
            <button type="submit">Logout</button>
          </div>
        )}
        <div className="fileUpload">
          <FileUpload />
        </div>
      </div>
      <div className="detailInfo">
        <div className="leftInfo"></div>
        <div className="rightInfo"></div>
      </div>
    </form>
  );
};

export default Home;
