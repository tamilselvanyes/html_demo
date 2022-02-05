import { useState } from 'react';


export function AddColor() {
    const [color, setColor] = useState("white");
    const styles = { background: color }


    const [colorList, setColorList] = useState(["crimson", "orange"]);

    return (

        <div>
            <input
                value={color}
                style={styles}
                onChange={(event) => setColor(event.target.value)}
                placeholder="Enter a color" />

            <button className="btn btn-success" onClick={() => setColorList([...colorList, color])}>Add color</button>

            {console.log(colorList)}
            {colorList.map((clr, index) =>  <ColorBox color={clr} key={index} /> 

            )}
        </div>
    );

}

function ColorBox ({color}){
    console.log(color);
    const styles = { backgroundColor: color,
    height:"100px" , 
    width:"300px",
}
    return (
        <div className="color-box" style ={styles}></div>
    )
}
