import React from 'react';

function Docs() {
  return (
    <div className="flex min-h-screen">
      <div className="bg-violet-900 px-8 py-10 w-1/4 h-full text-white fixed shadow-lg">
        <div className="mb-10 text-4xl font-bold">
          <a href="/" className="logo text-yellow-400">
            NoQ
          </a>
        </div>
        <nav className="space-y-6 text-lg">
          <a href="Docs#about">
            <div className="hover:bg-violet-700 transition-all duration-200 rounded-lg p-3">
              About
            </div>
          </a>
          <a href="#services">
            <div className="hover:bg-violet-700 transition-all duration-200 rounded-lg p-3">
              Services
            </div>
          </a>

          
          <a href="#faq">
            <div className="hover:bg-violet-700 transition-all duration-200 rounded-lg p-3">
              FAQ
            </div>
          </a>
          <a href="#support">
            <div className="hover:bg-violet-700 transition-all duration-200 rounded-lg p-3">
              Support
            </div>
          </a>
          <a href="#contacts">
            <div className="hover:bg-violet-700 transition-all duration-200 rounded-lg p-3">
              Contacts
            </div>
          </a>
          <a href="#feedback">
            <div className="hover:bg-violet-700 transition-all duration-200 rounded-lg p-3">
              Feedback
            </div>
          </a>
        </nav>
      </div>

      <div className="ml-[25%] p-10 flex-grow bg-gray-100 text-gray-800">
        <div className="flex justify-between items-start">
          <div>
            <div id="about" className=" pt-24 "> {/* Add pt-24 for top padding */}
              <h2 className="text-4xl font-bold mb-5 text-violet-900">About NoQ</h2>
              <p className="text-lg leading-relaxed">
                NoQ is a comprehensive platform designed to optimize the scheduling process for service appointments across various industries. By providing a centralized hub for service providers and customers, NoQ revolutionizes the way appointments are booked and managed, ultimately minimizing wait times and enhancing efficiency.
              </p>
            </div>

            <div id="services" className="py-2 pt-24">
              <h2 className="text-4xl font-bold mb-5 text-violet-900">Our Services</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Appointment scheduling.</li>
                <li>Appointment Managing.</li>

              </ul>
            </div>
          </div>

          <div className="w-full mt-10">
            <img
              src="https://img.freepik.com/premium-vector/child-character-engaged-learning-seated-desk-focused-typing-laptop-little-boy-exploring-technology_1016-17114.jpg?w=826"
              alt="Contact Illustration"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>


        <div id="faq" className="py-16">
          <h2 className="text-4xl font-bold mb-5 text-violet-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold">How do I sign up?</h3>
              <p className="text-lg leading-relaxed">
                You can sign up by visiting our website and clicking on the "Get Started" button in the bottom-left corner.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">What payment methods do you accept?</h3>
              <p className="text-lg leading-relaxed">
                We accept UPI payments only.
              </p>
            </div>
          </div>
        </div>

        <div id="support" className="py-16">
          <h2 className="text-4xl font-bold mb-5 text-violet-900">Support</h2>
          <p className="text-lg leading-relaxed">
            Need help? Our support team is available 24/7 to assist you with any questions or issues you may have.
            You can reach us at <a href="mailto:support@NoQ.com" className="text-blue-600 hover:underline">support@NoQ.com</a>.
          </p>
        </div>

        <div id="contacts" className="py-16">

          <div className="w-2/3">
            <h2 className="text-4xl font-bold mb-5 text-violet-900">Contacts</h2>
            <p className="text-lg">
              Company Name: NoQ.pvt.LTD<br />
              Website: <a href="http://www.NoQ.com" className="text-blue-600 hover:underline">www.NoQ.com</a><br />
              Email: <a href="mailto:demo@NoQ.com" className="text-blue-600 hover:underline">demo@NoQ.com</a><br />
              Phone: +91 88489 87165<br />
              Address: YIASCM, Yenepoya University, Mangalore.
            </p>
          </div>


        </div>

        <div id="feedback" className="py-16">
          <h2 className="text-4xl font-bold mb-5 text-violet-900">Feedback</h2>
          <p className="text-lg leading-relaxed">
            We value your feedback. Please fill out our feedback form to share your experience with NoQ.
          </p>
          <button
            className="bg-violet-900 text-white px-6 py-3 rounded-lg mt-4"
            onClick={() => {
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=bz.shabz@gmail.com&su=Feedback&body=//give%20your%20feedback%20below:",
                "MailWindow",
                "width=800,height=600"
              );
            }}
          >
            Write us a Feedback
          </button>
        </div>
      </div>
    </div>
  );
}

export default Docs;