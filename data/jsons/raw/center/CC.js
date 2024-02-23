import SelfImage from '@/data/rawImages/CC/hoovTow.jpeg'
import FamImage from '@/data/rawImages/CC/fam.jpeg'
import MagPhotoImage from '@/data/rawImages/CC/magPhoto.jpeg'
import CampusImage from '@/data/rawImages/CC/campus.jpeg'
import SummerEnd from '@/data/rawImages/CC/summerEnd.jpeg'
import PosterPrezImage from '@/data/rawImages/CW/poster.jpeg'
import BooksImage from '@/data/rawImages/SW/copies500sup.jpeg'
import CoverImage from '@/data/rawImages/SE/cover.jpeg'
import PrezImage from '@/data/rawImages/SC/design.jpeg'
const cogSplat = "cogsplat.vercel.app/L1"
const vpueIG = "www.instagram.com/reel/CmHecSljI6q/?utm_source=ig_web_copy_link"
const amazon = "www.amazon.com/Bit-Graphic-Introduction-Computer-Science/dp/1503638766"
const CC = { "cards": [
    { "title": "About Me",
        "description": "Hi! I'm Ecy (AC). I'm a Stanford student who wrote Bit by Bit, an educational Computer Science comic based around Stanford's Intro CS classes. It's being published by the Stanford University Press in June (woowoo!).",
        "buttons": [

             { "name": "Preorder :)", 
                "link": amazon
            },
             { "name": "Book Vid", 
                "link": vpueIG
            },
             { "name": "My Website", 
                "link": "cogsplat.vercel.app/L1"
            },
        ],
        "image": SelfImage,
    },

    //maybe vary it up on instagram link to video? 
    { "title": "Bit by Bit Origins",
        "description": "Bit by Bit was created through a Stanford Major Grant. The idea came to me in Oxford when I was studying education abroad and looking to do a project combining my interests in Fractal Gridding, doodling, learning psychology & teaching CS.",
        "buttons": [],
        "image": CampusImage,
    },
        { "title": "The Summer Project",
        "description": "Summer of 2022, I began working on the project full time. This involved writing chapters weekly, meeting with students, lecturers, TAs, and more for feedback, and lots of planning! I was also section leading CS106B, living in Norcliffe.",
        "buttons": [],
        "image": SummerEnd,
    },

           { "title": "Finishing the Draft",
        "description": "In the Fall, I closed up the grant with the SURPS's poster presentation. Since then, I've gotten to present, publish, and share my book in classes like DLCL238, the CS Faculty Retreat, the SymSys magazine Machina, and conferences like PIT-UN. I also became a VPUE ambassador.",
        "buttons": [ ],
        "image": PosterPrezImage,
    },
           { "title": "500 Copies",
        "description": "The Stanford University Press (SUP) then decided to pick up my book. The CS Department bought 500 prototyped copies from the press and the book spread. Section leaders had it, it was featured on Stanford's socials, and even a Commencement Address. I did a book signing at the CS198 reunion.",
        "buttons": [],
        "image": MagPhotoImage,
    },
            { "title": "Design Features",
        "description": "What makes Bit by Bit special? It uses a novel format called Fractal Gridding and also employs principles of learning psychology (chunking, radial thinking, dual encoding) and edutainment. It also flips for even more fun, one side for each intro CS course.",
        "buttons": [],
        "image": BooksImage,
    },
        { "title": "The Present",
        "description": "Currently, I'm still a Stanford student hoping to spread use of Fractal Gridded comics like Bit by Bit. The book has been presented in many different places, lots of opportunities have come, and I'm excited to see where things will go. ",
        "buttons": [],
        "image": PrezImage,
    },
    { "title": "The Future",
        "description": "Bit by Bit is officially coming out June 4th, 2024. I'm excited for all the experiences that will come from that. I hope others— writers, innovators, curious people— will be inspired to write, create, and share Fractal Gridded Comics and edutainment worldwide.",
        "buttons": [],
        "image":CoverImage,
    },

]
}

export { CC }