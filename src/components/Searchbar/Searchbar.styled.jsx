import { Form, Field } from 'formik';
import styled from '@emotion/styled';

export const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledField = styled(Field)`
  height: 30px;
  border: 1px solid black;
  outline: none;
  min-width: 220px;

  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  font-size: 16px;
  padding: 2px 7px;

  transition: border-color 350ms cubic-bezier(0.65, 0.05, 0.36, 1);

  &:focus {
    border-color: red;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  column-gap: 5px;
  min-width: 100px;
  height: 36px;
  padding: 8px 10px;

  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: none;
  cursor: pointer;

  font-size: 16px;
  font-weight: 600;
  color: white;
  background-color: black;

  transition: color 350ms cubic-bezier(0.65, 0.05, 0.36, 1),
    background-color 350ms cubic-bezier(0.65, 0.05, 0.36, 1);

  &:hover {
    background-color: red;
  }
`;