import { useI18n } from "@/locales/client";

export default function FooterForm(): JSX.Element {
  const t = useI18n();

  async function handleSubmit(e: any) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "a89cba48-651f-4519-8814-e6234e609ccc",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
        apikey: "a89cba48-651f-4519-8814-e6234e609ccc",
        redirect: "https://www.snezhana-aleksieva.com/thank-you",
      }),
    });
    const result = await response.json();
    if (result.success) {
      window.location.href = "https://www.snezhana-aleksieva.com/thank-you";
      console.log(result);
    } else {
      console.error("Form submission failed:", result);
      window.location.href = "https://www.snezhana-aleksieva.com/form-failed";
    }
  }

  return (
    <div className="mt-3 flex flex-col items-center lg:items-start">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              aria-label="Full Name"
              required
              className="block px-2.5 pb-1.5 pt-3 w-[340px] sm:w-[412px] bg-transparent rounded border border-[#B0752A] appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=""
            />
            <label
              htmlFor="name"
              className="absolute text-gray-500 duration-300 transform -translate-y-5 sm:-translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#f9f7f4] px-2 peer-focus:px-2 peer-focus:text-[#415064] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              {t("footer.form-1")}
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              aria-label="Email"
              required
              className="block px-2.5 pb-1.5 pt-3 w-[340px] sm:w-[412px]  bg-transparent rounded border border-[#B0752A] appearance-none focus:outline-none focus:ring-0 peer"
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
              className="block px-2.5 pb-1.5 pt-3 w-[340px] sm:w-[412px]  bg-transparent rounded border border-[#B0752A] appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=""
            />
            <label
              htmlFor="subject"
              className="absolute text-gray-500 duration-300 transform -translate-y-5 sm:-translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#f9f7f4] px-2 peer-focus:px-2 peer-focus:text-[#415064] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              {t("footer.form-2")}
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
              className="block px-2.5 pb-1.5 pt-3 w-[340px] sm:w-[412px] bg-transparent rounded border border-[#B0752A] appearance-none focus:outline-none focus:ring-0 peer resize-none"
            />
            <label
              htmlFor="message"
              className="absolute text-gray-500 duration-300 transform -translate-y-5 sm:-translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#f9f7f4] px-2 peer-focus:px-2 peer-focus:text-[#415064] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              {t("footer.form-3")}
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="checkbox"
              name="checkbox"
              type="checkbox"
              aria-label="Terms and Conditions"
              required
              className="w-4 h-4 bg-[#f9f7f4] border-[#B0752A] rounded accent-[#F2EEE9] "
            />
            <label htmlFor="link-checkbox" className="ms-2 text-lg sm:text-xl">
              {t("footer.form-4")}
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-[340px] sm:w-[412px] px-11 py-3 bg-[#F2EEE9] text-[#8D5002] font-bold text-lg sm:text-xl rounded border-b border-[#B0752A] relative flex   items-center justify-center overflow-hidden  transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#B0752A]  before:duration-500 before:ease-out hover:shadow-2xl hover:shadow-[#B0752A] hover:text-[#F2EEE9]  hover:before:h-56 hover:before:w-[420px]"
            >
              <span className="relative z-10"> {t("footer.button")}</span>
            </button>
          </div>

          <div>
            <label htmlFor="email" />
            <input
              type="hidden"
              name="apikey"
              value="a89cba48-651f-4519-8814-e6234e609ccc"
            />
            <input
              type="hidden"
              name="redirect"
              value="https://www.snezhana-aleksieva.com/thank-you"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
