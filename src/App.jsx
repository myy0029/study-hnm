import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import Navbar from "./component/Navbar";
import PrivateRoute from "./route/PrivateRoute";
import MainSlide from "./component/MainSlide";
import Footer from "./component/Footer";

function App() {
  // 앱 시작 시 localStorage에서 로그인 상태 복원
  const [authenticate, setAuthenticate] = useState(() => {
    return localStorage.getItem("authenticate") === "true";
  });

  // authenticate 변경될 때마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem("authenticate", String(authenticate));
    console.log("aaa", authenticate);
  }, [authenticate]);

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      {/* <MainSlide />
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate} />} />
      </Routes> */}

      <Routes>
        {/* 홈에서만 슬라이드 보이게 */}
        <Route
          path="/"
          element={
            <>
              <MainSlide />
              <ProductAll />
            </>
          }
        />

        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
