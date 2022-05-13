import React from 'react'
import phone from '../assets/img/phone-frame.png'
import Card from '../components/Card'
import webDesign from '../assets/img/web-design.png'
import appDesign from '../assets/img/app-design.jpg'
import graphicDesign from '../assets/img/graphic-design.jpg'
import why1 from '../assets/img/why-us-1.png'
import why2 from '../assets/img/why-us-2.png'
import why3 from '../assets/img/why-us-3.png'

function Home() {
  return (
    <div>
      <section className="container-sm intro">
        <div className="intro-info">
          <h1 className="h1">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="text">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <a href="#!" className="btn btn-primary">
            Learn More
          </a>
        </div>
        <div className="intro-frame">
          <img src={phone} alt="" />
        </div>
      </section>
      <section className="container catalog">
        <Card bgCard={true} imgUrl={webDesign} title="WEB DESIGN" />
        <Card bgCard={true} imgUrl={appDesign} title="APP DESIGN" />
        <Card bgCard={true} imgUrl={graphicDesign} title="GRAPHIC DESIGN" />
      </section>
      <section className="container whyUs">
        <Card
          imgUrl={why1}
          title="PASSIONATE"
          text="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
        />
        <Card
          imgUrl={why2}
          title="RESOURCEFUL"
          text="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
        />
        <Card
          imgUrl={why3}
          big={true}
          title="FRIENDLY"
          text="We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
        />
      </section>
      <section className="container">
        <div className="getInTouch">
          <div>
            <h2 className="h2">Let’s talk about your project</h2>
            <p className="text">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <div>
            <a href="#!" className="btn btn-primary">
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
