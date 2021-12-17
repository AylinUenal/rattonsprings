import React from 'react'

export default function MessageField( {name}) {
  return (
    <>
      <div className="py-5">
        <p>Thank you for your message, {name}!</p>
        <p>As this is a fictional company for the purpose of a coding exercise, your message was neither sent nor saved. But please do carry on browsing!</p>
      </div>
    </>
  )
}