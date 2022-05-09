const showBtn = document.querySelector(".showBtn1");
const showBtn2 = document.querySelector(".showBtn2");

showBtn.addEventListener("click", () => {
	document.querySelector(".hiddenList").classList.remove("displayNone");
	document.querySelector(".hiddenList").classList.toggle("visibled");
	document.querySelector(".arrow").src = "./images/icon-arrow-up.svg";
	if (!document.querySelector(".hiddenList").classList.contains("visibled")) {
		document.querySelector(".arrow").src = "./images/icon-arrow-down.svg";
		setTimeout(() => {
			document.querySelector(".hiddenList").classList.toggle("displayNone");
		}, 300);
	}
});
showBtn2.addEventListener("click", () => {
	document.querySelector(".hiddenList2").classList.remove("displayNone");
	document.querySelector(".hiddenList2").classList.toggle("visibled");
	document.querySelector(".arrow2").src = "./images/icon-arrow-up.svg";
	if (!document.querySelector(".hiddenList2").classList.contains("visibled")) {
		document.querySelector(".arrow2").src = "./images/icon-arrow-down.svg";
		setTimeout(() => {
			document.querySelector(".hiddenList2").classList.toggle("displayNone");
		}, 300);
	}
});

const hambMenuBtn = document.querySelector(".hambMenu");
const hambMenuBtnClose = document.querySelector(".closeBtn")
const showHambMenu = () => {
	document.querySelector(".hambMenuSec").classList.add('hambMenuSec_active')
	document.querySelector(".wrapper").classList.add("hambMenuSec_active")
};
const closeHambMenu = () => {
	document.querySelector(".hambMenuSec").classList.remove('hambMenuSec_active')
	document.querySelector(".wrapper").classList.remove("hambMenuSec_active")
}
hambMenuBtn.addEventListener("click", showHambMenu);
hambMenuBtnClose.addEventListener("click", closeHambMenu)

