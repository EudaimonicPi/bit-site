
'use client'
import getCellColor from '@/styles/getColor'
/* Component that represents how a cell shows up on screen */
import getL0Style from '@/styles/getL0Style'
import testArr from '@/utils/arrays/testArr'


function getCellInfo(cellId) {
    //maybe it gets the info and uses that to render a cell thing
    //info is img + description for cellView
    
    return testArr[cellId]    
}

function renderCell(cellId) {
    const cellInfo = getCellInfo(cellId)
    return (
    <div style={getL0Style(cellId)}>
        <div>
            {/* dim array might be to blame.. */}
            <img src={cellInfo.img.src}
             style={{width: '100%',
                    }}/>
        </div>
        <p>{cellInfo.description}</p>
    </div>)

}

export default function CellView(props) {
    const cellId = props.cellId

    return (
        <div  onClick={() => props.onClick()}  >
            <div style={{backgroundColor: getCellColor(cellId), padding: '6px', border: '1px black solid'}}>
            { renderCell(cellId)}

            </div>
        </div>
    );
}
