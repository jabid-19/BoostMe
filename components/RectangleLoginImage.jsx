import Image from 'next/image';
import RectangleImage from '../public/login-section/Rectangle 10.png';

const RectangleLoginImage = () => {
    return (
        <div className='hidden lg:block lg:w-1/2'>
            <div className='lg:fixed lg:bottom-0 lg:left-0'>
                <Image className='' width={520} height={520} src={RectangleImage} alt="" />
            </div>
        </div>
    );
}

export default RectangleLoginImage;