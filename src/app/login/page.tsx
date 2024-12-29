import Button from "@/components/button/Button";
import Container from "@/components/container/Container";
import Image from "next/image";
import React from "react";
import LoginIcon from "./LoginIcon";

const inputWrapper = "flex flex-col gap-2";
const inputStyle = "border-b-2 outline-none focus-visible:border-b-black";
const errorStyle = "text-sm text-red-500";

const Login = () => {
  return (
    <main className="bg-secondary-400">
      <section className="w-full min-h-screen py-[120px] flex items-center justify-center ">
        <Container>
        <div className="relative mx-auto rounded-2xl flex justify-center items-center z-10 shadow-2xl">
        <LoginIcon/>
        </div>

          <div className="flex gap-5 px-5 py-10 rounded-2xl shadow-2xl bg-white">
            <div className=" flex-[2] hidden sm:flex justify-center items-center">
              <div className="relative w-[200px] h-[200px]">
                <Image fill src="/assets/registerGraphic1.svg" alt="" />
              </div>
            </div>
            <div className=" flex-[3] ">
              <form className="flex flex-col gap-5">
                <h1 className="text-2xl md:text-4xl font-bold text-center ">
                  Login <span className="text-accent-500">here</span>
                </h1>

                <div className={inputWrapper}>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className={inputStyle}
                  />
                  {/* <p className={errorStyle}>Email is required</p> */}
                </div>
                <div className={inputWrapper}>
                  <input
                    type="password"
                    placeholder="Enter your Password"
                    className={inputStyle}
                  />
                  {/* <p className={errorStyle}>Password is required</p> */}
                </div>

                <div>
                  {" "}
                  <Button type="accent" size="big" rounded>
                    Login
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

export default Login;
