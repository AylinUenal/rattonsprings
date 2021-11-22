// TODO: focus/hover/active styling is not working yet
// image is not responsive!

export default function ContactForm() {
  return (
    <div className="flex flex-col">
    <p>We are happy to hear from you! Send us a message!</p>
    <form className="flex flex-col">
    <label htmlFor="firstName">First name: </label>
    <input className="border py-2 border-primary focus:border-primary" type="text" name="firstName" placeholder="Emily"/>
   
    <label htmlFor="lastName">Last name: </label>
    <input className="border py-2 border-primary focus:border-primary" type="text" name="lastName" placeholder="Winter"/>

    <label htmlFor="mail">Your mail: </label>
    <input className="border py-2 border-primary focus:border-primary" type="text" name="mail" placeholder="example@mail.com"/>

    <label htmlFor="message">Your message: </label>
    <textarea className="border py-2 border-primary" name="message" cols="30" rows="5" placeholder="Type your message here"></textarea>
    </form>
    </div>
  )
}
