import React from 'react'
import PropTypes from 'prop-types'
import names from './Icon.names'

const Icon = ({ name }) => {
    const isValidName = Object.values(names).includes(name)

    if (isValidName) {
        return React.createElement(name)
    }

    console.warn(`
        Icon ${name} is not a registered name. 
        Please provide a valid name or add "${name}" to the list with it's matching component into Icon.names.js file.
    `)

    return false
}

Icon.propTypes = {
    name: PropTypes.func.isRequired
}

Icon.names = names

export default Icon
