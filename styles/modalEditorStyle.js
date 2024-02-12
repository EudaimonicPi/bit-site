/* This function styles the pop up modal
*/
import getColor from './getColor';
import { lightenColor } from './lightenColor';

//specifies style for the modal editor that pops up when you click a cell
export default function modalEditorStyle (cellId, flipside=false) { //JUST the editor!
    const color = getColor(cellId)
    return { 
        height: '45vmin', //the big question is: should the height be controlled? can change later
        overflow: 'auto',
        backgroundColor: !flipside? color: lightenColor(color) ,
    }
}
