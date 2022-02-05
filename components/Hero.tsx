import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className=" mx-auto flex max-w-7xl   items-center justify-between bg-yellow-400 p-10 shadow-md lg:p-0">
      <div className="space-y-5 p-10">
        <h1 className="max-w-xl font-serif text-6xl">
          <span className=" underline decoration-green-600 decoration-wavy   ">
            {' '}
            Medium
          </span>{' '}
          is a place to read,write and connect
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quaerat
          ut vel fugiat quod. Nostrum pariatur dicta neque quibusdam distinctio?
        </p>
      </div>
      <img
        className="hidden h-32 md:inline-flex lg:h-full"
        src={
          'https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png'
        }
      />
    </div>
  )
}

export default Hero
