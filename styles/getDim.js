/* This function is a styling function that gets the size of the cell
*/
// can xp w this for dim
const BASE = 36 //L1 width, def 36

//ration of w:h is 3:2
const WIDTH_SCALE = 3 //2.1
const HEIGHT_SCALE = 2 //1.4
const UNIT = 'vmin'

// this gets the dimmensions of each L0 though...
export default function getDim() { //cellId
    const L = 1
    const lvl_factor = BASE/3 // 3**: but L == 1

    const rawwidth = WIDTH_SCALE*lvl_factor
    const rawheight = HEIGHT_SCALE*lvl_factor

    const width = rawwidth.toString() + UNIT
    const height = rawheight.toString() + UNIT

    return [width, height]
}