import Image from 'next/image'
import imageLoader from '../../helper/imageLoader'
import RectangleImage from '../../public/common/LoginImage.png'

const Items = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 px-8 lg:px-80 mt-36">
      <div className="flex flex-col max-w-xl mx-auto">
        <Image
          data-aos="fade-down"
          className="rounded-2xl"
          width={620}
          height={620}
          src={RectangleImage}
          alt="BoostMe's Background"
          loader={imageLoader}
        />
        <div
          data-aos="fade-up"
          className="mt-12 text-center lg:text-start p-8 border-4 rounded-2xl border-primary">
          <h1 className="text-center text-xl md:text-2xl font-semibold break-words lg:text-4xl text-neutral lg:tracking-wide xl:text-5xl mb-6">
            News 1
          </h1>
          <p className="text-neutral text-xs lg:text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui mollitia vero alias
            consequatur doloremque numquam necessitatibus natus commodi illo error! Earum blanditiis
            dolores dolor tempore inventore ipsam temporibus quam est.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-col-reverse max-w-xl mx-auto">
        <Image
          data-aos="fade-up"
          className="rounded-2xl"
          width={620}
          height={620}
          src={RectangleImage}
          alt="BoostMe's Background"
          loader={imageLoader}
        />
        <div
          data-aos="fade-down"
          className="mt-12 lg:mb-12 text-center lg:text-start p-8 border-4 rounded-2xl border-secondary">
          <h1 className="text-center text-xl md:text-2xl font-semibold break-words lg:text-4xl text-neutral lg:tracking-wide xl:text-5xl mb-6">
            News 2
          </h1>
          <p className="text-neutral text-xs lg:text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui mollitia vero alias
            consequatur doloremque numquam necessitatibus natus commodi illo error! Earum blanditiis
            dolores dolor tempore inventore ipsam temporibus quam est.
          </p>
        </div>
      </div>
      <div className="flex flex-col max-w-xl mx-auto">
        <Image
          data-aos="fade-down"
          className="rounded-2xl"
          width={620}
          height={620}
          src={RectangleImage}
          alt="BoostMe's Background"
          loader={imageLoader}
        />
        <div
          data-aos="fade-up"
          className="mt-12 lg:mb-12 text-center lg:text-start p-8 border-4 rounded-2xl border-primary">
          <h1 className="text-center text-xl md:text-2xl font-semibold break-words lg:text-4xl text-neutral lg:tracking-wide xl:text-5xl mb-6">
            News 3
          </h1>
          <p className="text-neutral text-xs lg:text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui mollitia vero alias
            consequatur doloremque numquam necessitatibus natus commodi illo error! Earum blanditiis
            dolores dolor tempore inventore ipsam temporibus quam est.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-col-reverse max-w-xl mx-auto">
        <Image
          data-aos="fade-up"
          className="rounded-2xl"
          width={620}
          height={620}
          src={RectangleImage}
          alt="BoostMe's Background"
          loader={imageLoader}
        />
        <div
          data-aos="fade-up"
          className="mt-12 lg:mb-12 text-center lg:text-start p-8 border-4 rounded-2xl border-secondary">
          <h1 className="text-center text-xl md:text-2xl font-semibold break-words lg:text-4xl text-neutral lg:tracking-wide xl:text-5xl mb-6">
            News 4
          </h1>
          <p className="text-neutral text-xs lg:text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui mollitia vero alias
            consequatur doloremque numquam necessitatibus natus commodi illo error! Earum blanditiis
            dolores dolor tempore inventore ipsam temporibus quam est.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Items
