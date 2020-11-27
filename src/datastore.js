import data from './data';

export const getParsedCountries = () => {
	return data.countries.map(country => {
		const splitDate = country.date.split('/');

		return {
			...country,
			day: splitDate[0],
			month: splitDate[1],
			year: splitDate[2]
		}
	});
};

export const getTaskTwoRows = () => {
	const parsedCountries = getParsedCountries();
	
	return parsedCountries.sort((countryA, countryB) => {
		if (countryA.temp === countryB.temp) {
			return 0;
		}
		
		return countryA.temp < countryB.temp ? -1 : 1;
	});
};

export const getTaskThreeRows = () => {
	const parsedCountries = getParsedCountries();
	
	let dataMap = {};
	
	parsedCountries.forEach((country) => {
		const key = `${country.country}-${country.year}`;
		
		if (!dataMap.hasOwnProperty(key)) {
			dataMap[key] = {
				country: country.country,
				year: country.year,
				allTemps: [],
				maxTemp: null,
				minTemp: null
			};
		}
		
		dataMap[key].allTemps.push(country.temp);
		
		if (dataMap[key].maxTemp == null || country.temp > dataMap[key].maxTemp) {
			dataMap[key].maxTemp = country.temp;
		}
		
		if (dataMap[key].minTemp == null || country.temp < dataMap[key].minTemp) {
			dataMap[key].minTemp = country.temp;
		}
	});
	
	return Object.values(dataMap).map((row) => {
		let total = 0;
		
		row.allTemps.forEach((temp) => {
			total += temp;
		});
		
		return {
			...row,
			avgTemp: total / row.allTemps.length
		}
	});
};

export const getTaskOneColumns = () => {
	return [
		{
			name: 'country',
			label: 'COUNTRY'
		},
		{
			name: 'city',
			label: 'CITY'
		},
		{
			name: 'month',
			label: 'MONTH'
		},
		{
			name: 'avgTemp',
			label: 'AVERAGE TEMP'
		}
	];
};

export const getTaskTwoColumns = () => {
	return [
		{
			name: 'country',
			label: 'COUNTRY'
		},
		{
			name: 'city',
			label: 'CITY'
		},
		{
			name: 'year',
			label: 'YEAR'
		},
		{
			name: 'month',
			label: 'MONTH'
		},
		{
			name: 'temp',
			label: 'TEMP'
		}
	];
};

export const getTaskThreeColumns = () => {
	return [
		{
			name: 'country',
			label: 'COUNTRY'
		},
		{
			name: 'year',
			label: 'Year'
		},
		{
			name: 'maxTemp',
			label: 'MAX TEMP'
		},
		{
			name: 'minTemp',
			label: 'MIN TEMP'
		},
		{
			name: 'avgTemp',
			label: 'AVG. TEMP'
		}
	];
};