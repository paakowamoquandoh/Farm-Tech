import React from "react";
import noproductImg from "../../assets/icons/nopro.png"



const AddFarmer = () => (
<div className="">

   <div id="productListing" className="productListing">
    <div className="addProduct">
        <p className="productTitle">Application Successfull</p>
        <button className="btn">add farmer</button>
    </div>
    <img src={noproductImg} className="noProductImg" alt=""/>
    <p className="noProductsText">No data</p>
   </div>
   <div className="backtohome">
    <a href="/">Go Back to Homepage</a>
   </div>
   
</div>
);

export default AddFarmer;
