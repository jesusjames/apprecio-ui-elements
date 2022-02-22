import styled from "styled-components";
import {path, pipe} from "ramda";
import {getBaseButtonConfig, getSizeButtonConfig} from "./helpers";

export const BaseButtomStyled = styled.button`
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  user-select: none;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  ${props => path([props.size, 'css'], getSizeButtonConfig(props))}
  ${
          props => pipe(
                  () => getBaseButtonConfig(path(['theme', 'button', props.color], props)),
                  path([
                    props.outline ? 'outline' : 'filled',
                    props.disabled ? 'disabled' : 'css'
                  ])
          )()
  }    
`;
