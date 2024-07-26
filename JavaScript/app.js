const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
//o querySelector serve para mudar o elemento. No caso retorna o elemento de classe .color
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    //pega um elemento aleatório do vetor colors [3] (começa do 0)nesse caso, o elemento selecionado foi o 2 (rgba)
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
    //math.random retorna apenas números entre 0 e 0.9999, NUNCA 1. Por isso multiplica pela quantidade de itens da lista (colors.lenth). No caso, 4. Depois, usamos Math.floor para arredondar
}