import React from "react";

const Contact = () => {
  return (
    <section className="bg-blue-50" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-48 lg:py-10">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-10">
            <p className="text-4xl font-extrabold uppercase tracking-wide text-blue-600">
              Contact Me
            </p>
          </div>
        </div>
        <div className="flex items-stretch justify-center mb-12">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-gray-600">
                Feel free to reach out to me at any time, and I will get back to
                you as soon as possible. Your satisfaction is my priority, and I
                look forward to hearing from you.
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">
                      Our Address
                    </h3>
                    <p className="text-gray-600">
                      Iccons Road, Shoranur, Palakkad
                    </p>
                    <p className="text-gray-600">Kerala, India</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">
                      Contact
                    </h3>
                    <p className="text-gray-600">Mobile: +1 (123) 456-7890</p>
                    <p className="text-gray-600">Mail: aswin@gmail.com</p>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="card h-fit max-w-6xl p-5 md:p-6 text-gray-900"
              id="form"
            >
              <h2 className="mb-4 text-2xl font-bold ">
                Ready to Get Started?
              </h2>
              <form id="contactForm">
                <div className="mb-4">
                  <input
                    type="text"
                    id="name"
                    autoComplete="given-name"
                    placeholder="Your name"
                    className="mb-4 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md "
                    name="name"
                  />
                  <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    placeholder="Your email address"
                    className="mb-4 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md "
                    name="email"
                  />
                  <textarea
                    id="textarea"
                    name="textarea"
                    cols="30"
                    rows="5"
                    placeholder="Write your message..."
                    className="mb-4 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md "
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md "
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
