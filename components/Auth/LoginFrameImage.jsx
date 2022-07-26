import Image from 'next/image'
import imageLoader from '../../helper/imageLoader'
import FrameImage from '../../public/common/BoxBackground.png'

const LoginFrameImage = () => {
  return (
    <div>
      <Image
        width={500}
        height={117}
        src={FrameImage}
        alt="BoostMe's Background Image"
        loader={imageLoader}
      />
    </div>
  )
}

export default LoginFrameImage
