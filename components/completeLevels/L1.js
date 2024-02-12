import L0 from "./L0";
// import "@/styles/levels.css";

const DIR_ARR = ["NW", "NC", "NE", "CW", "CC", "CE", "SW", "SC", "SE"];

// // TO DO: export
function genL1() {
  // cellIds generated here!!!
  let arr = [];
  for (let i = 0; i < 9; i++) {
    const elem = (
      <L0 key={i} cellId={DIR_ARR[i]} 
      style={{ 
        // height: '100%'
      }}/>
    );
    arr.push(elem);
  }
  return arr;
}

export default function L1(props) {
  const styles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '0px',
    // border:'6px solid black', //border round L1
    // maxWidth: '100%'
    width: '75%' //controls width of whole L1
  }

  return (
    <div style={styles}> 
      {genL1()}
    </div>
  );
}
