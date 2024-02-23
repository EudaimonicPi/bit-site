import CoverImage from '@/data/rawImages/SC/cover.jpeg'
import ClassImage from '@/data/rawImages/SC/class.png'
import ACEImage from '@/data/rawImages/SC/ACE.jpeg'
import FbImage from '@/data/rawImages/SC/fb.png'
import UnaImage from '@/data/rawImages/SC/una.png'
import SiteImage from '@/data/rawImages/SC/bitsite.png'
import PrezImage from '@/data/rawImages/SC/design.jpeg'
import ChinaGridImage from '@/data/rawImages/SC/china.jpeg'


const supBook = "www.sup.org/books/title/?id=37945&bottom_ref=subject"
const aceCALink = "engineering.stanford.edu/students-academics/equity-and-inclusion-initiatives/undergraduate-programs/additional-calculus/meet"
const classNotes = "drive.google.com/drive/folders/130hjGtPxiuCSfPrLjun7JP-s0PiAVdAk"
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
        "description": "In February, I'll be giving a talk to high school students at a virtual summit about Bit by Bit and passion projects; more on that later! I'm also giving a 1-hour lecture in a class I'm talking on Fractal Gridding and Bit by Bit.",
        "buttons": [

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
        "description": "I'm working to bring these to the world Bit by Bit. There are already communities in China and Sierra Leone doing Fractal Gridded comic pages, and comic books with this format are very scalable, so looking forward to the possibilities that offers.",
        "buttons": [
            { "name": "The Song (Press Play!)", 
                "link": "www.canva.com/design/DAF73k2C-P4/u6lF42REmuflriqeqbIoxQ/watch?utm_content=DAF73k2C-P4&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            }
        ],
        "image": ChinaGridImage,
    },
      { "title": "The Software",
    //want to mention it's where my CS teaching journey begain but hmmm....
        "description": "I am currently working on a software for people to use Fractal Gridding online. It's a work in progress, but I may or may not have used it to plan parts of THIS website ;)",
        "buttons": [
            { "name": "The Song (Press Play!)", 
                "link": "www.canva.com/design/DAF73k2C-P4/u6lF42REmuflriqeqbIoxQ/watch?utm_content=DAF73k2C-P4&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            }
        ],
        "image": SiteImage,
    },
        { "title": "The Stanford University Press",
    //want to mention it's where my CS teaching journey begain but hmmm....
        "description": "I've been working with the Stanford University Press these past few mongths to get a finalized first edition out. There's a new cover, new hope, new dreams. The book is available for pre-order and comes out June 4th, 2024.",
        "buttons": [
            { "name": "The book on SUP", 
                "link": supBook
            }
        ],
        "image": CoverImage,
    },
]
}

export { SC }