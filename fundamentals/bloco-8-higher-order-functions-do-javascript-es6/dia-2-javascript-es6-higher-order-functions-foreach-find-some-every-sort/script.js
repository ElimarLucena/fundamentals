const books = [
    {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
    },
    releaseYear: 1991,
},
{
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
    name: 'J. R. R. Tolkien',
    birthYear: 1892,
    },
    releaseYear: 1954,
},
{
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
    name: 'Isaac Asimov',
    birthYear: 1920,
    },
    releaseYear: 1951,
},
{
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
    name: 'Frank Herbert',
    birthYear: 1920,
    },
    releaseYear: 1965,
},
{
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
    name: 'Stephen King',
    birthYear: 1947,
    },
    releaseYear: 1986,
},
{
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
    name: 'H. P. Lovecraft',
    birthYear: 1890,
    },
    releaseYear: 1928,
},
];

// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
// const authorBornIn1947 = books.find((age) => age.author.birthYear === 1947);
// const authorName = authorBornIn1947.author.name;
// console.log(authorName);

// 2 - Retorne o nome do livro de menor nome.
// const onBook = (books) => {
//     const arr = [];
//     let name = '';
//     books.forEach((item, ) => {
//         const nameBook = item.name;
//         arr.push(nameBook.length);
//         arr.sort((a, b) => a - b);
//         if (nameBook.length === arr[0]) {
//             name = item.name;
//         }
//     });
//     return name;
// }

// console.log(onBook(books));

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
// const count = books.find((item) => {
//     const name = item.name;
//     if (name.length === 26) {
//         return true;
//     }
// });

// console.log(count.name);

// 4 - Ordene os livros por data de lançamento em ordem decrescente.
// books.sort((firstElement, secondElement) => {
//     if (firstElement.releaseYear > secondElement.releaseYear) {
//         return 1;
//     }
//     if (firstElement.releaseYear < secondElement.releaseYear) {
//         return -1;
//     }
// });

// console.log(books);

// 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.
// const everyoneWasBornOnSecXX = books.every((item) => item.birthYear >= 1901 && item.birthYear <= 2000);
// console.log(everyoneWasBornOnSecXX);

// 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.
// const someBookWasReleaseOnThe80s = books.some((item) => item.releaseYear >= 1980 && item.releaseYear <= 1990);
// console.log(someBookWasReleaseOnThe80s);

