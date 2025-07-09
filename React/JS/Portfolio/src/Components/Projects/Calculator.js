import React from 'react'
import './CalculatorCSS.css'
export default function Calculator() {
    let calcScreen = document.getElementById('calcScreen');
    let ansScreen = document.getElementById('ansScreen');
    let allElements = document.querySelectorAll('.calcElement');
    // let calc_Screen_NewValue = "";
    let calc_Screen_CurrentValue = "";
    let calc_Temp_Value = "";
    const listOfOperators = ["+", "-", "*", "/", "%"]; //creating array of operators
    // const list_of_LowerPrecedence_Operators = ["+", "-"]
    // const list_Of_HigerPrecedence_Operators = ["*", "/", "%"];
    const listOfActions = ["AC", "C", "="]; //actions array
    const listOfDigits = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];//digits array

    // const list_Of_Allowed_Keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", "%", "."];

    allElements.forEach(element => {
        element.addEventListener('click', (event) => {  //addEventlistener works on single node only not works directly in nodelist
            let clicked_element = event.target; // storing targeting/selecting clicked element 
            let pressed_key = clicked_element.innerText;
            if (calc_Screen_CurrentValue.length == 0) {
                if ((listOfDigits.includes(pressed_key) || pressed_key == "-" || pressed_key == "0")) {
                    calc_Screen_CurrentValue += pressed_key;
                    calc_Temp_Value += pressed_key;
                }
            }
            else if (calc_Screen_CurrentValue.length > 0) {
                if (listOfDigits.includes(pressed_key)) {
                    calc_Screen_CurrentValue += pressed_key;
                    calc_Temp_Value += pressed_key;
                }

                else if (pressed_key === "-" && calc_Screen_CurrentValue[calc_Screen_CurrentValue.length - 1] != "+") {
                    if (calc_Screen_CurrentValue[calc_Screen_CurrentValue.length - 1] != "-") {
                        calc_Screen_CurrentValue += pressed_key;
                    }

                }
                else if ((listOfOperators.includes(pressed_key)) && (listOfDigits.includes(calc_Screen_CurrentValue[calc_Screen_CurrentValue.length - 1]) || calc_Screen_CurrentValue[calc_Screen_CurrentValue.length - 1] == "0")) {
                    // if(pressed_key=="."&&)
                    if (pressed_key !== "0") {
                        calc_Screen_CurrentValue += pressed_key;
                    }

                }


            }

            if (pressed_key == ".") {
                // console.log("code is here ")
                let index = calc_Screen_CurrentValue.length - 1;
                if (calc_Screen_CurrentValue.length == 0 || listOfOperators.includes(calc_Screen_CurrentValue[calc_Screen_CurrentValue.length - 1])) {
                    // console.log("if works")
                    calc_Screen_CurrentValue += "0."
                }

                else if (listOfDigits.includes(calc_Screen_CurrentValue[calc_Screen_CurrentValue.length - 1]) || calc_Screen_CurrentValue[calc_Screen_CurrentValue.length - 1] == "0") {
                    while (index >= 0) {

                        if (listOfOperators.includes(calc_Screen_CurrentValue[index])) {
                            calc_Screen_CurrentValue += pressed_key;
                            alert("operator occurance")
                            break;
                        }
                        else if (calc_Screen_CurrentValue[index] == pressed_key) {
                            //decimal occurance
                            // console.log("does it excute: ", index, " : ", calc_Screen_CurrentValue)
                            alert("not okay");
                            break;

                        }
                        else if (!isNaN(calc_Screen_CurrentValue)) {//if screen doesn't have operator
                            if (Array.from(calc_Screen_CurrentValue).includes(pressed_key)) {
                                alert("okay")
                                break
                            }
                            else { //if screen doesn't have operator
                        
                                calc_Screen_CurrentValue += pressed_key;
                                alert("jgjguyguyg")
                                break
                            }

                        }

                        index--;

                    }
                }
            }

            if (pressed_key === "0" || pressed_key == "00") {
                let index = calc_Screen_CurrentValue.length - 1;
                if (listOfOperators.includes(calc_Screen_CurrentValue[calc_Screen_CurrentValue.length - 1])) {
                    calc_Screen_CurrentValue += pressed_key;
                }
                else {
                    // console.log("is code here else")
                    while (index >= 0) {
                        if (listOfOperators.includes(calc_Screen_CurrentValue[index])) {
                            break;
                        }
                        else if (listOfDigits.includes(calc_Screen_CurrentValue[index]) || calc_Screen_CurrentValue[index] == ".") {
                            // console.log("digit if")
                            calc_Screen_CurrentValue += pressed_key;
                            break;
                        }
                        else if (!isNaN(calc_Screen_CurrentValue)) {
                            // console.log("inside Nan")
                            if (calc_Screen_CurrentValue == "0") {
                                // console.log("here too")
                                break;
                            }
                            else if (calc_Screen_CurrentValue != pressed_key) {
                                calc_Screen_CurrentValue += pressed_key;
                                break;
                            }

                        }

                        index--;
                    }
                }

            }
            if (pressed_key === "C") {
                let tempArr = Array.from(calc_Screen_CurrentValue);
                let newTempArr = Array.from(calc_Temp_Value);
                tempArr.pop();
                newTempArr.pop();
                // console.log(tempArr)
                console.log(newTempArr)
                let tempStr = tempArr.join("")
                let newtempStr = tempArr.join("")
                calc_Screen_CurrentValue = tempStr;
                calc_Temp_Value = newTempArr;
                // console.log("remove temp: ", calc_Screen_CurrentValue)
            }
            ////"====================="
            if (pressed_key === "=") {

                /*   Evaluation Code */

                //remove if last element is operator or decimal
                if (listOfOperators.includes(calc_Screen_CurrentValue[calc_Screen_CurrentValue.length - 1]) || calc_Screen_CurrentValue[calc_Screen_CurrentValue.length - 1] == ".") {
                    console.log("is enter wroking here")
                    let tempArr = Array.from(calc_Screen_CurrentValue);
                    tempArr.pop();
                    let tempStr = tempArr.join("")
                    calc_Screen_CurrentValue = tempStr;
                }
                let parseArray = Array.from(calc_Screen_CurrentValue);//for seprating operators and creating number
                let elementArray = [];
                let ele = "";
                // console.log("single: ",parseArray)
                for (let i = 0; i < parseArray.length; i++) {
                    if ((listOfDigits.includes(parseArray[i]) || parseArray[i] == "0") && (i == parseArray.length - 1)) {
                        ele += parseArray[i];
                        elementArray.push(ele);
                        // ele="";
                    }
                    if (listOfDigits.includes(parseArray[i]) || parseArray[i] == "0" || parseArray[i] == ".") {
                        ele += parseArray[i];
                    }
                    else if (listOfOperators.includes(parseArray[i])) {
                        elementArray.push(ele);
                        ele = "";
                        elementArray.push(parseArray[i])
                    }
                }
                elementArray.forEach((e, i) => { //removing empty char
                    if (!(isNaN(e)) && (e != "-") && e != "") {
                        elementArray[i] = parseFloat(e);
                    }

                    if (e == "-") {//- (index n ),1 (index n+1 ) will be -1(index n)
                        elementArray.splice(i, 2, elementArray[i + 1] * (-1))
                    }
                })

                elementArray.forEach((e, i) => { //removing empty char

                    if (e == "") {
                        elementArray.splice(i, 1);
                    }

                })

                console.log("this is element arr", elementArray)
                let evaluation_Array = [];
                let prev_value = 0;
                let current_value = 0;
                let temp = "";
                let current_operator = ""
                let previous_operator = ""
                let evaluation_index = 0;
                while (evaluation_index < elementArray.length) {
                    if (evaluation_index == 0) {
                        current_value = elementArray[0];
                        evaluation_Array.push(current_value);
                        evaluation_index = 1;
                    }
                    if (listOfOperators.includes(elementArray[evaluation_index]) && evaluation_index > 0) {
                        console.log("before ", evaluation_Array)
                        if (elementArray[evaluation_index] == "*") {
                            // console.log("is code here")
                            console.log(current_value, " * ", elementArray[evaluation_index + 1])
                            current_value *= elementArray[evaluation_index + 1];
                            evaluation_Array[evaluation_Array.length - 1] = current_value;
                            // console.log("b", evaluation_index);
                            evaluation_index = evaluation_index + 2;
                        }
                        if (elementArray[evaluation_index] == "/") {
                            console.log("/////")
                            current_value /= elementArray[evaluation_index + 1];
                            evaluation_Array[evaluation_Array.length - 1] = current_value;
                            evaluation_index = evaluation_index + 2;
                        }
                        if (elementArray[evaluation_index] == "%") {
                            if (elementArray[evaluation_index - 2] == "/") {
                                current_value = (current_value * elementArray[evaluation_index + 1]) * 100;
                                evaluation_Array[evaluation_Array.length - 1] = current_value;
                                evaluation_index = evaluation_index + 2;
                            }
                            else {
                                current_value = (current_value * elementArray[evaluation_index + 1]) / 100;
                                evaluation_Array[evaluation_Array.length - 1] = current_value;
                                evaluation_index = evaluation_index + 2;
                            }
                        }
                        if (elementArray[evaluation_index] == "+") {
                            evaluation_Array.push(elementArray[evaluation_index + 1]);
                            current_value = elementArray[evaluation_index + 1];
                            // evaluation_Array.splice(evaluation_Array[evaluation_Array.length-1,1,current_value]);

                            evaluation_index = evaluation_index + 2;
                        }
                        // evaluation_index++;
                    }
                    if (!isNaN(elementArray[evaluation_index - 1]) && (!isNaN(elementArray[evaluation_index])) && evaluation_index > 0) {
                        console.log("true minus")
                        current_value = elementArray[evaluation_index]
                        evaluation_Array.push(current_value);
                        evaluation_index++;
                    }
                    console.log(evaluation_Array)
                    console.log(evaluation_index)
                }
                //evaluation code ends here
                console.log(evaluation_Array)

                if (evaluation_Array.includes(NaN)) {
                    ansScreen.innerText = "Cannot Divide by 0"
                }
                else {
                    let result = 0; //intitiating result 
                    evaluation_Array.forEach(e => {
                        result += e;  //adding all the evalutated value
                    })
               
                if (Number.isInteger(result)) {
                    ansScreen.innerText = result.toLocaleString();//tolocaleSting for , in between numbers
                }
                else { //for decimal at 10digits
                    result = result.toFixed(10);
                        let resultStrArray = Array.from(result.toString());
                        let revserseIndex = resultStrArray.length - 1;
                        while (resultStrArray[revserseIndex] == "0") { //removing unecesaary zeros
                            resultStrArray.pop();
                            revserseIndex--;
                        }
                        result = parseFloat(resultStrArray.join(""));
                        ansScreen.innerText = result.toLocaleString();
                }
                }

            }//Enter key Action ends heres
            if (pressed_key === "AC") {
                calc_Screen_CurrentValue = "";
                ansScreen.innerText="";
            }
            ///==================

            calcScreen.innerText = calc_Screen_CurrentValue;
        })
    });
    document.addEventListener('keydown', (e) => {
        let pressed_key = e.key;
        if (calc_Screen_CurrentValue.length == 0) {

            if ((listOfDigits.includes(pressed_key) || pressed_key == "-" || pressed_key == "0")) {

                calc_Screen_CurrentValue += pressed_key;
                calc_Temp_Value += pressed_key;
            }

        }
        else if (calc_Screen_CurrentValue.length > 0) {
            if (listOfDigits.includes(pressed_key)) {
                calc_Screen_CurrentValue += pressed_key;
                calc_Temp_Value += pressed_key;
            }

            else if (pressed_key === "-" && calc_Screen_CurrentValue[calc_Screen_CurrentValue.length - 1] != "+") {
                if (calc_Screen_CurrentValue[calc_Screen_CurrentValue.length - 1] != "-") {
                    calc_Screen_CurrentValue += pressed_key;
                }

            }
            else if ((listOfOperators.includes(pressed_key)) && (listOfDigits.includes(calc_Screen_CurrentValue[calc_Screen_CurrentValue.length - 1]) || calc_Screen_CurrentValue[calc_Screen_CurrentValue.length - 1] == "0")) {
                // if(pressed_key=="."&&)
                if (pressed_key !== "0") {
                    calc_Screen_CurrentValue += pressed_key;
                }

            }
        }
        if (pressed_key === ".") {
            // console.log("code is here ")
            let index = calc_Screen_CurrentValue.length - 1;
            if (calc_Screen_CurrentValue.length == 0 || listOfOperators.includes(calc_Screen_CurrentValue[calc_Screen_CurrentValue.length - 1])) {
                // console.log("if works")
                calc_Screen_CurrentValue += "0."
            }

            else if (listOfDigits.includes(calc_Screen_CurrentValue[calc_Screen_CurrentValue.length - 1]) || calc_Screen_CurrentValue[calc_Screen_CurrentValue.length - 1] == "0") {
                while (index >= 0) {

                    if (listOfOperators.includes(calc_Screen_CurrentValue[index])) {
                        calc_Screen_CurrentValue += pressed_key;
                        break;
                    }
                    else if (calc_Screen_CurrentValue[index] == pressed_key) {
                        // console.log("does it excute: ", index, " : ", calc_Screen_CurrentValue)
                        break;

                    }
                    else if (!isNaN(calc_Screen_CurrentValue)) {
                        if (Array.from(calc_Screen_CurrentValue).includes(pressed_key)) {
                            break
                        }
                        else {
                            // console.log("number is ", calc_Screen_CurrentValue);
                            // console.log("or  it excute: ", index)
                            calc_Screen_CurrentValue += pressed_key;
                            break
                        }

                    }

                    index--;

                }
            }
        }
        if (pressed_key === "0") {
            let index = calc_Screen_CurrentValue.length - 1;
            if (listOfOperators.includes(calc_Screen_CurrentValue[calc_Screen_CurrentValue.length - 1])) {
                calc_Screen_CurrentValue += pressed_key;
            }
            else {
                // console.log("is code here else")
                while (index >= 0) {
                    if (listOfOperators.includes(calc_Screen_CurrentValue[index])) {
                        break;
                    }
                    else if (listOfDigits.includes(calc_Screen_CurrentValue[index]) || calc_Screen_CurrentValue[index] == ".") {
                        // console.log("digit if")
                        calc_Screen_CurrentValue += pressed_key;
                        break;
                    }
                    else if (!isNaN(calc_Screen_CurrentValue)) {
                        // console.log("inside Nan")
                        if (calc_Screen_CurrentValue == "0") {
                            // console.log("here too")
                            break;
                        }
                        else if (calc_Screen_CurrentValue != pressed_key) {
                            calc_Screen_CurrentValue += pressed_key;
                            break;
                        }

                    }

                    index--;
                }
            }

        }
        if (pressed_key === "Backspace") {
            let tempArr = Array.from(calc_Screen_CurrentValue);
            let newTempArr = Array.from(calc_Temp_Value);
            tempArr.pop();
            newTempArr.pop();
            // console.log(tempArr)
            console.log(newTempArr)
            let tempStr = tempArr.join("")
            let newtempStr = tempArr.join("")
            calc_Screen_CurrentValue = tempStr;
            calc_Temp_Value = newTempArr;
            // console.log("remove temp: ", calc_Screen_CurrentValue)
        }
        if (pressed_key === "Enter") {

            /*   Evaluation Code */

            //remove if last element is operator or decimal
            if (listOfOperators.includes(calc_Screen_CurrentValue[calc_Screen_CurrentValue.length - 1]) || calc_Screen_CurrentValue[calc_Screen_CurrentValue.length - 1] == ".") {
                console.log("is enter wroking here")
                let tempArr = Array.from(calc_Screen_CurrentValue);
                tempArr.pop();
                let tempStr = tempArr.join("")
                calc_Screen_CurrentValue = tempStr;
            }
            let parseArray = Array.from(calc_Screen_CurrentValue);//for seprating operators and creating number
            let elementArray = [];
            let ele = "";
            // console.log("single: ",parseArray)
            for (let i = 0; i < parseArray.length; i++) {
                if ((listOfDigits.includes(parseArray[i]) || parseArray[i] == "0") && (i == parseArray.length - 1)) {
                    ele += parseArray[i];
                    elementArray.push(ele);
                    // ele="";
                }
                if (listOfDigits.includes(parseArray[i]) || parseArray[i] == "0" || parseArray[i] == ".") {
                    ele += parseArray[i];
                }
                else if (listOfOperators.includes(parseArray[i])) {
                    elementArray.push(ele);
                    ele = "";
                    elementArray.push(parseArray[i])
                }
            }
            elementArray.forEach((e, i) => { //removing empty char
                if (!(isNaN(e)) && (e != "-") && e != "") {
                    elementArray[i] = parseFloat(e);
                }

                if (e == "-") {
                    elementArray.splice(i, 2, elementArray[i + 1] * (-1))
                }
            })

            elementArray.forEach((e, i) => { //removing empty char

                if (e == "") {
                    elementArray.splice(i, 1);
                }

            })

            console.log("this is element arr", elementArray)
            let evaluation_Array = [];
            let prev_value = 0;
            let current_value = 0;
            let temp = "";
            let current_operator = ""
            let previous_operator = ""
            let evaluation_index = 0;
            while (evaluation_index < elementArray.length) {
                if (evaluation_index == 0) {
                    current_value = elementArray[0];
                    evaluation_Array.push(current_value);
                    evaluation_index = 1;
                }
                if (listOfOperators.includes(elementArray[evaluation_index]) && evaluation_index > 0) {
                    console.log("before ", evaluation_Array)
                    if (elementArray[evaluation_index] == "*") {
                        // console.log("is code here")
                        current_value *= elementArray[evaluation_index + 1];
                        evaluation_Array[evaluation_Array.length - 1] = current_value;
                        // console.log("b", evaluation_index);
                        evaluation_index = evaluation_index + 2;
                    }
                    if (elementArray[evaluation_index] == "/") {
                        
                        current_value /= elementArray[evaluation_index + 1];
                        evaluation_Array[evaluation_Array.length - 1] = current_value;
                        evaluation_index = evaluation_index + 2;
                    }
                    if (elementArray[evaluation_index] == "%") {
                        if (elementArray[evaluation_index - 2] == "/") {
                            current_value = (current_value * elementArray[evaluation_index + 1]) * 100;
                            evaluation_Array[evaluation_Array.length - 1] = current_value;
                            evaluation_index = evaluation_index + 2;
                        }
                        else {
                            current_value = (current_value * elementArray[evaluation_index + 1]) / 100;
                            evaluation_Array[evaluation_Array.length - 1] = current_value;
                            evaluation_index = evaluation_index + 2;
                        }
                    }
                    if (elementArray[evaluation_index] == "+") {
                        evaluation_Array.push(elementArray[evaluation_index + 1]);
                        current_value = elementArray[evaluation_index + 1];
                        // evaluation_Array.splice(evaluation_Array[evaluation_Array.length-1,1,current_value]);
                        evaluation_index = evaluation_index + 2;
                    }
                }
                if (!isNaN(elementArray[evaluation_index - 1]) && (!isNaN(elementArray[evaluation_index])) && evaluation_index > 0) {
                    console.log("true minus")
                    current_value = elementArray[evaluation_index]
                    evaluation_Array.push(current_value);
                    evaluation_index++;
                }
            }

            //evaluation code ends here
            if (evaluation_Array.includes(NaN)) {
                ansScreen.innerText = "Cannot Divide by 0"
            }
            else {
                let result = 0;
                evaluation_Array.forEach(e => {
                    result += e;
                })
                if (Number.isInteger(result)) {
                    ansScreen.innerText = result.toLocaleString();
                }
                else {
                    result = result.toFixed(10);
                        let resultStrArray = Array.from(result.toString());
                        let revserseIndex = resultStrArray.length - 1;
                        while (resultStrArray[revserseIndex] == "0") {
                            resultStrArray.pop();
                            revserseIndex--;
                        }
                        result = parseFloat(resultStrArray.join(""));
                        ansScreen.innerText = result.toLocaleString();
                }
            }
        }//Enter key Action ends heres
        calcScreen.innerText = calc_Screen_CurrentValue;
    }) //Keyboard-Input code ends here


  return (
    <div>
      <div id="calcScreen">

</div>
<div id="ansScreen">

</div>
<div id="cont">

    <span id="plus" class="operator calcElement" onclick="">+</span>
    <span id="Minus" class="operator calcElement">-</span>
    <span id="Product" class="operator calcElement">*</span>
    <span id="Division" class="operator calcElement">/</span>
    <span id="Average" class="operator calcElement">%</span>
    <span id="id1" class="digits calcElement">1</span>
    <span id="id2" class="digits calcElement">2</span>
    <span id="id3" class="digits calcElement">3</span>
    <span id="id4" class="digits calcElement">4</span>
    <span id="id5" class="digits calcElement">5</span>
    <span id="id6" class="digits calcElement">6</span>
    <span id="id7" class="digits calcElement">7</span>
    <span id="id8" class="digits calcElement">8</span>
    <span id="id9" class="digits calcElement">9</span>
    <span id="id0" class="digits calcElement">0</span>
    <span id="id00" class="digits calcElement">00</span>
    <span id="decimal" class="decimal calcElement">.</span>
    <span id="allCLear" class="action calcElement">AC</span>
    <span id="singleCLear" class="action calcElement">C</span>
    <span id="singleCLear" class="action calcElement">=</span>
</div>
    </div>
  )
}


