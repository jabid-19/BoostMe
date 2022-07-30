import Image from 'next/image'
import imageLoader from '../../helper/imageLoader'
import RectangleImage from '../../public/common/LoginImage.png'
const RectangleLoginImage = () => {
  return (
    <div data-aos="fade-up-right" className="hidden lg:flex">
      <div>
        <Image
          width={620}
          height={620}
          src={RectangleImage}
          alt="BoostMe's Login Section"
          loader={imageLoader}
        />
      </div>
    </div>
  )
}

export default RectangleLoginImage
