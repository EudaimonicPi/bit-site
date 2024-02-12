// I feel very self conscious about my fro which wasn't the neatest when I lectured
// notepad tour!
import ConsciousImage from '@/data/rawImages/SW/conscious.png'
import GridImage from '@/data/rawImages/SW/gridGraphic.jpeg'
import FilledPostyImage from '@/data/rawImages/SW/filledPosty.jpg'
import TrizImage from '@/data/rawImages/SW/triz.png'
import SketchImage from '@/data/rawImages/SW/sketchnote.jpeg'
import Sketch2Image from '@/data/rawImages/SW/sketchnote2.jpeg'
import PosterImage from '@/data/rawImages/SW/poster.png'
import BbBImage from '@/data/rawImages/SW/BbBsamp.png'

const howtogridlink = "www.youtube.com/watch?v=-8rw7PEMT78"
const todoLink = "www.youtube.com/watch?v=ox7Z2xYwK68&t=2s"
const gridTutorialLongLink = "www.youtube.com/watch?v=ox7Z2xYwK68&t=2s"
const fgnotepadTour = "tinyurl.com/fgnotepadtour"
const medArticleLink = "ecyking72345.medium.com/visual-thinking-and-fractal-gridding-for-high-school-students-part-1-9f9f806f4858"
const eightUses = "www.youtube.com/watch?v=IuJ_QkAZbV8"

const SW = { "cards": [

    { "title": "Why Fractal Gridding?",
        "description": "I genuinely believe it's an incredible tool that's changed the way I think, organize my life, and perceive the world. Even though I've known of it much of my life, there's a reason why I'm using it so ardently now :D",
        "buttons": [
            { "name": "My To Do Lists", 
                "link": todoLink
            }
        ],
        "image": GridImage,
    },

    { "title": "What is Fractal Gridding?",
        "description": "So what's this thing I'm super passionate about? It's a way of notetaking, of organizing thoughts in a manner that works with my brain. I use it for notes, todo lists, organizing my life... And want to share it with others :D",
        "buttons": [
            { "name": "Read More", 
                "link": medArticleLink
            }
        ],
        "image": Sketch2Image,
    },

    { "title": "How to do it?",
        "description": "If you're curious on how to do it, I have a few tutorials from an interesting era of mine, including a short and longer one.",
        "buttons": [
            { "name": "How to Grid in 30s", 
                "link": howtogridlink
            },
            {"name": "Longer Tutorial",
        "link": gridTutorialLongLink }
        ],
        "image": SketchImage,
    },
    { "title": "Why Fractal Gridding?",
        "description": "As a visual person, I often combine gridding with doodling to really bring my ideas, notes, and thoughts to life. ",
        "buttons": [
            { "name": "FG Notepad Tour", 
                "link": fgnotepadTour
            }
        ],
        "image": ConsciousImage
    },

    { "title": "Personal Uses",
        "description": "Personally, I use it for my calendar (analog), daily to do list, class to do list, tab management, personal website, class notes, and have even used it to write a book.",
        "buttons": [
            { "name": "Project Book", 
            //LinkedIn Uni project book
                "link": "www.linkedin.com/pulse/meet-universal-project-book-fractal-gridding-notepad-ecy-king/?trackingId=h9Ciq60m2MqP0Wg9h3DhCA%3D%3D"
            }
        ],
        "image": FilledPostyImage,
    },

        { "title": "History",
        "description": "My dad invented it when I was a toddler, but only in college did I fully use it. My dad has MANY ideas. At times, he struggles sharing them with world. I want to change that, especially with such an awe-inspiring tool.",
        "buttons": [
            { "name": "8 Uses", 
                "link": eightUses
            }
        ],
        "image": TrizImage,
    },

    { "title": "Want to Learn More?",
        "description": "I can talk to the ends of the earth about not just the tool, but also ways to see if it's something that would work for how you organize your life :)",
        "buttons": [
            //may want to switch this and previous
            { "name": "A White Paper :)", 
                "link": "www.canva.com/design/DAEFwO4lV_c/FYXFI6O4QDI8w6en6C8Ebg/view?utm_content=DAEFwO4lV_c&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            }
        ],
        "image": BbBImage,
    },

]
}

export { SW }