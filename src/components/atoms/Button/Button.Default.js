import styled from 'styled-components'
import PropTypes from 'prop-types'
import styles from './styles'

const Default = styled.button`
    ${styles};
`
Default.displayName = 'Button.Default'
Default.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Default
