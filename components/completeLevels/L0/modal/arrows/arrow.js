import '../cardStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


function LeftArrow(handleLeftArrowClick) {
        const leftarrow = 
            <div className="arrow left" 
                onClick={handleLeftArrowClick}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </div>
        return leftarrow
    }

function RightArrow(handleRightArrowClick) {
    const rightarrow = 
        <div className="arrow right" 
            onClick={handleRightArrowClick}>
                <FontAwesomeIcon icon={faArrowRight} />
        </div>
    return rightarrow
}

export {LeftArrow, RightArrow}