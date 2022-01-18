// ==> Exemplo 01 - Uso de Colchetes:
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var frutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas[2]);
// ==> Exemplo 02 - Array Object (Objeto Array):
var frutas1 = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas1[3]);
// ==> Exemplo 03 - Adicionando mais strings com método 'push'
var idiomas = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(idiomas);
idiomas.push('Mandarim');
console.log(idiomas);
idiomas.push('Italiano');
console.log(idiomas);
// ==> Exemplo 04 - Identificar tamanho do array - método 'length'
var idiomas1 = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(idiomas1.length);
// ==> Exemplo 05 - Exemplo de Array com Spread Operator
var listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = __spreadArrays(listaNumeros, [6, 7, 8, 9, 10]);
console.log(listaNumeros);
// ==> Exemplo 06 - Exemplo de Array com laço de iteração
var linguagensArray = new Array('JavaScript', 'Python', 'PHP', 'C#');
function funcaoLinguagens(linguagens) {
    for (var i = 0; i < linguagens.length; i++) {
        console.log(linguagensArray[i]);
    }
}
funcaoLinguagens(linguagensArray);
