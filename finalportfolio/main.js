/** changing text **/
firstText = "FullStack Developer :-)";
secondText = "Programmer :-)";
thirdText = "Electronics Engineer"
intervalTime = 600;
window.load = displayText();
function displayText() {
    // display first text
    document.querySelector('#dynamicContent').innerText = firstText;
    // display second text
    setTimeout(() => {
        document.querySelector('#dynamicContent').innerText = secondText;
    }, intervalTime * 3);
    // display third text
    setTimeout(() => {
        document.querySelector('#dynamicContent').innerText = thirdText;
    }, intervalTime * 5);
}

setInterval(() => {
    displayText();
}, intervalTime * 7);

/** mouse hover */

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const elements = [...document.querySelectorAll(".menu li")]
elements.map(element => {
    
    element.onmouseover = event =>{
        let iterations =0;
      const interval =  setInterval(() => {
            event.target.innerText = event.target.innerText.split("")
            .map((letter, index) =>  {
                
                if(index < iterations){
                    return event.target.dataset.value[index];
                }
    
                return  letters[Math.floor(Math.random() * 26)]
            })
            .join("");
    
            if(iterations >= event.target.dataset.value.length ){
                clearInterval(interval);
            }
    
    
            iterations +=1/3;
        }, 30);
       
    }
})