window.addEventListener('load', function () {



    var screen = document.getElementById('screen')
    var operatorButtons = document.querySelectorAll('#operator-buttons div')
    var numbers = document.querySelectorAll('#numbers-others #numbers div')
    var result = document.getElementById('other-buttons')
    var clear = document.getElementById('clear')


    let value = ""
    let operatorUsed = ""
    let currentNumber = ""

    numbers.forEach(n => n.addEventListener('click', function (e) {
        let clickedNumber = e.target.innerHTML
        if (clickedNumber != "C") {
            currentNumber = screen.innerText += clickedNumber
            return currentNumber
        }
    }))


    operatorButtons.forEach(operator => operator.addEventListener(('click'), function (e) {
        if (screen.innerText != "") {
            operator.classList.toggle('superRed')
            if (e.target.innerHTML == "x") {
                operatorUsed = "*"
                value = screen.innerText
                screen.innerText = ""
                return value


                // const x = document.createElement('p')
                // x.innerText = value
                // screen.appendChild(x)

                //here to append the latest value on top



            } else if (e.target.innerHTML == "÷") {
                operatorUsed = "/"
                value = screen.innerText
                screen.innerText = ""
                return value
            } else {
                operatorUsed = e.target.innerHTML
                value = screen.innerText
                screen.innerText = ""
                return value
            }
        }
    })
    )

    result.addEventListener('click', function (e) {
        if (operatorUsed == "+") {
            operatorButtons[0].classList.remove('superRed')
        }
        if (operatorUsed == "-") {
            operatorButtons[1].classList.remove('superRed')
        }
        if (operatorUsed == "*") {
            operatorButtons[2].classList.remove('superRed')
        }
        if (operatorUsed == "/") {
            operatorButtons[3].classList.remove('superRed')
        }
        if (value != "") {
            let total = eval(value + operatorUsed + currentNumber)
            screen.innerText = total
            value = ""
            currentNumber = ""
            operatorUsed = ""
        }
    })


    clear.addEventListener('click', function () {
        value = ""
        value2 = ""
        screen.innerText = ""
    })

    //escribimos un numero y al darle a un operador ese numero se guarda en una variable
    // se borra lo que se ve en pantalla
    //ahora escribimos un nuevo numero
    //al darle a resultado, resultado tiene que darnos el resultado de value1 y value2




})