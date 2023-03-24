import React, { useState } from "react";
import "../App.css";



const BasicCalculator = () => {

   
    const [display, setDisplay] = useState("0");
    const [operator, setOperator] = useState(null);
    const [firstOperand, setFirstOperand] = useState(null);
    const [isResult, setIsResult] = useState(false);


    const clr = () => {
        setDisplay("0");
        setOperator(null);
        setFirstOperand(null);
    }
    const dec = () => {
        if (display.indexOf(".") === -1) {
            setDisplay(display + ".");
        }
    }
    const eq = (firstOperand, secondOperand, operator, display) => {
        let result = 0;
        switch (operator) {
            case "add":
                result = firstOperand + secondOperand;
                break;
            case "sub":
                result = firstOperand - secondOperand;
                break;
            case "mul":
                result = firstOperand * secondOperand;
                break;
            case "div":
                result = firstOperand / secondOperand;
                break;
            default:
                break;
        }
        setIsResult(true);
        setDisplay(result.toString());
        setOperator(null);
        setFirstOperand(result.toString());
    }

    const handleNumber = (number) => {
        if (isResult || display === "0") {
            setDisplay(number.toString());
            if (isResult)
                setIsResult(false);
        } else {
            setDisplay(display + number.toString());
        }
    }
    const handleOperation = (operation) => {
        switch (operation) {
            case "add":
                setOperator("add");
                setFirstOperand(parseFloat(display));
                setDisplay("0");
                break;
            case "sub":
                setOperator("sub");
                setFirstOperand(parseFloat(display));
                setDisplay("0");
                break;
            case "mul":
                setOperator("mul");
                setFirstOperand(parseFloat(display));
                setDisplay("0");
                break;
            case "div":
                setOperator("div");
                setFirstOperand(parseFloat(display));
                setDisplay("0");
                break;
            case "clr":
                clr();
                break;
            case "dec":
                dec();
                break;
            case "eq":
                let secondOperand = parseFloat(display);
                eq(firstOperand, secondOperand, operator, display);
                break;
            default:
                break;
        }
    }

    return (
        <div>
           
            <div className="calculator-container">
                <h1 className="calculator-header">Basic Calculator</h1>

                <div className="calculator-display">
                    <p>{display}</p>
                </div>
                <div className="calculator-keypad">
                    <div className="input-keys">
                        <div>
                            <button onClick={() => handleNumber(9)}>9</button>
                        </div>
                        <div>
                            <button onClick={() => handleNumber(8)}>8</button>
                        </div>
                        <div>
                            <button onClick={() => handleNumber(7)}>7</button>
                        </div>
                        <div>
                            <button onClick={() => handleOperation('div')}>/</button>
                        </div>
                    </div>
                    <div className="input-keys">
                        <div>
                            <button onClick={() => handleNumber(6)}>6</button>
                        </div>
                        <div>
                            <button onClick={() => handleNumber(5)}>5</button>
                        </div>
                        <div>
                            <button onClick={() => handleNumber(4)}>4</button>
                        </div>
                        <div>
                            <button onClick={() => handleOperation('mul')}>*</button>
                        </div>
                    </div>
                    <div className="input-keys">
                        <div>
                            <button onClick={() => handleNumber(3)}>3</button>
                        </div>
                        <div>
                            <button onClick={() => handleNumber(2)}>2</button>
                        </div>
                        <div>
                            <button onClick={() => handleNumber(1)}>1</button>
                        </div>
                        <div>
                            <button onClick={() => handleOperation('sub')}>-</button>
                        </div>
                    </div>
                    <div className="input-keys">
                        <div>
                            <button onClick={() => handleOperation('clr')}>clr</button>
                        </div>
                        <div>
                            <button onClick={() => handleOperation('dec')}>.</button>
                        </div>
                        <div>
                            <button onClick={() => handleOperation('eq')}>=</button>
                        </div>
                        <div>
                            <button onClick={() => handleOperation('add')}>+</button>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default BasicCalculator;