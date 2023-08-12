import React from "react";
import noproductImg from "../../assets/icons/nopro.png"
import "./addFarmer.css";
import Modal from "../Modal/Modal";
import Navbar from "../Navbar/Navbar";




const AddFarmer = () => (
    
<div>
    <Navbar/>
<div className="dashBox">


<div id="productListing" className="productListing">

 <div className="addProduct">
     <p className="productTitle">Application Successfull</p>
     <Modal />
     {/* <button className="btn">add farmer</button> */}
 </div>
<div className="emptyBox">
<img src={noproductImg} className="noProductImg" alt=""/>
 <p className="noProductsText">No data</p>
</div>
</div>
<div className="backtohome">
 <a href="/">Go Back to Homepage</a>
</div>

</div>
</div>
);

export default AddFarmer;
