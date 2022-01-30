// Inter font
import "@fontsource/inter"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/variable.css"

import * as React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "./src/theme"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
