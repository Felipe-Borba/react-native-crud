import { ColorSchemeName, useColorScheme as _useColorScheme } from 'react-native';
import { DefaultTheme } from 'styled-components';
import light from '../theme/light';

export default function useColorScheme(): DefaultTheme {
  const color = _useColorScheme() as ColorSchemeName;
  
  if (color === "light") {
    return light
  }

  alert("Tema não suportado!")
  return light;
}
