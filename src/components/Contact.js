import { useState } from 'react';
import '../App.css'

const Contact = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleClick = (e) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    const recipientEmail = email; // Use the email entered by the user
    const ccEmail = 'anuraagbv1@gmail.com'; // Your email
    const mailSubject = subject; // Subject entered by the user
    const mailBody = body; // Body text entered by the user

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${ccEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailLink, '_blank');
  };

  return (
    <div className="flex flex-col grow justify-center items-center text-white h-screen p-4 main-explain">
      <form className="w-full max-w-lg space-y-4" onSubmit={handleClick}>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-semibold mb-1">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="subject" className="text-lg font-semibold mb-1">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter subject"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="body" className="text-lg font-semibold mb-1">Body</label>
          <textarea
            id="body"
            name="body"
            rows="4"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your message"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
