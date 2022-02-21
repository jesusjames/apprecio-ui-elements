Antes de instalar la librería es necesario instalar estas dependencias en el proyecto

```shell
npm install classnames styled-components prop-types
```

Una vez instalado lo anterior instalaremos la librería prima UI KIT

```shell
npm install @apprecio/apprecio-ui-elements
```
<br>
## Apprecio UI Kit - Modo de uso

Deberás instalar los helpers de tailwind:
```shell
npm install @apprecio/apprecio-tailwindcss-utils
```

Con con esta dependencias podrás incluirlo en tu archivo principal.

Luego se requiere colocar el GlobalStyle en el nivel más alto para aplicar todos los estilos, colores, efectos y fuentes. Por lo que se recomienda ponerlo dentro de App.js/jsx/tsx

```shell
    import React from 'react';
    import GlobalStyle from '@apprecio/apprecio-ui-elements/dist/utils/theme/globalStyle';
    import '@apprecio/apprecio-tailwindcss-utils/dist/tailwind-customized.css';

    function App() {
        return (
            <GlobalStyle>
              <div>Mi aplicación</div>
            </GlobalStyle>
        );
    }
    export default App;
```

Actualmente existen 2 temas, light y dark. Por defecto viene configurado con el tema light.
Si desea iniciar su aplicación otro tema se debe agregar este código en su aplicación.

```bash
    import React, { useEffect } from 'react';
    import { GlobalStyle } from '@apprecio/apprecio-ui-elements/dist/layouts';
    import { useTheme } from '@apprecio/apprecio-ui-elements/dist/utils/useTheme';

    const App = () => {
    const { themeLoaded, setTheme } = useTheme();

    useEffect(() => {
        const alltheme = getFromSessionStorage('all-themes');
        setTheme(alltheme.themes.dark);
    }, [themeLoaded])

    return (
        <GlobalStyle>
            <div>Mi aplicación</div>
        </GlobalStyle>
    );
    }

    export default App;
```

Si desea que algun componente independiente tenga un tema especifico debe agregar la propiedad theme="green" o theme="orange". 

```bash
    import { useOverrideTheme } from '@apprecio/apprecio-ui-elements/dist/utils/useTheme';

    const theme = useOverrideTheme('dark);
    
    <Select
        theme={theme}
        label='Doc. de identidad'
    />
```

## Layouts

sistema de 12 columnas y adaptar nuestras aplicaciones de una manera más fácil usando los helpers de apprecio-tailwindcss-utils

documentación -> https://tailwindcss.com/docs/flex-basis
