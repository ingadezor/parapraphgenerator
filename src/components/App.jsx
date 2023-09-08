import React from 'react'
import data from "../../data"



function App() {
  const [count, setCount] = React.useState(1);
  const [text, setText] = React.useState([]);

  function handleSubmit(e){
    e.preventDefault();

    let newArr = [];
    for(let i=0; i<parseInt(count); i++){
      newArr.push(data[i]);
    }

    setText(newArr);
    //console.log(newArr);
  }





    return <div className="section-center">
        <h4>Let's generate some paragraphs!</h4>

        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="paragraphCount"> # of paragraphs:</label>
          <input type="number" onChange={(e)=>{setCount(e.target.value)}} min="1" max="8" id="paragraphCount" value={count}></input>


          <button type="submit" className="btn">Go</button>
        </form>

        {/* rendering text */}
        <div className="lorem-text">
          {
            text.map( (paragraph, index)=>{
              return <p key={index}>{paragraph}</p>
            })
          }
        </div>
      </div>
    
  
}

export default App
