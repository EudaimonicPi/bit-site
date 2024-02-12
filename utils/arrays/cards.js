import CardComponent from '@/components/cards/cardComponent'
import { genCardJSON } from '../data/genCardJSON'

// TO DO: standardize size of image!
//TO DO: in card component edit buttons and links

function getCardComponents(cellId) {
    const infoArr = genCardJSON(cellId) // get JSON based on cellID

    let cardComponents = []
    //for each create card appt to array
    for (let i = 0; i < infoArr.length; i++) {
        const cardInfo = infoArr[i] //curr card info LOL
        
        const card =
            <CardComponent
                img={cardInfo["image"]}
                heading={cardInfo["title"]}
                description={cardInfo["description"]}
                buttonInfo={cardInfo["buttons"]} // TO DO: replace but infra not in yet
            />
        cardComponents.push(card)
    }
    return cardComponents
}
  export { getCardComponents }
