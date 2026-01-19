import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Logo from "./../assets/logo.png";
import { useEffect, useState } from "react";

function Navbar({ authenticate, setAuthenticate }) {
  const menuList = [
    "Women",
    "Men",
    "Baby",
    "Kids",
    "H&M HOME",
    "Sport",
    "Sale",
    "지속가능성",
  ];
  const navigate = useNavigate();

  //   const handleAuthClick = () => {
  //     if (authenticate) {
  //       // 로그아웃
  //       setAuthenticate(false);
  //       navigate('/');
  //     } else {
  //       // 로그인 페이지로
  //       navigate('/login');
  //     }
  //   };

  const handleAuthClick = () => {
    if (authenticate) {
      setAuthenticate(false);
      localStorage.removeItem("authenticate");
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const search = (event) => {
    if (event.key === "Enter") {
      // 입력한 검색어를 읽어와서
      let keyword = event.target.value;

      // url을 바꿔줌
      navigate(`/?q=${keyword}`);
    }
  };

  const [isBagOpen, setIsBagOpen] = useState(false);

  const [isleftMenuOpen, setIsLeftMenuOpen] = useState(false);
  useEffect(() => {
    const DESKTOP_WIDTH = 1024;

    const handleResize = () => {
      if (window.innerWidth >= DESKTOP_WIDTH) {
        setIsLeftMenuOpen(false); // 열려있던 모바일 메뉴 닫기
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // 처음 로드 시에도 체크

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      <div className="top">
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="Search"
            onKeyDown={(event) => search(event)}
          />
        </div>
        <div className="shop-button iunITO" onClick={() => setIsBagOpen(true)}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bag-shopping"
            className="svg-inline--fa fa-bag-shopping fa-xl "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
            ></path>
          </svg>
        </div>
        <div className="login-button" onClick={handleAuthClick}>
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticate ? "로그아웃" : "로그인"}</div>
        </div>
      </div>

      <div className="nav-section">
        {/* <img
          width={100}
          src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
          alt="H&M"
        /> */}
        <p className="logo-img" onClick={() => navigate("/")}>
          <img width={100} src={Logo} alt="H&M Logo" />
        </p>
        <button className="leftmenu" onClick={() => setIsLeftMenuOpen(true)}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            className="svg-inline--fa fa-bars fa-xl "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
            ></path>
          </svg>
        </button>
      </div>

      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li key={menu}>{menu}</li>
          ))}
        </ul>
      </div>

      <div className={`shopping-Bag ${isBagOpen ? "on" : ""}`}>
        <button className="sb-close-btn" onClick={() => setIsBagOpen(false)}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="x"
            className="svg-inline--fa fa-x fa-lg "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="currentColor"
              d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
            ></path>
          </svg>
        </button>
        <h2>쇼핑백</h2>
        <Container>
          <Row className="text">고객님의 쇼핑백이 비어 있습니다.</Row>
          <Row>
            <Col>합계금액</Col>
            <Col className="total-price">
              ₩ <span>0</span>
            </Col>
          </Row>
          <Row>
            <button type="button" className="goShop btn btn-danger">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="cart-shopping"
                className="svg-inline--fa fa-cart-shopping "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                ></path>
              </svg>
              <span>구매하기</span>
            </button>
          </Row>
        </Container>
      </div>

      <nav className={`smallmenu ${isleftMenuOpen ? "on" : ""}`}>
        <button
          className="sm-close-btn"
          onClick={() => setIsLeftMenuOpen(false)}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="x"
            className="svg-inline--fa fa-x "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            color="#ffffff"
          >
            <path
              fill="currentColor"
              d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
            ></path>
          </svg>
        </button>
        <ul className="show">
          <li>Women</li>
          <li>Men</li>
          <li>Baby</li>
          <li>Kids</li>
          <li>H&amp;M HOME</li>
          <li>Sport</li>
          <li>Sale</li>
          <li>지속가능성</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
