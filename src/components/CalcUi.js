import { useState } from 'react'
import "./CalcUi.css";

function CalcUi() {
    const [screenValue, setScreenValue] = useState('')
    function updateValueScreen(e) {
        setScreenValue(screenValue + e.target.value)
    }
    function allClear() {
        setScreenValue('')
    }
    function charDelete() {
        setScreenValue(screenValue.slice(0, -1))
    }
    function getResult() {
        setScreenValue(eval(screenValue))

    }
    return (
        <div className='calc-container'>

            <div>
                <input className='screen' value={screenValue} />
            </div>
            <div className='btn-container'>
                <div>
                    <input
                        type='button' value={"7"} className='btn-calc'
                        onClick={updateValueScreen}
                    />

                    <input
                        type='button' value={"8"} className='btn-calc'
                        onClick={updateValueScreen}
                    />

                    <input
                        type='button' value={"9"} className='btn-calc'
                        onClick={updateValueScreen}
                    />

                    <input
                        type='button' value={"AC"} className='btn-calc'
                        onClick={allClear}
                    />

                    <input
                        type='button' value={"C"} className='btn-calc'
                        onClick={charDelete}
                    />

                </div>

                <div>
                    <input
                        type='button' value={"4"} className='btn-calc'
                        onClick={updateValueScreen}
                    />

                    <input
                        type='button' value={"5"} className='btn-calc'
                        onClick={updateValueScreen}
                    />

                    <input
                        type='button' value={"6"} className='btn-calc'
                        onClick={updateValueScreen}
                    />

                    <input
                        type='button' value={"+"} className='btn-calc'
                        onClick={updateValueScreen}
                    />

                    <input
                        type='button' value={"-"} className='btn-calc'
                        onClick={updateValueScreen}
                    />

                </div>

                <div>
                    <input
                        type='button' value={"1"} className='btn-calc'
                        onClick={updateValueScreen}
                    />

                    <input
                        type='button' value={"2"} className='btn-calc'
                        onClick={updateValueScreen}
                    />

                    <input
                        type='button' value={"3"} className='btn-calc'
                        onClick={updateValueScreen}
                    />

                    <input
                        type='button' value={"*"} className='btn-calc'
                        onClick={updateValueScreen}
                    />

                    <input
                        type='button' value={"/"} className='btn-calc'
                        onClick={updateValueScreen}
                    />

                </div>

                <div>
                    <input
                        type='button' value={"00"} className='btn-calc'
                        onClick={updateValueScreen}
                    />

                    <input
                        type='button' value={"0"} className='btn-calc'
                        onClick={updateValueScreen}
                    />

                    <input
                        type='button' value={"."} className='btn-calc'
                        onClick={updateValueScreen}
                    />

                    <input
                        type='button' value={"000"} className='btn-calc'
                        onClick={updateValueScreen}
                    />

                    <input
                        type='button' value={"="} className='btn-calc'
                        onClick={getResult}
                    />

                </div>
            </div>

        </div>
    )
}

export default CalcUi;