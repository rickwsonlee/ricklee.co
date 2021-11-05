import { Link } from "gatsby"
import styled from "styled-components"

export const Button = styled(Link)`
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 18px;
  padding: 8px 12px;

  &:hover {
    color: ${({ theme }) => theme.body};
    background: ${({ theme }) => theme.text};
  }
`
