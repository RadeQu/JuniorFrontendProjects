const bars = document.querySelectorAll(".bar");
const data = require("../data.json");

const curDate = new Date()
const today = curDate.getDay() 


for (let i = 0; i <= bars.length; i++){
    bars[i].style.height = `${data[i].amount}%`
    bars[today - 1].style.background = "hsl(186, 34%, 60%)"
    bars[i].addEventListener("mouseenter", () => {
        bars[i].setAttribute("data-content", `$${data[i].amount}`);
        bars[i].style.background = "hsl(10, 79%, 65%, 0.5)"
    })
    bars[today - 1].addEventListener("mouseenter", () => {
        bars[today - 1].style.background = "hsl(186, 34%, 60%, 0.5)"
    })
    bars[today - 1].addEventListener("mouseleave", () => {
        bars[today - 1].style.background = "hsl(186, 34%, 60%)"
    })
    bars[i].addEventListener("mouseleave", () => {
        bars[i].setAttribute("data-content", ``);
        bars[i].style.background = "hsl(10, 79%, 65%)"
      
    })
}


