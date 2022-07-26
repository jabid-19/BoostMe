import Image from 'next/image'
import imageLoader from '../../helper/imageLoader'
import RectangleImage from '../../public/login-section/LoginImage.png'
const Employee = () => {
  return (
    <div className="my-36 lg:mx-36">
      <div className="flex flex-col lg:flex-row lg:justify-center items-center py-4 px-8 lg:px-36">
        <div data-aos="fade-right" className="avatar">
          <div className="w-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <Image width={320} height={320} src={RectangleImage} alt="" loader={imageLoader} />
          </div>
        </div>
        <div data-aos="fade-left" className="mt-6 lg:pl-12 text-center lg:text-start">
          <h1 className="text-xl md:text-2xl font-semibold break-words lg:text-4xl text-neutral lg:tracking-wide xl:text-5xl">
            Employee No 1
          </h1>
          <p className="text-neutral text-xs lg:text-lg py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-center items-center py-4 px-8 lg:px-36">
        <div data-aos="fade-right" className="avatar">
          <div className="w-52 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
            <Image width={320} height={320} src={RectangleImage} alt="" loader={imageLoader} />
          </div>
        </div>
        <div data-aos="fade-left" className="mt-6 lg:pl-12 text-center lg:text-start">
          <h1 className="text-xl md:text-2xl font-semibold break-words lg:text-4xl text-neutral lg:tracking-wide xl:text-5xl">
            Employee No 2
          </h1>
          <p className="text-neutral text-xs lg:text-lg py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-center items-center py-4 px-8 lg:px-36">
        <div data-aos="fade-right" className="avatar">
          <div className="w-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <Image width={320} height={320} src={RectangleImage} alt="" loader={imageLoader} />
          </div>
        </div>
        <div data-aos="fade-left" className="mt-6 lg:pl-12 text-center lg:text-start">
          <h1 className="text-xl md:text-2xl font-semibold break-words lg:text-4xl text-neutral lg:tracking-wide xl:text-5xl">
            Employee No 3
          </h1>
          <p className="text-neutral text-xs lg:text-lg py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Employee
