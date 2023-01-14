import React from "react";
import { FiInbox } from "react-icons/fi";
import ReactWhatsapp from "react-whatsapp";

const WhatsAppBtn = () => {
  return (
    <div>
      <ReactWhatsapp
        className="btn btn-md bg-accent hover:bg:accent-hover md:btn-md rounded transition-all"
        number="+95 9 767 091198"
        message="How can I assit you! 🤩"
      >
        WhatsApp <FiInbox className="ml-4 text-secondary" />
      </ReactWhatsapp>
    </div>
  );
};

export default WhatsAppBtn;
