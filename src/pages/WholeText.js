import React from "react";
import "../Css/Presentation.css";
export default function WholeText() {
  return (
    <div>
      <h2 className="header">
        <div id="title">Fun Cat Facts for Kids</div>
        Learn about cats as pets, their unique behavior, how long they sleep and
        much more. <br /> Read on and enjoy the wide range of interesting facts
        about cats and kittens.{" "}
      </h2>
      <div className="container-fluid">
        <div className="row align-items-start">
          <div className="col-7">
            <ul className="li">
              <li>
                {" "}
                Cats are one of, if not the most, popular pet in the world.
              </li>
              <li> There are over 500 million domestic cats in the world.</li>
              <li>
                {" "}
                Cats and humans have been associated for nearly 10000 years.
              </li>
              <li>
                Cats conserve energy by sleeping for an average of 13 to14 hours
                a day.
              </li>
              <li>
                Cats have flexible bodies and teeth adapted for hunting small
                animals such as mice and rats.
              </li>
              <li>
                {" "}
                A group of cats is called a clowder, a male cat is called a tom,
                a female cat is called a molly or queen while young cats are
                called kittens.
              </li>
              <li>
                {" "}
                Domestic cats usually weigh around 4 kilograms (8 lb 13 oz) to 5
                kilograms (11 lb 0 oz).
              </li>
              <li>
                {" "}
                The heaviest domestic cat on record is 21.297 kilograms (46 lb
                15.2 oz).
              </li>
              <li>
                {" "}
                Cats can be lethal hunters and very sneaky, when they walk their
                back paws step almost exactly in the same place as the front
                paws did beforehand, this keeps noise to a minimum and limits
                visible tracks.
              </li>
              <li>
                {" "}
                Cats have powerful night vision, allowing them to see at light
                levels six times lower than what a human needs in order to see.
              </li>
              <li>
                {" "}
                Cats also have excellent hearing and a powerful sense of smell.
              </li>
              <li>Older cats can at times act aggressively towards kittens.</li>
              <li>
                {" "}
                Domestic cats love to play, this is especially true with kittens
                who love to chase toys and play fight.
              </li>
              <li>
                Play fighting among kittens may be a way for them to practice
                and learn skills for hunting and fighting.
              </li>
              <li>On average cats live for around 12 to 15 years.</li>
              <li>
                {" "}
                Cats spend a large amount of time licking their coats to keep
                them clean.
              </li>
              <li>
                {" "}
                Feral cats are often seen as pests and threats to native
                animals.
              </li>
            </ul>
          </div>
          <div className="col-5">
            <img
              className="picture"
              src=" https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:* "
              alt=""
              width={400}
              height={400}
            ></img>
            <img
              className="picture2"
              src=" https://www.vets4pets.com/siteassets/species/cat/kitten/tiny-kitten-in-sunlight.jpg?w=585&scale=down"
              alt=""
              width={400}
              height={400}
              
            ></img>
          </div>
        </div>
      </div>

      <footer class="container">
        <p class="float-end">
          <a id="backtotop" href="#">
            Back to top
          </a>
        </p>
      </footer>
    </div>
  );
}
