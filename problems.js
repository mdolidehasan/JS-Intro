
function calculateMoney(tickets) {
    const ticketNum = tickets;
    const ticketPrice = 120;
    const guard = 500;
    const lunch = 8 * 50;
    const earning = (ticketNum * ticketPrice) - (guard + lunch);
    if (ticketNum < 0) {
        return 'Invalid';
    }
    else {
        return earning;
    }
}
console.log(calculateMoney(10));

function checkName(name) {
    if (typeof name != "string") {
        return "Invalid Name";
    }
    else {
        let nickName = name.toLowerCase();
        let lastChar = nickName[nickName.length - 1]
        if (lastChar == 'a' || lastChar == 'y' || lastChar == 'i' || lastChar == 'e' || lastChar == 'o' || lastChar == 'u' || lastChar == 'w') {
            return 'Good Name';
        }
        else {
            return 'Bad Name';
        }

    }
}
console.log(checkName('Baker'));


function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "Invalid!";
    }
    else {
        let newArray = [];
        for (let i = 0; i <= array.length - 1; i++) {
            if (typeof (array[i]) === 'number' && !isNaN(array[i])) {
                newArray.push(array[i]);
            }

        }
        return newArray;
    }
}
console.log(deleteInvalids(['1' , {num:2} , NaN ] ));


function password(obj) {
    if (Object.keys(obj).length != 3 || obj.birthYear.toString().length != 4) {
        return "invalid";
    }
    else {
        let siteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
        let pass = siteName + '#' + obj.name + '@' + obj.birthYear
        return pass;
    }
}
console.log(password({ name: 'rahat' , birthYear: 2002, siteName: 'Facebook' } ));


function monthlySavings(array, livingCost) {
    if (!Array.isArray(array) || typeof livingCost != 'number') {
        return "Invalid";
    }
    else {
        let income = 0;
        for (let i in array) {
            if (array[i] >= 3000) {
                income += array[i] - array[i] * 0.2;
            }
            else {
                income += array[i];
            }
        }
        let savings = income - livingCost;
        if (savings < 0) {
            return "earn more";
        }
        else {
            return savings;
        }
    }
}
console.log(monthlySavings(100, [ 900 , 2700 , 3400] ));