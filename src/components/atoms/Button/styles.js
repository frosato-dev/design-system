import { css } from 'styled-components'

export default css`
    // Editable
    font-family: Helvetica;
    font-size: 12px;
    padding: 10px 20px;
    border-width: 2px;
    border-style: solid;
    border-radius: 4px;

    transition-property: background-color, border;
    transition-duration: 250ms;
    transition-timing-function: ease;

    // Core
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    background-color: ${props => props.theme.normal.backgroundColor};
    border-color: ${props => props.theme.normal.borderColor};
    color: ${props => props.theme.normal.color};
    text-decoration: ${props => props.theme.normal.textDecoration};

    &:hover {
        border-color: ${props => props.theme.hover.borderColor};
        color: ${props => props.theme.hover.color};
        background-color: ${props => props.theme.hover.backgroundColor};
        text-decoration: ${props => props.theme.hover.textDecoration};
    }

    &:disabled {
        cursor: inherit;
        border-color: ${props => props.theme.disabled.borderColor};
        color: ${props => props.theme.disabled.color};
        background-color: ${props => props.theme.disabled.backgroundColor};
        text-decoration: ${props => props.theme.disabled.textDecoration};
    }
`
