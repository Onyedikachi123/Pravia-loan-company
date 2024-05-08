import React from "react";

interface ThankYouCardProps {
  isSubmitted: boolean;
}

const ThankYouCard: React.FC<ThankYouCardProps> = ({ isSubmitted }) => {
  if (!isSubmitted) {
    return null; // Or return some other component that represents the unsubmitted state
  }

  return (
    <div
      className="card text-center mx-auto my-5 p-4 shadow-lg"
      style={{ width: "32rem" }}
    >
      <div className="card-body flex flex-col justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 mb-2 text-secondary" 
          fill="none"
          viewBox="0 0 32 32"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h5 className="card-title text-black mb-4">Thank you!</h5>
        <p className="card-text text-black">
          Thank you for your message. We will get back to you soon, hope your email address and Phone Number are correct!
        </p>
      </div>
    </div>
  );
};

export default ThankYouCard;
