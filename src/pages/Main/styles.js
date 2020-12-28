import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
from{
  transform: rotate(0deg);
}
to{
  transform: rotate(360deg);
}

`;
export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0px;
  padding: 0px 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
  // não vamos usar a opção ternaria pois não terei else, por isso usamos o && pois quando for true retorna a condicao
  ${(props) =>
    props.loading &&
    css`
      svg {
        anicmation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  // para tirar as bolinhas na frente da lista
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    // pegando todos o li, aplica os styles menos no primeiro
    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #7159c1;
      // para tirar o _
      text-decoration: none;
    }
  }
`;
