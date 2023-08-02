import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"
import video from "@/assets/video3.mp4";

const Hero = () => {
  return (
    <>
    <section className='hero'>
  <div className='container'>
    {/* Add the video element here */}
    <video className="video-element" autoPlay loop muted>
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <TitleLogo caption='Group' className='logobg' />
    <h2 className='hero-title'>Unlocking Creativity, Delivering Excellence</h2>

    <div className='sub-heading'>
      <TitleSm title='WEB' /> <span>.</span>
      <TitleSm title='MOBILE' /> <span>.</span>
      <TitleSm title='BRANDING' /> <span>.</span>
      <TitleSm title='DIGITAL MARKETING' />
    </div>
  </div>
  <br>
  </br>
  <br>
  </br>
  <br></br>
  <br></br>
  <br></br>

  </section>

      {/* <section className='hero'>
        <div className='container'>
          <TitleLogo title='creative' caption='7' className='logobg' />
          <h1 className='hero-title'>WE BUILD DIGITAL EXPERIENCES</h1>

          <div className='sub-heading'>
            <TitleSm title='WEBSITES' /> <span>.</span>
            <TitleSm title='BRANDING' /> <span>.</span>
            <TitleSm title='DIGITAL MARKETING' />
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='The last digital agency you ll ever need' />
            <p>Suspendisse ut magna porttitor, sollicitudin ligula at, molestie dolor. Vivamus a ligula ut velit placerat egestas at id leo. Nulla ac volutpat nunc. Nulla facilisi. Pellentesque tempus tellusut magna porttitor scelerisque.</p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      <Brand />

      <div className='text-center'>
        <Title title='Latest news & articles' />
      </div>
      <BlogCard />
    </>
  )
}

export default Hero
