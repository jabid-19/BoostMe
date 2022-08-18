const EmployeeCover = () => {
  return (
    <div
      className="hero min-h-[50vh] mt-24 lg:mt-36"
      style={{ backgroundImage: `url('/common/BackgroundBanner.png')` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div data-aos="zoom-in" className="max-w-full">
          <h1 className="text-5xl lg:text-7xl">আমাদের বিশেষজ্ঞ টিম মেম্বার</h1>
          <h2 className="text-3xl pt-6">যারা প্রতিনিয়ত আপনাদের সেবায় নিয়োজিত</h2>
        </div>
      </div>
    </div>
  )
}

export default EmployeeCover
