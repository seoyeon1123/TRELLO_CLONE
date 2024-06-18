import React, { useState } from 'react';
import styled from 'styled-components';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { authService } from './firebase';
import { Link } from 'react-router-dom';

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
  font-family: 'Architects Daughter', cursive;
`;

const Title = styled.h1`
  font-size: 40px;
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
  margin-bottom: 10px;
  border-radius: 10px;

  &:focus {
    outline: none;
  }
`;

const Sub = styled.p`
  text-align: end;
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
`;

const P = styled.p`
  margin-top: 50px;
  margin-bottom: 0;
  font-family: 'Gowun Batang';
`;

const Span = styled.span`
  color: #ffc700;
`;

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    try {
      const userCredential = await createUserWithEmailAndPassword(
        authService,
        email,
        password
      );
      console.log('User signed up:', userCredential.user);
      setEmail('');
      setPassword('');
      window.alert('회원가입에 성공하셨습니다.');
      await authService.signOut(); // 회원가입 후 사용자를 로그아웃시킴
    } catch (error: any) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          setError('이미 등록된 이메일입니다. 다른 이메일을 사용해 주세요.');
          break;
        case 'auth/invalid-email':
          setError('유효하지 않은 이메일 주소입니다.');
          break;
        case 'auth/weak-password':
          setError(
            '비밀번호가 너무 약합니다. 더 강력한 비밀번호를 사용해 주세요.'
          );
          break;
        default:
          setError('회원가입 중 오류가 발생했습니다.');
          break;
      }
      console.error('Error signing up:', error);
    }
  };

  return (
    <Container>
      <Title>Sign Up</Title>
      <Form onSubmit={handleSignUp}>
        <P>Please enter your email</P>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <Sub>Please enter your Password</Sub>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <Button type="submit">회원가입</Button>
        <P>
          이미 회원가입을 하셨나요?
          <Link to="/TRELLO_CLONE/Login">
            <Span> 로그인하기 </Span>
          </Link>
        </P>
      </Form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </Container>
  );
};

export default React.memo(SignUp);
