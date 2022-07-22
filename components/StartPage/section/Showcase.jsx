import React, { useState } from 'react'

const Showcase = () => {
  const [tabs, setTabs] = useState(1)

  return (
    <div className="flex items-center flex-col justify-center w-auto mx-6 lg:h-screen 2xl:w-[1400px] 2xl:mx-auto mb-20">
      <div className="tabs">
        <a
          className={`tab tab-lg tab-lifted ${tabs === 1 && 'tab-active'}`}
          onClick={() => setTabs(1)}>
          Tab 1
        </a>
        <a
          className={`tab tab-lg tab-lifted ${tabs === 2 && 'tab-active'}`}
          onClick={() => setTabs(2)}>
          Tab 2
        </a>
        <a
          className={`tab tab-lg tab-lifted ${tabs === 3 && 'tab-active'}`}
          onClick={() => setTabs(3)}>
          Tab 3
        </a>
      </div>
    </div>
  )
}

export default Showcase
