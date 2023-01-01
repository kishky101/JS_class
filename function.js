//function declaration
    /*function nameOfFunction() {

        return  
    }*/

    //we want our funtion to add a and b , at the same time 
    //substract a and from b
let a = 5
let b = 2
function sumAndSub() {

    function sum() {
        let total = a + b;
        return total
    }

    let total = sum()
    let addToTotal = total + 5
    console.log(total)
    
    
    function substract() {
        let deduct = b - a
    }

    return addToTotal
}

console.log(sumAndSub(a, b))