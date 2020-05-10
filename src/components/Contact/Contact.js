import React from "react"
import Heading from "../Reusable/Heading"

export default function Contact() {
  return (
    <section className="py-3">
      <Heading title="Contact Us" />
      <div className="col-10 col-sm-8 mx-auto">
        <form action="" method="POST">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="phone"
              id="phone"
              placeholder="Your phone"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              type="text"
              name="description"
              id="description"
              placeholder="Your message"
            />
          </div>
          <button type="submit" className="btn btn-outline-info btn-block">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
