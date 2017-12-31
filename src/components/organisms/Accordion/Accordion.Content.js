import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: ${props => (props.isOpened ? 'block' : 'none')};
`

export default ({ children, className, isOpened }) => (
    <Wrapper isOpened={isOpened} className={className}>
        {console.log(isOpened)}
        {children}
    </Wrapper>
)
