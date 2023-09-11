import React from 'react'
import "./box5.css"

function Box5() {
  return (
    <>
     <div id="box-5">

        <div><h2>Recommendation</h2></div>

        <form action="" method="post" id='box5Form'>

            <div>
                <input type="checkbox" name="audioEval" id="audEv" />
                <label for="audioEval"> Audio Evaluation</label>
            </div>

            <div>
                <input type="checkbox" name="followup" id="followup" />
                <label for="followup"> Follow Up</label>
            </div>

            <div id='followupText'>
                <input type="text" name="followup" id="ipFollow" />
            </div>

            
        </form>

     </div>
    </>
  )
}

export default Box5