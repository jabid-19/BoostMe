import Image from 'next/image'
import RectangleImage from '../../public/login-section/Rectangle 10.png'
import imageLoader from '../../helper/imageLoader'

const Vision = () => {
  return (
    <div className="hero min-h-screen bg-base-100 mt-36">
      <div className="hero-content flex-col lg:flex-row px-8 lg:px-12">
        {/* <img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" /> */}
        <Image width={620} height={620} src={RectangleImage} alt="" loader={imageLoader} />
        <div className="max-w-2xl lg:pl-8">
          <h1 className="text-3xl lg:text-5xl">Vision</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, non ratione. Harum unde
            veritatis commodi ut, obcaecati delectus quae, deleniti aut excepturi necessitatibus,
            neque esse? Ipsum eos cum nobis facilis. Fuga earum aliquid quasi minus blanditiis error
            laborum illum, eius, saepe architecto nam doloribus tempora obcaecati nobis? Nisi, neque
            est!
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Vision
