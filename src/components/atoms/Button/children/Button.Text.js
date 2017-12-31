import styled from 'styled-components'
import PropTypes from 'prop-types'

const Text = styled.span`
    margin: auto 10px;
`

Text.displayName = 'Button.Text'
Text.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

export default Text
