import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className=" mx-auto flex max-w-7xl items-center justify-between border-b border-gray-400 p-5">
      <div className="flex items-center space-x-5">
        <Link href={'/'}>
          <img
            src="https://links.papareact.com/yvf"
            alt=""
            className=" w-44 cursor-pointer object-contain"
          />
        </Link>
        <div className="navlink hidden items-center space-x-5 md:inline-flex">
          <h3>About</h3>
          <h3>Contact</h3>
          <button className=" cursor-pointer rounded-full bg-green-600 px-4 py-1 text-white hover:border hover:bg-white hover:text-green-600">
            Follow
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <h3 className="cursor-pointer hover:text-black">Sign In</h3>
        <h3 className="cursor-pointer rounded-full border border-green-600 px-5 py-1 hover:bg-green-600 hover:text-white">
          Get Started
        </h3>
      </div>
    </header>
  )
}

export default Header
