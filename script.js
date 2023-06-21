const textarea = document.querySelector("#textarea");
    
const forbidden = ` ?,.;'!-_@#$%¨"&*()[]{}`;


/******************
Function buttons
******************/

//Uppercase button
document.querySelector("#uppercase").addEventListener("click", function () {
    textarea.value = toUpper(textarea.value);
});

//Lowercase button
document.querySelector("#lowercase").addEventListener("click", function () {
    textarea.value = toLower(textarea.value);
});

//Alternate button
document.querySelector("#alternating").addEventListener("click", function () {
    textarea.value = alternate(textarea.value);
});

//Reverse button
document.querySelector("#reverse").addEventListener("click", function () {
    textarea.value = reverse(textarea.value);
});

//Switch button
document.querySelector("#switchBtn").addEventListener("click", function () {
    textarea.value = switchText(textarea.value);
});

/******************
Convention buttons
******************/

// camelCase button
document.querySelector("#camelCase").addEventListener("click", function () {
    textarea.value = camelCase(textarea.value);
});

// PascalCase button
document.querySelector("#PascalCase").addEventListener("click", function () {
    textarea.value = PascalCase(textarea.value);
});

// snake_case button
document.querySelector("#snake_case").addEventListener("click", function () {
    textarea.value = snake_case(textarea.value);
});


/******************
Copy and clear
******************/

//Clear button
document.querySelector("#clearBtn").addEventListener("click", function () {
    textarea.value = "";
})

//Copy button
document.querySelector("#copyBtn").addEventListener("click", function () {
    navigator.clipboard.writeText(textarea.value);
})


/******************
Transform functions
******************/

function toUpper (text) {
    let result = text.toUpperCase();
    return result;
}

function toLower (text) {
    let result = text.toLowerCase();
    return result;
}

function alternate (text) {
    
    let result = "";
    
    for (let i = 0, n = text.length, upp = true; i < n; i++) {
        const t = text[i]
        if (!forbidden.includes(t) && typeof t !== 'number'){
            if (upp) {
                result += t.toUpperCase();
                upp = !upp;
            }
            else {
                result += t.toLowerCase();
                upp = !upp;
            }
        } else {
            result += t;
        }
    }
    return result;
}

function reverse (text) {
    let result = "";
    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i];
    }
    
    return result;
}

function switchText (text) {
    let result = "";
    for (let i = 0, n = text.length; i < n; i++) {
        const t = text[i];
        
        if (t.toLowerCase() === t) result += t.toUpperCase();
        else result += t.toLowerCase();
    }
    return result;
}


/******************
Convention functions
******************/

function camelCase (text) {
    let result = "";
    for (let i = 0, n = text.length, upp = false, firstChar = true, newWord = true; i < n; i++) {
        if (forbidden.includes(text[i])) {
            if (!firstChar) upp = true;
        } else {
            if (firstChar) {
                result += text[i].toLowerCase();
                firstChar = false;
            } else if (upp) {
                result += text[i].toUpperCase();
                upp = false;
            } else {
                result += text[i].toLowerCase();
            }
        }
    }
    
    return result;
}

function PascalCase (text) {
    let result = "";
    for (let i = 0, n = text.length, upp = true, firstChar = true; i < n; i++) {
        if (forbidden.includes(text[i])) {
            upp = true;
        } else {
            if (upp) {
                result += text[i].toUpperCase();
                upp = false;
            } else {
                result += text[i].toLowerCase();
            }
        }
    }
    
    return result;
}

function snake_case (text) {
    let result = "";
    for (let i = 0, n = text.length, firstChar = true, firstSpace = true; i < n; i++) {
        if (text[i] === " ") {
            if (firstSpace)
            {
                if (!firstChar)
                {
                    result += "_";
                    firstSpace = false;
                }
            }
        } else {
            result += text[i].toLowerCase();
            firstChar = false;
            firstSpace = true;
        }
    }
    
    return result;
}