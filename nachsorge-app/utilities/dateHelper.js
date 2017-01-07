
export function getReadableDateLong(date) {
	// create string like 01.01.2016 from date
	const dateString =  ("0" + date.getDate()).slice(-2) + "." 
		+ ("0" + (date.getMonth()+1)).slice(-2) + "." 
		+ date.getFullYear();
	return dateString;
}