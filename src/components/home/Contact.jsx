import { useState, useRef } from 'react';
import { EnvelopeIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import Turnstile from 'react-turnstile';

export default function ContactSection() {
  const [status, setStatus] = useState(null);
  const [turnstileToken, setTurnstileToken] = useState(null);
  const formRef = useRef(null);

  const onVerify = (token) => {
    setTurnstileToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const form = formRef.current;
    const name = form.name.value.trim();
    const surname = form.surname.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !surname || !email || !message) {
      setStatus('Proszę wypełnić wszystkie pola.');
      return;
    }

    if (!turnstileToken) {
      setStatus('Proszę potwierdzić, że nie jesteś robotem.');
      return;
    }

    try {
      const response = await axios.post('https://api.maventplan.pl/portfolio/contact', {
        name,
        surname,
        email,
        message,
        turnstileToken,
      }, {
        headers: { 'Content-Type': 'application/json' },
      });

      setStatus(response.data.message || 'Wiadomość wysłana!');
      if (response.status === 200) form.reset();
      setTurnstileToken(null); // reset token po wysłaniu
    } catch (error) {
      console.error(error);
      setStatus('Something went wrong.');
    }
  };

  return (
    <section className="bg-gray-900 text-white p-8 rounded-lg w-7xl self-center">
      <div className="grid md:grid-cols-2 gap-8">
        {/* LEFT PANEL */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h2 className="text-3xl font-bold">Get in touch</h2>
            <p className="mt-4 text-gray-400">Fill out the form or see the contact below!</p>
          </div>
          <div className="space-y-4 text-sm text-gray-300">
            <div className="flex items-center gap-3">
              <GlobeAltIcon className="h-5 w-5 text-gray-400" />
              <p><a href="https://maventplan.pl">maventplan.pl</a></p>
            </div>
            <div className="flex items-center gap-3">
              <EnvelopeIcon className="h-5 w-5 text-gray-400" />
              <p><a href="mailto:hello@maventplan.pl">hello@maventplan.pl</a></p>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <form className="space-y-4" onSubmit={handleSubmit} ref={formRef}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <input
                name="name"
                type="text"
                id="name"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Name
              </label>
            </div>
            <div className="relative">
              <input
                name="surname"
                type="text"
                id="surname"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="surname"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Surname
              </label>
            </div>
          </div>

          <div className="relative">
            <input
              name="email"
              type="email"
              id="email"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              E-mail
            </label>
          </div>

          <div className="relative">
            <label
              htmlFor="message"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              id="message"
              className="mt-1 w-full rounded-md bg-transparent border border-gray-600 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Hello, ...."
            ></textarea>
          </div>

          <Turnstile
            sitekey="0x4AAAAAABn-qy81ubLI8q3b"
            onVerify={onVerify}
          />

          <button
            type="submit"
            className="mt-2 inline-block rounded bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 transition"
          >
            Send message
          </button>

          {status && <p className="text-sm text-center text-gray-300 mt-2">{status}</p>}
        </form>
      </div>
    </section>
  );
}
