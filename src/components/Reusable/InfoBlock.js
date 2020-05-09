import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function InfoBlock({ heading }) {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white mb-4">
              Lorem ipsm dolor sit amet consectetur adipiscing elit, Sequi
              labore perspiciatis minus evm modi dignissimos, fugiat sit ullam
              beatae sed recusandae ducimus, ,asperiores aperiam quidmem
              reporhenderit wxcepturi peaesentium possimus cum eveniest est
              facere dolorum ex. Ullam atque mottitia vero cum verittatis
              dologremque, dolor reoid add cjk jjdafkj jfakjf kafdjkafakfakfjkj
              akfja fka
            </p>
            <Link to="/about/">
              <button className="btn btn-warning btn-lg">{heading}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
