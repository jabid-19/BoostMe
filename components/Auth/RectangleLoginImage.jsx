import Image from 'next/image'
import RectangleImage from '../../public/login-section/Rectangle 10.png'
import imageLoader from '../../helper/imageLoader'
const RectangleLoginImage = () => {
  return (
    <div className="hidden lg:flex lg:items-end z-10">
      <div className="lg:h-3/4">
        <Image width={620} height={620} src={RectangleImage} alt="" loader={imageLoader} />
      </div>
    </div>
  )
}

export default RectangleLoginImage
