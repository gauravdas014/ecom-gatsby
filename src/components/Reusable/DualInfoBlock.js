import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function DualInfoBlock({ heading }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
              quis at quidem ex unde omnis ratione accusantium ipsa magnam
              velit. Ipsum totam maiores sapiente nihil! Fuga animi consequuntur
              amet, totam corrupti reiciendis possimus quo. Blanditiis ducimus
              accusantium voluptatum neque eaque vel rem, minus ea magni eum
              rerum fuga odit placeat! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Consequatur fuga atque ab? Nostrum, saepe autem
              rerum, eum neque quis explicabo officia expedita quaerat quas
              delectus, ipsam vel! Quidem cum sunt labore soluta, veritatis
              nemo, reprehenderit quo corporis ducimus officiis eligendi
              nesciunt! Eos cumque dolores laudantium enim fuga. Ab, qui
              eligendi amet odit delectus repudiandae eaque ratione? Dolores
              voluptatum quo ipsa recusandae minima dolorum, pariatur sed? Esse
              accusantium, voluptatum recusandae ut impedit doloribus magni
              assumenda rerum consequuntur temporibus dignissimos minus
              provident neque velit exercitationem tempore distinctio culpa,
              ipsum reiciendis id tempora vitae quaerat amet delectus? Maxime
              iste praesentium non sapiente nihil.
            </p>
          </div>

          <div className="col-4">
            <div className="card bg-dark">
              <img
                src="../../images/nodejs.jpg"
                className="card-img-top"
                alt="image goes here"
              />
              <div className="card-body">
                <h5 className="card-title text-success">Just click photos</h5>
                <p className="card-text text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
                  facere iste possimus quos ipsum. Atque, debitis necessitatibus
                  provident, eos at possimus nisi aliquam fuga earum
                  consequuntur laboriosam accusantium! In, harum!
                </p>
                <Link to="/" className="btn btn-warning btn-block">
                  {heading}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
