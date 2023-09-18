import React from "react";
import noproductImg from "../../assets/icons/nodata.png"
import "./addFarmer.css";
import Modal from "../Modal/Modal";

const AddFarmer = () => (
  <>
    <div>
      <div className="dashBox">
        <div id="productListing" className="productListing">
          <div className="addProduct">
            <p className="productTitle">Agent Dashboard</p>
            <Modal />
            {/* <button className="btn">add farmer</button> */}
          </div>
          <div className="emptyBox">
<img src={noproductImg} className="noProductImg" alt=""/>
 <p className="noProductsText">No data</p>
</div>
        
        </div>
      </div>
    </div>
  </>
);

export default AddFarmer;
