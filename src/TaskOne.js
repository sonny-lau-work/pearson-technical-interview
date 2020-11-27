import {getParsedCountries, getTaskOneColumns, getTaskOneRows} from "./datastore";
import Table from "./Table";
import React, {useState} from "react";

function TaskOne() {
	const [ selectedMonth, setSelectedMonth ] = useState(null);
	const [ selectedCity, setSelectedCity ] = useState(null);

	
	const columns = getTaskOneColumns()
		, parsedCountries = getParsedCountries()
		, filteredCountries = parsedCountries.filter((country) => {
			return (
				(selectedMonth == null || country.month === selectedMonth) &&
				(selectedCity == null || country.city === selectedCity)
			);
		})
	;
	
	let countriesByMonth = {};

	filteredCountries.forEach((country) => {
		if (!countriesByMonth.hasOwnProperty(country.month)) {
			countriesByMonth[country.month] = [];
		}

		countriesByMonth[country.month].push(country);
	});
	
	let rows = [];

	for (let month in countriesByMonth) {
		const countries = countriesByMonth[month];

		let total = 0;

		countries.forEach((country) => {
			total += country.temp;
		});

		rows.push({
			country: countries[0].country,
			city: countries[0].city,
			month: month,
			avgTemp: total / countries.length
		});
	}

	return (
		<Table columns={columns} rows={rows}/>
	);
}

export default TaskOne;