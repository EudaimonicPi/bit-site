import { genCardJSON} from '@/utils/data/genCardJSON'
import { genCard, createBtnObj } from '@/utils/cardFns/cardFn' 

// given cellId generates the modal card deck 
function genDeck(cellId) {
    const cardArr = genCardJSON(cellId) 

    const cards = []
    // for info in json, converts it to actual card
    for (let i = 0; i < cardArr.length; i++ ) {
        const cardInfo = cardArr[i] 
        const buttons = cardInfo["buttons"]

        // TO DO: figure out how to deal with MULTIPLE BUTTNOS
        const name = buttons[0]["name"]
        const link = buttons[0]["link"]
        //TO DO: figure out multiple butotns
        const card = genCard(cardInfo["image"], cardInfo["title"], cardInfo["description"],
            createBtnObj(name, link))

        cards.push(card)
    }
    // this has raw cards
    return cards
}

export {genDeck}