import { csjs, getCss } from 'csjs';
import { insertCss } from 'insert-css';

import colors from '../themes/colors';

interface HelloStyles {
    bg: string;
    heading: string;
}

const helloStyles: HelloStyles = csjs`
    .bg {
        background-color: ${colors.backgroundColor};
    }
    .heading {
        font-weight: bold;
    }
`;

console.log(helloStyles);

insertCss(getCss(helloStyles));

export { helloStyles };