// import React, { useState, useEffect } from 'react';
// import './CalculatorCSS.css';

// export default function Calculator() {
//     const [calcScreen, setCalcScreen] = useState("");
//     const [ansScreen, setAnsScreen] = useState("");

//     const listOfOperators = ["+", "-", "*", "/", "%"];
//     const listOfDigits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "00"];
// // 
//     const handleButtonClick = (pressed_key) => {
//         if (calcScreen.length === 0) {
//             if (listOfDigits.includes(pressed_key) || pressed_key === "-" || pressed_key === "0") {
//                 setCalcScreen(pressed_key);
//             }
//         } else {
//             const lastChar = calcScreen[calcScreen.length - 1];

//             if (listOfDigits.includes(pressed_key)) {
//                 setCalcScreen(calcScreen + pressed_key);
//             } else if (pressed_key === "-" && lastChar !== "+" && lastChar !== "-") {
//                 setCalcScreen(calcScreen + pressed_key);
//             } else if (listOfOperators.includes(pressed_key) && (listOfDigits.includes(lastChar) || lastChar === "0")) {
//                 setCalcScreen(calcScreen + pressed_key);
//             } else if (pressed_key === "." && !lastChar.includes(".")) {
//                 if (calcScreen.length === 0 || listOfOperators.includes(lastChar)) {
//                     setCalcScreen(calcScreen + "0.");
//                 } else {
//                     setCalcScreen(calcScreen + pressed_key);
//                 }
//             }
//         }

