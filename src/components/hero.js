import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import resume from "../assets/resume.pdf"
import { Circle, Donut } from "./shapes"

const Hero = () => {
  const querry = useStaticQuery(graphql`
    query HeroQuery {
      site: site {
        siteMetadata {
          name
          description
          subDescription
        }
      }
    }
  `)

  const siteData = querry.site.siteMetadata

  return (
    <section>
      <Circle
        size="180px"
        top="210px"
        left="-90px"
        background="bg-gradient-yellow"
      />
      <Circle
        size="35px"
        top="150px"
        left="25px"
        background="bg-gradient-blue"
      />
      <Circle
        size="190px"
        top="460px"
        right="120px"
        background="bg-gradient-pink"
        animation="up 6s ease-in-out infinite alternate"
      />
      <Circle
        size="90px"
        top="580px"
        left="20px"
        background="bg-gradient-green"
      />
      <Donut
        size="170px"
        top="120px"
        right="40px"
        background="bg-donut-purple"
      />
      <div className="container mx-auto flex flex-col justify-center items-start min-h-[90vh] px-2 lg:px-24">
        <h1 className="font-mono text-lg lg:text-xl">Hi, my name is</h1>
        <h2 className="text-5xl lg:text-6xl text-primary">{siteData.name}</h2>
        <h3 className="text-3xl lg:text-4xl mt-0 leading-tight text-color-2">
          {siteData.description}
        </h3>
        <div className="lg:w-2/3 mt-6">
          <p>{siteData.subDescription}</p>
        </div>
        <div className="w-full mt-12 lg:mb-12">
          <button className="btn btn-primary">
            <a href={resume} target="_blank" rel="noreferrer">
              Resume
            </a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
