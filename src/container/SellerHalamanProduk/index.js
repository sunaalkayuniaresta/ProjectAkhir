import React from "react";
import "./style.css";
import NavbarMain2 from "../../components/navbar/NavbarMain2";

export default function SellerHalamanProduk() {
  return (
    <div>
      <NavbarMain2 />
      <div className="wrapper-product2">
        <div className="img-product2">
          <img src={require("../../images/jam-tangan3.png")} alt="jam" />
        </div>
      </div>
    </div>
  );
}
