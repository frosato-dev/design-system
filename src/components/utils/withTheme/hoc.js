import React from 'react'
import { ThemeProvider } from 'styled-components'

const Hoc = Component => {
    const FinalComponent = ({ theme, ...props }) => {
        if (!theme) return <Component {...props} />
        return (
            <ThemeProvider theme={theme}>
                <Component {...props} />
            </ThemeProvider>
        )
    }

    FinalComponent.displayName = Component.displayName

    FinalComponent.propTypes = {
        ...Component.propTypes
    }

    FinalComponent.defaultProps = {
        ...Component.defaultProps
    }

    return FinalComponent
}

export default Hoc
