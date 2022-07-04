import React, { useState } from "react";
import "../style.css";
import banner from "../../src/images/SecondHand.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css";
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Register() {
  let [showPassword, setShowPassword] = useState(false);
  const checkShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
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
        <div>
          <input type={showPassword ? "password" : "text"} className="input-text-register" placeholder="Masukkan password" name="password">
            {/* add icon eyes*/}
          </input>
          <button className="icon-password">{showPassword ? <BsEyeSlash onClick={checkShowPassword} /> : <BsEye onClick={checkShowPassword} />}</button>
        </div>
        <Link to="/login">
          <button className="button-simpan-register">Daftar</button>
        </Link>
        <label className="text-register">
          <h6>
            Sudah punya akun?{" "}
            <Link to="/home">
              <span style={{ color: "#7126B5" }}>Masuk di sini</span>
            </Link>
          </h6>
        </label>
      </div>
    </div>
  );
}
