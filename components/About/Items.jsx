import Image from 'next/image'
import imageLoader from '../../helper/imageLoader'
import RectangleImage from '../../public/common/LoginImage.png'
import CreateContent from '../../public/about-section/content-create.svg'
import MarketAnalysis from '../../public/about-section/market-analysis.svg'
import MonitorActivity from '../../public/about-section/monitor-activity.svg'
import ResultAnalysis from '../../public/about-section/result-analysis.svg'

const Items = () => {
  return (
    <div className="my-24 lg:mt-36 lg:mb-28">
      <h1 className="text-center text-xl md:text-2xl font-semibold break-words lg:text-4xl text-neutral lg:tracking-wide xl:text-5xl">
        আমাদের <span className="text-primary">বিশেষত্ব</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 px-8 md:px-36 mt-14 lg:mt-24 max-w-screen-2xl mx-auto">
        <div className="flex flex-col min-w-xl mx-auto">
          <Image
            data-aos="fade-down"
            className="rounded-2xl"
            width={520}
            height={520}
            src={CreateContent}
            alt="Create Content"
            loader={imageLoader}
          />
          <div
            data-aos="fade-up"
            className="mt-12 text-center lg:text-start p-8 border-4 rounded-2xl border-primary">
            <h1 className="text-xl md:text-2xl font-semibold break-words lg:text-4xl text-neutral lg:tracking-wide xl:text-5xl mb-6">
              কনটেন্ট তৈরি
            </h1>
            <p className="text-neutral text-xs lg:text-lg">
              প্রোমোশনের জন্য প্রোডাক্ট কিংবা সার্ভিসের উপর ভিত্তি করে কনটেন্ট তৈরি করি, যাতে
              কাস্টমার খুব সহজে আপনার প্রোডাক্ট সম্পর্কে স্বচ্ছ ধারণা পায়।
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-col-reverse min-w-xl mx-auto">
          <Image
            data-aos="fade-up"
            className="rounded-2xl"
            width={520}
            height={520}
            src={MarketAnalysis}
            alt="Market Analysis"
            loader={imageLoader}
          />
          <div
            data-aos="fade-down"
            className="mt-12 lg:mb-0 text-center lg:text-start p-8 border-4 rounded-2xl border-secondary">
            <h1 className="text-xl md:text-2xl font-semibold break-words lg:text-4xl text-neutral lg:tracking-wide xl:text-5xl mb-6">
              বাজার বিশ্লেষণ
            </h1>
            <p className="text-neutral text-xs lg:text-lg">
              বাজার বিশ্লেষণের মাধ্যমে আমরা প্রোডাক্টের টার্গেট কাস্টমার ফাইন্ডআউট করি। তারপর
              কাস্টমারের ইন্টাররেস্ট অনুযায়ী বয়স, এলাকা এমনকি জেন্ডার ভাগ করে Ad রান করি।
            </p>
          </div>
        </div>
        <div className="flex flex-col min-w-xl mx-auto">
          <Image
            data-aos="fade-down"
            className="rounded-2xl"
            width={520}
            height={520}
            src={MonitorActivity}
            alt="Monitor Activity"
            loader={imageLoader}
          />
          <div
            data-aos="fade-up"
            className="mt-12 lg:mb-12 text-center lg:text-start p-8 border-4 rounded-2xl border-primary">
            <h1 className="text-xl md:text-2xl font-semibold break-words lg:text-4xl text-neutral lg:tracking-wide xl:text-5xl mb-6">
              মনিটর এক্টিভিটি
            </h1>
            <p className="text-neutral text-xs lg:text-lg">
              কাস্টমার এনগেজমেন্ট যেন বেশি হয় সেইজন্য আমরা Ad রান করে তা মনিটর করি, যাতে ব্যবসায়িক
              উদ্দেশ্য শতভাগ সফল হয়। মার্কেট ট্রেন্ড এবং কম্পেটিটর অনুযায়ী প্রোডাক্ট সিলেক্ট করে
              মার্কেটিং করি। সার্বক্ষণিক মনিটরিং কাস্টমার এনগেজমেন্ট বৃদ্ধি করতে সহায়ক ভূমিকা পালন
              করে।
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-col-reverse min-w-xl mx-auto">
          <Image
            data-aos="fade-up"
            className="rounded-2xl"
            width={520}
            height={520}
            src={ResultAnalysis}
            alt="Result Analysis"
            loader={imageLoader}
          />
          <div
            data-aos="fade-up"
            className="mt-12 lg:mb-12 text-center lg:text-start p-8 border-4 rounded-2xl border-secondary">
            <h1 className="text-xl md:text-2xl font-semibold break-words lg:text-4xl text-neutral lg:tracking-wide xl:text-5xl mb-6">
              ফলাফল বিশ্লেষণ
            </h1>
            <p className="text-neutral text-xs lg:text-lg">
              প্রোডাক্ট বা সার্ভিসের এড রান করার পর কাস্টমার এনগেজমেন্টসহ প্রোডাক্ট রিলেটেড অন্যান্য
              প্রতিটা বিষয়ে চুলচেরা বিশ্লেষণ করা হয়। বিজ্ঞাপন বা ব্রান্ডিং এর সফলতা ও দুর্বলতা আমরা
              বিশ্লেষণ করে পরবর্তী প্লান নির্ধারণ করে থাকি।
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Items
