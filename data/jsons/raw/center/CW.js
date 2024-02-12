// I feel very self conscious about my fro which wasn't the neatest when I lectured
import VTFGImage from '@/data/rawImages/CW/vtfg.png'
import LecImage from '@/data/rawImages/CW/lec.jpeg'
import ComicPrezImage from '@/data/rawImages/CW/comicPrez.jpeg'
// TO DO put right stuff
import WkshpImage from '@/data/rawImages/CW/design.jpeg'
import ConferenceImage from '@/data/rawImages/CW/john.PNG'
import TeachingImage from '@/data/rawImages/CW/teach.png'
// import TeachingImage from '@/data/cellImages/teaching.jpeg'

// VPUE link https://undergradresearch.stanford.edu/people/ecy-king
const CW = { "cards": [

    
    { "title": "Visual Thinking & FGing workshop",
        "description": "I've done a few workshops on Visual Thinking and Fractal Gridding, for the Wave Learning Festival and Stanford Splash. These are SUPER fun; if you're interested in learning more, please contact me :)! ",
        "buttons": [
            { "name": "Read More", 
                "link": "www.linkedin.com/pulse/visual-thinking-fractal-gridding-wave4-learning-festival-ecy-king%3FtrackingId=9QcmTl0N1P8pvVs85ZAIsQ%253D%253D/?trackingId=9QcmTl0N1P8pvVs85ZAIsQ%3D%3D"
            }
        ],
        "image": VTFGImage,
    },

    { "title": "CS Education",
        "description": "I enjoy CS Education and have experiences teaching beginning Python to adults, Stanford students, and highschoolers. I do volunteer and teaching gigs, so feel free to reach out with ops :)!",
        "buttons": [
            { "name": "Old CS106A Website", 
                "link": "web.stanford.edu/class/archive/cs/cs106a/cs106a.1238/"
            }
        ],
        "image": LecImage,
    },

    { "title": "Speaking Gigs",
        "description": "I've MC'd, spoken at conferences, classes & panels. I enjoy sharing experiences on Bit by Bit, Stanford Life, and Fractal Gridding. Feel free to contact me if you'd like to book me for speaking, presentations, or interviews :)",
        "buttons": [
            { "name": "Sample Event", 
                "link": "events.stanford.edu/event/comics_more_than_words_-_bit_by_bit_by_ecy_king"
            }
        ],
        "image": ComicPrezImage,
    },

    { "title": "Fractal Gridding Workshops",
        "description": "If you're interested in learning more about Fractal Gridding at a workshop, event, or even personally, let me know! I love to share insights. Sometimes I sometimes do fun or soul-searching sessions with friends.",
        "buttons": [
            { "name": "Read More", 
                "link": "www.linkedin.com/pulse/meet-universal-project-book-fractal-gridding-notepad-ecy-king/?trackingId=h9Ciq60m2MqP0Wg9h3DhCA%3D%3D"
            }
        ],
        "image": WkshpImage,
    },
        { "title": "Conferences",
            "description": "Attending conferences == intellectual inspo! Some I've enjoyed are AfroTech 2021, PIT-UN 2023, Richard Tapia 2023, Accelerate EdTech Impact Summit (2023). The CS198 Reunion and SAA Reunion were EPIC as well!",
            "buttons": [
                //TO DO: see if I can find the paper picture of my article in the daily :) 
                { "name": "PIT-UN", 
                    "link": "www.bu.edu/pitun2023/student-track/student-track-agenda/"
                },
            ],
            "image": ConferenceImage,
        },
                { "title": "Tutoring & Mentoring",
            "description": "I also do private tutoring (algebra, intro CS) and occasionally mentor (college advice, passion projects), depending on my capacity and bandwidth. ",
            "buttons": [
                //TO DO: see if I can find the paper picture of my article in the daily :) 
                { "name": "A Teaching Experience", 
                    "link": "www.linkedin.com/posts/ecy-king-35b2241a5_codingisfun-coding-teaching-activity-6699806703455649792-g4VJ?utm_source=share&utm_medium=member_desktop"
                },
            ],
            "image": TeachingImage,
        },
]
}

export { CW }