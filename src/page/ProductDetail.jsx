import React, { useEffect, useState } from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { useParams } from "react-router-dom";

function ProductDetail() {
  let { id } = useParams();

  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/moonyy0209/study-hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container className="product-detail" fluid="xxl">
      <Row>
        <Col className="product-img">
          <img src={product?.img} alt="" />
        </Col>
        <Col className="info">
          <div className="product-title">
            <p>{product?.title}</p>
            <span className="heart">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="heart"
                className="svg-inline--fa fa-heart "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                ></path>
              </svg>
            </span>
          </div>
          {/* <div className='product-price'>₩ {product?.price}</div> */}
          <p className="product-price">
            ₩{" "}
            {product?.price != null
              ? new Intl.NumberFormat("ko-KR").format(product.price)
              : ""}
          </p>
          <div>
            {product?.choice === true ? (
              <span className="product-choice">Conscious choice</span>
            ) : null}
            {product?.new === true ? (
              <span className="product-new">신제품</span>
            ) : null}
          </div>

          {product?.size?.length > 0 && (
            <select aria-label="Default select example" className="form-select">
              <option disabled="">사이즈 선택</option>
              {product.size.map((size) => (
                <option key={size}>{size}</option>
              ))}
            </select>
          )}
          <div className="product-size">
            <p>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="ruler"
                className="svg-inline--fa fa-ruler "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M177.9 494.1c-18.7 18.7-49.1 18.7-67.9 0L17.9 401.9c-18.7-18.7-18.7-49.1 0-67.9l50.7-50.7 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 50.7-50.7c18.7-18.7 49.1-18.7 67.9 0l92.1 92.1c18.7 18.7 18.7 49.1 0 67.9L177.9 494.1z"
                ></path>
              </svg>
              <span>사이즈 가이드</span>
            </p>

            <p>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="envelope"
                className="svg-inline--fa fa-envelope "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                ></path>
              </svg>
              <span>원하는 사이즈가 품절인가요?</span>
            </p>
          </div>

          <div className="d-grid gap-2">
            <button type="button" className="btn btn-danger">
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
              <span>바로 구매하기</span>
            </button>
            <button type="button" className="btn btn-dark">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="bag-shopping"
                className="svg-inline--fa fa-bag-shopping "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
                ></path>
              </svg>
              <span>장바구니 추가</span>
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
