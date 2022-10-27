import React, { useState } from 'react'
// import OperatorLogic from './OperatorLogic'
// import Buttons from './Buttons.js

const Calculator = () => {
    // Declare state variables
    // let state = {
    //     result: ' ',
    //     num1: ' ',
    //     num2: ' ',
    //     operator: ' '
    // }
    let [result, setResult] = useState('')
    let [num1, setNum1] = useState('')
    let [num2, setNum2] = useState('')
    let [operator, setOperator] = useState('')

    // this is for the onClick events for each button
    ////////////////////////////////////////////////

    const handleInput = (e) => {
        if (e.target.value !== '0' || num1 !== '') {
            setNum1(num1 + e.target.value)
            // console.log('this was clicked')
        }
     
    }

    // Operator Logic
    const calculateOperations = (e) => {
        e.preventDefault()
        
        if (isNaN(num1) || isNaN(num2)) 
            return 
                switch (this.operation) {
                case '+':
                    result = num1 + num2
                    break
                case '-':
                    result = num1 - num2
                    break
                case '*':
                    result = num1 * num2
                    break
                case '÷':
                    result = num1 / num2
                    break
                default:
            return
        }
      }


      // Equation equals
    //   const calculateOperations = () => {
    //        // the equation psedo-code
    //     // let answer = this.compute
    //     // setState(() => {
    //     //     return {
    //     //         result: this.compute
    //     //     }
    //     // })

    // }


    // psuedo code
    // handleInput = (e) => {
    //     let value1 = e.target.value
    //     let value2 = e.target.value
    //     let operator = e.target.value
    //     this.setState(() => {
    //         return {
    //             result: (value1, operator, value2)
    //             // set up if statements for different operators
    //         }
    //     })
        
    // }

    // calculateOperations = () => {
    //     this.setState({
    //         result: (eval(this.state.result) || "" ) + ""
    //     })
    // }



    // handleInput = e => {
    //     const value = e.target.getAttribute('value')
    //     switch (value) {
    //       case 'clear':
    //         this.setState({
    //           operations: [],
    //         })
    //         break
    //       case 'equal':
    //         this.calculateOperations()
    //         break
    //       default:
    //         const newOperations = update(this.state.operations, {
    //           $push: [value],
    //         })
    //         this.setState({
    //           operations: newOperations,
    //         })
    //         break
    //     }
    // }


    // calculateOperations = () => {
    //     let result = this.state.operations.join('')
    //     if (result) {
    //       result = math.eval(result)
    //       result = math.format(result, { precision: 14 })
    //       result = String(result)
    //       this.setState({
    //         operations: [result],
    //       })
    //     }
    //   }

    const handleClear = () => {
        setResult('0')
        setNum1('')
        setNum2('')
        setOperator('')
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{result}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={handleClear} name="C" value=" ">AC</button>
                    <button className="calc-button calc-button-top" onClick={handleInput} name="+/-" value="+/-">+/-</button>
                    <button className="calc-button calc-button-top" onClick={handleInput} name="%" value="%">%</button>
                    <button className="calc-button calc-button-op" onClick={handleInput} name="/" value="/">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={handleInput} name="7" value={7}>7</button>
                    <button className="calc-button" onClick={handleInput} name="8" value="8">8</button>
                    <button className="calc-button" onClick={handleInput} name="9" value="9">9</button>
                    <button className="calc-button calc-button-op" onClick={handleInput} name="x" value="*">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={handleInput} name="4" value="4">4</button>
                    <button className="calc-button" onClick={handleInput} name="5" value="5">5</button>
                    <button className="calc-button" onClick={handleInput} name="6" value="6">6</button>
                    <button className="calc-button calc-button-op" onClick={handleInput} label="-" value="-">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={handleInput} name="1" value="1">1</button>
                    <button className="calc-button" onClick={handleInput} name="2" value="2">2</button>
                    <button className="calc-button" onClick={handleInput} name="3" value="3">3</button>
                    <button className="calc-button calc-button-op" onClick={handleInput} name="+" value="+">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={handleInput} label="0" value="0">0</button>
                    <button className="calc-button" onClick={handleInput} label="." value=".">.</button>
                    <button className="calc-button calc-button-op" onClick={calculateOperations} label="=" value="equal">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator