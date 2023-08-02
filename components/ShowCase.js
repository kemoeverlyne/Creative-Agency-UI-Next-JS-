import React from "react"
import { Title } from "./common/Title"
import { showcase } from "@/assets/data/dummydata"
import { Card } from "./common/Card"
import Link from "next/link"
import { HiOutlineArrowRight } from "react-icons/hi"

const ShowCase = () => {
  return (
    <>
      <section className='showcase'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Selected cases' />
            <p>Check out some of our standout projects that showcase our prowess in various domains. Neon Lights, a captivating digital marketing campaign that illuminated the online world. Futuristic Furniture, an innovative website that redefines the way customers interact with furniture. Smart Living, a user-centric website that simplifies everyday life. Light Painting, an artistic branding masterpiece that leaves a mark on the audience. Ideabox, a creative branding endeavor that stands out from the crowd. VR Experience, a stunning website that transports users to another dimension. Discover more inspiring success stories in our portfolio.
</p>
          </div>
          <div className='hero-content grid-3 py'>
            {showcase.map((item) => (
              <Card data={item} key={item.id} />
            ))}
          </div>
          <div className='card links'>
            <Link href='/'>
              VIEW ALL CASES <HiOutlineArrowRight className='link-icon' />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ShowCase
