import {useEffect, useState} from "react";
import {apprecioTheme} from "../GlobalStyle/theme";
import {is, isEmpty, isNil, path} from "ramda";

export const useTheme = () => {
  const [theme, setTheme] = useState(apprecioTheme?.themes.light);
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    if(!isNil(theme) || !isEmpty(theme)) setThemeLoaded(true);
  }, [theme]);

  return { theme, themeLoaded, setTheme };
}

export const useOverrideTheme = (theme) => {
  const overrideTheme = {};
  if (isNil(theme)) {
    return { overrideTheme };
  }
  if (!is(String, theme)) {
    throw new Error('theme prop must be a string');
  }
  const localTheme = path(['themes', theme], apprecioTheme);
  if (localTheme) {
    overrideTheme.theme = localTheme;
    return { overrideTheme };
  }
  console.warn(`${theme} doesn't match with any local theme.`);
  return { overrideTheme };
};
