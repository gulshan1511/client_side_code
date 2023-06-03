import React from 'react';
import '../App.css';
import {
    Link
} from "react-router-dom";

const DataList = (props) => {
	const linkUrl = "/detail/" + props.tid
	return (
		<>
			<div className="my-3">
				<div className="card">
					<span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '85%', zIndex: '1' }} dangerouslySetInnerHTML={{ __html: props.docsource }}>
					</span>
					{/* <img src="https://homestaymatch.com/images/no-image-available.png" className="card-img-top cardImg card__image" alt="..." /> */}
					<div className="card-body">
						<h5 className="card-title title-color" dangerouslySetInnerHTML={{ __html: props.title }}></h5>
						<p className="card-text title-color" dangerouslySetInnerHTML={{ __html: props.description}}></p>
						<Link className="btn btn-sm btn-dark" to={linkUrl} target="_blank">more detail</Link>
						{/* <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
						<a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">more detail</a> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default DataList;
