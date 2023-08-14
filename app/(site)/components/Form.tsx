"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export function ContactForm() {
  const [formState, submit] = useForm(process.env.NEXT_PUBLIC_FORM as string);
  if (formState.succeeded) {
    return <p>Thank you for your message!</p>;
  }

  console.log(formState.errors);

  return (
    <div>
      <form
        className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded px-5 pt-6 pb-8  my-5 mx-2 lg:mx-auto lg:max-w-6xl"
        onSubmit={submit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fullName"
            type="text"
            placeholder="Name"
            required
            autoComplete="name"
          />
        </div>
        <div className="mb-4 lg:flex">
          <div className="lg:w-1/2 lg:mr-2 mb-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="emailAddress"
            >
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="emailAddress"
              type="email"
              placeholder="Email Address"
              required
              autoComplete="email"
            />
          </div>
          <div className="lg:w-1/2 lg:ml-2 mb-4 lg:mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="subject"
              type="text"
              placeholder="Subject"
              required
              autoComplete="email"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows={6}
            placeholder="Enter your message here..."
            required
            autoComplete="email"
          />
        </div>
        <div className="flex items-center justify-between">
          <input
            className="cursor-pointer bg-slate-700 hover:bg-slate-500 transition duration-150 ease-in-out text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            value="Submit"
          ></input>
        </div>{" "}
      </form>
    </div>
  );
}
