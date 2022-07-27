import Items from '../components/About/Items'
import Vision from '../components/About/Vision'
import Employee from '../components/About/Employee'
import Goal from '../components/About/Goal'
import AboutUs from '../components/About/AboutUs'
import EmployeeCover from '../components/About/EmployeeCover'
import CustomerHeader from '../components/Customers/CustomerHeader'
import Head from 'next/head'

const About = () => {
  const headingDescriptions = {
    subtitle: "YOU'RE GOING TO KNOW",
    title: 'About',
    titleSpan: 'Our Community',
    description: 'See how our community is growing businesses and explore who we are',
  }
  return (
    <div>
      <Head>
        <title>Boost ME | About</title>
      </Head>
      <CustomerHeader headingDescriptions={headingDescriptions} />
      <AboutUs />
      <Vision />
      <Goal />
      <Items />
      <EmployeeCover />
      <Employee />
    </div>
  )
}

export default About
