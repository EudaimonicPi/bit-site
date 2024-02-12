/* This function retrieves the L0 style
*/
// import { lightenColor } from './lightenColor'; //inconsistent whoops
import getDim from './getDim';
import getColor from './getColor';

const L1BORDER = '1px solid black'
const L1BORDER_SUN = '5px solid black'

// gets the borders at each level... eventually export
function getBorder(cellId) {
    let border = L1BORDER
    if ( cellId === 'CC') {
        // border = L1BORDER_SUN
        border = '0px'
    }
    return border
} 

export default function getL0Style(cellId) {
    const dimArr = getDim() //gets dimensions
    const backgroundColor = getColor(cellId)

    // something strange with width , either this or other thing not dynamic enough
    const style = { //gets background color 
        backgroundColor: backgroundColor, //yay!
        // borderInline: '4px solid green',
        // maxWidth: dimArr[0], //affecting layout thog\ugh
        // hmm... strange
        maxHeight: dimArr[1],
        minWidth: dimArr[0],
        minHeight: dimArr[1],
        
        
        overflow: 'auto', // necessary for scroll feature in cellView
        // border: getBorder(cellId),
        border: cellId !== 'CC'? '2px solid black': '0px',
        //somewhere else something is 6 px? or maybe margin... ehh
        outline: cellId === 'CC'? '6px solid black': '0px'
    }

    return style 
}