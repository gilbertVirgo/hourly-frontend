const differenceInMilliseconds = require("date-fns/differenceInMilliseconds");
const differenceInHours = require("date-fns/differenceInHours");

const timeUntilNextRun = now => {
	const tomorrowMorning = new Date(
		now.getFullYear(),
		now.getMonth(),
		now.getDate() + 1,
		6
	);
	const nextRunTime = new Date(
		now.getFullYear(),
		now.getMonth(),
		now.getDate(),
		// Take a break between 23:00 and 6:00
		now.getHours() < 23
			? now.getHours() + 1
			: now.getHours() + differenceInHours(tomorrowMorning, now)
	);

	return differenceInMilliseconds(nextRunTime, now);
};

console.log(timeUntilNextRun(new Date(2020, 0, 1, 23)));
