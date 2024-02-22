import DurandImage from '@/data/rawImages/CE/copiesDurand.jpeg'
import MehranImage from '@/data/rawImages/CE/mehran.jpeg'
import AuthorImage from '@/data/rawImages/CE/198reunion.jpeg'
import PITImage from '@/data/rawImages/CE/PIT-UN.jpeg'
import IGImage from '@/data/rawImages/CE/stanford_ig.jpeg'
import SMImage from '@/data/rawImages/CE/SM.png'
import SummerImage from '@/data/rawImages/CE/lec.jpeg'
import GradImage from '@/data/rawImages/CE/commencement.png'

const commencementLink = "youtu.be/73Zy2sKMz7A?si=vasq53cBJoD438E7&t=4514"
const CE = { "cards": [
    { "title": "The CS Department's 500 Copies",
        "description": "In the Spring, Stanford's CS Department bought 500 printed (not published) copies from SUP, delivered to the Department chair's office, thanks to James, John, Jerry, Mehran, Alan, Debby, Marcos, and Meredith!",
        "buttons": [
            { "name": "Stanford's CS Dept", 
                "link": "www.cs.stanford.edu/"
            }
        ],
        "image": DurandImage,
    },

     { "title": "Section Leader (SL) Distribution",
        "description": "One SL Monday meeting, Mehran— legendary SL alum, CS106A lecturer, and CS Deptt Chair—  came with some 'surprise' boxes of Bit by Bit. He gave them out to SLs and even asked me to sign his copy. A moment indeed...",
        "buttons": [
            { "name": "View", 
                "link": "www.canva.com/design/DAF70lJuZSo/xddNF2SmIy3_AYWHm2Ut0w/view?utm_content=DAF70lJuZSo&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            }
        ],
        "image": MehranImage,
    },
         { "title": "Stanford Features Me...Everywhere!",
        "description": "In the Spring, I was featured in the Stanford Report and all of Stanford's social media channels—Stanford's Instagram, Facebook, Twitter, LinkedIn, and YouTube. Bit by Bit was mentioned of course! I was on stanford.com :)",
        "buttons": [
            { "name": "View", 
                "link": "www.canva.com/design/DAF70lJuZSo/xddNF2SmIy3_AYWHm2Ut0w/view?utm_content=DAF70lJuZSo&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            }
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
        "description": "After graduating from undergrad, I Head TA'd for CS106A that summer, re-engaging with the material. I also relaxed, worked on the Fractal Gridding software, and gave out some copies to students near the end of the term.",
        "buttons": [
            { "name": "View", 
                "link": "www.canva.com/design/DAF70lJuZSo/xddNF2SmIy3_AYWHm2Ut0w/view?utm_content=DAF70lJuZSo&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            }
        ],
        "image": SummerImage,
    },
             { "title": "Stanford Alumni Magazine!",
        "description": "In September 2023, the Stanford Alumni Magazine featured me in their 50-year anniversary issue. Bit by Bit, Fractal Gridding, and my family were mentioned. In the SAA Board Reunion, I also got a shoutout :)!",
        "buttons": [
            { "name": "View", 
                "link": "www.canva.com/design/DAF70lJuZSo/xddNF2SmIy3_AYWHm2Ut0w/view?utm_content=DAF70lJuZSo&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            }
        ],
        "image": SMImage,
    },

        { "title": "CS198 Reunion Book Signing",
        "description": "In October, the CS Dept held the Reunion for former CS106A/B TAs (the CS198 Community). The guests were awesome! I did a book signing at the event and the book was distributed to CS legends. TY Jim Shea!",
        "buttons": [
            { "name": "ACE", 
                "link": "www.google.com"
            }
        ],
        "image": AuthorImage,
    },

        { "title": "PIT-UN Conference",
        "description": "I also presented on Bit by Bit at the 2023 PIT-UN (Public Interest Tech) Conference in Boston, at Boston University. I was selected as a student panelist. The sharing and learning there was an amazing experience.",
        "buttons": [
            { "name": "ACE", 
                "link": "www.google.com"
            }
        ],
        "image": PITImage,
    },


]
}

export { CE }