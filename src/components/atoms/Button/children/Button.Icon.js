import React from 'react'
import Icon from '../../Icon/Icon'

const ButtonIcon = props => React.createElement(Icon, props)

ButtonIcon.displayName = 'Button.Icon'
ButtonIcon.propTypes = Icon.propTypes

export default ButtonIcon
