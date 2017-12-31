import applyThemeProvider from './hoc'

export default (Component, themes) => {
    if (!Component) {
        console.error(`
        You must provide valid Component to withTheme function. 
    `)
    }

    if (!themes) {
        console.error(`
        You must provide valid themes to withTheme function.
    `)
    }

    if (!themes.default) {
        console.error(`
        You must provide a default theme if you use withTheme function.
    `)
    }

    const { defaultProps = {} } = Component
    Component.defaultProps = {
        ...defaultProps,
        theme: themes.default
    }
    Component.Themed = applyThemeProvider(Component)
    Component.themes = themes
    return Component
}
