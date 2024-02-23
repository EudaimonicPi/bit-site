import SelfImage from '@/data/rawImages/CC/hoovTow.jpeg'
import FamImage from '@/data/rawImages/CC/fam.jpeg'
import MagPhotoImage from '@/data/rawImages/CC/magPhoto.jpeg'
import CampusImage from '@/data/rawImages/CC/campus.jpeg'

const vpueIG = "www.instagram.com/reel/CmHecSljI6q/?utm_source=ig_web_copy_link"

const CC = { "cards": [
    { "title": "About Me",
        "description": "Hi! I'm Ecy (AC). I'm a Stanford student who wrote Bit by Bit, an educational Computer Science comic based around Stanford's Intro CS classes. It's being published by the Stanford University Press in June (woowoo!).",
        "buttons": [

             { "name": "Preorder :)", 
                "link": "news.stanford.edu/report/2023/05/23/meet-ecy-king-23/"
            },
             { "name": "Book Vid", 
                "link": "news.stanford.edu/report/2023/05/23/meet-ecy-king-23/"
            },
             { "name": "My Wesite", 
                "link": "cogsplat.vercel.app/L1"
            },
        ],
        "image": SelfImage,
    },




    //maybe vary it up on instagram link to video? 
    { "title": "About Me... from Stanford",
        "description": "I love called Fractal Gridding.Here's more about me... from Stanford's perspective!",
        "buttons": [
            // change to same link maybe? 
            { "name": "Read more from Stanford", 
                "link": "news.stanford.edu/report/2023/05/23/meet-ecy-king-23/"
            }
        ],
        "image": CampusImage,
    },

    { "title": "About Me... from Stanford Alumni",
        "description": "Here's a profile that was done on me by the Stanford Alumni Magazine if you're interested in SEEING more about me, my fam, and who I am (which is a thing even I dunno yet...)",
        "buttons": [
            // change to same link maybe? 
            { "name": "Read more from Stanford Alum", 
                "link": "stanfordmag.org/contents/meet-ecy-king"
            }
        ],
        "image": MagPhotoImage,
    },

        { "title": "Background",
        "description": "I was born in Scotland, raised in the Central Valley in Fresno/Clovis, CA, and my family is from Sierra Leone. I'm a curious, reflective, goofy, and miscellaneous person who is enjoying the magic in the everyday :)",
        "buttons": [
            // change to same link maybe? 
            { "name": "Portal to Old :D", 
                "link": "stanfordmag.org/contents/meet-ecy-king"
            }
        ],
        "image": FamImage,
    },
]
}

export { CC }