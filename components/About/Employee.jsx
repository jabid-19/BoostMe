import Image from 'next/image'
import imageLoader from '../../helper/imageLoader'
import MaleAvatar from '../../public/about-section/profile-male-avatar.svg'
import FemaleAvatar from '../../public/about-section/profile-female-avatar.svg'
const Employee = () => {
  return (
    <div className="my-24 mx-auto max-w-screen-2xl">
      <div className="flex flex-col lg:flex-row lg:justify-center items-center py-4 px-8 lg:px-36">
        <div data-aos="fade-right" className="avatar">
          <div className="w-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <Image
              width={320}
              height={320}
              src={MaleAvatar}
              alt="BoostnBoom's Team Member"
              loader={imageLoader}
            />
          </div>
        </div>
        <div data-aos="fade-left" className="mt-6 lg:pl-12 text-center lg:text-start">
          <h1 className="text-xl md:text-2xl font-semibold break-words lg:text-4xl text-neutral lg:tracking-wide xl:text-5xl">
            টিম মেম্বার নাম্বার ১
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
            <Image
              width={320}
              height={320}
              src={FemaleAvatar}
              alt="BoostnBoom's Team Member"
              loader={imageLoader}
            />
          </div>
        </div>
        <div data-aos="fade-left" className="mt-6 lg:pl-12 text-center lg:text-start">
          <h1 className="text-xl md:text-2xl font-semibold break-words lg:text-4xl text-neutral lg:tracking-wide xl:text-5xl">
            টিম মেম্বার নাম্বার ২
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
            <Image
              width={320}
              height={320}
              src={MaleAvatar}
              alt="BoostnBoom's Team Member"
              loader={imageLoader}
            />
          </div>
        </div>
        <div data-aos="fade-left" className="mt-6 lg:pl-12 text-center lg:text-start">
          <h1 className="text-xl md:text-2xl font-semibold break-words lg:text-4xl text-neutral lg:tracking-wide xl:text-5xl">
            টিম মেম্বার নাম্বার ৩
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
