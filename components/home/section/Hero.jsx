import Image from 'next/image'
import React from 'react'
import styles from '../../../styles/Home.module.css'
const Hero = () => {
  return (
    <main className={styles.hero}>
      <section className={styles.hero_section}>
        <div className="flex flex-col gap-8">
          <Image src="/landing-section/Group 8.png" width={236} height={273} alt="Landing" />
          <Image src="/landing-section/Group 9.png" width={236} height={273} alt="Landing" />
        </div>
        <div className="flex flex-col">
          <div className={styles.hero_text}>
            <div>
              <h1 className="text-5xl font-semibold text-neutral tracking-wide">
                Build your <span className="text-primary">audience</span> and{' '}
                <span className="text-secondary">grow</span> your brand
              </h1>
            </div>
          </div>
          <div className="flex gap-24">
            <div>
              <Image src="/landing-section/Group 10.png" width={236} height={273} alt="Landing" />
            </div>
            {/* <div className="w-80">
              <div>
                <p>
                  Plan and publish your content for Instagram, TikTok, Facebook, Twitter, Pinterest,
                  and LinkedIn, all from one simple dashboard. Plan and publish your content for
                  Instagram, TikTok, Facebook, Twitter, Pinterest, and LinkedIn, all from one simple
                  dashboard.
                </p>
              </div>
              <div>
                <button className="btn btn-wide">Wide</button>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero
