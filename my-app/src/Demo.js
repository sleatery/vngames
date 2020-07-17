import React from 'react';
import Header from './componentspractice/Header';
import Product from './componentspractice/Product';
import './App.css';
function Demo() {

  showNao(clashofclan) {
     if (clashofclan.status) {

		return <h6>
     Ten game ne :  {clashofclan.tengame} <br/>
     cap townhall : {clashofclan.numbergame} <br/>
     ng choi:       {clashofclan.vinh}
     status: {clashofclan.status ? "OK" : "deo ok"}
		</h6>
	}
}

	var a=5;
	var b= 7;
var clashofclan = {
tengame: 'COC',
numbergame: 13,
vinh: 'vinhlun',
status: true
};

  return (
  
    <div>

      <nav className="navbar navbar-inverse">
      	<div className="container-fluid">
      		<a className="navbar-brand" href="#">Từ navbar của demo.js</a>
      		<ul className="nav navbar-nav">
      			<li className="active">
      				<a href="#">Trang chủ</a>
      			</li>
      			<li>
      				<a href="#">Link</a>
      			</li>
      		</ul>
      	</div>
       </nav>
       <div className="ml-30">

             <Header/>

       a = {a} 
      <br/>
       b = {b}  <br/>

a + b = {a+b}
 {this.showNao(clashofclan)}

       </div>

       <div className="row">
       	<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
       		<Product />
       	</div>
       	<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
       		       		<Product />

       	</div>
       	<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
       		       		<Product />

       	</div>
       </div>
    </div>
  );
}

export default Demo;
