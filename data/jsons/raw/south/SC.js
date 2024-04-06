import CoverImage from '@/data/rawImages/SC/cover.jpeg'
import ClassImage from '@/data/rawImages/SC/class.png'
import ACEImage from '@/data/rawImages/SC/ACE.jpeg'
import FbImage from '@/data/rawImages/SC/fb.png'
import UnaImage from '@/data/rawImages/SC/una.png'
import SiteImage from '@/data/rawImages/SC/fgsite.png'
import PrezImage from '@/data/rawImages/SC/design.jpeg'
import ChinaGridImage from '@/data/rawImages/SC/china.jpeg'

const preorderLink = "www.amazon.com/Bit-Graphic-Introduction-Computer-Science/dp/1503638766"
const supBook = "www.sup.org/books/title/?id=37945&bottom_ref=subject"
const aceCALink = "engineering.stanford.edu/students-academics/equity-and-inclusion-initiatives/undergraduate-programs/additional-calculus/meet"
const classNotes = "drive.google.com/drive/folders/130hjGtPxiuCSfPrLjun7JP-s0PiAVdAk"
const guestLecLink = "drive.google.com/file/d/1Vi5komoemIy_WUYJynnEgLdwzlVVp8ZZ/view?usp=sharing" 

const SC = { "cards": [
    { "title": "CS100ACE",
        "description": "Currently, I'm the Instructor for CS100ACE, an extra session lab supplement to CS106A. Lecturing and curriculum design are fun! Students have gotten copies as a good luck charm before their CS106A midterms.",
        "buttons": [
             { "name": "ACE Program", 
                "link": "engineering.stanford.edu/students-academics/equity-and-inclusion-initiatives/undergraduate-programs/additional-calculus"
            },
            { "name": "ACE CAs", 
                "link": aceCALink
            }
        ],
        "image": ACEImage,
    },


        { "title": "Classes",
        "description": "I'm a Stanford coterm finishing up a CS masters. I'm currently taking a publishing class, a CS design class, an education class, and an independent study on Fractal Gridding. All my class notes are fractal gridded :)",
        "buttons": [
            { "name": "Some Class Notes", 
                "link": classNotes
            }
        ],
        "image": ClassImage,
    },

        { "title": "On Being Recognized: ",
        "description": "At times, it's surreal being recognized, from a TA at Office Hours to a lecturer who told me I inspired him, and students from the Comics Research Class. I'm grateful for the Stanford community support, enthusiasm, and vitality.",
        "buttons": [
            { "name": "Reflecting on that", 
        "link": "www.linkedin.com/pulse/5-years-ago-ecy-king-s9rgc%3FtrackingId=L%252Fmbqn6ITjCcy1NaSJUejw%253D%253D/?trackingId=L%2Fmbqn6ITjCcy1NaSJUejw%3D%3D"}
        ],
        "image": FbImage,
    },

        { "title": "Upcoming Presentations:",
        "description": "In February, I gave a talk to high school students at a virtual summit about Bit by Bit and passion projects. I also gave a 1-hour lecture on Fractal Gridding and Bit by Bit in a class I was taking (CS247B).",
        "buttons": [
             {"name": "CS247B Guest Lec",
            "link": guestLecLink
        },
        

        ],
        "image": PrezImage,
    },


    { "title": "Another Grant",
    //want to mention it's where my CS teaching journey begain but hmmm....
        "description": "I got another Stanford grant from the Center for Teaching Learning (CTL) to make an inclusive guide for CS TAs. It's also a Fractal Gridded Comic and it's called Una Kushe. I'm experimenting a little bit with style as well :)",
        "buttons": [
            { "name": "CTL Grants", 
                "link": "ctl.stanford.edu/ctl-great-grant"
            }
        ],
        "image": UnaImage,
    },
      { "title": "Fractal Gridding (Comics)",
      // in future maybe show fractal gridded gallery
        "description": "I'm working to bring these to the world. There are already communities in China and Sierra Leone doing Fractal Gridded comic pages. Comics with this format are very scalable and collaborative. Excited for the possibilities!",
        "buttons": [
      
        ],
        "image": ChinaGridImage,
    },
      { "title": "The Software",
    //want to mention it's where my CS teaching journey begain but hmmm....
        "description": "I am currently working on a software for people to (collaboratively!) use Fractal Gridding online. It's a work in progress, but I may or may not have used the prototype to plan parts of THIS website ;)",
        "buttons": [

        ],
        "image": SiteImage,
    },
        { "title": "The Stanford University Press",
    //want to mention it's where my CS teaching journey begain but hmmm....
        "description": "I've been working with the Stanford University Press (SUP) these past few months to get a finalized first edition out. There's a new cover, new hope, new dreams. The book is available for pre-order and comes out June 4th, 2024.",
        "buttons": [
            { "name": "The book on SUP", 
                "link": supBook
            },
            { "name": "Preorder!", 
                "link": preorderLink
            },
        ],
        "image": CoverImage,
    },
]
}

export { SC }