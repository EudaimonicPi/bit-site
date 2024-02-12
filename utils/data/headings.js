//more descriptive might be headingNW
const heading1 = "Published Works & Writings" // Publications?

const heading2 = "Games and Designs"
const heading3 = "Stanford Experiences"
const heading4 = "Teaching, Speaking, & Workshops"
const heading5 = "Resume"
const heading6 = "Fractal Gridding"
const heading7 = "Miscellaneous" // music?
const heading8 = "Contact Me"
const middleHeading = "About Me"

const rawHeadings =  [heading1, heading2, heading3, heading4, 
    middleHeading, heading5, heading6, heading7, heading8]

const headings = {
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
export {rawHeadings, headings}