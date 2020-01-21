const dispatch = require("./dispatch");
const fs = require("fs").promises;
const path = require("path");
const differenceInMilliseconds = require("date-fns/differenceInMilliseconds");

const timeUntilNextRun = () => {
	const now = new Date();
	const tomorrowMorning = new Date(
		now.getFullYear(),
		now.getMonth(),
		now.getDate() + 1,
		6
	);
	const nextHour = new Date(
		now.getFullYear(),
		now.getMonth(),
		now.getDate(),
		// Take a break between 23:00 and 6:00
		now.getHours() < 23
			? now.getHours() + 1
			: differenceInMilliseconds(tomorrowMorning, now)
	);

	differenceInMilliseconds(nextHour, now);
};

const run = async () => {
	const verses = JSON.parse(
		await fs.readFile(path.join(__dirname, "verses.json"))
	);

	const statusPath = path.join(__dirname, "status.json");
	let { index } = JSON.parse(await fs.readFile(statusPath));

	const verse = verses[index % verses.length];

	await dispatch(verse);

	++index;
	await fs.writeFile(statusPath, JSON.stringify({ index }));

	console.log(`Promise dispatched: ${verse}`);

	setTimeout(run, timeUntilNextRun());
};

const init = () => {
	run();
};

init();
