import React from "react";
import "../../styles/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';




const Home = ({first, second, third, fourth, five, six}) => {
	return (

	
   		<div className="card text-bg-dark mb-3" >

     <div className="card-body">
       <h5 className="card-title">Temporizador</h5>
       <p className="card-text"></p>
		<div class="d-flex flex-row mb-3 ">

	  <div className="cuadrado text-center py-2"><i class="fa-regular fa-clock icon"></i></div>
	  <div className="cuadrado text-center  py-2 ">{six}</div>
	  <div className="cuadrado text-center  py-2">{five}</div>
	  <div className="cuadrado text-center  py-2">{fourth}</div>
	  <div className="cuadrado text-center  py-2">{third}</div>
	  <div className="cuadrado text-center  py-2">{second}</div>
	  <div className="cuadrado text-center  py-2">{first}</div>


   	  
   	  
   	  
   	  
		 </div>
     </div>
   </div>



	);
};

export default Home;
