import styled from 'styled-components';

export const BaseInput = styled.input`
  border: 0;
  border-radius: 0.6rem;
  padding-left: 0.5rem;

  font-weight: bold;
  font-size: 1.125rem;

  width: 25%;
  height: 3.4rem;
`;

export const Select = styled.select`
  border: 0;
  border-radius: 0.6rem;
  padding-left: 0.5rem;

  font-weight: bold;
  font-size: 1.125rem;

  width: 25%;
  height: 3.4rem;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const Procurar = styled.button`
  border: 0;
  border-radius: 0.6rem;

  font-weight: bold;
  font-size: 18px;

  width: 25%;
  height: 3.4rem;
  background-color: #fca311;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
`;
