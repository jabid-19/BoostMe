import Image from 'next/image'
import imageLoader from '../../helper/imageLoader'
import FrameImage from '../../public/common/BoxBackground.png'

const AboutUs = () => {
  return (
    <div className="hero min-h-screen p-8 mx-auto relative">
      <div
        data-aos="zoom-in"
        className="hero-content p-8 lg:m-12 flex-col lg:flex-row-reverse border-4 rounded-2xl border-primary z-20">
        <div className="text-justify">
          <h1 className=" text-xl md:text-2xl font-semibold break-words lg:text-4xl text-neutral lg:tracking-wide xl:text-5xl text-center lg:text-justify">
            About <span className="text-primary">Our Community</span>
          </h1>
          <p className="text-neutral text-xs lg:text-lg py-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, culpa explicabo!
            Totam omnis, repellat veritatis voluptates, culpa nostrum laborum quo ipsam odio dolore
            sapiente quaerat porro ipsum, cum fuga quos animi autem repudiandae possimus doloremque.
            Quidem quos perferendis laboriosam doloremque, molestias beatae cumque fugiat dolor
            aspernatur voluptatum consequuntur expedita quod, corporis earum. Magnam nesciunt
            laudantium dolorum quibusdam ipsam necessitatibus corporis delectus illo doloribus vero
            ratione reiciendis, et quae iusto veniam aperiam qui exercitationem! Numquam, voluptatem
            placeat eligendi nobis excepturi alias delectus quos suscipit eaque illo sapiente,
            aliquam, reiciendis tempora facere deserunt! Laudantium fugiat dolorem minus commodi
            ipsa deserunt quia id nisi enim? Earum corporis odit neque maiores facere. Laboriosam,
            perspiciatis quasi! Sed, labore atque! Praesentium, quasi. Sit amet ipsa itaque, quod
            similique blanditiis voluptatibus accusantium dicta ipsum iusto, ea alias id!
            Temporibus, sunt quia. Provident, illo. Id earum vel modi veniam corporis non atque
            dignissimos sequi rem culpa iusto suscipit nemo, laudantium distinctio ex ut inventore
            sapiente maxime magni perferendis molestiae fugiat fugit provident facere? Consequuntur
            sed doloremque autem necessitatibus quaerat rem delectus, dolorum dolor ad nostrum
            quibusdam ab asperiores eum quisquam natus repellat magnam mollitia aspernatur id? Esse
            ipsum doloremque incidunt, eum exercitationem architecto ducimus distinctio nostrum
            adipisci voluptatibus?
          </p>
        </div>
      </div>
      <div data-aos="fade-up-left" className="absolute bottom-0 right-0">
        <Image width={500} height={117} src={FrameImage} alt="" loader={imageLoader} />
      </div>
    </div>
  )
}

export default AboutUs
