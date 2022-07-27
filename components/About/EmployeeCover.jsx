const EmployeeCover = () => {
  return (
    <div
      className="hero min-h-screen mt-36"
      style={{ backgroundImage: `url('/common/BackgroundBanner.png')` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div data-aos="zoom-in" className="max-w-full">
          <h1 className="text-5xl lg:text-7xl">We who worked on this site</h1>
          <h2 className="text-3xl pt-6">Where the passion begins</h2>
        </div>
      </div>
    </div>
  )
}

export default EmployeeCover
