function findLeftIdx(cardIdx, numCards) {
  const minIndex = 0
  const maxIndex = numCards - 1
  // if we're at the minimum wrap around to max 
  return cardIdx === minIndex? maxIndex: cardIdx - 1
}

function findRightIdx(cardIdx, numCards) {
  const minIndex = 0
  const maxIndex = numCards - 1
  // if we're at the maximum wrap around to min
  return cardIdx === maxIndex? minIndex : cardIdx + 1
}

function goLeft (cardIdx, setCardNum, numCards) {
  setCardNum(findLeftIdx(cardIdx, numCards))
}

function goRight (cardIdx, setCardNum, numCards) {
  setCardNum(findRightIdx(cardIdx, numCards))
}

// don't need this anymore!
function genCards(images, titles, descriptions, buttons) {
  const numCards = titles.length //length based on num titles
  let cardsInfo = []
  for (let i = 0; i < numCards; i++) {
     const card = { 
        image: images[i],
        title: titles[i],
        description: descriptions[i],
        button: buttons[i],
    }
    cardsInfo.push(card)
  }
  return cardsInfo
}

function genCard(image, title, description, button) { //eventually buttons
    const card = {
        image,
        title,
        description,
        button,
    }
    return card; 
}

// will have to have linkes & name :) 
// this will have to be modified maybe? or will have to create one that deals wih mlultiple buttons 
function createBtnObj(name, link, color="#8c1515") {
    return {name, link, color}
}


export { goLeft, goRight, genCards, genCard, createBtnObj }