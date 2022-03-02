import team from "../team.json";

export default function ImageCard() {

  return (
    <>
      {
        team.map(person => {
            let hobbies = person.hobbies.join(", ");

            return (
              <div key={person.id} className="flip-card m-10">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div>
                      <img className="flip-image" src={person.image} alt={person.alt}/>
                    </div>
                  </div>
                  <div className="flip-card-back bg-secondary px-7">
                    <h2 className="text-center text-white py-10">{person.name}</h2>
                    <p>Position: {person.position}</p>
                    <p>in the company since: {person.employedSince}</p>
                    <p>Hobbies: {hobbies}</p>
                    <p className="pt-5">
                      Photo by
                      <a href={person?.copyright.link} target={"_blank"}> {person.copyright.name} </a>
                      on
                      <a href={person?.copyright?.source} target={"_blank"}> {person?.copyright?.sourceName} </a>
                    </p>
                  </div>
                </div>
              </div>
            )
          }
        )
      }
    </>
  );
}