// import Link from 'next/link'
import Nav from './nav'

// function Bold({children}) {
//   return <span className="font-bold">{children}</span>
// }

export default function Hero() {
  const [clicked, setClicked] = React.useState(false)
  return (
    <div id="hero" className={`
    min-h-screen container mx-auto flex flex-col justify-between p-4 sm:p-4
    `}>
      <Nav />
      <div>
        <h1 className="text-60 leading-60 mb-8 sm:text-144 sm:leading-144 uppercase lg:w-800">
          Build Invincible Apps
          </h1>
        <p className="text-2xl md:w-700 mb-8">
          {/* Temporal is the <Bold>open source</Bold> runtime for running <Bold>mission critical</Bold> code atop <Bold>unreliable, distributed</Bold> services at any scale. */}
          {/* Highly reliable, globally scalable microservice orchestration for mission-critical applications */}
          Temporal is the open source microservices orchestration engine for running mission critical code at any scale.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between mb-8 sm:mb-8 items-center">
        <div className="flex flex-col sm:flex-row mb-4 lg:text-xl">
          <a className="button w-300 h-60 md:w-200 mr-4 mb-4 lg:w-300 text-spaceblack bg-temporalblue  hover:bg-teal-200" href="#explain-temporal">2 Minute Intro</a>
          <a className="button  w-300 h-60 md:w-200 lg:w-300" href="#join-us">We're Hiring</a>
        </div>
        {clicked ? <div className="inline-flex md:-mt-8">
          <a className="mr-8" href="https://docs.temporal.io/docs/go-run-your-first-app">
            <img aria-label="go SDK" className="w-16 h-16 md:w-20 md:h-20 transition-transform transform duration-300 hover:scale-110  object-contain" src="/logos/logo-go.png" alt="logo" />
          </a>
          <a className="" href="https://docs.temporal.io/docs/java-run-your-first-app">
            <img aria-label="java SDK" className="w-16 h-16 md:w-20 md:h-20 transition-transform transform duration-300 hover:scale-110  object-contain" src="/logos/logo-java.png" alt="logo" />
          </a>
        </div>
          :
          <button className="lg:text-xl hover:text-temporalblue" onClick={() => setClicked(true)}>I'm a developer, take me to code! →</button>
        }
      </div>
    </div>
  )
}