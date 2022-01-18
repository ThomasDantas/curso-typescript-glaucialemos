// ==> Exemplo 01 - Uso simples de Tuplas em TypeScript
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var pessoa;
pessoa = ['Glaucia Lemos', 'Cloud Advocate JavaScript', 34];
// pessoa = [34, 'Cloud Advocate JavaScript', 'Glaucia Lemos'];
console.log('Exemplo 01', pessoa);
// ==> Exemplo 02 - Acessando o valor da Tupla
var pessoa1;
pessoa1 = ['Glaucia Lemos', 'Cloud Advocate JavaScript', 34];
console.log('Exemplo 02', pessoa1[1]);
// ==> Exemplo 03 - Outra forma de usar Tuplas em TypeScrit (com labels)
var pessoa2 = ['Glaucia Lemos', 'Cloud Advocate JavaScript', 34];
console.log('Exemplo 03', pessoa2);
// ==> Exemplo 04 - Usando Tuplas com Spread Operator
var listaFrutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log.apply(console, __spreadArrays(['Exemplo 04'], listaFrutas));
//==> Exemplo 05 - Lista Heterogênea de Tupla:
var listaFrutas2 = __spreadArrays([5, true], listaFrutas);
console.log('Exemplo 05', listaFrutas2);
// ==> Exemplo 06 - Uso de função com Tuplas
function listarPessoas(nomes, idades) {
    return __spreadArrays(nomes, idades);
}
var resultado = listarPessoas(['Glaucia', 'Jurema'], [34, 68]);
console.log('Exemplo 06', (resultado));
function criarPessoa() {
    var nome = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nome[_i] = arguments[_i];
    }
    return __spreadArrays(nome);
}
console.log('Exemplo 07', criarPessoa('Glaucia', 'Lemos'));
console.log('Exemplo 07', criarPessoa('Glaucia', 'de Souza', 'Lemos'));
