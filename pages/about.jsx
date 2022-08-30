import Items from '../components/About/Items'
import Vision from '../components/About/Vision'
// import Employee from '../components/About/Employee'
import AboutUs from '../components/About/AboutUs'
import Goal from '../components/About/Goal'
// import EmployeeCover from '../components/About/EmployeeCover'
import Head from 'next/head'
import CustomerHeader from '../components/Customers/CustomerHeader'

const About = () => {
  const headingDescriptions = {
    subtitle: 'ট্রাডিশনাল মার্কেটের বাইরে',
    title: 'স্বপ্ন না,',
    titleSpan: 'শতভাগ সত্য!',
    description:
      'সোশ্যাল মিডিয়ার মাধ্যমে কম খরচে ঘরে বসে কাস্টমার বাড়ান! আপনার ব্যবসাকে অনন্য এক উচ্চতায় নিয়ে যেতে আমরা আছি আমার পাশে!',
  }
  return (
    <div>
      <Head>
        <title>Boost N Boom | About</title>
        <meta
          name="description"
          content="Want boosting and content management for your business here comes Boost N Boom | About"
        />
      </Head>
      <CustomerHeader headingDescriptions={headingDescriptions} />
      <AboutUs />
      <Vision />
      <Goal />
      <Items />
      {/* <EmployeeCover /> */}
      {/* <Employee /> */}
    </div>
  )
}

export default About
