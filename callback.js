

function processNumber(number, callback) {
    setTimeout(()=>{
        const result = number * 2;
        console.log(`process number: ${result}`);
        callback(result);
    },1000);
}

function processNumbers(numbers){
    processNumber(numbers[0], ()=>{
        processNumber(numbers[1],()=>{
            processNumber(numbers[2],()=>{
                console.log('all numbers processed.');
            })
        })
    })
}


const numbers = [1, 3, 5];

processNumbers(numbers);