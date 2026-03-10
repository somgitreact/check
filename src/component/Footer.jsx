import React from 'react'

const Footer = () => {
  return (
     <footer className="bg-[#a9bcc6] pt-20 ">

      {/* Newsletter Box */}
      {/* <div className="max-w-[700px] mx-auto bg-[#6f8fa0] text-center text-white rounded-lg p-8 -mt-32 shadow-lg ">
        <h2 className="text-3xl font-semibold">
          Luminae <span className="font-light">Store</span>
        </h2>

        <p className="text-sm mt-2 opacity-90">
          Register your email not to miss the last minutes off + Free delivery
        </p>

        <div className="mt-4 flex justify-center">
          <div className="flex bg-white rounded-md overflow-hidden w-[320px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 text-sm outline-none text-gray-700"
            />
            <button className="px-3 text-gray-600 hover:text-black">
              ✉
            </button>
          </div>
        </div>
      </div> */}

      {/* Links Section */}
      <div className="max-w-[1360px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 pt-20 pb-16 text-gray-700">

        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Our Store</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Career Opportunities</h3>
          <ul className="space-y-2 text-sm">
            <li>Selling Programs</li>
            <li>Advertise</li>
            <li>Cooperation</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">How to Buy</h3>
          <ul className="space-y-2 text-sm">
            <li>Making Payments</li>
            <li>Delivery Options</li>
            <li>Buyer Protection</li>
            <li>New User Guide</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Help</h3>
          <ul className="space-y-2 text-sm">
            <li>Contacts Us</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

      </div>

      {/* Payment + Language */}
      <div className="max-w-[1360px] mx-auto flex items-center justify-between border-t pt-6 pb-6 text-gray-500">

        <div className="flex items-center gap-6 text-lg opacity-60">
          <span>VISA</span>
          <span>Mastercard</span>
          <span>PayPal</span>
        </div>

        <div className="text-sm">
          English ▾
        </div>

      </div>

      {/* Bottom Info */}
      <div className="max-w-[1360px] mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 pb-8">

        <p>
          165-179 Forster Road City of Monash, Melbourne, Australia
        </p>

        <p className="mt-2 md:mt-0">
          ©2023 Copyright in reserved for lumine shop
        </p>

        <div className="flex gap-5 text-lg mt-3 md:mt-0">
          <span>📷</span>
          <span>📘</span>
          <span>✈</span>
        </div>

      </div>

    </footer>
  )
}

export default Footer