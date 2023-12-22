"use client";
import React, { useState } from "react";

const Page = () => {
  const [openTab, setOpenTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setOpenTab(tabNumber);
  };

  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <ul
          className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
          role="tablist"
        >
          {[1, 2, 3].map((tabNumber) => (
            <li
              key={tabNumber}
              className="-mb-px mr-2 last:mr-0 flex-auto text-center"
            >
              <a
                className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                  openTab === tabNumber
                    ? "text-white bg-blueGray-600"
                    : "text-blueGray-600 bg-white"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick(tabNumber);
                }}
                href={`#link${tabNumber}`}
                role="tab"
              >
                {tabNumber === 1 && "Profile"}
                {tabNumber === 2 && "Settings"}
                {tabNumber === 3 && "Options"}
              </a>
            </li>
          ))}
        </ul>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="px-4 py-5 flex-auto">
            {[1, 2, 3].map((tabNumber) => (
              <div
                key={tabNumber}
                className={openTab === tabNumber ? "block" : "hidden"}
                id={`link${tabNumber}`}
              >
                {tabNumber === 1 && (
                  <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                    <br />
                    <br /> Dramatically visualize customer directed convergence
                    without revolutionary ROI.
                  </p>
                )}
                {tabNumber === 2 && (
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                )}
                {tabNumber === 3 && (
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
