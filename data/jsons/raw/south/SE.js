import IGImage from '@/data/rawImages/SE/ig.png'
import LinkedInImage from '@/data/rawImages/SE/linky.png'
import TwistImage from '@/data/rawImages/SE/twists.jpeg'
import NibsImage from '@/data/rawImages/SE/nibs.png'
import PatternImage from '@/data/rawImages/SE/ig.png'
import CoverImage from '@/data/rawImages/SE/cover.jpeg'
import BbBPageImage from '@/data/rawImages/SE/poster.png'
import BookOutImage from '@/data/rawImages/SE/laid_out.jpeg'

const preorderLink = "www.amazon.com/Bit-Graphic-Introduction-Computer-Science/dp/1503638766"
const searchLink  = "www.google.com/search?q=bit+by+bit+ecy+king&rlz=1C5CHFA_enUS890US890&oq=bit+by&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBggCEEUYOzIGCAMQRRg7MgYIBBBFGEAyBggFEEUYPTIGCAYQRRg8MgYIBxBFGDzSAQgyODk4ajBqMagCALACAA&sourceid=chrome&ie=UTF-8"
const YouTube = "www.youtube.com/@fgamusa9889"
const jamcoders = "jamcoders.org.jm/"
const asb = "stanfordalternativ.wixsite.com/website/concrete-jungle"
const SE = { "cards": [
        { "title": "Pre-order/Order Bit by Bit",
        "description": "Bit by Bit will be published by Stanford University Press on June 4th, 2024, and will be available domestically and internationally. Pre-order on Amazon or Google 'bit by bit ecy king' for mroe. Appreciate your support!",
        "buttons": [
            { "name": "Preorder", 
                "link": preorderLink
            },
             { "name": "More Places", 
                "link": searchLink
            },

        ],
        "image": CoverImage,
    },
            { "title": "Fractal Gridded Comic Use",
        "description": "With Bit by Bit and Una Kushe, one of my goals is to spread use of the Fractal Gridded Comic Genre with the world to make digestible content for complex yet beautiful subjects like Computer Science and Teaching.",
        "buttons": [
 
        ],
        "image": BookOutImage,
    },
            { "title": "Fractal Gridding",
        "description": "I'm really passionate about Fractal Gridding and its learning capabilities. It has helped me to organize and build upon my many thoughts. If you're interested in learning more about it let me know! I'm @bitbybitcomic on Insta.",
        "buttons": [
            { "name": "An Old YouTube Channel", 
                "link": YouTube
            }
        ],
        "image": BbBPageImage,
    },
            { "title": "Jam Coders CS Camp + NY",
        "description": "Over Spring Break, I'll be in NYC for an educational service trip. This summer, I was selected as a Jam Coders TA and will be in Jamaica as well. I'm really excited about traveling + learning/teaching things I love.",
        "buttons": [
            { "name": "Jam Coders", 
                "link": jamcoders
            },
            { "name": "ASB Trips", 
                "link": asb
            },
        ],
        "image": NibsImage,
    },
            { "title": "Pursuit of Happiness",
        "description": "Grateful to be here and sharing things like this labor of love. I hope to be able to continue things like this in some capacity.",
        "buttons": [
            { "name": "LinkedIn", 
                "link": "www.linkedin.com/in/ecy-king-35b2241a5/"
            }
        ],
        "image": TwistImage,
    },


        { "title": "Bit by Bit's Instagram",
        "description": "Feel free to also contact, follow and/or DM me on Instagram. My comic acount is @bitbybitcomic. I'd appreciate it if you'd follow along on this lil journey of mine!",
        "buttons": [
            { "name": "Instagram", 
                "link": "www.instagram.com/bitbybitcomic/"
            }
        ],
        "image": PatternImage,
    },
    { "title": "Fractal Grids + AI",
        "description": "Feel free to also contact, follow and/or DM me on Instagram. My comic acount is @bitbybitcomic. I'd appreciate it if you'd follow along on this lil journey of mine!",
        "buttons": [
            { "name": "Instagram", 
                "link": "www.instagram.com/bitbybitcomic/"
            }
        ],
        "image": PatternImage,
    },
]
}

export { SE }