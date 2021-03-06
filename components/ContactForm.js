// TODO: make image responsive
// TODO: complete form validation

import React, {useState} from 'react';
import MessageField from './MessageField'
import { useForm } from 'react-hook-form';

export default function ContactForm() {

  const [showMessage, setShowMessage] = useState(false);
  const [firstName, setFirstName] = useState('visitor');
  // const { register, handleSubmit, watch, formState: { errors } } = useForm();
  // const onSubmit = data => console.log(data);

  const updateNameInputValue = (evt) => {
    // console.log(evt.target.value)
    setFirstName(evt.target.value)
  }

  return (
    <>
      {!showMessage && (
        <>
          <div className="flex flex-col">
            <p className="my-5">We are happy to hear from you! Send us a message!</p>
            <form className="flex flex-col">
              <label className="text-primary" htmlFor="firstName">First name: </label>
              <input className="focus-visible:outline-secondary border py-2 border-primary" type="text" name="firstName" placeholder="Emily"
                     onChange={updateNameInputValue}
              />

              <label className="text-primary" htmlFor="lastName">Last name: </label>
              <input className="focus-visible:outline-secondary border py-2 border-primary" type="text" name="lastName" placeholder="Winter"/>

              <label className="text-primary" htmlFor="mail">Your mail: </label>
              <input className="focus-visible:outline-secondary border py-2 border-primary" type="email" name="mail" placeholder="example@mail.com"/>

              <label className="text-primary" htmlFor="message">Your message: </label>
              <textarea className="focus-visible:outline-secondary border py-2 border-primary" name="message" cols="30" rows="5"
                        placeholder="Type your message here"/>
                <input type="submit"
                  onClick={() => setShowMessage(true)}
                       className="bg-primary cursor-pointer hover:bg-secondary text-white font-semibold py-2 px-4 my-5 rounded shadow"
                />
            </form>
          </div>
        </>
      )}

      {showMessage && (
        <MessageField
          name={firstName}
        />
      )}
    </>
  );
}
