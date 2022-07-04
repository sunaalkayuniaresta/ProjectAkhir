import React, { useState } from "react";
import "../style.css";
import banner from "../../src/images/SecondHand.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Login() {
  let [showPassword, setShowPassword] = useState(false);
  const checkShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="wrapperLogin">
      <div className="secondhand-img-login">
        <img src={banner} width="100%" alt="" />
      </div>
      <div className="form-login">
        <h3 className="title-text-login">Daftar</h3>
        <label className="label-info-login">Nama</label>
        <input type="text" className="input-text-login" placeholder="Nama Lengkap" name="Nama" />
        <label className="label-info-login">Password</label>
        <div>
          <input type={showPassword ? "password" : "text"} className="input-text-login" placeholder="Masukkan password" name="password">
            {/* add icon eyes*/}
          </input>
          <button className="icon-password-login">{showPassword ? <BsEyeSlash onClick={checkShowPassword} /> : <BsEye onClick={checkShowPassword} />}</button>
        </div>
        <Link to="/home">
          <button className="button-simpan-login">Masuk</button>
        </Link>
        <label className="text-login">
          <h6>
            Belum punya akun?{" "}
            <Link to="/register">
              <span style={{ color: "#7126B5" }}>Daftar di sini</span>
            </Link>
          </h6>
        </label>
      </div>
    </div>
  );
}
