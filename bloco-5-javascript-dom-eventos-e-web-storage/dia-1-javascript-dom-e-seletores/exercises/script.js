/*
    Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
    - document.getElementById()
    - document.getElementsByClassName()
    - document.getElementsByTagName()
Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
Crie uma função que mude a cor do quadrado vermelho para branco.
Crie uma função que corrija o texto da tag <h1>.
Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/
function future(tags) {
    let a = document.getElementsByTagName(tags)[0].innerText = "I'm doing bigger and bigger projects.";
    return a;
}
future('p');

function color(background) {
    let b = document.getElementsByClassName(background)[0].style.backgroundColor = 'rgb(76,164,109)';
    return b;
}
color('main-content');

function inner(color) {
    let c = document.getElementsByClassName(color)[0].style.backgroundColor = "white";
    return c;
}
inner('center-content');

function correct (rigth) {
    let d = document.getElementsByClassName(rigth)[0].innerText = "JavaScript";
    return d;
}
correct('title');

function upperOne(caseUp) {
    let e = document.getElementsByTagName(caseUp)[0].innerText;
    document.getElementsByTagName(caseUp)[0].innerText = e.toUpperCase();
    return e;
};
upperOne("p");