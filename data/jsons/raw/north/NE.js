// import MagImage from '@/data/rawImages/NE/SM.png'
// import GradReflectImage from '@/data/rawImages/NE/gradReflect.jpeg'
// OT FILL IN 
// import ClassImage from '@/data/rawImages/NE/class.png'
// import TravelImage from '@/data/rawImages/NE/radcam.jpeg' 
// // import MusicalImage from '@/data/rawImages/NE/edges.png'
// import CASImage from '@/data/rawImages/NE/cas.jpeg'

import CampusImage from '@/data/rawImages/NE/summerStanford.jpeg'
import ComicStoreImage from '@/data/rawImages/NE/isotope.jpeg'
import PitchImage from '@/data/rawImages/NE/pitch.png'

import WhiteboardImage from '@/data/rawImages/NE/whiteboard.jpeg'
import LastSeshImage from '@/data/rawImages/NE/lastsesh.jpeg'
import FeedbackImage from '@/data/rawImages/NE/feedback.jpeg'
import FeedbackImage2 from '@/data/rawImages/NE/comm2.jpeg'

import WorkImage from '@/data/rawImages/NE/work.jpeg'
import DraftImage from '@/data/rawImages/NE/draft.jpeg'

//INCLUDE STANFORD PIC INFRONT OF HOOV TOW WITH KAREL EARRING
const NE = { "cards": [

        { "title": "The Start of Summer",
        "description": "At the start of the summer, it was just me and my plan. In the Spring, I'd brainstormed some character ideas while being a first-time CS106B section leader (SL). But now, reality hit. It was time to take action.",
        "buttons": [

        ],
        "image": CampusImage,
        },

        { "title": "Summer Planning",
        "description": "Along with Bit by Bit, over Stanford's 2022 summer term, I was SLing CS106B and hosting a Snapchat sponsored extra CS help session. I began brainstorming ideas for the feel of the book and its goals.",
        "buttons": [
            //TO DO: see if I can find the paper picture of my article in the daily :) 
            { "name": "Summer CS106B", 
                "link": "web.stanford.edu/class/archive/cs/cs106b/cs106b.1228/"
            },
        ],
        "image": ComicStoreImage,
        },

        { "title": "Summer Planning pt 2",
        "description": "Following my plan, I contacted the lecturers and began CS106A and CS106B student recruitment. I made some Google Forms, sent out a message on the Ed class forums, and hoped for the best.",
        "buttons": [
            //TO DO: see if I can find the paper picture of my article in the daily :) 

        ],
        "image": PitchImage,
        },

        { "title": "Weekly Plans",
        "description": "Every week, I’d follow along CS106A/B’s lectures, create the week’s chapters, meet with students, and iterate on the previous week's chapter. I printed pages out and used feedback to ensure quality edutainment.",
        "buttons": [
            //TO DO: see if I can find the paper picture of my article in the daily :) 
      
        ],
        "image": FeedbackImage2,
        },

        { "title": "Feedback",
        "description": "I met with 4 different student groups weekly who provided helpful feedback while we ate Trader Joe’s snacks. I also held feedback sessions with fellow SLs and course alumni, helping to shape the book and its direction.",
        "buttons": [
            //TO DO: see if I can find the paper picture of my article in the daily :) 
            { "name": "Trader Joe went to Stanford!", 
                "link": "stanfordmag.org/contents/trader-joe-s-founder-offered-shoppers-novel-goods-cool-vibe"
            },
        ],
        "image": FeedbackImage,
        },

          { "title": "On the Work Itself",
        "description": "At first, I was drawing things, but iPad doodles & Canva did the trick. My drawing abilities GREW; people were surprised. I worked in Christina's Office, my dorm Norcliffe, Huang, and around campus, sometimes with friends.",
        "buttons": [
 
        ],
        "image": WorkImage,
    },


        { "title": "The Community",
        "description": "I held socials with boba, students, and SLs. The students began to get more familiar with each other. At the end we had one big goodbye session with the first book prototype, Trader Joe's snacks, and stickers! ",
        "buttons": [

        ],
        "image": LastSeshImage,
        },

  
    
    { "title": "Summer's End",
        "description": "At summer's end, I had a 232-page draft which I desperately needed to cut. But the physical book draft and other printed prototypes were proof of concept enough, and I had something to share and demo.",
        "buttons": [

        ],
        "image": DraftImage,
    },



 
]
}



export { NE }