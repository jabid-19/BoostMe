import { TiTick } from 'react-icons/ti'

const Goal = () => {
  return (
    <div
      data-aos="zoom-in"
      className="hero mt-24 lg:mt-8"
      style={{ backgroundImage: `url('/common/BackgroundBanner.png')` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content">
        <div className="max-w-full">
          <div className="py-12 px-8 lg:max-w-5xl lg:mx-auto text-white text-center lg:text-justify">
            <h1 className="text-xl md:text-2xl font-semibold break-words lg:text-4xl lg:tracking-wide xl:text-5xl pb-6">
              আমরা যেভাবে কাজ করে থাকি
            </h1>
            <div className="text-xs lg:text-lg pt-6">
              <p className="pb-2">
                <TiTick className="inline-block mr-2" />
                মার্কেট বিশ্লেষণ : আপনার ব্যবসায়িক প্রতিযোগিদের ডাটা বিশ্লেষণ করে তাদের উইক পয়েন্ট
                ফাইন্ডআউট করে সেই অনুযায়ী টার্গেট প্লান নির্ধারণ করি।
              </p>
              <p className="pb-2">
                <TiTick className="inline-block mr-2" />
                কাস্টমার টার্গেট: প্রোডাক্ট বা সার্ভিসের উপর নির্ভর করে কাস্টমার টার্গেট করে
                মার্কেটিং প্লান তৈরি করি।
              </p>
              <p>
                <TiTick className="inline-block mr-2" />
                এনগেজমেন্ট : প্রোডাক্ট বা সার্ভিস যেন সঠিক সময়ে প্রকৃত কাস্টমারের কাছে পৌঁছাতে পারে
                সেইজন্য বাজার বিশ্লেষণের মাধ্যমে এড রান করি।Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Tempora, nesciunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Goal
