export default function ContactForm() {
  return (
    <div className="flex flex-col">
    <label htmlFor="name">Please enter your full name: </label>
    <input type="text" name="name" placeholder="First Last"/>

    <label htmlFor="mail">Your mail: </label>
    <input type="text" name="mail" placeholder="example@mail.com"/>
    </div>
  )
}
