"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export function ContactForm() {
  const [state, handleSubmit] = useForm("mgejapgq");
  if (state.succeeded) {
    return (
      <p className="px-5 text-xl  my-5 mx-2 lg:mx-auto lg:max-w-6xl">
        Thank you for submitting your message.
      </p>
    );
  }

  return (
    <div>
      <form
        className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded px-5 pt-6 pb-8 my-5 mx-2 lg:mx-auto lg:max-w-6xl"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight transition duration-300 ease-in-out focus:ring focus:outline-none "
            id="fullName"
            type="text"
            name="Full Name"
            placeholder="Name"
            required
            autoComplete="name"
          />
          <ValidationError
            prefix="Name"
            field="fullName"
            errors={state.errors}
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline duration-300 ease-in-out focus:ring "
              id="emailAddress"
              type="email"
              name="Email"
              placeholder="Email Address"
              required
              autoComplete="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline duration-300 ease-in-out focus:ring "
              id="subject"
              type="text"
              name="Subject"
              placeholder="Subject"
              required
            />
            <ValidationError
              prefix="Subject"
              field="subject"
              errors={state.errors}
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  duration-300 ease-in-out focus:ring focus:outline-none  "
            id="message"
            name="Message"
            rows={6}
            placeholder="Enter your message here..."
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="cursor-pointer bg-slate-700 hover:bg-slate-500 transition duration-150 ease-in-out text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
