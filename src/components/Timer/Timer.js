import React, {useState, useEffect, useContext} from 'react';
import { TimerContext } from '../../context/Timer';
import Title from '../Title/Title';
import  './Timer.css';

const Timer =  () => {
    let { value, setValue } = useContext(TimerContext);
    const [input, setInput] = useState(0);
    let tick;

    useEffect (() =>{
        decrement();
    })
    
    const decrement = () => {
        tick = setTimeout(() => {
            setValue(value-1)
            
        }, 1000);
        if(value <= 0){
            clearTimeout(tick);
        }
    }

    const handleInput = (event) => {
        setInput(event.target.value);
    }
    const handleStart = () => {
        if(
            //input.match(/[^0-9]/) !== false && 
            input > 0
        )
        {
            setValue(input);
            setInput(0);
            decrement();
        }
        else{
            alert('Valor inválido!');
        }
    }

    const handleStop = () => {
        clearTimeout(tick);
        setValue(0);
    }

    const convertTime = (value) => {
       let sec_num = parseInt(value, 10)
       let hours   = Math.floor(sec_num / 3600)
       let minutes = Math.floor(sec_num / 60) % 60
       let seconds = sec_num % 60
   
       return [hours,minutes,seconds]
           .map(v => v < 10 ? "0" + v : v)
           .filter((v,i) => v !== "00" || i > 0)
           .join(":")
    }

    return (
        <div id="timer">

                <Title/>
                
                {   
                    value > 0 ?
                    (<div>
                            <p> <input type="text" name="value" value={convertTime(value)} disabled /> </p>
                           <div className="position"> <button onClick={handleStop}>Reset</button> </div>
                        </div>) :
                    (<div>
                            <p> <input type="text" name="timer" value={input} onChange={handleInput} /> </p>
                           <div className="position"> <button onClick={handleStart}>Start</button> </div>
                        </div> )
                }
            
        </div>
    );
}   

export default Timer;