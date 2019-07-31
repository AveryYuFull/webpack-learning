import './index.scss'

let test = [1, 2, 3];

let totalVal = test.reduce((total, item) => {
    return total + item;
}, 0)

setTimeout(() => {
    document.getElementById('app').innerText = 'i have calculate a num like ' + totalVal;
});