import React from "react";
import "./style.css";
import NavbarMain2 from "../../components/navbar/NavbarMain2";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SellerHalamanProduk() {
  return (
    <div>
      <NavbarMain2 />
      <div className="wrapper-product2">
        <div className="img-product2">
          <img src={require("../../images/jam-tangan3.png")} alt="jam" />
        </div>
      </div>
      <div className="deskripsi">
        <h3>Deskripsi</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
          aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="keterangan">
        <div className="text-keterangan">
          <p>
            <b>Jam Tangan Casio</b>
          </p>
          <p>Aksesoris</p>
          <p>
            <b>Rp 250.000</b>
          </p>
          <button className="button-upload-produk">Terbitkan</button>
          <button className="button-edit-produk">Edit</button>
        </div>
      </div>
    </div>
  );
}
