import styled from 'styled-components'
import { Link } from 'react-scroll'
import { theme } from '../theme'

export const Button = styled(Link)`
  border-radius: 50px;
  background-color: ${({ primary }) =>
    primary ? theme.accent : theme.secondaryMenu};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 18px' : '12px 30px')};
  color: ${({ dark }) =>
    dark ? theme.secondaryMenu : theme.primaryBackground};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    background-color: ${({ primary }) =>
      primary ? theme.primaryBackground : theme.accent};
  }
`
