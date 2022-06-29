const data = require("../data.json");
const currentTime = document.querySelectorAll(".currentHours");
const previousTime = document.querySelectorAll(".previousHours");
const dailyBtn = document.querySelector(".daily");
const weeklyBtn = document.querySelector(".weekly");
const monthlyBtn = document.querySelector(".monthly");
let current = 2;
let newCurrent;
const setCurrentTime = e => {
	let set = e.target.classList.value;
	currentTime.forEach(el => {
		data.forEach(elem => {
			previousTime.forEach(ele => {
				if (el.classList.contains(elem.title)) {
					if (ele.classList.contains(elem.title)) {
						if (current === newCurrent) {
							false
						} else {
							el.style.opacity = 0;
							ele.style.opacity = 0;
							const setText = () => {
								el.textContent = `${elem.timeframes[set].current}hrs`;
								if (set === "weekly") {
									ele.textContent = `Last Week - ${elem.timeframes[set].previous}hrs`;
								} else if (set === "daily") {
									ele.textContent = `Yesterday - ${elem.timeframes[set].previous}hrs`;
								} else {
									ele.textContent = `Last Month - ${elem.timeframes[set].previous}hrs`;
								}
								el.style.opacity = 1;
								ele.style.opacity = 1;
							};
							setTimeout(setText, 300);
						}
					}
				}
			});
		});
	});
};

currentTime.forEach(el => {
	previousTime.forEach(ele => {
		data.forEach(elem => {
			if (el.classList.contains(elem.title)) {
				if (ele.classList.contains(elem.title)) {
					el.textContent = `${elem.timeframes.weekly.current}hrs`;
					ele.textContent = `Last Week - ${elem.timeframes.weekly.previous}hrs`;
					weeklyBtn.classList.add("active");
				}
			}
		});
	});
});

const addActive = (x, y, z) => {
	x.classList.toggle("active");
	y.classList.remove("active");
	z.classList.remove("active");
};

dailyBtn.addEventListener("click", e => {
	newCurrent = 1
	setCurrentTime(e);
	addActive(dailyBtn, weeklyBtn, monthlyBtn);
	current = 1;
});
weeklyBtn.addEventListener("click", e => {
	newCurrent = 2
	setCurrentTime(e);
	addActive(weeklyBtn, dailyBtn, monthlyBtn);
	current = 2
});
monthlyBtn.addEventListener("click", e => {
	newCurrent = 3
	setCurrentTime(e);
	addActive(monthlyBtn, dailyBtn, weeklyBtn);
	current = 3
});
