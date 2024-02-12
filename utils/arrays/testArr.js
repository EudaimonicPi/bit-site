import { rawHeadings, headings}  from '@/utils/data/headings'
import images from '@/utils/data/cellImages'

const descriptions = {
    NW: rawHeadings[0],
    NC: rawHeadings[1],
    NE: rawHeadings[2], 
    CW: rawHeadings[3],
    CC: rawHeadings[4],
    CE: rawHeadings[5],
    SW: rawHeadings[6],
    SC: rawHeadings[7], 
    SE: rawHeadings[8],
}

// can eventually generate :) from images and descriptions arr
const testArr = { 
    NW: {img: images['NW'], description: descriptions['NW']},
    NC: { img: images['NC'], description: descriptions['NC']}, 
    NE: { img: images['NE'], description: descriptions['NE']}, 
    CW: { img: images['CW'], description: descriptions['CW']},
    CC: { img: images['CC'], description: descriptions['CC']},
    CE: { img: images['CE'], description: descriptions['CE']},
    SW: { img: images['SW'], description: descriptions['Sw']},
    SC: { img: images['SC'], description: descriptions['SC']}, 
    SE: { img: images['SE'], description: descriptions['SE']},
}

export default testArr