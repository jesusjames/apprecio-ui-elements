export const apprecioTheme = {
  themes: {
    light: {
      id: 'T_001',
      name: 'light',
      body: {
        background: 'var(--whiteColorApprecio)',
      },
      button: {
        primary: {
          color: 'var(--whiteColorPure)',
          mainColor: 'var(--mainColor)',
          activeColor: 'var(--mainColorActive)'
        },
        secondary: {
          color: 'var(--whiteColorPure)',
          mainColor: 'var(--lightColor)',
          activeColor: 'var(--mainColorActive)'
        },
        tertiary: {
          color: 'var(--whiteColorPure)',
          mainColor: 'var(--darkColor)',
          activeColor: 'var(--mainColorActive)'
        },
        quaternary: {
          color: 'var(--whiteColorPure)',
          mainColor: 'var(--blueColor)',
          activeColor: 'var(--mainColorActive)'
        }
      }
    },
    dark: {
      id: 'T_002',
      name: 'dark',
      body: {
        background: 'var(--darkColor)',
      },
      colors: {
        primary: {
          backgroundColor: 'var(--mainColor)',
          color: 'var(--whiteColorPure)',
          mainColor: 'var(--mainColor)',
          activeColor: 'var(--mainColorActive)'
        },
        secondary: {
          backgroundColor: 'var(--mainColor)',
          color: 'var(--whiteColorPure)',
          mainColor: 'var(--mainColor)',
          activeColor: 'var(--mainColorActive)'
        },
        tertiary: {
          backgroundColor: 'var(--mainColor)',
          color: 'var(--whiteColorPure)',
          mainColor: 'var(--mainColor)',
          activeColor: 'var(--mainColorActive)'
        },
        quaternary: {
          backgroundColor: 'var(--mainColor)',
          color: 'var(--whiteColorPure)',
          mainColor: 'var(--mainColor)',
          activeColor: 'var(--mainColorActive)'
        }
      }
    }
  }
}
