import styled from 'styled-components';

export const MemberPictureStyled = styled.button`
  width: 37px;
  height: 37px;
  border-radius: 50%;
  border-color: var(--mainColor);
  border-style: solid;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--mainColor);
  margin-right: .75rem;

  & > img {
    width: 37px;
    height: 37px;
  }
`;

export default {
  MemberPictureStyled,
};
