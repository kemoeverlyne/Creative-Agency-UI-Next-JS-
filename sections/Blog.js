import { blog } from "@/assets/data/dummydata"
import BlogCard from "@/components/BlogCard"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const Blog = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='BLOG' /> <br />
            <br />
            <Title title='Our views on marketing, design & technology' />
            <p>Stay updated with the latest industry insights and trends through our informative articles and blogs. "Ligula Vel Urna Accumsan Placerat" - Unraveling the importance of user experience in web design. "Don’t Underestimate The Lorem Ipsum Dolor Amet" - Exploring the power of content in marketing strategies. "Building The Real VR Lorem Ipsum Dolor Amet Glavrida From A Scratch" - Unveiling the magic of virtual reality in website development. "What Eleifend Posuere Tincidunt" - A guide to creating an exceptional e-commerce platform. Stay informed and be ahead of the curve with our valuable resources!
</p>
          </div>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog
