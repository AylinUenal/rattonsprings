// TODO: focus/hover/active styling is not working yet
// image is not responsive!
// TODO: complete form validation

import React, {useState} from 'react';
import MessageField from './MessageField'
import { useForm } from 'react-hook-form';

export default function ContactForm() {

  const [showMessage, setShowMessage] = useState(false);
  const [firstName, setFirstName] = useState('');
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

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
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
              <label className="text-primary" htmlFor="firstName">First name: </label>
              <input className="border py-2 border-primary" type="text" name="firstName" placeholder="Emily"
                     onChange={updateNameInputValue}
                     {...register("firstName", { required: true, maxLength: 20 })}
              />
                     {errors.firstName && <span className="text-secondary">This field is required</span>}

              <label className="text-primary" htmlFor="lastName">Last name: </label>
              <input className="border py-2 border-primary" type="text" name="lastName" placeholder="Winter"/>

              <label className="text-primary" htmlFor="mail">Your mail: </label>
              <input className="border py-2 border-primary" type="email" name="mail" placeholder="example@mail.com"/>

              <label className="text-primary" htmlFor="message">Your message: </label>
              <textarea className="border py-2 border-primary" name="message" cols="30" rows="5"
                        placeholder="Type your message here"/>
              {{formState: !errors.firstName} &&
                <input type="submit"
                  // onClick={() => setShowMessage(true)}
                       className="bg-primary hover:bg-secondary text-white font-semibold py-2 px-4 my-5 rounded shadow"
                />
              }
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
