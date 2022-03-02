export default function about() {
  return (
    <>
      <div className="mx-40">
        <h1 className="text-center py-10">About us</h1>
        <section>
          <h2>Our history</h2>
          <div className="flex items-center">
            <div>
              <h3>The founder</h3>
              <p className="mr-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto totam odio sit
                earum saepe repellat
                error, quisquam itaque voluptatem soluta quae impedit blanditiis! Quibusdam perspiciatis amet
                repudiandae
                deserunt perferendis, nihil similique esse nobis ipsum nesciunt omnis ex incidunt voluptate aut alias,
                commodi optio delectus officiis porro laborum accusamus minus accusantium.</p>
            </div>
            <img className="h-xl" src="../images/JohnRattonPoster.png" alt="Ratton Springs founder John Ratton"/>
          </div>
        </section>

        <section>
          <h2>Discover Mother Nature's Favourite Water!</h2>
          <div className="flex items-center">
            <img src="../images/RattonSpringsLogo.png" alt="Ratton Springs logo"/>
            <div>
              <h3>About our logo</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusantium, in, sed neque dolore
                magnam
                libero aspernatur dolores repellat ex obcaecati consequuntur cum, ea unde veritatis veniam aliquid
                officiis
                sequi deleniti laborum dolorum deserunt quod quae. Nostrum ea tempora in dolorum, sequi veritatis.
                Harum,
                reiciendis. Ab dolores quibusdam assumenda libero?</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}