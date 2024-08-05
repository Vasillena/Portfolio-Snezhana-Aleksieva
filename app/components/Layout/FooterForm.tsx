import Link from "next/link";

export default function FooterForm(): JSX.Element {
  return (
    <div className="mt-3 flex flex-col items-center lg:items-start">
      <form
        id="contact"
        action="https://formsubmit.co/vassito@abv.bg"
        method="POST"
      >
        <div className="flex flex-col gap-5">
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              aria-label="Full Name"
              required
              className="block px-2.5 pb-1.5 pt-3 w-[340px] bg-transparent rounded-lg border border-[#B0752A] appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=""
            />
            <label
              htmlFor="name"
              className="absolute text-gray-500 duration-300 transform -translate-y-5 sm:-translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#f9f7f4] px-2 peer-focus:px-2 peer-focus:text-[#415064] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Full Name
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              aria-label="Email"
              required
              className="block px-2.5 pb-1.5 pt-3 w-[340px]  bg-transparent rounded-lg border border-[#B0752A] appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=""
            />
            <label
              htmlFor="email"
              className="absolute text-gray-500 duration-300 transform -translate-y-5 sm:-translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#f9f7f4] px-2 peer-focus:px-2 peer-focus:text-[#415064] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Email
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="subject"
              name="subject"
              aria-label="Subject"
              required
              className="block px-2.5 pb-1.5 pt-3 w-[340px]  bg-transparent rounded-lg border border-[#B0752A] appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=""
            />
            <label
              htmlFor="subject"
              className="absolute text-gray-500 duration-300 transform -translate-y-5 sm:-translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#f9f7f4] px-2 peer-focus:px-2 peer-focus:text-[#415064] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Subject
            </label>
          </div>

          <div className="relative">
            <textarea
              id="message"
              name="message"
              aria-label="Message"
              cols={50}
              rows={4}
              placeholder=""
              required
              className="block px-2.5 pb-1.5 pt-3 w-[340px] bg-transparent rounded-lg border border-[#B0752A] appearance-none focus:outline-none focus:ring-0 peer resize-none"
            />
            <label
              htmlFor="message"
              className="absolute text-gray-500 duration-300 transform -translate-y-5 sm:-translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#f9f7f4] px-2 peer-focus:px-2 peer-focus:text-[#415064] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Your Message
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="checkbox"
              name="checkbox"
              type="checkbox"
              aria-label="Terms and Conditions"
              //   value=""
              required
              className="w-4 h-4 bg-[#F2EEE9] border-[#B0752A] rounded focus:ring-[#F2EEE9] focus:ring-2"
            />
            <label htmlFor="link-checkbox" className="ms-2 sm:text-xl">
              I agree to processing of personal data.
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-[340px] px-11 py-3 bg-[#F2EEE9] text-[#B0752A] font-bold sm:text-xl rounded border-b border-[#B0752A]"
            >
              Submit
            </button>
          </div>

          <div>
            <label htmlFor="email" />
            <input type="hidden" name="_subject" value="New submission!" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/thank-you"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
