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
const projBook = "www.linkedin.com/pulse/meet-universal-project-book-fractal-gridding-notepad-ecy-king/?trackingId=h9Ciq60m2MqP0Wg9h3DhCA%3D%3D"
const googleBooks = "www.google.com/search?gs_ssp=eJzj4tVP1zc0LEsxLisoM7QwYPQSTsosUUiqVABRqcmVCtmZeekAx_ULYg&q=bit+by+bit+ecy+king&rlz=1C5CHFA_enUS890US890&oq=bit+bt+biy&gs_lcrp=EgZjaHJvbWUqCQgDEC4YDRiABDIGCAAQRRg5Mg8IARAAGA0YgwEYsQMYgAQyCQgCEAAYDRiABDIJCAMQLhgNGIAEMgkIBBAAGA0YgAQyCQgFEAAYDRiABDIJCAYQABgNGIAEMgkIBxAuGA0YgAQyCQgIEC4YDRiABDIJCAkQABgNGIAE0gEINTUwMWowajSoAgCwAgA&sourceid=chrome&ie=UTF-8&si=AKbGX_p4pyeyr1FGV3SWZkER8f4EphN4nuBiUdh7r4yQpPOvWZUqZY0znm3ZAx4mvi2JNuusK1_GlIEd7JzaI7QNlwLCWVBvMzVMrGyBHCPXtKjji-lpWeM6A1-1fi0T1fsn_6BzWWDf_cwRSHD4XqZTbYfSsXK-WSjK5Fgtx4SKIf3EqZsXE0rnnteyuuCsPIeYvC02niSV&ictx=1&ved=2ahUKEwiGvu6ArMCEAxUPJzQIHaxaA40Q_coHegQINRAD"
const vpueIG = "www.instagram.com/reel/CmHecSljI6q/?utm_source=ig_web_copy_link"
const SW = { "cards": [

    { "title": "Comic Book",
        "description": "Bit by Bit is a 160-page CS comic, based on Stanford's CS106A & CS106B. It uses Fractal Gridding, visual thinking, storytelling, concept personification, and learning psychology to serve as a source of edutainment. It also flips.",
        "buttons": [
            { "name": "Google Books", 
                "link": googleBooks
            },
            { "name": "A Video", 
                "link": vpueIG
            },
        ],
        "image": BooksImage,
    },

    { "title": "Fractal Gridding",
        "description": "The book is Fractal Gridded. Imagine a 3x3, outlined tic-tac-toe with a bolded center. Each tic-tac-toe can have another similar structure inside. That's a Fractal Grid! The structure is key to the book and its speed of completion.",
        "buttons": [
            { "name": "About Fractal Grids", 
                "link": projBook
            },
             { "name": "How to Grid in 30s", 
                "link": howtogridlink
            },
        ],
        "image": BbBImage,
    },

    { "title": "Flip It!",
        "description": "The comic book is double-sided. One side is for CS106A content; the other for CS106B. Students in either class can read from their own beginning. Each side has 6 chapters for a combined total of 12 book chapters.",
        "buttons": [
            {
            "name": "See the Flip", "link": vpueIG
            }

        ],
        "image": ASideImage,
    },
    { "title": "Edutainment",
        "description": "Bit by Bit is educational entertainment (edutainment) aiming to teach material in a fun and accessible way. Colorful characters include Sir Python Snake, his rival C++ Camel, Esq., Mama If, and her son Mr. While Loop.",
        "buttons": [ {"name": "More on Edutainment", "link": "en.wikipedia.org/wiki/Educational_entertainment"}
            
        ],
        "image": PatternImage
    },

    { "title": "Educational Psychology Principles",
        "description": "Bit by Bit uses chunking to digest dense content, the radial format to encourage non-linear thinking, and dual-encoding— putting the same information in both visuals and text— to facilitate better retention.",
        "buttons": [
            { "name": "Visual Thinking Benefits", 
                "link": "www.psychologytoday.com/us/blog/rethinking-thought/201602/new-look-visual-thinking"
            }
        ],
        "image": IntImage,
    },

        { "title": "Other Concepts",
        "description": "Concepts such as variables, loops, Big-O, and recursion are personified into characters with matching personalities. There is no overarching narrative but mini-stories such as with the Boolean couple.",
        "buttons": [
        
        ],
        "image": VariableImage,
    },


]
}

export { SW }