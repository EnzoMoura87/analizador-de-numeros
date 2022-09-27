let number = document.getElementById('number');
let list = document.getElementById('list');
let resultado = document.getElementById('res');
let valores = [];
function adicionar() {
    if(isNumber(number.value) && !isList(number.value, valores)) {
       valores.push(Number(number.value)); //puxar o valor pra string
       let item = document.createElement('option'); // criar os options
       item.text = `Valor ${number.value} adicionado`; //item texto adicionado
       list.appendChild(item); //add a lista os itens criados
       resultado.innerHTML = ''; // quando add um elemento limpa meu resultado
    } else {
        alert('Valor inválido ou ja adicionado a lista!');
    }
    number.value = ''; //zerar o valor do input
    number.focus(); //deixar focado o input
}
function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) { //se o numero for entre 1 e 100
        return true
    } else {
        return false
    }
}
function isList(n, l) {
    if(l.indexOf(Number(n)) != -1) { // usar para saber se o valor esta na string
        return true
    } else {
        return false
    }
}
function finalizar() {
    if(valores.length == 0) { // ver se o array esta vazio
        alert('Adicione valores antes de finalizar!')
    } else {
        let totalElementos = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for(let posicao in valores) {
            soma += valores[posicao]
            if (valores[posicao] > maior)
            maior = valores[posicao]
            if (valores[posicao] < menor)
            menor = valores[posicao]
        }
        media = soma / totalElementos;

        resultado.innerHTML = '';
        resultado.innerHTML += `<p>Ao todo temos <strong>${totalElementos} </strong> números cadastrados.</p>`
        resultado.innerHTML += `<p>O maior valor informado foi <strong>${maior}</strong>.</p>`
        resultado.innerHTML += `<p>O menor valor informado foi <strong>${menor}</strong></p>`
        resultado.innerHTML += `<p>A soma de todos os valores é <strong>${soma}</strong>.</p>`
        resultado.innerHTML += `<p>A média dos valores digitados é <strong>${media}</strong>.</p>`
    }
}