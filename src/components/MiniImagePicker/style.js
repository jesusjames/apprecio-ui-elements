import styled from 'styled-components';

export const MiniImagePickerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > input[type='file'] {
    display: none;
  }

  & > .buttonContainer {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export default {
  MiniImagePickerStyled,
};
