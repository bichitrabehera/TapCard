import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="bg-white text-center p-5 flex justify-center items-center flex-col">
        <div className="p-5">
          <h2 className="font-bold text-2xl underline">About Us</h2>
          <p>TapCard is your all-in-one digital identity solution.</p>
        </div>

        <div className="p-4 bg-blue-400">
          <div className="flex space-x-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 text-center">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Discover QR"
                  className="mb-3 w-24 h-24 object-cover rounded-full"
                />
                <div className="font-semibold text-lg">1. Discover QR</div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Scan QR"
                  className="mb-3 w-24 h-24 object-cover rounded-full"
                />
                <div className="font-semibold text-lg">2. Scan QR</div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Access Information"
                  className="mb-3 w-24 h-24 object-cover rounded-full"
                />
                <div className="font-semibold text-lg">
                  3. Access Information
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 max-w-3xl">
          <p>
            Whether you're networking at an event, connecting with a friend, or
            sharing your social profiles, TapCard unifies all your
            links—professional and personal—into a single, convenient QR code.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
