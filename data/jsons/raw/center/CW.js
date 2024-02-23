import FacultyImage from '@/data/rawImages/CW/faculty.jpeg'
import PosterImage from '@/data/rawImages/CW/supPoster.png'
import PosterPrezImage from '@/data/rawImages/CW/poster.jpeg'
import VPUEImage from '@/data/rawImages/CW/vpue.png'
import GameImage from '@/data/rawImages/CW/game.png'
import SUPLogoImage from '@/data/rawImages/CW/supLogo.png'
import MachinaImage from '@/data/rawImages/CW/machina.png'
import ComicsTalkImage from '@/data/rawImages/CW/comicPrez.jpeg'
// PUT PICTURE OF VPUE poster prez and link event?
const surpsLink = "undergradresearch.stanford.edu/share/surps-asurps" 
const vpueStudentSpotlights = "undergradresearch.stanford.edu/student-spotlight/funded-student-grants"
const vpueMySpotlight = "undergradresearch.stanford.edu/people/ecy-king"
const aboutSURPSIGLink = "www.instagram.com/p/ChSpFAjvK5A/?igsh=MzRlODBiNWFlZA=="
const igVidLink = "www.instagram.com/reel/CmHecSljI6q/?utm_source=ig_web_copy_link"
const jamesLink = "www.landay.org/"
const supPropLink = "www.canva.com/design/DAFW_qMKwAA/L4Ns9ItO93-JUUWpBrPlrQ/view?utm_content=DAFW_qMKwAA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
const posterBitsLink = "www.canva.com/design/DAFPijeD1gY/425sd5oainjUXrXTZW2hSA/view?utm_content=DAFPijeD1gY&utm_campaign=designshare&utm_medium=link&utm_source=editor"
const posterLink = "www.canva.com/design/DAFMpw9SORQ/AN3cE76ulWlfnFhtIrQJ-Q/view?utm_content=DAFMpw9SORQ&utm_campaign=designshare&utm_medium=link&utm_source=editor"
const comicsEvent = "events.stanford.edu/event/comics_more_than_words_-_bit_by_bit_by_ecy_king"
const comicsResearchGrp = "dlcl.stanford.edu/research/comics-more-words"
const comicsIG = "www.instagram.com/p/CoI4ZwOv2GX/?img_index=4"
const gameLink = "ecy123.itch.io/computerland"
const symsysLink = "symsys.stanford.edu/about/whats-name"
const supLink = "www.sup.org/"
const symsysPosterLink = "docs.google.com/document/d/18wsShW0f8RMZmpdTHpXHgvSCsArnXP-ZWK6ltGsUJ6k/edit"
const CW = { "cards": [


    { "title": "Closing Up the Grant",
        "description": "In the Fall, my grant was almost done, even though the book wasn't. As I worked on the book, I also got ready to present at SURPS—the undergraduate research symposium— as part of my grant requirement.",
        "buttons": [
            { "name": "About SURPS", 
                "link": surpsLink
            },
              { "name": "SURPS on IG", 
                "link": aboutSURPSIGLink
            }
        ],
        "image": PosterImage,
    },

    { "title": "SURPS Poster Presentation",
        "description": "At SURPS, I was also inspired by other student projects. My poster was Fractal Gridded, and I got lots of questions about that and the book from both students and alumni who were visiting during Alumni Homecoming Weekend. ",
        "buttons": [
            // also include POSTER LINK
            { "name": "Poster", 
                "link": posterLink
            },
            { "name": "Poster Components", 
                "link": posterBitsLink
            },

        ],
        "image": PosterPrezImage,
    },

    { "title": "VPUE Ambassador",
        "description": "VPUE Research liked my project! They asked me to be a Student Ambassador. I was paid to speak to others about my project and featured as a student spotlight. I also created a video for Stanford's Research Instagram.",
        "buttons": [
            { "name": "The Spotlight", 
                "link": vpueMySpotlight
            },
            { "name": "IG Video", 
                "link": igVidLink
            },
            { "name": "Add'l Spotlights", 
                "link": vpueStudentSpotlights
            }
        ],
        "image": VPUEImage,
    },

    // include fac retreat pic ) 
    // include james landay as link?
    { "title": "CS Faculty Retreat",
        "description": "I was invited to be a student panelist at the CS Faculty Retreat in Santa Cruz. I brought the book :) Some professors read it as they wined and dined over departmental affairs. Soon, a professor became the first to buy a copy.",
        "buttons": [
            { "name": "James Landay, The First Prof", 
                "link": jamesLink
            }
        ],
        "image": FacultyImage,
    },
     { "title": "Comics Research Group Talk",
            "description": "One of my summer sectionees was a PhD student in a Comics Research Group. He co-taught their Stanford class and invited me to be a class speaker. Winter 2023, I spoke on Bit by Bit. The theme for the quarter was CS :)!",
            "buttons": [
                //TO DO: see if I can find the paper picture of my article in the daily :) 
                { "name": "The Event", 
                    "link": comicsEvent
                },
                         { "name": "IG Post", 
                    "link": comicsIG
                },
                         { "name": "The Group", 
                    "link": comicsResearchGrp
                },
            ],
            "image": ComicsTalkImage,
        },
                { "title": "The Prototyped Copies",
            "description": "I continued to share the prototyped copies with people— classmates, CS professors, folks at the d.school, fellow members of the SAA Board of Directors. I even made a Bit by Bit themed game for a class and got an A+.",
            "buttons": [
                //TO DO: see if I can find the paper picture of my article in the daily :) 
                { "name": "The game", 
                    "link": gameLink
                },
                 { "name": "The d.school", 
                    "link": "/dschool.stanford.edu/"
                },
                                 { "name": "SAA board", 
                    "link": "alumni.stanford.edu/about/leadership/"
                },
            ],
            "image": GameImage,
        },
             { "title": "Machina Publication",
            "description": "In 2023, I submitted Bit by Bit for the inaugural edition of Machina, the SymSys magazine. Bit by Bit was accepted and featured in the magazine. Later on, I also presented the project at a SymSys poster session.",
            "buttons": [
                //TO DO: see if I can find the paper picture of my article in the daily :) 
                 { "name": "Machina", 
                    "link": "www.symsyssociety.org/journal"
                },
                                 { "name": "Poster Fair", 
                    "link": symsysPosterLink
                },
            { "name": "What's SymSys?", 
                    "link": symsysLink
                },
            ],
            "image": MachinaImage,
        },
        { "title": "SUP picks it up",
            "description": "With book prototypes from BookBaby, I gave some copies to my mentors. One mentor connected me with the University Press (SUP). Soon after a meeting in early 2023, SUP decided they wanted to publish Bit by Bit.",
            "buttons": [
                //TO DO: see if I can find the paper picture of my article in the daily :) 
                { "name": "SUP", 
                    "link": supLink
                },
                 { "name": "My book proposal", 
                    "link": supPropLink
                },
            ],
            "image": SUPLogoImage,
        },
               
]
}

export { CW }