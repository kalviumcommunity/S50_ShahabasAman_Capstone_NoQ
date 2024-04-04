import React from "react";
import "./home.css"; 
import calu from "../assets/calu.jpg";
import feature from "../assets/feature.png";
import email from "../assets/email.png";
import person from "../assets/person.png";
import profile from "../assets/login.png";
import profilecus from "../assets/profileCus.png";
import time from "../assets/real-time.png"
import pp from "../assets/profile.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import github from "../assets/github-sign.png";
import find from "../assets/find.png"

function homePage() {
  return (
    <div>
      <nav className="flex items-center justify-between pt-1 px-4 sm:px-6">
        <a href="/" className="logo ">
          NoQ
        </a>

        <div className="relative">
            <input
              className="search px-2 p-1 rounded-full"
              type="text"
              placeholder="Search"
            />
            <img src={find} className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5" alt="Search Icon" />
          </div>
        <div className="flex text-white">
          <div className="mr-14 mt-1">
            <a
              href="/"
              className="text-md hover:text-purple-300 hover:underline"
            >
              Service Categories
            </a>
          </div>
          <div className="mr-20 mt-1">
            <a
              href="/Docs"
              className="text-md hover:text-purple-300 hover:underline"
            >
              Docs
            </a>
          </div>
          <div className="mr-8 ml-6">
            <a href="/sign-in">
            <button className="hover:bg-orange-500 hover:text-red-100 text-white font-bold py-1 px-4 rounded-lg ">
              Login
            </button>
            </a>
          </div>
        </div>
      </nav>
      <div className="px-8 flex">
        <div className="left w-1/2 ml-12">
          <h2 className="text-5xl font-semibold mt-24">Seamless Solution</h2>{" "}
          <h2 className="text-5xl font-semibold mt-1">for Effortless,</h2>{" "}
          <h2 className="text-5xl font-semibold mt-1">Efficient Scheduling</h2>
          <p className="text-gray-600 mt-6 ">
            Your Appointment Revolution.
          </p>{" "}
          <p className="text-gray-600">
            Say goodbye to long waits and scheduling headaches.
          </p>
          <a href="/sign-up">
          <button className="block mt-8 text-white px-5 py-3 rounded-lg hover:bg-violet-800 font-medium">
            Get started
          </button>
          </a>
        </div>
        <div className="w-1/2 mt-24">
          <img src={calu} alt="Cal" />
        </div>
      </div>
      <div className="scroll-animation mx-auto py-2 flex items-center justify-around mt-10 rounded-md">
        <ul className="scroll-list flex justify-between">
          <li>Reschedule</li>
          <li></li>
          <li>Simple booking</li>
          <li></li>
          <li>Calendar Integration</li>
          <li></li>
          <li>Payments & Invoicing</li>
          <li></li>
          <li>Customer Management</li>
          <li></li>
          <li>Appointment Reminders</li>
          <li></li>
          <li>Customizable Designs</li>
          <li></li>
        </ul>
      </div>
      <div className="py-10">
        <h1 className="font-bold text-3xl text-center mb-10">Our Features</h1>
        <div className="grid grid-cols-8 sm:grid-cols-8 md:grid-cols-3 gap-8 px-12">
          <div className="p-4 text-center py-4 rounded-md">
            <img src={profilecus} className="mx-auto w-16" alt="Customizable" />
            <h2 className="text-xl font-bold mb-4 mt-2">Customizable Profiles</h2>
            <p className="text-sm">
            enable users to personalize their accounts, adjusting preferences, visuals, and information to suit individual needs and preferences seamlessly
            </p>
          </div>
          <div className="p-4 text-center py-4 rounded-md">
            <img src={time} className="mx-auto w-16" alt="Availability" />
            <h2 className="text-xl font-bold mb-4 mt-2">Real-Time Availability Updates</h2>
            <p className="text-sm">
            instantly reflects changes in schedules or resources, ensuring users access the most current information in a dynamic environment
            </p>
          </div>
          <div className="p-4 text-center py-4 rounded-md">
            <img src={email} className="mx-auto w-16" alt="Alerts" />
            <h2 className="text-xl font-bold mb-4 mt-2">Email Alerts</h2>
            <p className="text-sm">
            notifies users via email about important events, updates, or actions, ensuring timely communication and information delivery.
            </p>
          </div>
          <div className="p-4 text-center py-4 rounded-md">
            <img src={feature} className="mx-auto w-16" alt="Scheduling" />
            <h2 className="text-xl font-bold mb-4 mt-2">Appointment Scheduling</h2>
            <p className="text-sm">
            facilitating the efficient booking and management of appointments, enabling users to easily schedule, modify, and track their engagements.
            </p>
          </div>
          <div className="p-4 text-center py-4 rounded-md">
            <img src={profile} className="mx-auto w-16" alt="Interface" />
            <h2 className="text-xl font-bold mb-4 mt-2">User-Friendly Interface</h2>
            <p className="text-sm">
            Designed with intuitive navigation and clear visuals, ensuring ease of use and enhancing the overall user experience
            </p>
          </div>
          <div className="p-4 text-center py-4 rounded-md">
            <img src={person} className="mx-auto w-16" alt="Facility" />
            <h2 className="text-xl font-bold mb-4 mt-2">Facilitation</h2>
            <p className="text-sm">
            simplifies interactions between customers and providers, streamlining processes for seamless communication and transactions.
            </p>
          </div>
        </div>
        <hr className="mt-10" />
        <div className="container mx-auto p-8 pb-10">
          <h1 className="font-bold text-3xl text-center mb-10">Reviews</h1>
          <div className="grid grid-cols-4 gap-10">
            <div className="bg-gray-950 p-4 border border-gray-300 rounded-lg h-auto">
              <span className="flex">
                <img className="rounded-full w-9 h-9" src={pp} alt="Profile" />
                <div className="pl-2 ">
                  <h2 className="text-xl font-bold text-white">Musthafa.c.p</h2>
                  <h3 className="text-sm text-gray-400">@musthafaa</h3>
                </div>
              </span>
              <p className="text-gray-200  mt-3 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incid
              </p>
            </div>
            <div className="bg-gray-950 p-4 border border-gray-300 rounded-lg">
              <span className="flex">
                <img className="rounded-full w-9 h-9" src={pp} alt="Profile" />
                <div className="pl-2 ">
                  <h2 className="text-xl font-bold text-white">Musthafa.c.p</h2>
                  <h3 className="text-sm text-gray-400">@musthafaa</h3>
                </div>
              </span>
              <p className="text-gray-200  mt-3 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incidilore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
            </div>
            <div className="bg-gray-950 p-4 border border-gray-300 rounded-lg">
              <span className="flex">
                <img className="rounded-full w-9 h-9" src={pp} alt="Profile" />
                <div className="pl-2 ">
                  <h2 className="text-xl font-bold text-white">Musthafa.c.p</h2>
                  <h3 className="text-sm text-gray-400">@musthafaa</h3>
                </div>
              </span>
              <p className="text-gray-200  mt-3 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod te
              </p>
            </div>
            <div className="bg-gray-950 p-4 border border-gray-300 rounded-lg">
              <span className="flex">
                <img className="rounded-full w-9 h-9" src={pp} alt="Profile" />
                <div className="pl-2 ">
                  <h2 className="text-xl font-bold text-white">Musthafa.c.p</h2>
                  <h3 className="text-sm text-gray-400">@musthafaa</h3>
                </div>
              </span>
              <p className="text-gray-200  mt-3 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incidiostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="bg-gray-950 p-4 border border-gray-300 rounded-lg">
              <span className="flex">
                <img className="rounded-full w-9 h-9" src={pp} alt="Profile" />
                <div className="pl-2 ">
                  <h2 className="text-xl font-bold text-white">Musthafa.c.p</h2>
                  <h3 className="text-sm text-gray-400">@musthafaa</h3>
                </div>
              </span>
              <p className="text-gray-200 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt
              </p>
            </div>
            <div className="bg-gray-950 p-4 border border-gray-300 rounded-lg">
              <span className="flex">
                <img className="rounded-full w-9 h-9" src={pp} alt="Profile" />
                <div className="pl-2 ">
                  <h2 className="text-xl font-bold text-white">Musthafa.c.p</h2>
                  <h3 className="text-sm text-gray-400">@musthafaa</h3>
                </div>
              </span>
              <p className="text-gray-200 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer bg-violet-900 flex px-12 py-16 text-white rounded">
        <div className="pr-12">
          <h1 className="text-4xl font-extrabold mb-10">NoQ</h1>
          <p className="text-sm">Credits</p>
          <p className="text-sm">Ownerships</p>
          <hr className="w-28 bg-gray-950 my-5" />
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            labore at, laudantium dignissimos obcaecati vel explicabo non illo
            corrupti quidem a neque id sunt dolores voluptate aperiam cumque
            eius necessitatibus.
          </p>
          <p className="mt-6 text-sm">Inspired by Cal</p>
        </div>
        <div class="flex justify-between items-end w-60">
          <img class="w-10 h-10" src={facebook} alt="facebook" />
          <img class="w-10 h-10" src={github} alt="github" />
          <img class="w-10 h-10" src={instagram} alt="instagram" />
        </div>
      </div>
    </div>
  );
}

export default homePage;
