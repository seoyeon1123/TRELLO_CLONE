import React, { useState, useEffect } from 'react';
import { useHistory, Link, Redirect } from 'react-router-dom';
import { authService, googleProvider } from './firebase';
import {
  User,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth';
import styled from 'styled-components';
import googleIcon from '../google_icon.png';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.theme.boardColor};
  width: 450px;
  height: 450px;
  color: ${(props) => props.theme.boardtextColor};
  border-radius: 20px;
`;

const Title = styled.h1`
  margin-top: 20px;
  font-size: 30px;
`;

const Strong = styled.strong`
  font-size: 80px;
`;

const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Input = styled.input`
  font-size: 17px;
  padding: 5px;
  width: 270px;
  background-color: white;
  margin-bottom: 5px;
  border-radius: 10px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-family: 'Ownglyph_ryurue-Rg';
  }
`;

const Button = styled.button`
  margin-top: 10px;
  font-size: 18px;
  width: auto;
  height: 40px;
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 10px;
  &:active {
    font-size: 15px;
  }
  font-family: 'Ownglyph_ryurue-Rg';
`;

const GoogleBtn = styled(Button)`
  margin-top: 5px;
  font-size: 15px;
  padding: 5px 50px;
  border-radius: 10px;
  display: flex;
  background-color: white;
  align-items: center;
`;

const GoogleIcon = styled.img`
  width: 30px; /* 이미지 크기 조정 */
  margin-right: 10px; /* 이미지와 버튼 텍스트 사이 간격 조정 */
`;

const Hr = styled.hr`
  width: 80%;
  margin: 10px 0;
  border: none;
  border-top: 1px solid ${(props) => props.theme.boardtextColor};
`;

const P = styled.p`
  margin-top: 40px;
  margin-bottom: 10px;
  font-size: 20px;
`;

const Span = styled.span`
  color: #ffc700;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState('');
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authService, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    try {
      const userCredential = await signInWithEmailAndPassword(
        authService,
        email,
        password
      );
      setUser(userCredential.user);
      console.log('User logged in:', userCredential.user);
      resetForm(); // 로그인 후 이메일과 비밀번호 초기화
      history.push('/TRELLO_CLONE/ToDoBoard'); // 로그인 성공 후 ToDoBoard로 리디렉션
    } catch (error) {
      setError((error as Error).message);
      console.error('Error logging in:', error);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');

    try {
      const result = await signInWithPopup(authService, googleProvider);
      setUser(result.user);
      console.log('User signed in with Google:', result.user);
      history.push('/TRELLO_CLONE/ToDoBoard'); // Google 로그인 성공 후 ToDoBoard로 리디렉션
    } catch (error) {
      setError((error as Error).message);
      console.error('Error signing in with Google:', error);
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setError('');
  };

  // 로그인 상태일 경우 ToDoBoard로 리디렉션
  if (user) {
    return <Redirect to="/TRELLO_CLONE/ToDoBoard" />;
  }

  return (
    <Container>
      <Title>
        <Strong>오</Strong>늘 <Strong>너</Strong>의 <Strong>하</Strong>루는
        <Strong>?</Strong>
      </Title>
      <Form onSubmit={handleLogin}>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <Button type="submit">Login</Button>
      </Form>
      <Hr />

      <GoogleBtn onClick={handleGoogleLogin}>
        <GoogleIcon src={googleIcon} alt="Google Icon" />
        Login with Google
      </GoogleBtn>
      <P>
        계정이 없으신가요?{' '}
        <Link to="/TRELLO_CLONE/SignUp">
          <Span>회원가입</Span>
        </Link>
      </P>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </Container>
  );
};

export default React.memo(Login);
