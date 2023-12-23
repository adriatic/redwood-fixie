import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <link rel="stylesheet" href="css/style.css" />
      <h1>HomePage</h1>
      <button className="btn-blue">click</button>
    </>
  )
}

export default HomePage
