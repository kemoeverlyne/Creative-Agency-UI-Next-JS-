import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"

const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Our expertise' />
            <p>We excel in creating remarkable digital experiences that captivate and engage your audience. From stunning web design and development to result-driven digital marketing strategies, we have the expertise to elevate your online presence. Whether it's crafting an eye-catching brand identity or building a seamless e-commerce platform, our talented team ensures that every detail is meticulously designed to leave a lasting impression on your customers. Let's collaborate and take your business to the next level together!
</p>
          </div>
          <div className='hero-content grid-4'>
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption='learn more' />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise
