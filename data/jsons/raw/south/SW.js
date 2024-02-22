// I feel very self conscious about my fro which wasn't the neatest when I lectured
// notepad tour!
import BbBImage from '@/data/rawImages/SW/BbBsamp.png'
import BooksImage from '@/data/rawImages/SW/copies500sup.jpeg'
import PatternImage from '@/data/rawImages/SW/pattern.jpg'
import VariableImage from '@/data/rawImages/SW/var.png'
import IntImage from '@/data/rawImages/SW/ints.jpeg'
import ASideImage from '@/data/rawImages/SW/a_side.jpeg'

const howtogridlink = "www.youtube.com/watch?v=-8rw7PEMT78"
const todoLink = "www.youtube.com/watch?v=ox7Z2xYwK68&t=2s"
const gridTutorialLongLink = "www.youtube.com/watch?v=ox7Z2xYwK68&t=2s"
const fgnotepadTour = "tinyurl.com/fgnotepadtour"
const medArticleLink = "ecyking72345.medium.com/visual-thinking-and-fractal-gridding-for-high-school-students-part-1-9f9f806f4858"
const eightUses = "www.youtube.com/watch?v=IuJ_QkAZbV8"

const SW = { "cards": [

    { "title": "Comic Book",
        "description": "Bit by Bit is a 160-page CS comic, based on Stanford's CS106A & CS106B. It uses Fractal Gridding, visual thinking, storytelling, concept personification, and learning psychology to serve as a source of edutainment. It also flips.",
        "buttons": [
            { "name": "My To Do Lists", 
                "link": todoLink
            }
        ],
        "image": BooksImage,
    },

    { "title": "Fractal Gridding",
        "description": "The book is Fractal Gridded. Imagine a 3x3, outlined tic-tac-toe with a bolded center. Each tic-tac-toe can have another similar structure inside. That's a Fractal Grid! The structure is key to the book and speed of completion.",
        "buttons": [
            { "name": "Read More", 
                "link": medArticleLink
            }
        ],
        "image": BbBImage,
    },

    { "title": "Flip It!",
        "description": "The comic book is double-sided. One side is for CS106A content; the other for CS106B. Students in either class can read from their own beginning. Each side has 6 chapters for a combined total of 12 book chapters.",
        "buttons": [
            { "name": "How to Grid in 30s", 
                "link": howtogridlink
            },
            {"name": "Longer Tutorial",
        "link": gridTutorialLongLink }
        ],
        "image": ASideImage,
    },
    { "title": "Edutainment",
        "description": "Bit by Bit is educational entertainment (edutainment) aiming to teach material in a fun and accessible way. Colorful characters include Sir Python Snake, his rival C++ Camel, Esq., Mama If, and her son Mr. While Loop.",
        "buttons": [
            { "name": "FG Notepad Tour", 
                "link": fgnotepadTour
            }
        ],
        "image": PatternImage
    },

    { "title": "Educational Psychology Principles",
        "description": "Bit by Bit uses chunking to digest dense content, the radial format to encourage non-linear thinking, and dual-encoding— putting the same information in both visuals and text— to facilitate better retention.",
        "buttons": [
            { "name": "Project Book", 
            //LinkedIn Uni project book
                "link": "www.linkedin.com/pulse/meet-universal-project-book-fractal-gridding-notepad-ecy-king/?trackingId=h9Ciq60m2MqP0Wg9h3DhCA%3D%3D"
            }
        ],
        "image": IntImage,
    },

        { "title": "Other Concepts",
        "description": "Concepts such as variables, loops, Big-O, and recursion are personified into characters with matching personalities. There is no overarching narrative but mini-stories such as with the Boolean couple.",
        "buttons": [
            { "name": "8 Uses", 
                "link": eightUses
            }
        ],
        "image": VariableImage,
    },


]
}

export { SW }