import { quoteList } from "./quoteArray.js"; 

const btn = document.getElementById('js-quote-btn');
const quoteContainer = document.getElementById('js-quote-container');



btn.addEventListener('click', ()=>{

    let index, lastIndex;
    do{
        index = Math.floor(Math.random()*29);
    }while(index===lastIndex);
    lastIndex = index;

    quoteContainer.innerHTML = `
    <p class="js-quote">${quoteList[lastIndex].quote}</p>
    <p class="js-teller">${quoteList[lastIndex].teller}`;

    
});