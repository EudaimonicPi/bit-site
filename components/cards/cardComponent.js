import './cardmodule.css';
// TO DO: standardize size of image!
//TO DO: in card component edit buttons and links

function createButton(button) {
     const buttonComponent = 
    //  <div>
                 <a href= {"//" + button["link"]} target = "_blank" >
                <button className="cardButton" style={{margin: '2px'}}>
                    {button["name"]}
                </button>
            </a>

    //  </div>
    

    return buttonComponent
}
// function createButtons(buttons) {
//     return 
// }

export default function CardComponent (props) {
    // const [heading, description, buttonText] = props

    const heading = props.heading
    const description = props.description
//     console.log(props.buttonText)

    const buttons = props.buttonInfo 
    const button1 = buttons[0] // figure out multiple buttons
    const img = props.img.src //have to src based on how i imported
 
    return (
     <div className="cardContainer">
          <img src={img} className="cardPhoto"/>
          <div className="cardContent">
            <h2 className="cardHeading"><b>{heading}</b></h2>
            <p className="cardDescription">{description}</p>
                <div style={{ margin: '2%', flex: '1', display: 'flex', justifyContent:'flex-start'}}>
                        <span>
                            {buttons.map((button) => createButton(button))}
                        </span>
                </div>
          </div>
     </div>
    )
}