import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './styles'

const Link = styled(RouterLink)`
    ${styles};
`
Link.displayName = 'Button.Link'
Link.propTypes = {
    to: PropTypes.string.isRequired
}

export default Link
