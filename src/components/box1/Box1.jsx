import React from 'react';
import "./box1.css"

function Box1() {
  return (
    <>
    <div id="box-1">
            <form action="post" id="form-1">
                <div class="op">
                    <label for="op">
                        Op Number:
                    </label>
                    <input type="text" name="opNum" id="opNum" />
                </div>
                
                <div class="age">
                    <label for="age">Age:</label>
                    <input type="text" name="age" id="age" />
                </div>
                

                <div class="gender">
                    <label for="Gender">Gender:</label>
                    <select name="Gender" id="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>
                    
                </div>
                
                <div class="si">
                    <label for="si" >Systemic Illness:</label>
                    <select name="si" id="si">
                        <option value="None">None</option>
                        <option value="Diabetes">Diabetes</option>
                        <option value="Hypertension">Hypertension</option>
                        <option value="Hypotension">Hypotension</option>
                        <option value="Thyroid">Thyroid</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div class="hca">
                    <label for="hca" >HCA:</label>
                    <input type="text" name="hca" id="hca" />

                </div>
            </form>
        </div>
        </>
  )
}

export default Box1;