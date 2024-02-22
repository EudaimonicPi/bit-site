import FamImage from '@/data/rawImages/NW/fam.jpeg'
import MeImage from '@/data/rawImages/NW/hoovTow.jpeg'
import OGBitImage from '@/data/rawImages/NW/BbB.png'
// to potentially include:

const personalWebsite = "cogsplat.vercel.app/L1"
const bitlink = 'www.google.com/search?q=bit+by+bit+ecy+king&rlz=1C5CHFA_enUS890US890&oq=bit+by+bit+ecy+king&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyDQgCEAAYhgMYgAQYigUyDQgDEAAYhgMYgAQYigUyBggEEEUYOzIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCjEyMjkwajBqMTWoAgCwAgA&sourceid=chrome&ie=UTF-8'
const symsysLink = "symsys.stanford.edu/people/ecy-femi-king"
// TO DO: include
const authorBioLink = "www.canva.com/design/DAF70_79t_A/XtkZtzbASJTqk2GiI7Bm4A/view?utm_content=DAF70_79t_A&utm_campaign=designshare&utm_medium=link&utm_source=editor"
//mention what I did at Stanford
const NW = { "cards": [

    
    { "title": "Who Am I?",
        "description": "My name is Ecy (AC) King, and I'm a Stanford University coterm, meaning I finished my BS in Symbolic Systems '23 (Human-Centered AI) and am currently doing my MS in Computer Science '24 (Human-Computer Interaction).",
        "buttons": [
            { "name": "My Personal Website", 
                "link": personalWebsite
            },
            {
                "name": "SymSys Profile", 
                "link": symsysLink

            }
  
        ],
        "image": MeImage,
    },
    // what problem did I solve? 

    { "title": "Bit by Bit Origins",
        "description": "Out of a love for teaching Computer Science (CS), learning psych, doodling, and Fractal Grididng, I created Bit by Bit, a Graphic Introduction to CS based on Stanford's Intro CS classes CS106A and CS106B.",
        "buttons": [
            { "name": "I love Fractal Gridding", 
                "link": "www.amazon.com/Fractal-Gridding-Notepad-Visually-Lifespace/dp/0983825157/ref=sr_1_1?crid=3JXR16YU0NP9P&keywords=fractal+gridding+notepad&qid=1706172993&s=books&sprefix=fractal+gridding+notepa%2Cstripbooks%2C129&sr=1-1"
            },
        
        ],
        "image": OGBitImage,
    },

        { "title": "More Background",
        "description": "My background is Sierra Leonean American; I was born in Scotland, raised in Fresno/Clovis in CA's Central Valley, and my entire family hails from Sierra Leone, West Africa. Currently I'm in Palo Alto, CA for school at Stanford :) ",
        "buttons": [
            //TO DO: see if I can find the paper picture of my article in the daily :) 
            { "name": "Read More Here", 
                "link": "stanforddaily.com/author/ecyking/"
            },
        ],
        "image": FamImage,
        },


]
}



export { NW }