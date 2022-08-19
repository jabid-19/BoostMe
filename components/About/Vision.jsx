import Image from 'next/image'
import imageLoader from '../../helper/imageLoader'
import ExcitedWoman from '../../public/about-section/ExcitedWoman.jpg'
import { TiTick } from 'react-icons/ti'

const Vision = () => {
  return (
    <div className="hero lg:min-h-screen bg-base-100 mt-14 lg:mt-8 max-w-screen-2xl mx-auto">
      <div className="hero-content flex-col lg:flex-row px-8 lg:px-2">
        <Image
          data-aos="fade-right"
          className="rounded-2xl"
          width={840}
          height={593}
          src={ExcitedWoman}
          alt="BoostMe's Vision"
          loader={imageLoader}
        />
        <div data-aos="fade-left" className="max-w-2xl lg:pl-8 text-center lg:text-justify">
          <h1 className="text-xl md:text-2xl font-semibold break-words lg:text-4xl text-neutral lg:tracking-wide xl:text-5xl">
            আমাদের <span className="text-primary">সেবা</span> কেন{' '}
            <span className="text-secondary">গ্রহণ</span> করবেন?
          </h1>
          <div className="text-xs lg:text-lg pt-6">
            <p className="py-2">
              <TiTick className="inline-block mr-2" />
              সেকেলে মার্কেটিং ব্যবস্থার চেয়ে ডিজিটাল প্লাটফর্মে কাস্টমার এনগেজমেন্ট বেশি।
            </p>
            <p className="pb-2">
              <TiTick className="inline-block mr-2" />
              ঝামেলাবিহীন মার্কেটিং এবং খুব সহজে অসংখ্য কাস্টমারের কাছে পৌঁছানো যায়।
            </p>
            <p className="pb-2">
              <TiTick className="inline-block mr-2" />
              কাস্টমার টার্গেট করে Ad রান করা যায়।
            </p>
            <p className="pb-2">
              <TiTick className="inline-block mr-2" />
              তুলনামূলক ব্রান্ডিং খরচ অনেক কম।
            </p>
            <p className="pb-6">
              <TiTick className="inline-block mr-2" />
              প্রতিযোগিতামূলক মার্কেটে ব্যবসায় সফলতার জন্য।
            </p>
          </div>
          <button className="btn btn-primary normal-case px-12 text-white rounded-full mt-2">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Vision
