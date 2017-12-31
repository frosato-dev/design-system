import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: auto;
    transform: ${props => (props.isOpened ? 'rotate(180deg)' : 'rotate(0)')};
`

export default ({ children, className, isOpened }) => (
    <Wrapper isOpened={isOpened} className={className}>
        {children}
    </Wrapper>
)
