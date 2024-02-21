import SelfImage from '@/data/rawImages/CC/hoovTow.jpeg'
import FamImage from '@/data/rawImages/CC/fam.jpeg'
import MagPhotoImage from '@/data/rawImages/CC/magPhoto.jpeg'
import CampusImage from '@/data/rawImages/CC/campus.jpeg'

const CC = { "cards": [
    { "title": "About Me",
        "description": "Hi there! I'm Ecy (pronounced AC). I'm currently in my last year at Stanford. I'm super passionate about lots of things, especially this thing called Fractal Gridding. Explore the grid to find out more :)",
        "buttons": [
            // change to same link maybe? 
            { "name": ":)", 
                "link": "cogsplat.vercel.app/L1"
            }
        ],
        "image": SelfImage,
    },

    { "title": "Author Bio",
        "description": "Here's my author bio if you're interested in perceiving me through that lens. Why are there 3? Click below to find out :D!",
        "buttons": [
            // change to same link maybe? 
            { "name": "Author Bio", 
                "link": "www.canva.com/design/DAF70_79t_A/XtkZtzbASJTqk2GiI7Bm4A/view?utm_content=DAF70_79t_A&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            }
        ],
        // "image": AuthorImage,
    },


    //maybe vary it up on instagram link to video? 
    { "title": "About Me... from Stanford",
        "description": "Here's more about me... from Stanford's perspective!",
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