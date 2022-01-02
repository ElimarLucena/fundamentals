// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     };
// console.log(`Welcome, ${info.personagem}!`);

// info["recorrente"] = 'true';

// for (let key in info) {
//     console.log(key);
// }

// let info2 = {
//     personagem: 'e Tio Patinhas',
//     origem: 'e Christmas on Bear Mountain, Dell s Four Color Comics #178',
//     nota: 'e O último MacPatinhas',
//     };

// for (let key in info) {
//     console.log(info[key], info2[key]);
// }

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//         {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//         },
//     ],
// };
// console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama '${leitor.livrosFavoritos[0].titulo}'`);

// leitor.livrosFavoritos.push({
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editor: 'Rocco',
//     }
// )
// console.log(`${leitor.nome} tem ${leitor.livrosFavoritos[0].titulo} e ${leitor.livrosFavoritos[1].titulo}`);

// funções

// 1)  Questão ainda não resolvida.

function palindromo (result) {
    let a = result.split("");
    let b = a.reverse();
    let c;
    for (let index = 0; index < a.length; index += 1) {
            if (a === b) {
                c = true;
            } else {
                c = false;
            }
    }
    console.log(a);
    console.log(b);
    return c;
}
console.log(palindromo('abelha'));

// 2)

// function arr (array) {
//     let bigValue = 0;
//     for (let index = 0; index < array.length; index += 1) {
//         if (array[index] > bigValue) {
//             bigValue = array[index];
//         }
//     }
//     let a = array.indexOf(bigValue);
//     return a;
// }
// console.log(arr([1, 2, 4, 2, 2]))

// 3)

// function small (smallValue) {
//     let value = Math.min(...smallValue);
//     let minValue = smallValue.indexOf(value);
//     return minValue;
// }

// console.log(small([3, 2, 4, 5, 7, 6]));

// 4) Questão ainda não resolvida.

// function bigName (name) {
//     let bigValue = "";
//     for (let index = 0; index < 4; index += 1) {
//         if (name[index] > bigValue) {
//             bigValue = name[index];
//         }
//     }
//     console.log(name);
//     return bigValue;
// }
// console.log(bigName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

// 5) ainda não resolvido.

// function repeat(array) {
//     let a = 0;
//     for (let index = 0; index < array.length; index += 1) {
//         if (array[index] === array[index] + 1) {
//             a = array[index];
//         };
//     };
//     return a;
// }
// console.log(repeat([2, 3, 2, 5, 8, 2, 3]));








