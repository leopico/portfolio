import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

// import toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//   <input type="text" className="input" placeholder="subject" />;

const ContactEmail = () => {
  const form = useRef();

  const senEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_nba6typ",
        "template_2gaa0cr",
        form.current,
        "c5tbLDWMhMfRFbNMu"
      )
      .then(
        (result) => {
          toast("Message already!");
          setTimeout(function () {
            window.location.reload();
          }, 2000);
        },
        (error) => {
          toast("Try again!");
        }
      );
  };
  return (
    <form
      ref={form}
      onSubmit={senEmail}
      className="space-y-8 w-full max-w-[780px]"
    >
      <div className="flex gap-8">
        <input
          required
          className="input"
          type="text"
          name="user_name"
          placeholder="Your name"
        />
        <input
          required
          className="input"
          name="user_email"
          type="email"
          placeholder="Your email"
        />
      </div>
      <input
        required
        className="input"
        name="user_subject"
        type="text"
        placeholder="Your subject"
      />
      <textarea
        required
        className="textarea"
        name="message"
        placeholder="Your message"
      />
      <input
        className="btn btn-md bg-accent hover:bg-accent-hover cursor-pointer"
        type="submit"
        value="Send"
      />
      <div>
        <ToastContainer className="bg-secondary text-white" />
      </div>
    </form>
  );
};

export default ContactEmail;
