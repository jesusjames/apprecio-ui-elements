import styled from 'styled-components';

export const ImagePickerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > input[type='file'] {
    display: none;
  }

  & > .buttonContainer {
    background-color: var(--whiteColorPure);
    width: 102px;
    height: 102px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    overflow: hidden;

    & > .profilePic {
      width: 102px;
      height: 102px;
      object-fit: cover;
    }
  }
`;

export default {
  ImagePickerStyled,
};
