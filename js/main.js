const button = document.querySelector('button');
const container = document.querySelector('.container');
const article = document.querySelectorAll('article');
const h2 = document.querySelectorAll('h2');
const p = document.querySelectorAll('p');

const backcolor  = document.querySelector("input:nth-child(3)");
const pcolor  = document.querySelector("input:nth-child(2)");
const h2color = document.querySelector("input:nth-child(1)");


button.addEventListener('click',changeColor);

    function changeColor() {
    container.style.backgroundColor = backcolor.value;
    for (backtext of article) {
        backtext.style.backgroundColor = backcolor.value;
    }
    for (item of p){
       item.style.color= pcolor.value;
    }
    for (h2text of h2){
        h2text.style.color = h2color.value;
    }
}





