let result = document.getElementById('res'),
    btn = document.querySelectorAll('.btn'),
    equal = document.querySelector('.equal'),
    All_clear = document.querySelector('.ac'),
    clear = document.querySelector('.left'),
    procent = document.querySelector('.proc'),
    dot = document.querySelector('.dot'),
    step = document.querySelector('.step'),
    koren = document.querySelector('.koren'),
    fact = document.querySelector('.factorial');

//Special let

let prov = "result.textContent.includes('tan(') ||result.textContent.includes('sin(') || result.textContent.includes('cos(') || result.textContent.includes('π') || result.textContent.includes('√') || result.textContent.includes('^') || result.textContent.includes('×') || result.textContent.includes('÷')",
    koren_Clear = result.value,
    num = "1 2 3 4 5 6 7 8 9 0 + - * ** /"

 
        //Вибір всіх элементів
for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = btn_click;
}
 
    function btn_click() {
        if(result.textContent == '0.') {
            result.textContent += this.textContent;   
        } else if (result.textContent == '0.0') {
            result.textContent += this.textContent;   
        }
        else if (result.textContent == '0.00') {
            result.textContent += this.textContent;   
        }
        else if (result.textContent == '0.000') {
            result.textContent += this.textContent;   
        }
        else if (result.textContent == '0.00000') {
            result.textContent += this.textContent;   
        }
        else if(result.textContent == 0) {
        result.textContent = this.textContent;   
    } else {
    result.textContent += this.textContent;
    };
}

dot.onclick = () => {
    if(dot.onclick && result.textContent == 0) {
        result.textContent += ".";
     } else {
        result.textContent += ".";   
     }
    }
//Очистка
All_clear.onclick = () => {
    result.textContent = "0";
    result.value = "0";
};

clear.onclick = () => {
    if (result.textContent == '0') {

    } else {
    result.innerHTML = result.textContent.substring(0,result.textContent.length - 1);
    };
    if (result.textContent.length == '0') {
        result.textContent = "0";
        result.value = "0";
    }
};

// Доп. оператори
procent.onclick = () => {
    if(prov) {
        result.textContent = result.textContent.replace(/×/gi, "*");
        result.textContent = result.textContent.replace(/÷/gi, "/");
        result.textContent = result.textContent.replace(/\^/gi, "**");
        result.textContent = result.textContent.replace(/\√/gi, "Math.sqrt(" + result.textContent + ')');
        result.textContent = result.textContent.replace(/\√/gi, '');
        result.textContent = result.textContent.replace(/\π/gi, Math.PI);
        result.textContent = result.textContent.replace(/cos\(/gi, "Math.cos(");
        result.textContent = result.textContent.replace(/sin\(/gi, "Math.sin(");
        result.textContent = result.textContent.replace(/tan\(/gi, "Math.tan(");
        result.value = result.textContent;
        result.innerHTML = (eval(result.textContent) / 100)
    } else {
        result.value = result.textContent;
        result.innerHTML = (eval(result.textContent) / 100)
    };
};

step.onclick = () => {
    result.textContent += "^";
};

koren.onclick = () => {
    if(koren.onclick && result.textContent == 0) {
        result.textContent = koren.textContent;
    } else {
        result.textContent += koren.textContent;   
    };
};

fact.onclick = () => {
    result.value = result.textContent;
    fact_text = factorial(result.value);
    result.innerHTML = eval(fact_text);
}

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

//Рiвно
equal.onclick = () => {
    if(prov) {
        result.textContent = result.textContent.replace(/×/gi, "*");
        result.textContent = result.textContent.replace(/÷/gi, "/");
        result.textContent = result.textContent.replace(/\^/gi, "**");
        result.textContent = result.textContent.replace(/√/gi, "Math.sqrt(");
        result.textContent = result.textContent.replace(/\π/gi, Math.PI);
        result.textContent = result.textContent.replace(/cos\(/gi, "Math.cos(");
        result.textContent = result.textContent.replace(/sin\(/gi, "Math.sin(");
        result.textContent = result.textContent.replace(/tan\(/gi, "Math.tan(");
        result.value = result.textContent;
    };

    if(result.textContent.indexOf(num) && result.textContent.includes('Math.sqrt(')) {
        result.textContent = result.textContent.replace(/Math.sqrt/gi, "*Math.sqrt");
    };
     if(result.textContent.indexOf(num) ) {
        result.textContent = result.textContent.replace(/^\*Math.sqrt/gi, "Math.sqrt");
    }
    if(result.textContent.includes('Math.sqrt(')){
    result.textContent += ")";
    };
    if(result.textContent.includes('Math.cos(')){
        result.textContent += ")";
        };
    if(result.textContent.includes('Math.sin(')){
        result.textContent += ")";
        };
    if(result.textContent.includes('Math.tan(')){
         result.textContent += ")";
        };
    if(result.textContent.includes('))')) {
        result.textContent = result.textContent.replace(/\)\)/gi, ")");
    };
        
        result.value = result.textContent;
        console.log(result.value);
    if(result.value.length > 7){
    result.innerHTML = eval(result.value);
     } else {
        result.innerHTML = eval(result.value)
    }
}



// MORE

let more = document.querySelector('.more'),
    cync = document.querySelectorAll('.cync'),
    btn_if = true,
    btn_area = document.getElementById('btn-area'),
    body_calc = document.querySelector('.body-Calc');
    for(let bi = 0; bi < cync.length; bi++) {
    cync[bi].style.display = "none";
}
more.onclick = () => {
    if(btn_if == true) {
        for(let bi = 0; bi < cync.length; bi++) {
            cync[bi].style.display = "block";
        }
    body_calc.style.transition = ".2s";
    body_calc.style.width = "350px";
    body_calc.style.height = "650px";
    btn_area.style.gridTemplateAreas = '"lg koren n d_Left d_Right""cos ac left proc dilen""sin seven eight nine mnoz" "tan four five six minus""factorial one two three plus" "pi zero zero dot equal"'
    btn_if = false;
} else {
    for(let bi = 0; bi < cync.length; bi++) {
        cync[bi].style.display = "none";
    }
    body_calc.style.transition = ".2s";
    body_calc.style.width  = "300px";
    body_calc.style.height = "550px";
    btn_area.style.gridTemplateAreas = '  "ac left proc dilen""seven eight nine mnoz""four five six minus""one two three plus""more zero dot equal"'
    btn_if = true;
}
}





