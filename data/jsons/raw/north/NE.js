import MagImage from '@/data/rawImages/NE/SM.png'
import GradReflectImage from '@/data/rawImages/NE/gradReflect.jpeg'
// OT FILL IN 
import ClassImage from '@/data/rawImages/NE/class.png'
import TravelImage from '@/data/rawImages/NE/radcam.jpeg' 
import MusicalImage from '@/data/rawImages/NE/edges.png'
import CASImage from '@/data/rawImages/NE/cas.jpeg'

import WackyImage from '@/data/rawImages/NE/wackyWalk.jpeg'
import CampusImage from '@/data/rawImages/NE/campus.jpeg'
import GradCrewImage from '@/data/rawImages/NE/gradCrew.jpeg'
//cardinal compass is great! https://www.searchclasses.org/?search_query=design%20your%20stanford
//links
const NE = { "cards": [

        { "title": "Reflections from my Stanford '23 Graduation",
        "description": "Just a LinkedIn Post where I talk about various projects throughout my 4 years of undergrad. I've enjoyed my time here TREE-mendously :)",
        "buttons": [
            //TO DO: see if I can find the paper picture of my article in the daily :) 
            { "name": "Read Here", 
                "link": "www.linkedin.com/pulse/i-graduated-from-stanford-23-ecy-king%3FtrackingId=ajvXY4m4SoW6c1rrlQpOBw%253D%253D/?trackingId=ajvXY4m4SoW6c1rrlQpOBw%3D%3D"
            },
        ],
        "image": GradReflectImage,
        },

        { "title": "Travel & Travel Recs",
        "description": "I studied abroad in England, have gone to Boston and Dallas for CS Conferences, and I'm going to NYC for a service-learning trip. I HIGHLY recommend pursuing meaningful, Stanford-sponsored travel opportunities!",
        "buttons": [
            //TO DO: see if I can find the paper picture of my article in the daily :) 
            { "name": "Read About Oxford BOSP!", 
                "link": "bosp.stanford.edu/explore-programs/oxford"
            },
        ],
        "image": TravelImage,
        },

        { "title": "Music Experience",
        "description": "As a retired choirkid in pursuit of musical happiness, I did experiences like Arts Intensive, an opera-musical fusion (out of my comfort zone, but fun!), and a voice recital (also out there!).",
        "buttons": [
            //TO DO: see if I can find the paper picture of my article in the daily :) 
            { "name": "Read About the Opera/Musical Here", 
                "link": "stanforddaily.com/2024/01/30/first-night-at-the-opera-edges-narrates-stories-of-nostalgia-and-new-experiences/"
            },
        ],
        "image": MusicalImage,
        },

        { "title": "Odd Jobs",
        "description": "Some miscellaneous, paid jobs I've done and also recommend include: Grad Crew, Reunion Homecoming, OAE Notetaking, and VPUE Research Ambassador. I highly recommend Grad Crew, open to all.",
        "buttons": [
            //TO DO: see if I can find the paper picture of my article in the daily :) 
            { "name": "Fun, Old Article About Campus Jobs", 
                "link": "stanfordmag.org/contents/they-pay-me-to-do-this"
            },
        ],
        "image": GradCrewImage,
        },

        { "title": "Misc Fact and Class Recs",
        "description": "Fun fact: I've lived in 10 different Stanford dorms! I also have a lot of class recs which include PSYCH12N, PHIL20N, CSRE47Q, CS106A, ME104B/S, ENGLISH91 & 318, MUSIC65, CS247G, EHJS, AFRICAST195.",
        "buttons": [
            //TO DO: see if I can find the paper picture of my article in the daily :) 
            { "name": "EHJS Reunion Vid!", 
                "link": "www.youtube.com/watch?v=AzOabv23d5E"
            },
        ],
        // "image": WackyImage,
        "image": ClassImage,

        },



        { "title": "Coterm Era",
        "description": "Currently, I'm very much in my coterm era, taking light units, teaching a class, doing projects, and enjoying time with friends. I also did Stanford Interviews through OVAL Volunteering; I recommend as an alum ;)",
        "buttons": [
            //TO DO: see if I can find the paper picture of my article in the daily :) 
            { "name": "Check out OVAL!", 
                "link": "oval.stanford.edu/"
            },
        ],
        "image": CASImage,
        },

    { "title": "Stanford YouTube",
        "description": "Here is a video from Stanford's YouTube about some of my Stanford experiences, including the Intellectual Vitality, different communities, being a class president, and being a SymSys major.",
        "buttons": [
            { "name": "YouTube", 
                "link": "www.youtube.com/watch?v=rZr5IpZ_xmw&pp=ygUIZWN5IGtpbmc%3D"
            }
        ],
        "image": CampusImage,
    },
    
    { "title": "Stanford Alum Magazine.",
        "description": "Here's another video from the Stanford Alumni Magazine about some of my Stanford Experiences, including Fractal Gridding, my family, and Bit by Bit:) ",
        "buttons": [
            { "name": "YouTube", 
                "link": "www.youtube.com/watch?v=UwHd0In7Pbk"
            }
        ],
        "image": MagImage,
    },



 
]
}



export { NE }