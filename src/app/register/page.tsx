"use client";
import Button from "@/components/button/Button";
import Container from "@/components/container/Container";
import Image from "next/image";
import React, { useState } from "react";
import RegisterIcon from "./RegisterIcon";
import * as z from "zod";

const inputWrapper = "flex flex-col gap-2";
const inputStyle = "border-b-2 outline-none focus-visible:border-b-black";
const errorStyle = "text-sm text-red-500";
const schema = z
  .object({
    name: z.string().min(1, { message: "Name is required!" }),
    email: z
      .string()
      .email("Not a valid email address")
      .min(1, { message: "Email is required!" }),
    password: z
      .string()
      .min(6, { message: "Password must be atleast 6 characters!" }),
    confirmPassword: z.string().min(6, { message: "Enter Password again!" }),
    phone: z.string().min(1, { message: "Enter your number" }),
    address: z.string().min(1, { message: "Home address is required!" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password does not match",
    path: ["confirmPassword"],
  });

const Register = () => {
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
              <form className="flex flex-col gap-5">
                {/* Added pt-5 and md:pt-0 */}
                <h1 className="text-2xl md:text-4xl font-bold text-center pt-5 md:pt-0 ">
                  Register <span className="text-accent-500">here</span>
                </h1>
                <div className={inputWrapper}>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className={inputStyle}
                  />
                </div>
                <div className={inputWrapper}>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className={inputStyle}
                  />
                </div>
                <div className={inputWrapper}>
                  <input
                    type="password"
                    placeholder="Enter your Password"
                    className={inputStyle}
                  />
                </div>
                <div className={inputWrapper}>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className={inputStyle}
                  />
                </div>
                <div className={inputWrapper}>
                  <input
                    type="tel"
                    placeholder="Enter your phone"
                    className={inputStyle}
                  />
                </div>
                <div className={inputWrapper}>
                  <input
                    type="text"
                    placeholder="Enter your address"
                    className={inputStyle}
                  />
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
