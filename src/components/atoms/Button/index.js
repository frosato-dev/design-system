import withTheme from '../../utils/withTheme/hoc'

import Default from './Button.Default'
import Link from './Button.Link'

import Icon from './children/Button.Icon'
import Text from './children/Button.Text'

import themeDefault from './themes/default.theme'
import themeError from './themes/error.theme'

const Component = {
    Default: withTheme(Default),
    Link: withTheme(Link)
}

Component.themes = {
    default: themeDefault,
    error: themeError
}

Component.children = {
    Text,
    Icon
}

export default Component
