import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MoreDetail = () => {
    let {id} = useParams()

    const [details, setdetailValue] = useState([]);

    useEffect(()=>{
        sendDataToBackend(id)
    },[])

    const sendDataToBackend = async (id) => {
		console.log("yes")
		const data = {
			'text': id
		};

		try {
			await axios.post('http://localhost:5000/api/detail', data)
				.then((response) => {
					// console.log(response.status, response.data.prediction.doc);
                    setdetailValue(response.data.prediction)
					// console.log(typeof(response.data.prediction.docs))
					// props.sendToSearchBox(response.data.prediction.docs)
				});

		} catch (error) {
			console.error(error);
		}
	};

    // console.log(details)
  return (
    <div className='container'>
        <h1 dangerouslySetInnerHTML={{ __html: details.title }}></h1>
        <p dangerouslySetInnerHTML={{ __html: details.doc }}></p>
    </div>
  )
}

export default MoreDetail