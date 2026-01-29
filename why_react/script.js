const Bxc1 = document.querySelector('.basket-1-count')
const Bxc2 = document.querySelector('.basket-2-count')
const Btn1 = document.querySelector('.button-1')
const Btn2 = document.querySelector('.button-2')

const msg1 = document.querySelector('.msg-1')
const msg2 = document.querySelector('.msg-2')

const totalCount = 10;
let leftCount = 10;
let rightCount = totalCount - leftCount;

Btn1.addEventListener('click', ()=>{
    if(rightCount){
        leftCount++;
        rightCount--;
        Bxc1.textContent = leftCount;
        Bxc2.textContent = rightCount;
        msg1.textContent = ""
        msg2.textContent = ""
        if(rightCount === 0){
           msg1.textContent = "(basket-full)"
           msg2.textContent = "(basket-empty)"
        }
    }
})

Btn2.addEventListener('click', ()=>{
    if(leftCount){
        leftCount--;
        rightCount++;
        Bxc1.textContent = leftCount;
        Bxc2.textContent = rightCount;
        msg1.textContent = ""
        msg2.textContent = ""
        if(leftCount === 0){
         msg1.textContent = "(basket-empty)"
         msg2.textContent = "(basket-full)"
        }
    }
})

// Imperative programming: To perform a particular task we need to do each and every steps how will it work.
// Declarative programming: To perform a particular task we don't need to see how to do each and every steps, we only focused on what do we need?
// react is a delcarative , it handle how to select a element, how to show the changes, and it is a single page application.