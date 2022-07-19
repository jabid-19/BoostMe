import Image from 'next/image';
import FrameImage from '../public/login-section/Frame 10.png';

const LoginFrameImage = () => {
    return (
        <div className='lg:fixed lg:bottom-0 lg:right-0'>
            <Image className='' width={500} height={117} src={FrameImage} alt="" />
        </div>
    );
}

export default LoginFrameImage;