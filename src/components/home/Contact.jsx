import { EnvelopeIcon, MapPinIcon, PhoneIcon, GlobeAltIcon } from '@heroicons/react/24/outline';


export default function ContactSection() {
  return (
    <>
    <section className="bg-gray-900 text-white p-8 rounded-lg w-7xl self-center">
      <div className="grid md:grid-cols-2 gap-8">
        {/* LEFT PANEL */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h2 className="text-3xl font-bold">Get in touch</h2>
            <p className="mt-4 text-gray-400">
              Fill out the form or see the contact below!
            </p>
          </div>

          <div className="space-y-4 text-sm text-gray-300">
            {/* <div className="flex items-start gap-3">
              <MapPinIcon className="h-5 w-5 text-gray-400 mt-1" />
              <div>
                <p>545 Mavis Island</p>
                <p>Chicago, IL 99191</p>
              </div>
            </div> */}

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
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="relative">
    <input type="text" id="name" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label for="name" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Name</label>
</div>
            <div class="relative">
    <input type="text" id="surname" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label for="surname" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Surname</label>
</div>
          </div>

          <div class="relative">
    <input type="email" id="email" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label for="email" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">E-mail</label>
</div>

          <div class="relative">
            <label for="email" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Message</label>
            <textarea
              rows="4"
              className="mt-1 w-full rounded-md bg-transparent border border-gray-600 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder='Hello, ....' id='message'
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
    </>
  );
}
