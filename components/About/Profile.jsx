import Image from 'next/image'
import RectangleImage from '../../public/login-section/Rectangle 10.png'
import imageLoader from '../../helper/imageLoader'
const Profile = () => {
  return (
    <div className="my-36">
      <div className="flex flex-col lg:flex-row lg:justify-center items-center py-4 px-8 lg:px-20">
        <div className="avatar">
          <div className="w-48 rounded-full">
            <Image width={320} height={320} src={RectangleImage} alt="" loader={imageLoader} />
          </div>
        </div>
        <div className="mt-6 lg:pl-12 text-center lg:text-start">
          <h1 className="text-3xl">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-center items-center py-4 px-8 lg:px-20">
        <div className="avatar">
          <div className="w-48 rounded-full">
            <Image width={320} height={320} src={RectangleImage} alt="" loader={imageLoader} />
          </div>
        </div>
        <div className="mt-6 lg:pl-12 text-center lg:text-start">
          <h1 className="text-3xl">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-center items-center py-4 px-8 lg:px-20">
        <div className="avatar">
          <div className="w-48 rounded-full">
            <Image width={320} height={320} src={RectangleImage} alt="" loader={imageLoader} />
          </div>
        </div>
        <div className="mt-6 lg:pl-12 text-center lg:text-start">
          <h1 className="text-3xl">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Profile
