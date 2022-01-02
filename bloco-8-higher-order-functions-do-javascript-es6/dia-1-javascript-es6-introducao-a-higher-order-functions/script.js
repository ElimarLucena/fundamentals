// exercise 1:
const infoEmployees = (fullname) => {
    const name = fullname.toLowerCase().split(' ').join('_');
    const info = {
        nomeCompleto: name,
        email: `${name}@trybe.com`,
    }
    return info;
};

const newEmployees = (callback) => {
    const employees = {
        id1: callback('Pedro Guerra'), 
        id2: callback('Luiza Drumond'), 
        id3: callback('Carla Paiva'),
    } 
    return employees;
};

// console.log(newEmployees(infoEmployees));

// exercise 2:
const check = (one, two) => {
    return one === two;
};

const prizeDraw = (number, callback) => {
    const random = Math.floor((Math.random() * 5) + 1) ;
    const onCheck = callback(number, random);
    return (onCheck) ? 'Lucky day, you won!' : 'Try Again!';
};

// console.log(prizeDraw(2, check));

// exercise 3:

// const rightAnswers =  ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const checkAnswers = (onRight, onStudent) => {
//     let sum = 0;
//     for (let index = 0; index <= onRight; index += 1) {
//         if (onRight[index] === onStudent[index]) {
//             sum += 1;
//         } else {
//             sum += -0.5; 
//         }
//         if(onStudent[index] === 'N.A') {
//             continue
//         }
//     }
//     return sum;
// };

// const answers = (right, student, callback) => {
//     let onRight = 0;
//     let onWrong = 0;
//     right.forEach((item, index) => {
//         if (item.includes(student[index])) {
//             onRight += 1;
//         } else {
//             onWrong += 1;
//         }
//     });
    
//     return `Respostas certas: ${onRight}.
// Respostas erradas: ${onWrong}.
// Pontuação: ${callback()}.`
// };

// checkAnswers(rightAnswers, studentAnswers);

// console.log(answers(rightAnswers, studentAnswers, checkAnswers));