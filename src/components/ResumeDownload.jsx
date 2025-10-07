import React, { useState } from "react";

const ResumeDownload = () => {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true); // Set loading state to true when the button is clicked..

    // Simulate the download process
    const link = document.createElement("a");
    link.href =
      "https://docs.google.com/document/d/1MkqY3eYXJNuxKe6izSTbmEXYSCEFG-Ux/edit?usp=sharing&ouid=107258765975842610472&rtpof=true&sd=true";
      
    link.download = "Ankit_Bharvad_Resume.pdf"; // Optional: Set a custom file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Set loading state to false after the download starts (could be immediate)
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center my-8">
      <button
        onClick={handleDownload}
        className="flex items-center space-x-3 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 focus:outline-none"
        disabled={loading} // Disable the button while loading
      >
        {loading ? (
          <span>Loading...</span> // Show loading text
        ) : (
          <>
            <span className="text-xl">📄</span>
            <span>Download Resume</span>
          </>
        )}
      </button>
    </div>
  );
};

export default ResumeDownload;
