import React from 'react'
import "./box5.css"

function Box5() {
  return (
    <>

    <h2 id='box5Header'>Recommendation</h2>
     <div id="box-5">

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
                <input type="text" name="followup" placeholder='Follow Up' id="ipFollow" />
            </div>

            
        </form>

     </div>
    </>
  )
}

export default Box5