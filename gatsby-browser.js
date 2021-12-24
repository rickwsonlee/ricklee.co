// Archivo font
import "@fontsource/archivo/300.css"
import "@fontsource/archivo/variable.css"

import * as React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "./src/theme"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
