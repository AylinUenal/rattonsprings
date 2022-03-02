export default function Footer() {
  return (
    <>
    <footer className="bg-primary mt-10">
    <div className="max-w-screen-2xl m-auto flex py-5 justify-between px-7">

      <div className="flex flex-col justify-between">
        <p className="text-white">Follow us on Social Media!</p>
        <p className="text-white">Coded by <a className="font-bold hover:text-secondary" href="https://github.com/AylinUenal">Aylin Ünal</a></p>
      </div>

      <div>
        <img className="h-40" src="../images/RattonSpringsLogo.png" alt="Ratton Springs logo"/>
    </div>
    </div>
    </footer>
    </>
  )
}
