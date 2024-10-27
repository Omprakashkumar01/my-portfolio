import React from "react";
import "./ConnectMe.css"; // Import your CSS file for styling

const ConnectMe = () => {
  return (
    <div className="connect-me-section">
      <h2>Connect with Me</h2>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/om-prakash-kumar-557b18228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zm-8 19H9v-6h2v6zm-1-7.25c-.65 0-1.25-.55-1.25-1.25s.55-1.25 1.25-1.25 1.25.55 1.25 1.25-.6 1.25-1.25 1.25zM19 19h-2v-5c0-1.2-.19-2.5-1.5-2.5-1.25 0-1.75.8-1.75 2.5v5h-2v-6h2v1c1.15-1.73 3.25-1.5 4.25-.5.75.75 1.25 1.9 1.25 3.5v6z"/>
          </svg>
        </a>
        <a
          href="https://github.com/Omprakashkumar01"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 .5C5.37.5 0 5.87 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.3c-3.4.7-4.1-1.6-4.1-1.6-.6-1.6-1.4-2-1.4-2s-1.3-.9.1-.9c1.2 0 2.1 1.2 2.4 1.8.2.5.8.7 1.2.5.3-.2.5-.7.5-1.2-2.4-.3-4.9-1.2-4.9-5.3 0-1.2.4-2.1 1-2.9-.1-.3-.4-1.4.1-2.8 0 0 .9-.3 2.9 1 1.3-.4 2.7-.6 4.1-.6s2.8.2 4.1.6c2-.4 2.9-1 2.9-1 .5 1.4.2 2.5.1 2.8.6.8 1 1.7 1 2.9 0 4.1-2.5 5-4.9 5.3.5.4.9 1.2.9 2.4v3.6c0 .3.2.7.8.6C20.56 21.3 24 16.8 24 12c0-6.13-5.37-11.5-12-11.5z"/>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/iam_om003" // Replace with your Instagram link
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2.5c-3.4 0-3.8.01-5.2.1-1.6.1-2.7.7-3.4 1.4-.7.7-1.3 1.8-1.4 3.4-.1 1.4-.1 1.8-.1 5.2 0 3.4.01 3.8.1 5.2.1 1.6.7 2.7 1.4 3.4.7.7 1.8 1.3 3.4 1.4 1.4.1 1.8.1 5.2.1 3.4 0 3.8-.01 5.2-.1 1.6-.1 2.7-.7 3.4-1.4.7-.7 1.3-1.8 1.4-3.4.1-1.4.1-1.8.1-5.2 0-3.4-.01-3.8-.1-5.2-.1-1.6-.7-2.7-1.4-3.4-.7-.7-1.8-1.3-3.4-1.4C15.8 2.51 15.4 2.5 12 2.5zm0 1.5c3.3 0 3.7.01 5 .1 1.1.1 1.7.5 2.1 1.1.4.4 1 .9 1.1 2.1.1 1.3.1 1.7.1 5 0 3.3-.01 3.7-.1 5-0.1 1.1-.5 1.7-1.1 2.1-.4.4-.9 1-2.1 1.1-1.3.1-1.7.1-5 .1-3.3 0-3.7-.01-5-.1-1.1-.1-1.7-.5-2.1-1.1-.4-.4-1-.9-1.1-2.1-.1-1.3-.1-1.7-.1-5 0-3.3.01-3.7.1-5 .1-1.1.5-1.7 1.1-2.1.4-.4.9-1 2.1-1.1 1.3-.1 1.7-.1 5-.1zm0 3.5c-2.4 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zm0 1.5c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z"/>
            <circle cx="18.5" cy="5.5" r="1.5"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ConnectMe;
