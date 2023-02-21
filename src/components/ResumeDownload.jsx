import jsPDF from "jspdf";
import React from "react";
import { FiDownload } from "react-icons/fi";
import Resume from "../assets/img/leopico.jpg";

const ResumeDownload = () => {
  const pdfGenerate = () => {
    var doc = new jsPDF("portrait", "px", "a4", "false");
    doc.addImage(Resume, "PNG", 0, 0, 450, 625);
    doc.save("resume.pdf");
  };
  return (
    <button
      onClick={() => pdfGenerate()}
      className="btn btn-md bg-accent hover:bg-accent-hover transition-all rounded-full"
    >
      Resume <FiDownload className="ml-4 text-secondary" />
    </button>
  );
};

export default ResumeDownload;
