export const getSizeButtonConfig = (props) => ({
  extraSmall: {
    css: `
            font-size: 0.78125rem;
            min-width: ${props.block ? '100%' : '104px'};
            padding: 5px 12px;
        `,
    icon: `
            width: 11.8px;
            svg {
                width: 11.8px;
                height: 11.8px;
            }
        `,
  },
  small: {
    css: `
            font-size: 0.875;
            min-width: ${props.block ? '100%' : '111.8px'};
            padding: 6px 18px;
        `,
    icon: `
            width: 18px;
            svg {
                width: 18px;
                height: 18px;
            }
        `,
  },
  medium: {
    css: `
            font-size: 1rem;
            min-width: ${props.block === true ? '100%' : '128px'};
            padding: 11px 18px;
        `,
    icon: `
            width: 18px;
            svg {
                width: 18px;
                height: 18px;
            }
        `,
  },
  large: {
    css: `
            font-size: 18px;
            min-width: ${props.block ? '100%' : '140px'};
            padding: ${props.color === 'primary' ? '14px' : 'calc(14px - 1.8px)'} 32px;
        `,
    icon: `
            width: 24px;
            svg {
                width: 24px;
                height: 24px;
            }
        `,
  },
});

const commonsColor = `
    transition: box-shadow .2s;
`;

const disabledCommons = `
    box-shadow:none;
    cursor: no-drop;
`;

export const getBaseButtonConfig = (theme) => ({
  filled: {
    css: `
            background-color: ${theme?.mainColor};
            color: ${theme?.color};
            border: 2px solid ${theme?.mainColor};
            &:hover{
                box-shadow: 0px 3px 8px -2.5px ${theme?.mainColor};
            }
            &:active {
                background-color: ${theme?.activeColor};
            }
            ${commonsColor} 
        `,
    disabled: `
            background: var(--grayColorDisabled);
            color: white;
            border: 2px solid var(--grayColorDisabled);
            ${disabledCommons}
        `,
    icon: `
            svg, path {
                fill: ${theme?.color};
            }
        `,
    iconDisabled: `
            svg, path {
                fill: white;
            }
        `,
  },
  outline: {
    css: `
            background-color: white;
            color: ${theme?.mainColor};
            border: 2px solid ${theme?.mainColor};
            &:hover{
                box-shadow: 0px 3px 8px -2.5px ${theme?.mainColor};
            }
            &:active {
                background-color: ${theme?.activeColorOutline};
            }
            ${commonsColor} 
        `,
    disabled: `
            background-color: white;
            color: var(--grayColorDisabled);
            border: 2px solid var(--grayColorDisabled);
            ${disabledCommons}
            opacity: 0.6;
        `,
    icon: `
            svg, path {
                fill: ${theme?.mainColor};
            }
        `,
    iconDisabled: `
            svg, path {
                 fill: var(--grayColorDisabled)
            }
        `,
  },
});
