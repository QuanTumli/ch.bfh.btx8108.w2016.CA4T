
export function getReadableDateLong(date) {
	// create string like 01.01.2016 from date
	const dateString =  ("0" + date.getDate()).slice(-2) + "." 
		+ ("0" + (date.getMonth()+1)).slice(-2) + "." 
		+ date.getFullYear();
	return dateString;
}

export function getMonthName(date, language) {
	// create string like "Januar", "January", "Janvier" based on language given
	const months = {
		de: ['Januar', 'Februar', 'März', 'April', 
			'Mai', 'Juni', 'Juli', 'August', 
			'September', 'Oktober', 'November', 'Dezember'],
		en: ['January', 'February', 'March', 'April', 
			'May', 'June', 'July', 'August', 
			'September', 'October', 'November', 'December'],
		fr: ["janvier", "février", "mars", "avril", 
			"mai", "juin", "juillet", "août", "septembre", 
			"octobre", "novembre", "décembre"]
	};
	return months[language][date.getMonth()];
}