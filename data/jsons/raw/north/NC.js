import InitIdeasImage from '@/data/rawImages/NC/grantStart.jpeg'
import EpiphanyImage from '@/data/rawImages/NC/ideas.jpeg'
import TravelImage from '@/data/rawImages/NC/radcam.jpeg'
import ThanksImage from '@/data/rawImages/NC/grant_thanks.png' 
import ResubImage from '@/data/rawImages/NC/healthCheck.jpeg'
import ConcernImage from '@/data/rawImages/NC/mentors.png'
import SprintImage from '@/data/rawImages/NC/oxwork.jpeg'
import PosterImage from '@/data/rawImages/NC/poster.png'

const theFeature = "undergradresearch.stanford.edu/people/ecy-king"
const majorGrantInfoLink = "undergradresearch.stanford.edu/fund-your-project/explore-student-grants/major"
const computerlandLink = "ecy123.itch.io/computerland"
const srSynthLink = "docs.google.com/document/d/199HMpUtVCxoTOUm-6tggL1RNCvhhm_xI0u1hYMqx3j0/edit?usp=sharing"
const oldSrSynthLink = "docs.google.com/document/d/1agWiWn5RE5IYrzQ6aVL-2ULpyN5iiGYV3lJEwUlbU8M/edit?usp=sharing"
const tutorialLink = "www.figma.com/proto/CwgkAcI3NYKq0mP9Yjh9GS/Tutorial-%238-Proj?type=design&node-id=2-2&t=I38otP2agRIg3Nue-0&scaling=min-zoom&page-id=0%3A1"
const christinaLink = "cwodtke.com/"
const geLink = "en.wikipedia.org/wiki/Ge_Wang"
const oxLink = "bosp.stanford.edu/explore-programs/oxford"
const csALink = "web.stanford.edu/class/cs106a/"
const csBLink = "web.stanford.edu/class/cs106b/"

// const revSrSynthLink = "docs.google.com/document/d/1zUFHwtlI62b57Bbl3nG1kZHPyaAIkLVnYmn7B2_WKXE/edit?usp=sharing"
const NC = { "cards": [
    
    { "title": "Studying Abroad at Oxford",
        "description": "I was abroad at Oxford University when applying for Stanford's VPUE Major Grant. I knew I wanted to do a project on Fractal Gridding, a visual thinking methodology which I'm super passionate about.",
        "buttons": [
            { "name": "The Major Grant", 
                "link": majorGrantInfoLink
            },
               { "name": "BOSP Oxford", 
                "link": oxLink
            }
        ],
        // maybe I can uplaod a playable version
        "image": TravelImage,
    },

        { "title": "Initial Ideas",
        "description": "Two weeks before the deadline, I started writing a grant for a Visual Thinking and Fractal Gridding creative toolkit. But things felt vague and I couldn't come up with a concrete plan let alone a whole grant proposal.",
        "buttons": [
            { "name": "The Original, Abandoned Grant", 
                "link": oldSrSynthLink
            }
        ],
        "image": InitIdeasImage,
    },

        { "title": "Epiphany",
        "description": "I then pivoted. Brainstorming ideas combining teaching Computer Science (CS), Fractal Gridding, doodling, and learning psychology, I decided to create a comic for Stanford's Intro CS classes, CS106A and CS106B.",
        "buttons": [
            { "name": "CS106A", 
                "link": csALink
            },
             { "name": "CS106B", 
                "link": csBLink
            }
        ],
        "image": EpiphanyImage,
    },


    // button: potentially links to bit by bit poster prez i did for my oxford tutorial 
    { "title": "A 9 Day Sprint",
        "description": 'Nine days before the grant was due, I restarted it. I had to create a new literature review, 10-week timeline, and budget. I wrote to my Oxford tutor: "It\'s a wee bit against the odds, but I\'m just going to do my best!"',
        "buttons": [
             { "name": "Tutorial Prototype Poster", 
                "link": tutorialLink
            }
        
        ],
        "image": SprintImage,
    },

        { "title": "Submitted!",
        "description": "I spent many late nights and early mornings awake in England, working against the clock as others were asleep in the Stanford House. Passion drove me, I now had a clear vision, and on the day of the deadline I submitted it.",
        "buttons": [
                { "name": "The Initial Proposal", 
                "link": srSynthLink
            }
           
        ],
        "image": PosterImage,

        }   ,

          { "title": "Pending Resubmission",
        "description": "A month later back home in the States, I got an update. My grant was Pending Resubmission. I told my academic advisor and he said 'Congrats!'. I needed to just carefully revise and resubmit, but had a good chance.",
        "buttons": [
            // { "name": "Grant Proposal Video Tips",  // i dunno whether this can publsih bc has faculty comments.... 
            //     "link": "www.youtube.com/watch?v=0YF48DfU6HY"
            // }
        ],
        "image": ResubImage,

        }   ,

        { "title": "Concerns...",
        "description": "Faculty noted concerns about the time needed to do a full comic and my lack of an artistic professor mentor. I struggled to find an available mentor, but in the end had the INCREDIBLE Christina Wodtke and Ge Wang.",
        "buttons": [
            { "name": "About Christina",  // i dunno whether this can publsih bc has faculty comments.... 
            // I'd have to black things out LOL 
                "link": christinaLink
            },
            { "name": "About Ge",  // i dunno whether this can publsih bc has faculty comments.... 
            // I'd have to black things out LOL 
                "link": geLink
            },
        ],
        "image": ConcernImage,

        }   ,

        { "title": "The End... of One ERA",
        "description": "In May, a month after that stressful ordeal (and still unsure about summer plans), my Bit by Bit grant got accepted and I was to be funded. I was ecstatic. I sent my thank yous. But the journey wasn't over. It had just begun.",
        "buttons": [
            { "name": "The Thanks",  // i dunno whether this can publsih bc has faculty comments.... 
            // I'd have to black things out LOL 
                "link": "drive.usercontent.google.com/download?id=1IyFnkOoXrRcK1WoLT3l3rZEzxNu5ad5A&authuser=0"
            }
        ],
        // put link to larger thanks
        "image": ThanksImage,

        }   ,


]
}


export { NC }