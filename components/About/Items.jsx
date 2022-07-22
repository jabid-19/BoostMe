import Image from 'next/image'
import RectangleImage from '../../public/login-section/Rectangle 10.png'
import imageLoader from '../../helper/imageLoader'

const Items = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 px-8 lg:px-80 mt-36">
      <div className="flex flex-col max-w-xl mx-auto">
        <Image width={620} height={620} src={RectangleImage} alt="" loader={imageLoader} />
        <div className="mt-12 text-center lg:text-start">
          <h1 className="text-center text-3xl mb-6">News 1</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui mollitia vero alias
            consequatur doloremque numquam necessitatibus natus commodi illo error! Earum blanditiis
            dolores dolor tempore inventore ipsam temporibus quam est.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-col-reverse max-w-xl mx-auto">
        <Image width={620} height={620} src={RectangleImage} alt="" loader={imageLoader} />
        <div className="mt-12 lg:mb-12 text-center lg:text-start">
          <h1 className="text-center text-3xl mb-6">News 2</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui mollitia vero alias
            consequatur doloremque numquam necessitatibus natus commodi illo error! Earum blanditiis
            dolores dolor tempore inventore ipsam temporibus quam est.
          </p>
        </div>
      </div>
      <div className="flex flex-col max-w-xl mx-auto">
        <Image width={620} height={620} src={RectangleImage} alt="" loader={imageLoader} />
        <div className="mt-12 text-center lg:text-start">
          <h1 className="text-center text-3xl mb-6">News 3</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui mollitia vero alias
            consequatur doloremque numquam necessitatibus natus commodi illo error! Earum blanditiis
            dolores dolor tempore inventore ipsam temporibus quam est.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-col-reverse max-w-xl mx-auto">
        <Image width={620} height={620} src={RectangleImage} alt="" loader={imageLoader} />
        <div className="mt-12 lg:mb-12 text-center lg:text-start">
          <h1 className="text-center text-3xl mb-6">News 4</h1>
          <p>
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
