const people = [
{
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
},
{
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
},
{
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
},
{
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
},
{
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
},
];

  // escreva filterPeople abaixo
// 4 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
const filterPeople = (array) => array.filter(({bornIn, nationality}) => {
        if (bornIn >= 1901 && bornIn <= 2000 && nationality === 'Australian') {
            return array;
        }
    });
console.log(filterPeople(people));