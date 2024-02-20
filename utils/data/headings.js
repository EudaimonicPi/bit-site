//more descriptive might be headingNW
const heading1 = "About the Author" // Publications?

const heading2 = "VPUE Grant & Oxford Origin"
const heading3 = "Summer Work at Stanford"
const heading4 = "The Finished Draft"
const heading5 = "The 500 Copies"
const heading6 = "Presentations"
const heading7 = "Features & Recognitions" // music?
const heading8 = "The Future"
const middleHeading = "Bit by Bit Project Website"

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