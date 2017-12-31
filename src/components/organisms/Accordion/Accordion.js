import React from 'react'
import PropTypes from 'prop-types'
import Item from './Accordion.Item'

class Accordion extends React.PureComponent {
    state = {
        opened: {}
    }

    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    }

    toggleItem = index => () => {
        this.setState(state => {
            const isOpened = state.opened[index]
            const opened = { ...state.opened }
            opened[index] = !isOpened
            return { opened }
        })
    }

    render() {
        const { className } = this.props

        const children = React.Children.map(this.props.children, (child, index) => {
            if (child.type === Item) {
                return React.cloneElement(child, {
                    ...child.props,
                    isOpened: this.state.opened[index],
                    selectCurrent: this.toggleItem(index)
                })
            }

            // eslint-disable-next-line no-console
            console.warn(
                `Wrong implementation: 
         You must provide at least one Accordion.Item child to Accordion Component.`
            )

            return false
        })

        return <div className={className}>{children}</div>
    }
}

export default Accordion
