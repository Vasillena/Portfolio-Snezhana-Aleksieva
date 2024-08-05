import Image from "next/image";
import athena from "next/font/local";
import { cn } from "@/lib/utils";
import image2 from "@/public/hero-5.png";
import image3 from "@/public/dots.svg";

const myFont = athena({ src: "../../public/Athena-Regular.ttf" });

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto mt-14 grid lg:grid-cols-3 gap-16 text-center lg:text-left">
        <div className="col-span-2">
          <h1
            className={cn(
              "text-3xl min-[400px]:text-4xl sm:text-6xl",
              myFont.className
            )}
          >
            Privacy Policy
          </h1>
        </div>
        <div className="hidden xl:inline-block w-[415px] h-[331px] justify-self-end relative -top-32">
          <Image
            src={image2}
            alt="Decor image"
            fill
            object-fit="contain"
            // style={{
            //   width: "374px",
            //   height: "auto",
            // }}
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-36 xl:-mt-[132px] flex justify-center lg:justify-start">
        <Image
          src={image3}
          alt="Dots"
          style={{
            width: "160px",
            height: "auto",
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto mt-20">
        <div>
          <h2 className={cn("text-lg sm:text-2xl ", myFont.className)}>
            1. Introduction
          </h2>
          <p className="text-lg sm:text-2xl mt-4">
            Thank you for visiting snezhana-aleksieva.com. This privacy policy
            outlines how we collect, use, store, and protect personal
            information obtained from users of our website. By accessing or
            using our website, you agree to the terms of this privacy policy.
          </p>
        </div>
        <div className="mt-10">
          <h2 className={cn("text-lg sm:text-2xl ", myFont.className)}>
            2. Information We Collect
          </h2>
          <div className="flex items-center">
            <div className="w-[5px] h-[5px] bg-[#415064] rounded-full mr-3" />
            <p className="text-lg sm:text-2xl mt-4">
              Personal Information: When you contact us, we may collect certain
              personally identifiable information, including but not limited to
              name, email address, mailing address, phone number.
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-[5px] h-[5px] bg-[#415064] rounded-full mr-3" />
            <p className="text-lg sm:text-2xl">
              Non-Personal Information: We may also collect non-personal
              information such as browser type, operating system, IP address,
              referring website.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <h2 className={cn("text-lg sm:text-2xl ", myFont.className)}>
            3. Use of Cookies
          </h2>
          <p className="text-lg sm:text-2xl mt-4">
            We use cookies and similar technologies to enhance user experience,
            analyze website traffic, and personalize content. Cookies are small
            text files stored on your device that help improve website
            functionality and performance. By using our website, you consent to
            the use of cookies in accordance with this privacy policy and our
            Cookie Policy.
          </p>
        </div>
        <div className="mt-10">
          <h2 className={cn("text-lg sm:text-2xl ", myFont.className)}>
            4. Google Analytics
          </h2>
          <p className="text-lg sm:text-2xl mt-4">
            We use Google Analytics, a web analytics service provided by Google
            LLC („Google”). Google Analytics uses cookies or other tracking
            technologies to collect information about how users interact with
            our website. This information is used to analyze website usage,
            compile reports, and provide insights to improve our website. Google
            Analytics does not collect personally identifiable information. By
            using our website, you consent to the processing of data by Google
            Analytics as described in Google’s Privacy Policy and for the
            purposes set forth in this privacy policy.
          </p>
        </div>
        <div className="mt-10">
          <h2 className={cn("text-lg sm:text-2xl ", myFont.className)}>
            5. Contact Form
          </h2>
          <p className="text-lg sm:text-2xl mt-4">
            If you use our contact form to get in touch with us, we may collect
            and store the information you provide, including your name, email
            address, and any other details you provide in your message. We use
            this information solely for the purpose of responding to your
            inquiry and providing the necessary assistance.
          </p>
        </div>
        <div className="mt-10">
          <h2 className={cn("text-lg sm:text-2xl ", myFont.className)}>
            6. Data Security
          </h2>
          <p className="text-lg sm:text-2xl mt-4">
            We are committed to ensuring the security of your personal
            information. We implement reasonable security measures to protect
            against unauthorized access, alteration, disclosure, or destruction
            of data. However, please note that no method of transmission over
            the internet or electronic storage is 100% secure, and we cannot
            guarantee absolute security.
          </p>
        </div>
        <div className="mt-10">
          <h2 className={cn("text-lg sm:text-2xl ", myFont.className)}>
            7. Third-Party Disclosure
          </h2>
          <p className="text-lg sm:text-2xl mt-4">
            We do not sell, trade, or transfer your personal information to
            third parties without your consent, except in the following
            circumstances:
          </p>
          <div className="flex items-center">
            <div className="w-[5px] h-[5px] bg-[#415064] rounded-full mr-3" />
            <p className="text-lg sm:text-2xl">
              We may share personal information with trusted third-party service
              providers who assist us in operating our website and delivering
              services to users.
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-[5px] h-[5px] bg-[#415064] rounded-full mr-3" />
            <p className="text-lg sm:text-2xl">
              We may disclose personal information if required by law or to
              protect our rights, property, or safety, or the rights, property,
              or safety of others.
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-[5px] h-[5px] bg-[#415064] rounded-full mr-3" />
            <p className="text-lg sm:text-2xl">
              In the event of a merger, acquisition, or sale of all or a portion
              of our assets, personal information may be transferred to the
              acquiring entity.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <h2 className={cn("text-lg sm:text-2xl ", myFont.className)}>
            8. Your Rights
          </h2>
          <p className="text-lg sm:text-2xl mt-4">
            You have certain rights regarding your personal information. You
            may:
          </p>
          <div className="flex items-center">
            <div className="w-[5px] h-[5px] bg-[#415064] rounded-full mr-3" />
            <p className="text-lg sm:text-2xl">
              Access, update, or correct your personal information by contacting
              us directly.
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-[5px] h-[5px] bg-[#415064] rounded-full mr-3" />
            <p className="text-lg sm:text-2xl">
              Object to the processing of your personal information
            </p>
          </div>
        </div>
        <div className="mt-10">
          <h2 className={cn("text-lg sm:text-2xl ", myFont.className)}>
            9. Changes to this Privacy Policy
          </h2>
          <p className="text-lg sm:text-2xl mt-4">
            We reserve the right to update or modify this privacy policy at any
            time. Any changes will be effective immediately upon posting the
            revised version on our website. We encourage you to review this
            policy periodically for any updates.
          </p>
        </div>
        <div className="mt-10">
          <h2 className={cn("text-lg sm:text-2xl ", myFont.className)}>
            10. Contact Us
          </h2>
          <p className="text-lg sm:text-2xl mt-4">
            If you have any questions or concerns about this privacy policy or
            our data practices, please contact us
            at snezhana-aleksieva@gmail.com.
          </p>
        </div>
      </div>
    </>
  );
}
