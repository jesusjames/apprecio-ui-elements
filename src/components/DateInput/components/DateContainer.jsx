import React from 'react';
import { CalendarContainer } from 'react-datepicker';
import { ChildrenStyled } from '../styles';

const DateContainer = (props) => {
  const {
    className,
    children,
  } = props;

  return (
    <CalendarContainer className={className}>
      <ChildrenStyled className="ap-relative">{children}</ChildrenStyled>
    </CalendarContainer>
  );
};

export default DateContainer;
