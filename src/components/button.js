import { Link } from "gatsby"
import styled from "styled-components"

export const Button = styled(Link)`
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 24px;
  padding: 8px 12px;
  transition: all 0.25s ease-out;

  &:hover {
    color: ${({ theme }) => theme.body};
    background: ${({ theme }) => theme.text};
  }
`
