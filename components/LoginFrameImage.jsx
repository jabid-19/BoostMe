import Image from 'next/image';
import FrameImage from '../public/login-section/Frame 10.png';
import imageLoader from '../helper/imageLoader';

const LoginFrameImage = () => {
    return (
        <div className='hidden lg:block lg:fixed lg:bottom-0 lg:right-0'>
            <Image className='' width={500} height={117} src={FrameImage} alt="" loader={imageLoader} />
        </div>
    );
}

export default LoginFrameImage;