//         if (pressed_key === "C") {
//             setCalcScreen(calcScreen.slice(0, -1));
//         }

//         if (pressed_key === "=") {
//             try {
//                 let expression = calcScreen;
//                 if (listOfOperators.includes(expression[expression.length - 1]) || expression[expression.length - 1] === ".") {
//                     expression = expression.slice(0, -1);
//                 }

//                 // Replace % with /100 if it's after a number (e.g., 50% becomes 50/100)
//                 expression = expression.replace(/(\d+)%/g, '($1/100)');

//                 // Use eval (with caution!) or a safer math library for evaluation
//                 const result = eval(expression);  // Or use a safer math.js library

//                 if (isNaN(result) || !isFinite(result)) {
//                     setAnsScreen("Error");
//                 } else {
//                     setAnsScreen(result.toLocaleString());
//                 }
//             } catch (error) {
//                 setAnsScreen("Error");
//             }
//         }

//         if (pressed_key === "AC") {
//             setCalcScreen("");
//             setAnsScreen("");
//         }
//     };


//     return (
//         <div>
//             <div id="calcScreen">{calcScreen}</div>
//             <div id="ansScreen">{ansScreen}</div>
//             <div id="cont">
//                 {listOfOperators.map(op => (
//                     <span key={op} className="operator calcElement" onClick={() => handleButtonClick(op)}>{op}</span>
//                 ))}
//                 {listOfDigits.map(digit => (
//                     <span key={digit} className="digits calcElement" onClick={() => handleButtonClick(digit)}>{digit}</span>
//                 ))}
//                 <span className="decimal calcElement" onClick={() => handleButtonClick(".")}>.</span>
//                 <span className="action calcElement" onClick={() => handleButtonClick("AC")}>AC</span>
//                 <span className="action calcElement" onClick={() => handleButtonClick("C")}>C</span>
//                 <span className="action calcElement" onClick={() => handleButtonClick("=")}>=</span>
//             </div>
//         </div>
//     );
// }
