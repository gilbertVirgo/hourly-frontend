const dispatch = require("./dispatch");
const fs = require("fs").promises;
const path = require("path");
const differenceInMilliseconds = require("date-fns/differenceInMilliseconds");

const run = async () => {
	const now = new Date();
	const nextHour = new Date(
		now.getFullYear(),
		now.getMonth(),
		now.getDate(),
		now.getHours() + 1
	);

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

	setTimeout(run, differenceInMilliseconds(nextHour, now));
};

const init = () => {
	run();
};

init();
