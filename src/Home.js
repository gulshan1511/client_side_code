import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DataList from './components/DataList';
import DataListHeading from './components/DataListHeading';
import SearchBox from './components/SearchBox';
import axios from 'axios';


export const sendDataToBackend = async (searchValue) => {
	const data = {
		'text': searchValue
	};

	try {
		const response = await axios.post('/predict', data);
		console.log(response.data); // Optional: Handle response from the backend
	} catch (error) {
		console.error(error);
	}
};


const Home = () => {
	const [searchValue, setSearchValue] = useState('Someon Stole my mobile phone');
	const [responseFromSearchBox, setresponseFromSearchBox] = useState([])

	const handleResponseFromSearchBox = async (data) => {
		setresponseFromSearchBox(data);
	}

	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<DataListHeading heading='Data Related to search' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} sendToSearchBox={handleResponseFromSearchBox} />
			</div>
			<div className="container">
				<div className="row">
					{responseFromSearchBox.map((element) => {
						return <div className="col-md-4" key={element.tid}>
							<DataList description={element.headline} title={element.title} docsource={element.docsource} tid = {element.tid}/>
						</div>
					})}
				</div>
			</div>
		</div>
	);

};
export default Home;

