import Image from 'next/image'
import imageLoader from '../../helper/imageLoader'
import FrameImage from '../../public/login-section/Frame 10.png'

const LoginFrameImage = () => {
  return (
    <div>
      <Image width={500} height={117} src={FrameImage} alt="" loader={imageLoader} />
    </div>
  )
}

export default LoginFrameImage
