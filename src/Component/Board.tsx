import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { toDoState } from '../atoms';
import Card from './Card';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { ITodo } from '../atoms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Wrapper = styled.div`
  width: 300px;
  padding-top: 10px;
  margin: 20px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 22px;
  margin-right: auto;
  color: ${(props) => props.theme.boardtextColor};
`;

const Form = styled.form`
  width: 100%;
  input {
    width: 100%;
  }
`;

interface IAreaProps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}

const Area = styled.div<IAreaProps>`
  background-color: ${(props) =>
    props.isDraggingOver
      ? 'rgba(126, 215, 193, 0.1)'
      : props.isDraggingFromThis
      ? 'rgba(126, 215, 193, 0.1)'
      : 'transparent'};
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
  padding: 20px;
`;

const Input = styled.input`
  text-align: center;
  border-style: none;
  background-color: '#DC8686';
  font-size: 18px;
  font-family: 'Ownglyph_ryurue-Rg';

  height: 30px;

  width: 30px;
  &:hover {
    text-decoration: none;
  }
  &:focus {
    outline: none;
  }

  &::placeholder {
    font-family: 'Ownglyph_ryurue-Rg';
  }
`;

const TitleForm = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: row;
  margin: 0px 10px;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-left: auto;
  color: ${(props) => props.theme.deleteBtn};
  &:hover {
    cursor: pointer;
  }
`;

interface IBoardProps {
  toDos: ITodo[];
  boardId: string;
}

interface IForm {
  toDo: string;
}
const Board = ({ boardId, toDos }: IBoardProps) => {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const onValid = ({ toDo }: IForm) => {
    const newTodo = {
      id: Date.now(),
      text: toDo,
      isDelete: false,
    };

    if (toDos.length >= 8) {
      return;
    }

    setToDos((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [...allBoards[boardId], newTodo],
      };
    });
    setValue('toDo', '');
  };

  const onClickDeleteBoard = () => {
    setToDos((allBoards) => {
      const { [boardId]: deletedBoard, ...rest } = allBoards;
      return rest;
    });
  };
  return (
    <>
      <Wrapper>
        <TitleForm>
          <Title>{boardId}</Title>
          <StyledFontAwesomeIcon icon={faMinus} onClick={onClickDeleteBoard} />
        </TitleForm>

        <Form onSubmit={handleSubmit(onValid)}>
          <Input
            {...register('toDo', { required: true })}
            type="text"
            placeholder={`적어봐! "${boardId}" 의 할일을!`}
          />
        </Form>
        <Droppable droppableId={boardId}>
          {(magic, info) => (
            <Area
              ref={magic.innerRef}
              {...magic.droppableProps}
              isDraggingOver={info.isDraggingOver}
              isDraggingFromThis={Boolean(info.draggingFromThisWith)}
            >
              {Array.isArray(toDos) &&
                toDos.map((toDo, index) => (
                  <Card
                    boardId={boardId}
                    key={toDo.id}
                    index={index}
                    toDoText={toDo.text}
                    toDoId={toDo.id}
                  />
                ))}
              {magic.placeholder}
            </Area>
          )}
        </Droppable>
      </Wrapper>
    </>
  );
};
export default React.memo(Board);
