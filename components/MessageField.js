import React from 'react'

export default function MessageField( {name}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <p className="text-secondary font-bold">Thank you for your message, {name}!</p>
        <div className="py-5 w-1/3">
          <p>As this is a fictional company for the purpose of a coding exercise, your message was neither sent nor saved.</p>
          <p className="text-secondary">But please do carry on browsing!</p>
        </div>
      </div>
    </>
  )
}