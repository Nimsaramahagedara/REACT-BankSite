import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => 
  (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi commodi rerum explicabo ea saepe nulla suscipit quo, doloremque eius? Repudiandae eos, molestias deserunt delectus nemo quas placeat impedit at provident!</p>
        <Button styles="mt-10"/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="" className='w-[100%] h-[100%]'/>
      </div>
      
    </section>
  )


export default CardDeal