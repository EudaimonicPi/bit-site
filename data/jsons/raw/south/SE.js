import SiteImage from '@/data/rawImages/SE/bitsite.png'
import TwistImage from '@/data/rawImages/SE/twists.jpeg'
import NibsImage from '@/data/rawImages/SE/nibs.png'
import PatternImage from '@/data/rawImages/SE/ig.png'
import CoverImage from '@/data/rawImages/SE/cover.jpeg'
import BbBPageImage from '@/data/rawImages/SE/poster.png'
import BookOutImage from '@/data/rawImages/SE/laid_out.jpeg'
import CadenceImage from '@/data/rawImages/SE/cadence.png'

const preorderLink = "www.amazon.com/Bit-Graphic-Introduction-Computer-Science/dp/1503638766"
const searchLink  = "www.google.com/search?q=bit+by+bit+ecy+king&rlz=1C5CHFA_enUS890US890&oq=bit+by&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBggCEEUYOzIGCAMQRRg7MgYIBBBFGEAyBggFEEUYPTIGCAYQRRg8MgYIBxBFGDzSAQgyODk4ajBqMagCALACAA&sourceid=chrome&ie=UTF-8"
const YouTube = "www.youtube.com/@fgamusa9889"
const jamcoders = "jamcoders.org.jm/"
const asb = "stanfordalternativ.wixsite.com/website/concrete-jungle"
const feedbackLink = "docs.google.com/forms/d/e/1FAIpQLSdvMP30Pp8xrB6r395OpgcPSKH4mYySCIuB_Kog5P-5WZtlyA/viewform?usp=sf_link"
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
                  { "title": "Cadence Women In Tech Scholarship",
        "description": "Recently, I won the 2023 Diversity in Tech Scholarship for Women in Technology from Cadence Design Sysyems. Very grateful for that :)!",
        "buttons": [
            {"name": "The Scholarship", "link": "finance.yahoo.com/news/cadence-2023-diversity-technology-scholarship-171500286.html",
            "name": "Cadence", "link": "www.cadence.com/en_US/home.html" }
  
        ],
        "image": CadenceImage,
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
        "description": "The app I'm developing uses LLM + AI + search to generate some cool grids. The dream is that Fractal Grids can be a dream interface for anyone, anything. Putting my CS degree to use!",
        "buttons": [
  
        ],
        "image": SiteImage,
    },

              { "title": "Pursuit of Happiness",
        "description": "Grateful to be here and sharing things like this labor of love. I hope to be able to continue things like this in some capacity. Feedback and testimonials help with that greatly :)!",
        "buttons": [
            { "name": "Feedback/Testimonial Form", "link": feedbackLink}
  
        ],
        "image": TwistImage,
    },

]
}

export { SE }