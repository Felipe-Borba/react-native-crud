import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    font: {
      regular: string
    },
    color: {
      TEXT: string,
      
      PRIMARY: string,
      SECONDARY: string,
      
      BACKGROUND_500: string,
      BACKGROUND_400: string,
      BACKGROUND_300: string,
      BACKGROUND_200: string,
      BACKGROUND_100: string,
  
      BORDER_900: string,
      BORDER_500: string,
      ERROR: string
    }
  }
}