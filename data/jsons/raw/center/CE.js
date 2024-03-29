import DurandImage from '@/data/rawImages/CE/copiesDurand.jpeg'
import MehranImage from '@/data/rawImages/CE/mehran.jpeg'
import AuthorImage from '@/data/rawImages/CE/198reunion.jpeg'
import PITImage from '@/data/rawImages/CE/PIT-UN.jpeg'
import IGImage from '@/data/rawImages/CE/stanford_ig.jpeg'
import SMImage from '@/data/rawImages/CE/SM.png'
import SummerImage from '@/data/rawImages/CE/lec.jpeg'
import GradImage from '@/data/rawImages/CE/commencement.png'


const cs198AlumLink = "nymag.com/intelligencer/2012/11/stanford-class-that-is-taking-over-tech.html"
const cs198Article = "medium.com/@johnolilly/stanford-cs198-eric-roberts-acb4aaa5bad7"
const cs198Link = "cs198.stanford.edu/cs198/ProgramStructure.aspx"
const PITLink = "www.bu.edu/pitun2023/student-track/student-track-agenda/"
const commencementLink = "youtu.be/73Zy2sKMz7A?si=vasq53cBJoD438E7&t=4514"
const pitLink = "www.bu.edu/pitun2023/student-track/student-track-agenda/"
const insta = "www.instagram.com/stanford/reel/Csl_uVdvFHY/"
const smArticle = "stanfordmag.org/contents/meet-ecy-king"
const smYouTube = "www.youtube.com/watch?v=UwHd0In7Pbk"

const youtube = "www.youtube.com/watch?v=rZr5IpZ_xmw"
const stanfordReport = "news.stanford.edu/report/2023/05/23/meet-ecy-king-23/"
const CE = { "cards": [
    { "title": "The CS Department's 500 Copies",
        "description": "Spring of 2023, Stanford's CS Department bought 500 printed (not published) copies from SUP, delivered to the Department chair's office, thanks to James, John, Jerry, Mehran, Alan, Debby, Marcos, and Meredith!",
        "buttons": [
            { "name": "Stanford's CS Dept", 
                "link": "www.cs.stanford.edu/"
            }
        ],
        "image": DurandImage,
    },

     { "title": "Section Leader (SL) Distribution",
        "description": "One SL Monday meeting, Mehran— legendary SL alum, CS106A lecturer, and CS Dept Chair—  came with some 'surprise' boxes of Bit by Bit. He gave them out to SLs and even asked me to sign his copy. A moment indeed...",
        "buttons": [
            { "name": "CS198 Website", 
                "link": cs198Link
            },
            { "name": "CS198 Article (2012)", 
                "link": cs198Article
            }
        ],
        "image": MehranImage,
    },
         { "title": "Stanford Features Me...Everywhere!",
        "description": "In the Spring, I was featured in the Stanford Report and all of Stanford's social media channels—Stanford's Instagram, Facebook, Twitter, LinkedIn, and YouTube. Bit by Bit was mentioned of course! I was on stanford.com :)",
        "buttons": [
            { "name": "The Report", 
                "link": stanfordReport
            },
            { "name": "YouTube", 
                "link": youtube
            },
             { "name": "Insta", 
                "link": insta
            },
            
        ],
        "image": IGImage,
    },
             { "title": "Stanford Commencement Address",
        "description": "Crazily enough, on the day I was graduating, I was shouted out in the Stanford University President's Official Commencement Address. He mentioned the comic as an example of student creativity for impact. Sublime!",
        "buttons": [
            { "name": "The Shoutout", 
                "link": commencementLink
            }
        ],
        "image": GradImage,
    },
             { "title": "Head TAing",
        "description": "After undergrad graduation, I Head TA'd for summer's CS106A, re-engaging with the material. I also relaxed, worked on the Fractal Gridding software, and gave out some copies of the book to students near the term's end.",
        "buttons": [
            { "name": "CS106A Summer 2022", 
                "link": "web.stanford.edu/class/archive/cs/cs106a/cs106a.1238/"
            }
        ],
        "image": SummerImage,
    },
             { "title": "Stanford Alumni Magazine!",
        "description": "In September 2023, the Stanford Alumni Magazine featured me in their 50-year anniversary issue. Bit by Bit, Fractal Gridding, and my family were mentioned. In the SAA Board Reunion, I also got a shoutout :)!",
        "buttons": [
            { "name": "The Article", 
                "link": smArticle
            },
            { "name": "The Video", 
                "link": smYouTube
            }
        ],
        "image": SMImage,
    },

        { "title": "CS198 Reunion Book Signing",
        "description": "In October, the CS Dept held the Reunion for former CS106A/B TAs (the CS198 Community). The guests were awesome! I did a book signing at the event and the book was distributed to CS legends. TY Jim Shea!",
        "buttons": [
            { "name": "CS198 Article", 
                "link": cs198AlumLink
            },
            { "name": "Reunion Article (2016)", 
                "link": cs198Article
            },
            

        ],
        "image": AuthorImage,
    },

        { "title": "PIT-UN Conference",
        "description": "I also presented on Bit by Bit at the 2023 PIT-UN (Public Interest Tech) Conference at Boston University in Boston. I was selected as a student panelist. The sharing and learning there was an amazing experience.",
        "buttons": [
            { "name": "PIT-UN 2023 at BU", 
                "link": pitLink
            }
        ],
        "image": PITImage,
    },


]
}

export { CE }