import Image from 'next/image'
import imageLoader from '../../helper/imageLoader'
import FrameImage from '../../public/common/BoxBackground.png'

const AboutUs = () => {
  return (
    <div className="hero lg:min-h-screen p-8 mx-auto relative">
      <div
        data-aos="zoom-in"
        className="hero-content p-8 lg:m-12 flex-col lg:flex-row-reverse border-4 rounded-2xl border-primary z-20">
        <div className="text-justify">
          <h1 className=" text-xl md:text-2xl font-semibold break-words lg:text-4xl text-neutral lg:tracking-wide xl:text-5xl text-center lg:text-justify">
            {/* About <span className="text-primary">Our Community</span> */}
            আমাদের <span className="text-primary">সম্পর্কে</span>
          </h1>
          <p className="text-neutral text-xs lg:text-lg py-6">
            BoostnBoom বাংলাদেশের অন্যতম সেরা ডিজিটাল মার্কেটিং এজেন্সি, যেখানে আপনি একদম কম খরচে
            ঝামেলা বিহীনভাবে আপনার প্রতিষ্ঠানের প্রোডাক্ট বা সার্ভিস ব্যান্ডিং করতে পারেন। গতানুগতিক
            মার্কেটিং সিস্টেম এর বাইরে আধুনিক জীবন ব্যবস্থার সাথে তাল মিলিয়ে আমরা আপনার প্রোডাক্ট বা
            সেবা কাস্টমারের কাছে পৌঁছে দিতে চাই। ফেসবুক, ইউটিউব, ইনস্টাগ্রাম - এর মতো সোশ্যাল
            সাইটগুলো এখন আর শুধু ছবি কিংবা স্ট্যাটাস শেয়ারের মধ্যে সীমাবদ্ধ নেই। বিলিয়ন ডলারের
            ব্যবসা পরিচালিত হয় প্রতিদিন এসব সোশ্যাল সাইটগুলোর ওপর ভিত্তি করে! যেহেতু এসব প্লাটফর্মে
            প্রতিদিন কোটি কোটি মানুষের আনাগোনা, তাই ব্যবসায়িক উদ্দেশ্যে অনেকেই একসাথে অসংখ্য মানুষের
            এনগেজমেন্টের এই সুযোগটা কাজে লাগায়। তাহলে আপনি অন্যদের থেকে পিছিয়ে থাকবেন কেন?
            <br /> <br />
            আপনি কি চান না আমাদের এক ক্লিকে আপনার প্রোডাক্ট কিংবা সার্ভিস পৌঁছে যাক দেশ- বিদেশের
            প্রতিটি টার্গেট কাস্টমারের কাছে? আপনি যদি হ্যাসেল ফ্রি মার্কেটিং করতে চান, খুব সহজে
            নামমাত্র খরচে নিজের ব্যবসার পরিধি বাড়াতে চান, তাহলে আমরা আছি আপনার পাশে। দেশসহ দেশের
            বাইরেও অসংখ্য ক্লায়েন্টকে আমরা সেবা প্রদান করে আসছি। আমাদের দক্ষতা ও অভিজ্ঞতা হোক আপনার
            ব্যবসায়িক সাফল্যের হাতিয়ার। প্রোডাক্ট বা সার্ভিস আপনার, ব্যান্ডিং করার দায়িক্ত আমাদের।
            তাহলে দেরি কেন?
          </p>
        </div>
      </div>
      <div data-aos="fade-up-left" className="hidden lg:block lg:absolute lg:bottom-0 lg:right-0">
        <Image
          width={500}
          height={117}
          src={FrameImage}
          alt="BoostnBoom's About Us Background Image"
          loader={imageLoader}
        />
      </div>
    </div>
  )
}

export default AboutUs
