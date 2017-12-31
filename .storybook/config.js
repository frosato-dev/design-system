import { configure } from '@storybook/react';


const req = require.context('../src/components', true, /\.stories\.js$/);

// import stories
configure(() => {
    req.keys().forEach(path => req(path));
}, module);

