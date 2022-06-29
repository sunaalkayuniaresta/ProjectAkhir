import React from "react";
// import "../style.css";
import banner from "../../src/images/SecondHand.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      {/* <div className="container"> */}
      <div className="row">
        <div className="col-6">
          <div className="secondhand-img">
            <img src={banner} width="100%" alt="" />
          </div>
        </div>
        <div className="col-md-6 sm-12">
          <div className="form">
          <div className="formulir-login">
            {/* <h3 className="h3">Daftar</h3> */}
            <span className="title-text-login">Masuk</span>
            <label className="label-info-login">
              Email
              <input type="email" className="input-text-login" placeholder="Contoh: johndee@gmail.com" name="email" />
            </label>
            <label className="label-info-login">
              Password
              <input type="password" className="input-text-login" placeholder="Masukkan password" name="password" />
            </label>
            <button className="button-simpan-login">Masuk</button>
            <label className="text-login">
              <h6>
                Belum punya akun? <span style={{ color: "#7126B5" }}>Daftar di sini</span>
              </h6>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
