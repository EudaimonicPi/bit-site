import { jsonMappings } from '@/data/jsons/jsonMappings'
import PlaceHolder from '@/data/rawImages/tbd.jpeg'

// TO DO: remove NW
function genCardJSON(cellID) { //cellId is param
    // oh this will be beautiful!!!
    const rawJSON = jsonMappings[cellID]
    const rawJSONCards = rawJSON["cards"]

    // based on planet would retrieve differnt image and different card! 
    for (let i = 0; i < rawJSONCards.length; i++ ) {
        if (rawJSONCards[i].image === undefined) {
            rawJSONCards[i].image = PlaceHolder
        }
    } 
    return rawJSONCards
}

export { genCardJSON }

