export const theme = {
  font: `"Archivo", sans-serif`,
  colors: {
    text: `hsl(0, 0%, 0%)`,
    background: `hsl(0, 0%, 100%)`,
  },
}

export const darkTheme = {
  text: `${theme.colors.background}`,
  body: `${theme.colors.text}`,
}