import { useState } from 'react'
import "./CalcUi.css";

function CalcUi() {
    return (
        <div>

            <div>
                <input className='screen' />
            </div>

            <div>
                <input
                    type='button' value={"7"} className='btn-calc'
                />

                <input
                    type='button' value={"8"} className='btn-calc'
                />

                <input
                    type='button' value={"9"} className='btn-calc'
                />

                <input
                    type='button' value={"AC"} className='btn-calc'
                />

                <input
                    type='button' value={"C"} className='btn-calc'
                />

            </div>

            <div>
                <input
                    type='button' value={"4"} className='btn-calc'
                />

                <input
                    type='button' value={"5"} className='btn-calc'
                />

                <input
                    type='button' value={"6"} className='btn-calc'
                />

                <input
                    type='button' value={"+"} className='btn-calc'
                />

                <input
                    type='button' value={"-"} className='btn-calc'
                />

            </div>

            <div>
                <input
                    type='button' value={"1"} className='btn-calc'
                />

                <input
                    type='button' value={"2"} className='btn-calc'
                />

                <input
                    type='button' value={"3"} className='btn-calc'
                />

                <input
                    type='button' value={"*"} className='btn-calc'
                />

                <input
                    type='button' value={"/"} className='btn-calc'
                />

            </div>

            <div>
                <input
                    type='button' value={"00"} className='btn-calc'
                />

                <input
                    type='button' value={"0"} className='btn-calc'
                />

                <input
                    type='button' value={"."} className='btn-calc'
                />

                <input
                    type='button' value={"()"} className='btn-calc'
                />

                <input
                    type='button' value={"="} className='btn-calc'
                />

            </div>

        </div>
    )
}

export default CalcUi;