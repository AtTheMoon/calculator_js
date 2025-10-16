    const keys = document.querySelectorAll('.calculator__key')
    const calDisplay = document.querySelector('.calculator__display')
    const clearBtn = document.querySelector('.clear_btn')
    const equalBtn = document.querySelector('#equal')
    const deleteBtn = document.querySelector('.delete_key')

    keys.forEach((el) => {
        if (el.innerText == '<') return;

        el.addEventListener('click', () => {
            if (el.innerText === '=') {
                return;
            } else if (el.innerText === 'x') {
                displayTo('*');
            } else {
                displayTo(el.innerText);
            }
        });
    });


    function displayTo(op) {
        const currentValue = calDisplay.value;
        const lastChar = currentValue.slice(-1);

        const operators = ['+', '-', '*', '/', '.'];

        if (currentValue === '' && operators.includes(op)) {
            return;
        }

        if (operators.includes(lastChar) && operators.includes(op)) {
            return;
        }

        calDisplay.value += op;
    }


    clearBtn.addEventListener('click', ()=>{
        calDisplay.value = ''
    })

    equalBtn.addEventListener('click', ()=>{
        try{
            calDisplay.value = eval(calDisplay.value.trim()) 
        }catch (er){
            alert('Введите корректно')
        }
    })

    deleteBtn.addEventListener('click', ()=>{
        calDisplay.value = calDisplay.value.slice(0, -1)
    })