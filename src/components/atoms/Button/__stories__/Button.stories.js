import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'

import Button from './..'
import Icon from './../../Icon/Icon'

storiesOf('Atoms/Button', module)
    .addDecorator(story => <BrowserRouter>{story()}</BrowserRouter>)
    .add(
        'Button Default',
        withInfo()(() => (
            <Button.Default theme={Button.themes.default} onClick={action('clicked')}>
                <Button.children.Icon name={Icon.names.FaBeer} />
                <Button.children.Text>Text</Button.children.Text>
            </Button.Default>
        ))
    )
    .add(
        'Button Link',
        withInfo()(() => (
            <Button.Link theme={Button.themes.error} to="/login">
                <Button.children.Icon name={Icon.names.FaBeer} />
                <Button.children.Text>Text</Button.children.Text>
            </Button.Link>
        ))
    )
    .add(
        'Button Input type submit',
        withInfo()(() => (
            <BrowserRouter>
                <Button.Link theme={Button.themes.error} to="/login">
                    <Button.children.Text>Text</Button.children.Text>
                </Button.Link>
            </BrowserRouter>
        ))
    )
    .add('Themes', () => (
        <div>
            <Button.Default theme={Button.themes.default} disabled onClick={action('clicked')}>
                <Button.children.Icon name={Icon.names.FaBeer} />
                <Button.children.Text>Text</Button.children.Text>
            </Button.Default>
            <Button.Default theme={Button.themes.default} onClick={action('clicked')}>
                <Button.children.Icon name={Icon.names.FaBeer} />
                <Button.children.Text>Text</Button.children.Text>
            </Button.Default>
        </div>
    ))
