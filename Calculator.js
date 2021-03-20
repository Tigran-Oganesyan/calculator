import React, { useState } from 'react';
import './calc.css';

function Calculitor() {
  const [curNum, setCurNum] = useState('');
    const[prevNum, setPrevNum] = useState('');
    const[res, setRes] = useState('');
    const[oper, setOper] = useState('')


    const nums = [7,8,9,4,5,6,1,2,3,'00',0,'.'];

    // const Plus = (curNum, prevNum) => {
    //     setRes(+curNum + (+prevNum))
    // }

    // const Delete = (curNum, prevNum) => {
    //     setRes((+prevNum)/(+curNum))
    // }

    // const Multi = (curNum, prevNum) => {
    //     setRes(+curNum * (+prevNum))
    // }

    // const Minus = (curNum,prevNum) =>{
    //     setRes((+prevNum) - (+curNum))
    // }
    const operatorToFunction = {
        '+': () => +curNum + (+prevNum),
        '-': () => (+prevNum) - (+curNum),
        '/': () => (+prevNum)/(+curNum),
        '*': () => +curNum * (+prevNum),
    }

    return(
        <>
        <div className="display">
            <p className="result">{res}</p>
        </div>
        <div className="calc">
        <div className="Nums">
            {nums.map(num => (
                <button className="Num" onClick={() => setCurNum(curNum + num)}>{num}</button>
            ))}
        </div>
        <div className="Operators">
            <button className="oper" onClick={() => {
                if(res === ''){
                    setPrevNum(curNum);
                }
                else if(res > 0){
                    setPrevNum(res);
                }
                setCurNum('');
                setRes(+curNum + (+prevNum));
                setRes(+res);
                setOper('+')
            }}>+</button>
            <button key ='-' className="oper" onClick={() => {
                if(res === ''){
                    setPrevNum(curNum);
                }
                else if(res > 0){
                    setPrevNum(res);
                }
                setRes((+prevNum) - (+curNum));
                setCurNum('');
                setRes(-(+res));
                setOper('-')

            }}>-</button>
            <button className="oper" onClick={() =>{
                if(res === ''){
                setPrevNum(curNum);
                }
                else if(res > 0){
                setPrevNum(res);
                }
                setCurNum('');
                setOper('/')
            }}>/</button>
            <button className="oper" onClick={() =>{
                if(res === ''){
                    setPrevNum(curNum);
                }
                else if(res > 0){
                    setPrevNum(res);
                }

                setCurNum('');
                setOper('*')
            }}>*</button>
            <button className="oper" onClick={() => {
                // switch(oper){
                //     case '+':
                //         Plus(curNum, prevNum);
                //         break;
                //     case '-':
                //         Minus(curNum, prevNum);
                //         break;
                //     case '/':
                //         Delete(curNum, prevNum);
                //         break;
                //     case '*':
                //         Multi(curNum, prevNum);
                //         break;
                
                // }
                setRes(operatorToFunction[oper]());

                
                setCurNum('')
            }}>=</button>
            <button className="oper" onClick={() =>{
                setRes('')
                setCurNum('');
                setPrevNum('');
            }}>AC</button>
        </div>
        </div>
        </>
    )
   

}

export default Calculitor;