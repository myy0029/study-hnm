import { Form, Button, Container } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

function Login({ setAuthenticate }) {
  const navigate = useNavigate();
  const location = useLocation();

  // PrivateRoute에서 넘겨준 원래 경로
  const from = location.state?.from || "/";

  const loginUser = (event) => {
    event.preventDefault();

    if (!email || !password) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return; // 로그인 중단
    }

    setAuthenticate(true);
    localStorage.setItem("authenticate", "true");

    // 원래 가려던 페이지로 이동
    navigate(from, { replace: true });
  };

  // 빈값 체크
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container className="login">
      <Form onSubmit={loginUser}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email을 입력해주세요."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password를 입력해주세요."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="danger" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
