// TODO: contact form with feedback when sending: "this is not a real company :) your mail was not sent and will not be answered"
import ContactForm from '../components/ContactForm'

export default function contact() {
  return (
    <div>
      <h1>Contact us</h1>
      <div className="flex justify-around flex-wrap">
        <ContactForm />
        <div>
          <img className="h-lg" src="..\images\women-with-bottles.jpg" alt="two women smiling and drinking water" />
        </div>
      </div>
    </div>
      )
}