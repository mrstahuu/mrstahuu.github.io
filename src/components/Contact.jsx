import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function ContactSection() {
  return (
    <section className="bg-[#0e1525] text-white p-8 rounded-lg w-7xl self-center">
      <div className="grid md:grid-cols-2 gap-8">
        {/* LEFT PANEL */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h2 className="text-3xl font-bold">Get in touch</h2>
            <p className="mt-4 text-gray-400">
              Proin volutpat consequat porttitor cras nullam gravida at.
              Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
              Arcu sed malesuada et magna.
            </p>
          </div>

          <div className="space-y-4 text-sm text-gray-300">
            <div className="flex items-start gap-3">
              <MapPinIcon className="h-5 w-5 text-gray-400 mt-1" />
              <div>
                <p>545 Mavis Island</p>
                <p>Chicago, IL 99191</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <PhoneIcon className="h-5 w-5 text-gray-400" />
              <p>+1 (555) 234-5678</p>
            </div>

            <div className="flex items-center gap-3">
              <EnvelopeIcon className="h-5 w-5 text-gray-400" />
              <p>hello@example.com</p>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white">First name</label>
              <input
                type="text"
                className="mt-1 w-full rounded-md bg-[#1a2235] border border-gray-600 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Last name</label>
              <input
                type="text"
                className="mt-1 w-full rounded-md bg-[#1a2235] border border-gray-600 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-md bg-[#1a2235] border border-gray-600 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">Phone number</label>
            <input
              type="tel"
              className="mt-1 w-full rounded-md bg-[#1a2235] border border-gray-600 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">Message</label>
            <textarea
              rows="4"
              className="mt-1 w-full rounded-md bg-[#1a2235] border border-gray-600 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-2 inline-block rounded-md bg-indigo-500 px-6 py-2 text-white font-medium hover:bg-indigo-600 transition"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
