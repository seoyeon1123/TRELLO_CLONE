import React, { useState, useEffect } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { toDoState, isDarkAtom } from './atoms';
import Board from './Component/Board';
import { useForm } from 'react-hook-form';
import DeleteBoard from './Component/DeleteBoard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { signOut } from 'firebase/auth';
import { auth, getUserUid, saveTodos, loadTodos } from './Login/firebase'; // Use correct import

const Header = styled.header`
  height: 60px;
  width: 100%;
  background-color: ${(props) => props.theme.boardColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NowDate = styled.div`
  text-align: center;
  margin-bottom: 10px;
  font-size: 18px;
  color: ${(props) => props.theme.bgColor};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 화면 높이를 뷰포트 100%로 제한 */
  width: 100h;
  position: relative;
`;

const CustomFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 50px;
  cursor: pointer;
  color: ${(props) => props.theme.toggle};
  margin-left: 20px;
  z-index: 1;
  margin-left: 10px;
`;

const Boards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 100px;
`;

const Title = styled.h1`
  font-size: 60px;
  text-align: center;
  margin-bottom: 10px;
  color: ${(props) => props.theme.textColor};
`;

const Input = styled.input`
  width: 500px;
  height: 32px;
  font-size: 20px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
  font-family: 'Ownglyph_ryurue-Rg';

  &::placeholder {
    font-family: 'Ownglyph_ryurue-Rg';
  }
`;

const Button = styled.button`
  padding: 10px;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.boardColor};
  border-radius: 20px;
  font-family: 'Ownglyph_ryurue-Rg';
  font-size: 18px;
  margin-right: 10px;
`;

interface IForm {
  addToDo: string;
}

const App: React.FC = () => {
  const [toDos, setTodos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const [isToggled, setIsToggled] = useRecoilState(isDarkAtom);
  const [formattedDate, setFormattedDate] = useState<string>(() =>
    new Date().toLocaleString()
  );
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFormattedDate(new Date().toLocaleString());
    }, 1000); // 1초마다 시간 업데이트

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 클리어
  }, []);

  useEffect(() => {
    // 사용자가 로그인한 후에 Firestore에서 투두리스트를 불러옵니다.
    const fetchData = async () => {
      try {
        const uid = await getUserUid();
        if (uid) {
          setUserId(uid);
          const userTodos = await loadTodos(uid);
          setTodos(userTodos);
        }
      } catch (error) {
        console.error('Error loading todos:', error);
      }
    };

    fetchData();
  }, [setTodos]);

  useEffect(() => {
    // 투두리스트가 변경될 때마다 Firestore에 저장합니다.
    if (userId) {
      saveTodos(userId, toDos);
    }
  }, [userId, toDos]);

  const toggleTheme = () => {
    setIsToggled((prev) => !prev);
  };

  const onClickLogOut = async () => {
    try {
      await signOut(auth);
      console.log('User logged out');
      setUserId(null); // 로그아웃 후 userId 초기화
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const onValid = ({ addToDo }: IForm) => {
    if (Object.keys(toDos).length >= 3) {
      return;
    }
    setTodos((allBoards) => {
      return {
        ...allBoards,
        [addToDo]: [],
      };
    });
    setValue('addToDo', '');
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) {
      console.log('보드 밖으로 떨어짐');
      return;
    }

    if (destination.droppableId === 'TRASH') {
      setTodos((allBoard) => {
        const copySource = [...allBoard[source.droppableId]];
        copySource.splice(source.index, 1);

        return {
          ...allBoard,
          [source.droppableId]: copySource,
        };
      });
      console.log('Trash로 이동함');
      return;
    }
    setTodos((allBoard) => {
      const sourceBoard = [...allBoard[source.droppableId]];
      const destinationBoard = [...allBoard[destination.droppableId]];

      if (source.droppableId === destination.droppableId) {
        const taskObj = sourceBoard[source.index];

        sourceBoard.splice(source.index, 1);
        sourceBoard.splice(destination.index, 0, taskObj);

        return {
          ...allBoard,
          [source.droppableId]: sourceBoard,
        };
      } else {
        const taskObj = sourceBoard[source.index];

        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination.index, 0, taskObj);

        return {
          ...allBoard,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        };
      }
    });
    console.log('보드 이동 완료');
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Header>
          <CustomFontAwesomeIcon
            onClick={toggleTheme}
            icon={isToggled ? faToggleOn : faToggleOff}
          />
          <NowDate>{formattedDate}</NowDate>
          <Button onClick={onClickLogOut}>로그아웃</Button>
        </Header>

        <Wrapper>
          <FormInput>
            <Title>오늘의 너의 하루는?</Title>

            <form onSubmit={handleSubmit(onValid)}>
              <Input
                {...register('addToDo', {
                  required: true,
                })}
                placeholder="새로운 보드판을 만들어 봐!"
              />
            </form>
          </FormInput>

          <Boards>
            {Object.keys(toDos).map((boardId) => (
              <Board key={boardId} boardId={boardId} toDos={toDos[boardId]} />
            ))}
          </Boards>
          <DeleteBoard />
        </Wrapper>
      </DragDropContext>
    </>
  );
};

export default React.memo(App);
