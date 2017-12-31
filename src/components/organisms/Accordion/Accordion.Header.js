import React from 'react'
import styled from 'styled-components'
import Handle from './Accordion.Handle'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    cursor: ${props => (props.disabled ? 'initial' : 'pointer')};
`

const Header = ({ children, className, isOpened, onHeaderClick, disabled }) => {
    const toRender = React.Children.map(children, child => {
        if (child.type === Handle) {
            return React.cloneElement(child, {
                ...child.props,
                isOpened
            })
        }

        return child
    })

    return (
        <Wrapper
            disabled={disabled}
            onClick={disabled ? null : () => onHeaderClick()}
            className={className}
        >
            {toRender}
        </Wrapper>
    )
}

Header.defaultProps = {
    disabled: false
}

export default Header
