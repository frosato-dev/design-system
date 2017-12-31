import React from 'react'

import Header from './Accordion.Header'
import Content from './Accordion.Content'
import Handle from './Accordion.Handle'

export default ({ children, className, isOpened, selectCurrent }) => {
    const toRender = React.Children.map(children, child => {
        switch (child.type) {
            case Header: {
                return React.cloneElement(child, {
                    ...child.props,
                    isOpened,
                    onHeaderClick: selectCurrent
                })
            }
            case Content:
            case Handle: {
                return React.cloneElement(child, {
                    ...child.props,
                    isOpened
                })
            }

            default: {
                // eslint-disable-next-line no-console
                console.warn(
                    `Wrong implementation: 
          You must provide either an Accordion.Header, Accordion.Content or Accordion.Handle to Accordion.Item Component.`
                )
                return false
            }
        }
    })

    return <div className={className}>{toRender}</div>
}
