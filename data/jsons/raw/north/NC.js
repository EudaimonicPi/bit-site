import q23Image from '@/data/rawImages/NC/23qtitle.png'
import GameImage from '@/data/rawImages/NC/game.png'
import TreeGameImage from '@/data/rawImages/NC/gameTree.png'
import TreeImage from '@/data/rawImages/NC/tree.jpeg'
import PostyImage from '@/data/rawImages/NC/posty.jpeg'
import PianoImage from '@/data/rawImages/NC/piano.jpeg'
import CloudImage from '@/data/rawImages/NC/cloud.png'

// OMG I forgot about my 247G write up!!
// Link to CS377g writeups
// P4 IF: https://mechanicsofmagic.com/2023/03/19/p4-interactive-fiction/
// P2 ppt about game: https://mechanicsofmagic.com/wp-admin/post.php?post=13253&action=edit&classic-editor

// Majoritree rules print & play
//https://drive.google.com/file/d/1WUpLKTy6NqcBn-jqPQ4xPRo-wEI15yut/view
// Majoritree game 
// https://mechanicsofmagic.com/2022/04/21/%f0%9f%8c%b2majoritree-rules-a-stanford-themed-social-game-for-p1-%f0%9f%8c%b2/
// Secrets of Stanford
// https://mechanicsofmagic.com/2022/05/31/project-2-secrets-of-stanford/
// gallery from my old website
// would be cool to highlight some of the playtesting :) 
const NC = { "cards": [

    
    { "title": "23 Questions",
        "description": "23 Questions is a card game—inspired by We're Not Really Strangers— aimed to facilitate connection in the Stanford Class of '23, especially post-pandemic. ~600 copies were distributed to our class through events. ",
        "buttons": [
            { "name": "Images here", 
                "link": "studentaffairs.stanford.edu/sites/g/files/sbiybj19271/files/media/image/23-questions.jpg"
            }
        ],
        // maybe I can uplaod a playable version
        "image": q23Image,
    },

        { "title": "Adventures in Computerland",
        "description": "This is a Bit by Bit-inspired, Computer Science Interactive Fiction Game I made in Twine. It was an assignment (which I got extra credit for XD) for the Stanford game design class CS377G. Feel free to play!",
        "buttons": [
            { "name": "Play Here!", 
                "link": "ecy123.itch.io/computerland"
            }
        ],
        "image": GameImage,
    },

        { "title": "Fractal Grid Stickies",
        "description": "I designed some Fractal Grid Stickies (which I use nearly daily). I enjoy using them. Tried to get them sold in the Stanford bookstore (along with 23 Qs), but alas! If you're interested, here's my project proposal :)",
        "buttons": [
            { "name": "My Failed Project Proposal", 
                "link": "www.canva.com/design/DAFDiWAmnjg/YL_flGtW2qySbdVGRd8_pA/view?utm_content=DAFDiWAmnjg&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            }
        ],
        "image": PostyImage,
    },


    { "title": "Music & Gratitude Puns+",
        "description": "I like a good (or even not so good) pun :) They are fun. And making stickers— even funner! I like giving out personalized stickers as thank you gifts at times.",
        "buttons": [
            { "name": "More Designs!", 
                "link": "www.canva.com/design/DAFfZs4JUnw/fBqlOiIkccVmLBJ_VENaog/view?utm_content=DAFfZs4JUnw&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            }
        ],
        "image": PianoImage,
    },

        { "title": "Class of 2023 Sticker",
        "description": "Freshman year, I lost a t-shirt contest where I used this design. Senior year, I made it into a sticker which was distributed at Senior Events and that I've seen on people's laptops. See the hidden message :)?  ",
        "buttons": [
            { "name": "Even More Sticker Designs!", 
                "link": "www.canva.com/design/DAFK1v5OTAg/z02wv6pctogGMR976FMhzg/view?utm_content=DAFK1v5OTAg&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            }
        ],
        "image": TreeImage,

        }   ,

        { "title": "My Designs",
        "description": "I like to design meaningful (serious) games, fun inspirational stickers, and merch. I also like doodling and zentangles.",
        "buttons": [
            { "name": "Design Gallery!", 
                "link": "ecyking72345.wixsite.com/cognitive-splat/gallery"
            }
        ],
        "image": CloudImage,
        } ,




    { "title": "MajoriTREE Game Design",
        "description": "This was a team project for the game design class CS247G. In addition to having a link to a print-to-play, the slides talk about the game design process we went through— playtesting, iteration, etc. ",
        "buttons": [
            { "name": "Read more here!", 
                "link": "mechanicsofmagic.com/2022/04/21/%f0%9f%8c%b2majoritree-rules-a-stanford-themed-social-game-for-p1-%f0%9f%8c%b2/"
            }
        ],
        "image": TreeGameImage,
    },






]
}


export { NC }