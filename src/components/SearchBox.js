import React, { useEffect } from 'react';
import axios from 'axios';
const SearchBox = (props) => {
	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			props.setSearchValue(event.target.value)
			sendDataToBackend(event.target.value)
		}
	}


	// const executePythonScript = async () => {
	// 	// Send a request to the backend to execute the Python script
	// 	const response = await fetch('/get_details', {
	// 		method: 'GET',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 	});
	// }

	useEffect(()=>{
		sendDataToBackend(props.searchValue)
	},[])

	const sendDataToBackend = async (searchValue) => {
		// console.log("yes")
		const data = {
			'text': searchValue
		};

		try {
			await axios.post('http://localhost:5000/predict', data)
				.then((response) => {
					// console.log(response.status, response.data);
					// console.log(typeof(response.data.prediction.docs))
					props.sendToSearchBox(response.data.prediction.docs)
				});

		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className='col col-sm-4'>
			<input
				className='form-control'
				value={props.value}
				onKeyPress={handleKeyPress}
				placeholder='Type to search...'
			></input>
		</div>
	);
};



export default SearchBox;
