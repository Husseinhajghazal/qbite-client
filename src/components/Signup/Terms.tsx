"use client";

import React from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

const Terms = ({ onClick }: { onClick: () => void }) => {
  const termsElemnet = document.getElementById("terms")!;

  return createPortal(
    <motion.div
      initial={{ marginTop: -700 }}
      exit={{ marginTop: -700 }}
      animate={{ marginTop: 0 }}
      className="w-3/4 md:max-w-[600px] lg:max-w-[800px] bg-white z-20 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-3/4 overflow-y-scroll p-10 rounded-2xl"
    >
      <h3 className="text-xl font-semibold mb-3">
        Terms and Conditions for Restaurant Management Services
      </h3>
      <div className="mb-2 pl-2">
        <h4 className="text-lg font-medium mb-1">1. Acceptance of Terms</h4>
        <p className="pl-4 text-blue-400">
          By using our restaurant management services, you agree to comply with
          and be bound by these terms and conditions. If you do not agree with
          any part of these terms, please refrain from using our services.
        </p>
      </div>
      <div className="mb-2 pl-2">
        <h4 className="text-lg font-medium mb-1">2. Services Provided</h4>
        <p className="pl-4 text-blue-400">
          We offer restaurant management services, including but not limited to
          staff training, inventory management, marketing, and operational
          support.
        </p>
      </div>
      <div className="mb-2 pl-2">
        <h4 className="text-lg font-medium mb-1">3. Fees and Payments</h4>
        <p className="pl-4 text-blue-400">
          a. Clients will be charged fees based on the services provided, as
          outlined in a separate agreement.
          <br />
          b. Payment terms and methods will also be specified in the separate
          agreement.
        </p>
      </div>
      <div className="mb-2 pl-2">
        <h4 className="text-lg font-medium mb-1">4. Confidentiality</h4>
        <p className="pl-4 text-blue-400">
          We will keep all your business-related information confidential. We
          may use this information solely for the purpose of providing our
          services.
        </p>
      </div>
      <div className="mb-2 pl-2">
        <h4 className="text-lg font-medium mb-1">
          5. Responsibilities of the Client
        </h4>
        <p className="pl-4 text-blue-400">
          a. The client is responsible for providing accurate and up-to-date
          information about the restaurant&apos;s operations.
          <br />
          b. The client must comply with all local, state, and federal laws and
          regulations.
        </p>
      </div>
      <div className="mb-2 pl-2">
        <h4 className="text-lg font-medium mb-1">6. Termination</h4>
        <p className="pl-4 text-blue-400">
          a. Either party may terminate the service agreement with written
          notice.
          <br />
          b. In the event of termination, any outstanding fees are still
          payable.
        </p>
      </div>
      <div className="mb-2 pl-2">
        <h4 className="text-lg font-medium mb-1">7. Liability</h4>
        <p className="pl-4 text-blue-400">
          a. Our liability is limited to the cost of the services provided.
          <br />
          b. We are not responsible for any losses or damages beyond our
          control.
        </p>
      </div>
      <div className="mb-2">
        <h4 className="text-lg font-medium mb-1">
          8. Changes to Terms and Conditions
        </h4>
        <p className="pl-4 text-blue-400">
          We reserve the right to update or modify these terms and conditions at
          any time. Clients will be notified of any changes.
        </p>
      </div>
      <div className="mb-2 pl-2">
        <h4 className="text-lg font-medium mb-1">9. Governing Law</h4>
        <p className="pl-4 text-blue-400">
          These terms and conditions are governed by the laws of Your
          Jurisdiction.
        </p>
      </div>
      <div className="mb-2 pl-2">
        <h4 className="text-lg font-medium mb-1">10. Contact Information</h4>
        <p className="pl-4 text-blue-400">
          If you have any questions or concerns about these terms and
          conditions, please contact us at Your Contact Information.
        </p>
      </div>
      <div className="mt-8">
        <button
          type="button"
          onClick={onClick}
          className="mx-auto w-24 h-8 lg:w-32 lg:h-10 hidden md:flex justify-center items-center pb-1 border-[#2f834f] border-2 rounded-3xl text-[#2f834f] text-md lg:text-xl font-semibold hover:bg-[#2f834f] hover:text-white duration-300"
        >
          I agree
        </button>
      </div>
    </motion.div>,
    termsElemnet
  );
};

export default Terms;
