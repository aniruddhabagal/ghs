import React from 'react'
import "./box2.css"

function Box2() {
  return (
   <>
   <div id="box-2">

    <h2>MMSE</h2>
    <form action="" method="post">
    <div className="orientation">
                    <label for="orientation">
                        Orientation:
                    </label>
                    <input type="text" name="orientation" id="orientation" />
                </div>
                
                <div className="reg">
                    <label for="reg">Registration:</label>
                    <input type="text" name="reg" id="reg" />
                </div>
                

                <div className="attnCalc">
                    <label for="attnCalc">Attention & Calculation:</label>
                   
                    <input type="text" name="attnCalc" id="attn" />
                    
                </div>
                
                <div className="recall">
                    <label for="recall" >Recall:</label>
                    <input type="text" name="recall" id="recall" />
                </div>

                <div className="language">
                    <label for="language" >Language:</label>
                    <input type="text" name="language" id="lang" />

                </div>

                <div className="total">
                <label for="total" >Total:</label>
                <span>0</span>
                </div>
    </form>
   </div>
   </>
  )
}

export default Box2;