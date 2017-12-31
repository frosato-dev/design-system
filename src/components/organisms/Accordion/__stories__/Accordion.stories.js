import React from 'react'
import { storiesOf } from '@storybook/react'
import Accordion from './..'

storiesOf('Organisms/Accordion', module)
    .add('Default', () => (
        <Accordion>
            <Accordion.Item>
                <Accordion.Header>Header</Accordion.Header>
                <Accordion.Content>Content</Accordion.Content>
            </Accordion.Item>
            <Accordion.Item>
                <Accordion.Header>Header</Accordion.Header>
                <Accordion.Content>Content</Accordion.Content>
            </Accordion.Item>
        </Accordion>
    ))
    .add('First item disabled', () => (
        <Accordion>
            <Accordion.Item>
                <Accordion.Header disabled>Header</Accordion.Header>
                <Accordion.Content>Optional Content</Accordion.Content>
            </Accordion.Item>
            <Accordion.Item>
                <Accordion.Header>Header</Accordion.Header>
                <Accordion.Content>Content</Accordion.Content>
            </Accordion.Item>
        </Accordion>
    ))
