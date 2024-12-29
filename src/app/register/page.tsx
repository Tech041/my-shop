"use client";
import Button from "@/components/button/Button";
import Container from "@/components/container/Container";
import Image from "next/image";
import React, { useState } from "react";
import RegisterIcon from "./RegisterIcon";

const inputWrapper = "flex flex-col gap-2";
const inputStyle = "border-b-2 outline-none focus-visible:border-b-black";
const errorStyle = "text-sm text-red-500";

const Register = () => {
  const errors = [];

  // State for handling inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // State for input error messages
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [addressError, setAddressError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) {
      setNameError("Name is required");
      errors.push("Name is required");
    }

    if (!email) {
      setEmailError("Email is required");
      errors.push("Email is required");
    }
    if (!password) {
      setPasswordError("Password is required");
      errors.push("Password is required");
    }
    if (!confirmPassword) {
      setConfirmPasswordError("Enter Password again");
      errors.push("Enter Password again");
    }
    if (!phone) {
      setPhoneError("Phone number is required");
      errors.push("Phone number is required");
    }
    if (!address) {
      setAddressError("Home address is required");
      errors.push("Home address is required");
    }
    
    if(errors.length > 0){
      return
    }
    //Submitting data to the server
    console.log("Submitting data to the backend ....");
    
  };
  return (
    // Added pt-10 and md:pt-0
    <main className="bg-secondary-400 pt-10 md:pt-0">
      <section className="w-full min-h-screen py-[120px] flex ">
        <Container>
          {/* Added this immediate div */}
          <div className="relative mx-auto   rounded-2xl flex justify-center items-center z-10 shadow-2xl">
            <RegisterIcon />
          </div>
          <div className="flex gap-5 px-5 py-10 rounded-2xl shadow-2xl bg-white">
            <div className=" flex-[2] hidden sm:flex justify-center items-center">
              <div className="relative w-[200px] h-[200px]">
                <Image fill src="/assets/registerGraphic1.svg" alt="" />
              </div>
            </div>
            <div className=" flex-[3] ">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Added pt-5 and md:pt-0 */}
                <h1 className="text-2xl md:text-4xl font-bold text-center pt-5 md:pt-0 ">
                  Register <span className="text-accent-500">here</span>
                </h1>
                <div className={inputWrapper}>
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Enter your name"
                    className={inputStyle}
                  />
                  {nameError && <p className={errorStyle}>{nameError}</p>}
                </div>
                <div className={inputWrapper}>
                  <input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Enter your email"
                    className={inputStyle}
                  />
                  {emailError && <p className={errorStyle}>{emailError}</p>}{" "}
                </div>
                <div className={inputWrapper}>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Enter your Password"
                    className={inputStyle}
                  />
                  {passwordError && (
                    <p className={errorStyle}>{passwordError}</p>
                  )}
                </div>
                <div className={inputWrapper}>
                  <input
                    type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    placeholder="Confirm Password"
                    className={inputStyle}
                  />
                  {confirmPasswordError && (
                    <p className={errorStyle}>{confirmPasswordError}</p>
                  )}
                </div>
                <div className={inputWrapper}>
                  <input
                    type="tel"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    placeholder="Enter your phone"
                    className={inputStyle}
                  />
                  {phoneError && <p className={errorStyle}>{phoneError}</p>}
                </div>
                <div className={inputWrapper}>
                  <input
                    type="text"
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    placeholder="Enter your address"
                    className={inputStyle}
                  />
                  {addressError && <p className={errorStyle}>{addressError}</p>}
                </div>
                <div>
                  {" "}
                  <Button type="accent" size="big" rounded>
                    Register
                  </Button>
                </div>
              </form>
            </div>
            <div className=" flex-[2] hidden md:flex justify-center items-center">
              <div className="relative w-[200px] h-[200px]">
                <Image fill src="/assets/registerGraphic2.svg" alt="" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Register;
