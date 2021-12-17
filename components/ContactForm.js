// TODO: focus/hover/active styling is not working yet
// image is not responsive!
// TODO:

import React, {useState} from 'react';
import MessageField from './MessageField'

export default function ContactForm() {

  const [showMessage, setShowMessage] = useState(false);
  const [firstName, setFirstName] = useState('');

  const updateInputValue = (evt) => {
    // console.log(evt.target.value)
    setFirstName(evt.target.value)
  }

  return (
    <div className="flex flex-col">
      {!showMessage && (
        <>
          <p className="my-5">We are happy to hear from you! Send us a message!</p>
          <form className="flex flex-col">
            <label className="text-primary" htmlFor="firstName">First name: </label>
            <input className="border py-2 border-primary" type="text" name="firstName" placeholder="Emily" required onChange={updateInputValue}/>

            <label className="text-primary" htmlFor="lastName">Last name: </label>
            <input className="border py-2 border-primary" type="text" name="lastName" placeholder="Winter"/>

            <label className="text-primary" htmlFor="mail">Your mail: </label>
            <input className="border py-2 border-primary" type="email" name="mail" placeholder="example@mail.com"/>

            <label className="text-primary" htmlFor="message">Your message: </label>
            <textarea className="border py-2 border-primary" name="message" cols="30" rows="5"
                      placeholder="Type your message here"/>
            <button onClick={() => setShowMessage(true)}
                    className="bg-primary hover:bg-secondary text-white font-semibold py-2 px-4 my-5 rounded shadow">Send
            </button>
          </form>
        </>
      )}

      {showMessage && (
        <MessageField
          name={firstName}
        />
      )}
    </div>
  );
}
