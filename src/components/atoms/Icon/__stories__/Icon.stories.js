import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import Icon from './../Icon'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const IconWrapper = styled.div`
    font-size: 20px;
    padding: 10px;
    border-radius: 2px;
    background-color: #c6c6c6;
    margin: 10px;
    display: flex;
`

storiesOf('Atoms/Icon', module)
    .add('Default usage', withInfo()(() => <Icon name={Icon.names.FaBeer} />))
    .add('List of all available icons', () => (
        <Wrapper>
            <IconWrapper>
                <Icon name={Icon.names.FaBeer} />
            </IconWrapper>
            <IconWrapper>
                <Icon name={Icon.names.AddCircleOutline} />
            </IconWrapper>
        </Wrapper>
    ))
