import React from "react";
import "../style.css";
import banner from "../../src/images/SecondHand.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css";

export default function Register() {
  return (
    <div className="register">
      {/* <div className="container"> */}
      <div className="bagidua">
        <div className="secondhand-img-register">
          <img src={banner} width="100%" alt="" />
        </div>
        <div className="form-register">
          <h3 className="title-text-register">Daftar</h3>
          <label className="label-info-register">Nama</label>
          <input type="text" className="input-text-register" placeholder="Nama Lengkap" name="Nama" />
          <label className="label-info-register">Email</label>
          <input type="email" className="input-text-register" placeholder="Contoh: johndee@gmail.com" name="email" />
          <label className="label-info-register">Password</label>
          <input type="password" className="input-text-register" placeholder="Masukkan password" name="password" />
          <button className="button-simpan-register">Daftar</button>
          <label className="text-register">
            <h6>
              Sudah punya akun? <span style={{ color: "#7126B5" }}>Masuk di sini</span>
            </h6>
          </label>
        </div>
      </div>
    </div>
  );
}
