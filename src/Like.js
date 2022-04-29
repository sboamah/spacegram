import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import {useState,useEffect} from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Like() {

const [isLiked, setLiked] = useState(localStorage.getItem('isLiked') === 'false');

useEffect(() => {
    localStorage.setItem('isLiked', isLiked);
  }, [isLiked]);


const toggle = () => {

    setLiked(!isLiked);
    console.log(isLiked);

};

	return (
	<div className="container">
		<div
			className="container"
			style={{width: "2%" , color: "black"}}
			onClick={() => toggle()}
		>
			{isLiked === false ? (
			<FontAwesomeIcon icon={farHeart} />
			) : (
			<FontAwesomeIcon icon={faHeart} />
			)}
		</div>
		
	</div>
	);
}


export default Like;
