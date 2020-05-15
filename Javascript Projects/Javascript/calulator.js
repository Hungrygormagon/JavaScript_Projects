//creates an object to track values
const Calculator = {
    Display_Value: '0',     //displays 0 on screen
    First_Operand: null,    //this will hold the first operand, set to null at start
    Wait_Second_Operand: false,    //this checks for a second operand 
    operator: null, //this will hold the operator
};

//this modifies values as a button is clicked
function Input_Digit(digit){
    const { Display_Value, Wait_Second_Operand } = Calculator;
    //we are checking to see if Wait_Second_Operand is true
    //and set Display_Value to the keypress
    if (Wait_Second_Operand === true){
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //this will overwrite Display_Value if the current vaue is 0
        //otherwise it adds to it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

//this section handles decimal points
function Input_Decimal (dot) {
    //this ensures accidental presses of the decimal key
    //wont cause bugs
    if (Calculator.Wait_Second_Operand===true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        //if display.value does not contain decimal, we will add a decimal
        Calculator.Display_Value += dot;
    }
}

//operators
function Handle_Operator (Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator
    //converts the current number and stores it in Operand if it's not there already
    const Value_of_Input = parseFloat(Display_Value);
    //checks if an operator exists and if Wait is true, then updates operator and exits the function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) { //checks if operator exists
        const Value_Now = First_Operand || 0;
        //dif operator already exists, property lookup is performed for the 
        //operator in the Perform_Calculation object and the function that matches
        //operator is executed
        const result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        
        Calculator.Display_Value = String(result);
        Calculator.First_Operand = result;
    }

        Calculator.Wait_Second_Operand = true;
        Calculator.operator = Next_Operator;
}
const Perform_Calculation = {
    '/':(First_Operand, Second_Operand) => First_Operand / Second_Operand,

    '*':(First_Operand, Second_Operand) => First_Operand * Second_Operand,

    '+':(First_Operand, Second_Operand) => First_Operand + Second_Operand,

    '-':(First_Operand, Second_Operand) => First_Operand - Second_Operand,

    '=':(First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value= '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display ();
//monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //the target variable is an object that represents the element
    //that was clicked
    const { target }= event;
    //if the element that was clicked is not a button, exit the function
    if (!target.matches('button')){
        return;
    }

    if (target. classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    //ensures AC clears the calulator
    if (target.classList.contains('All-clear')){
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
})