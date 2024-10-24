// function poli(string) {
//     var splitString = string.split("");
//     var reverseArray = splitString.reverse();
//     var joinArray = reverseArray.join("");
//     if (string == joinArray) {
//         return true
//     } else {
//         return false
//     }
// }

// if (poli('reler')) {
//     console.log('É uma poli')
// } else {
//     console.log('Não é uma poli')
// }

function ordenaNum(array) {
    const numerosUnicos = [];

    array.forEach(item => {
        if (!numerosUnicos.includes(item)) {
            numerosUnicos.push(item);
        }
    });

    return numerosUnicos.sort();
}

const array = [5, 3, 2, 5, 6, 1, 3, 4, 6, 5, 3, 3, 3, 5, 6, 7, 56, 56, 5, 65, 65, 6, 56, 56];
console.log(ordenaNum(array));