import React, { useState } from 'react';
import styled from 'styled-components';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

// Styled components for the main container and form
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
  font-size: 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 15px;
`;

const Input = styled.input`
  font-size: 17px;
  padding: 5px;
  width: 270px;
  background-color: white;
  margin-bottom: 10px;
  border-radius: 10px;
  font-family: 'Ownglyph_ryurue-Rg';

  &:focus {
    outline: none;
  }
  &::placeholder {
    font-family: 'Ownglyph_ryurue-Rg';
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
  font-family: 'Ownglyph_ryurue-Rg';
`;

const P = styled.p`
  margin-top: 50px;
  margin-bottom: 0;
  font-size: 20px;
`;

const Span = styled.span`
  color: #ffc700;
`;

// Custom styled-components for SweetAlert2 modals
const StyledSweetAlertContainer = styled.div`
  .swal2-popup {
    background-color: ${(props) => props.theme.boardColor};
  }

  .swal2-title {
    color: ${(props) => props.theme.boardtextColor};
  }

  .swal2-content {
    color: ${(props) => props.theme.boardtextColor};
  }

  .swal2-confirm {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.boardColor};
    border-radius: 10px;
    padding: 10px 20px;
    &:hover {
      background-color: ${(props) => props.theme.boardColor};
      color: ${(props) => props.theme.bgColor};
    }
  }
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
        auth,
        email,
        password
      );

      Swal.fire({
        title: '회원가입에 성공하셨습니다!',
        text: '메인페이지로 이동할게요 쓩 ~',
        confirmButtonColor: '#4CAF50',
        background: '#fff',
        backdrop: '#F1E5D1',
      });
      console.log('User signed up:', userCredential.user);
      setEmail('');
      setPassword('');
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
      <Title>회원가입</Title>
      <Form onSubmit={handleSignUp}>
        <Sub>너의 이메일을 입력해줘</Sub>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <Sub>너의 비밀번호를 입력해줘</Sub>
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
      <StyledSweetAlertContainer />
    </Container>
  );
};

export default React.memo(SignUp);
