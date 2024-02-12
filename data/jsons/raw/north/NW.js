import NotepadImage from '@/data/rawImages/NW/notepad.png'
import BbBCoverImage from '@/data/rawImages/NW/cover.jpeg'
import BbBSampleImage from '@/data/rawImages/NW/poster.png'
import DailyImage from '@/data/rawImages/NW/daily.jpeg'
import SubstackImage from '@/data/rawImages/NW/substackLogo.png'
import WhitePaperImage from '@/data/rawImages/NW/paper.png'
import AuthorImage from '@/data/rawImages/CC/198reunion.jpeg'
// to potentially include:
// Medium Articles
// AKA Poems babyyy canva

//TO DO: put canva link to BbB story  LOL now it is google link
const bitlink = 'www.google.com/search?q=bit+by+bit+ecy+king&rlz=1C5CHFA_enUS890US890&oq=bit+by+bit+ecy+king&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyDQgCEAAYhgMYgAQYigUyDQgDEAAYhgMYgAQYigUyBggEEEUYOzIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCjEyMjkwajBqMTWoAgCwAgA&sourceid=chrome&ie=UTF-8'
const NW = { "cards": [

    
    { "title": "Bit by Bit",
        "description": "Bit by Bit is an educational computer science comic book I wrote and illustrated. It's being published by the Stanford University Press on June 4th! It's available for pre-order; to find, just search up: Bit by Bit, Ecy King!",
        "buttons": [
            { "name": "Pre-Order here!", 
                "link": "www.amazon.com/Bit-Graphic-Introduction-Computer-Science/dp/1503638766"
            },
            // should i put this here or with more info?
            { "name": "A Process Video",
            "link": "www.instagram.com/reel/CmHecSljI6q/?utm_source=ig_web_copy_link"
            },
        ],
        "image": BbBCoverImage,
    },

    { "title": "Fractal Gridded Notepad",
        "description": "I co-authored a notepad of Fractal Grids with my dad and we self-published it on Amazon in 2020. It's been sold in over 10 different countries :)!",
        "buttons": [
            { "name": "Check it out here!", 
                "link": "www.amazon.com/Fractal-Gridding-Notepad-Visually-Lifespace/dp/0983825157/ref=sr_1_1?crid=3JXR16YU0NP9P&keywords=fractal+gridding+notepad&qid=1706172993&s=books&sprefix=fractal+gridding+notepa%2Cstripbooks%2C129&sr=1-1"
            },
            {"name": "Notepad Tour",
            "link": "tinyurl.com/fgnotepadtour"}
        ],
        "image": NotepadImage,
    },

        { "title": "Stanford Daily Articles",
        "description": "Through the Stanford Daily, I've published articles on general Stanford Life (my article about viewing my Stanford Admissions File unexpectedly went viral!) and Afropreciation. I've also published some doodles!",
        "buttons": [
            //TO DO: see if I can find the paper picture of my article in the daily :) 
            { "name": "Read More Here", 
                "link": "stanforddaily.com/author/ecyking/"
            },
        ],
        "image": DailyImage,
        },

        { "title": "Fractal Gridded Whitepaper",
        "description": "Here's a white paper on Fractal Gridding. It has a lot of hypotheses about why the tool might be useful, how it might work, what it is and what it is not if you're interested. Written in 2020 in my FGAM USA era...",
        "buttons": [
            //TO DO: see if I can find the paper picture of my article in the daily :) 
            { "name": "Read here :)", 
                "link": "www.canva.com/design/DAEFwO4lV_c/FYXFI6O4QDI8w6en6C8Ebg/view?utm_content=DAEFwO4lV_c&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            },
        ],
        "image": WhitePaperImage,
        },

        { "title": "Substack!",
        "description": "For an English class, we had to make a Substack. Check out and subscribe to my friend Smiti! She posts about her gap year in India before her PhD at UC Berkeley (link: https://substack.com/@smitim)! ",
        "buttons": [
            //TO DO: see if I can find the paper picture of my article in the daily :) 
            { "name": "Still Experimenting", 
                "link": "substack.com/profile/41179640-efk?utm_source=profile-page"
            },
        ],
        "image": SubstackImage,
        },
        { "title": "My Writings",
        "description": "I do creative nonfiction and educational comics. Topics I cover include computer science, afro-cultural education, and Stanford University life. I absolutely love Fractal Grids; I'm exploring a novel genre!",
        "buttons": [
            // change to same link maybe? 
            { "name": "My Author Bio", 
                "link": "www.canva.com/design/DAF70_79t_A/XtkZtzbASJTqk2GiI7Bm4A/view?utm_content=DAF70_79t_A&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            }
        ],
        "image": AuthorImage,
    },

        { "title": "Bit by Bit Additional Info",
        "description": "Bit by Bit is a large labor of love, so I wanted to include a space for more information. Feel free to click below if you wish to learn more about the project, the process, and the journey.",
        "buttons": [
          
            { "name": "More Info", 
                "link": bitlink,
            },
            { "name": "VPUE Research",
            "link": "undergradresearch.stanford.edu/people/ecy-king",
            }
        ],
        "image": BbBSampleImage,
    },


]
}



export { NW }