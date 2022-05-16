const advIdPlace = document.querySelector(".id");
const advic = document.querySelector(".advicePlace")
const changeAdvBtn = document.querySelector(".changeAdvBtn");

async function getapi() {
    const requestURL = "https://api.adviceslip.com/advice";
    const request = new Request(requestURL)

    const response = await fetch(request)
    const adv = await response.json()
    advIdPlace.textContent = adv.slip.id
    advic.textContent = adv.slip.advice
}
changeAdvBtn.addEventListener("click", getapi)
getapi()