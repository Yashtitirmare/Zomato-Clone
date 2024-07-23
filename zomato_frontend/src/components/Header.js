import React from "react";
import "../Styles/Header.css";
import Modal from "react-modal";
import { useState } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";

const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    height: "auto",
    width: "20%",
    right: "auto",
    bottom: "auto",
    marginRight: "-20%",
    transform: "translate(-50%, -50%)",
    color: "red",
  },
};
export default function Header() {
  const [isLoginModalOpen, setLoginModal] = useState(false);
  const [isCreateModalOpen, setCreateModal] = useState(false);

  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <div>
      <div className="header">
        <div className="s-logo">
          <span><Link to='/' style={{textDecoration: 'none', color: 'red'}}>e!</Link></span>
        </div>

        <div className="btn-group login-block">
          <button className="login" onClick={() => setLoginModal(true)}>
            Login
          </button>
          <button
            className="create__account"
            onClick={() => setCreateModal(true)}
          >
            Create Account
          </button>
        </div>
      </div>

      <Modal isOpen={isLoginModalOpen} style={customStyles}>
        {/* <h1>Login Modal
              <button onClick={()=> setLoginModal(false)} className='btn btn-danger'>X</button>
          </h1> */}
        <div className="login__page">
          <h1 className="head__login">Login</h1>
          <button
            onClick={() => setLoginModal(false)}
            className="btn__danger float-end"
            >
            X
          </button>
        </div>
        <div className="container">
          <label for="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />
          <label for="pswd">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Username"
            name="pswd"
            required
          />
          <button type="submit" className="login__button" onClick={() => setLoginModal(false)}>
            Login
          </button>
          <label>
            <input
              type="checkbox"
              checked="checked"
              name="remember"
              className="remeber__checkbox"
            />{" "}
            Remember me
          </label>
          <br/>
          <br/>
          <h5 onClick={() =>{ setLoginModal(false); setCreateModal(true)}} className="create__acc">Create Account🚀 </h5>
        </div>
        <br/>
        <FacebookLogin
          appId="572655957706152"
          autoLoad={false}
          fields="name,email,picture"
          cssClass="fb__class"
          icon="fa-facebook"
          callback={() => responseFacebook}
          textButton=""
        />
        {/* , document.getElementById('demo') */}
        <GoogleLogin
          clientId="684557288375-mtvvdi22slujnvo93gpurqhlb4t5r3k1.apps.googleusercontent.com"
          buttonText="Google"
          // onSuccess={responseGoogle}
          // onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          className="google__class"
        />
      </Modal>

      <Modal isOpen={isCreateModalOpen} style={customStyles}>
        {/* <h1>Login Modal
              <button onClick={()=> setLoginModal(false)} className='btn btn-danger'>X</button>
          </h1> */}
        <div className="login__page">
          <h1 className="head__login">Create Account</h1>
          <button
            onClick={() => setCreateModal(false)}
            className="btn__create_danger float-end"
>
            X
          </button>
        </div>
        <div className="container">
          <label for="uname">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter your email"
            name="uname"
            required
          />
          <label for="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />
          <label for="pswd">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter passwor"
            name="pswd"
            required
          />
          <label for="pswd">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter password"
            name="pswd"
            required
          />
          <button type="submit" className="login__button" onClick={() => setCreateModal(false)}>
            Sing Up
          </button>
          <label>
            <input
              type="checkbox"
              checked="checked"
              name="remember"
              className="remeber__checkbox"
            />{" "}
            Remember me
          </label>
          <br/>
          
          <h5 onClick={() =>{ setLoginModal(true); setCreateModal(false)}} className="create__acc">Login🚀 </h5>
        </div>
        <br/>
        <FacebookLogin
          appId="572655957706152"
          autoLoad={false}
          fields="name,email,picture"
          cssClass="fb__class"
          icon="fa-facebook"
          callback={() => responseFacebook}
          textButton=""
        />
        {/* , document.getElementById('demo') */}
        <GoogleLogin
          clientId="684557288375-mtvvdi22slujnvo93gpurqhlb4t5r3k1.apps.googleusercontent.com"
          buttonText="Google"
          // onSuccess={responseGoogle}
          // onFailure={responseGoogle}
          // cookiePolicy={"single_host_origin"}
          className="google__class"
        />
      </Modal>
    </div>
  );
}
