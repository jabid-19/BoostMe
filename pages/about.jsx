import Items from '../components/About/Items'
import Vision from '../components/About/Vision'
import Employee from '../components/About/Employee'
import Goal from '../components/About/Goal'
import AboutUs from '../components/About/AboutUs'
import EmployeeCover from '../components/About/EmployeeCover'
import AboutHeader from '../components/About/AboutHeader'

const About = () => {
  return (
    <div>
      <AboutHeader />
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
