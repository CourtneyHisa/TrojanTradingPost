import ItemCard from "~/components/ItemCard"
import { useCallback, useState } from "react";
import Navbar from "~/components/Navbar";

export default function product() {

    const [layout, setLayout] = useState(0);
    const nextLayout = useCallback(() => setLayout(state => state+1), setLayout)
    const itemLayout = "column-" + layout.toString()
    return (
        <>
        <Navbar />
        <button onClick={nextLayout}>Change Layout {layout}</button>
        <div className={itemLayout}>
            {itemLayout}
        <ItemCard />
        <ItemCard />
        <ItemCard />
        </div>
        
        </>
    )
}
// const { useState, useCallback } = React;

// const mod = (n, m) => ((n % m) + m) % m;

// function App({ names }) {
//   const [index, setIndex] = useState(0);

//   const forwards = useCallback(() => 
//     setIndex(state => mod(state + 1, names.length))
//   , [setIndex, names]);
  
//   const backwards = useCallback(() => 
//     setIndex(state => mod(state - 1, names.length))
//   , [setIndex, names]);

//   return (
//     <div className="App">
//       <h1>{names[index].name}</h1>
//       <button onClick={backwards}>Backwards</button>
//       <button onClick={forwards}>Forwards</button>
//     </div>
//   );
// }

// const data = {"names":[{"name":"Jordan"},{"name":"Holly"},{"name":"Sean"}]};

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App {...data} />, rootElement);