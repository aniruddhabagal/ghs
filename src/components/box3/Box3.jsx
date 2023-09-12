import React from 'react'
import "./box3.css"

function Box3() {
  return (
    <>

        <div id="box-3">
            <div><h2>Screening</h2></div>

            <div id='subhead'>
                <div className='leftRight'><h3>Right</h3></div>
                <div className='leftRight'><h3>Left</h3></div>
            </div>
            
            <form action="" method="post" id='box3Form'>

                <div className='row'>
                    <div id='1'>
                        <label for="500hz">
                            500Hz
                        </label>
                        <input type="text" name="500hz" id="500hz" />
                        
                    </div>
                    <div id="2">
                    <label for="500hz">
                            500Hz
                        </label>
                        <input type="text" name="500hz" id="500hz" />
                    </div>
                </div>

                <div className='row'>
                    <div id='3'>
                        <label for="1khz">
                        1KHz
                        </label>
                        <input type="text" name="1khz" id="1khz" />
                        
                    </div>
                    <div id="4">
                    <label for="1khz">
                        1KHz
                        </label>
                        <input type="text" name="1khz" id="1khz" />
                    </div>
                </div>

                <div className='row'>
                    <div id='5'>
                    <label for="2khz">
                        2KHz
                        </label>
                        <input type="text" name="2khz" id="2khz" />
                        
                    </div>
                    <div id="6">
                    <label for="2khz">
                        2KHz
                        </label>
                        <input type="text" name="2khz" id="2khz" />
                    </div>
                </div>

                <div className='row'>
                    <div id='7'>
                    <label for="4khz">
                        4KHz
                        </label>
                        <input type="text" name="4khz" id="4khz" />
                        
                    </div>
                    <div id="8">
                    <label for="4khz">
                        4KHz
                        </label>
                        <input type="text" name="4khz" id="4khz" />
                    </div>
                </div>

                
            </form>

        </div>
    </>
  )
}

export default Box3