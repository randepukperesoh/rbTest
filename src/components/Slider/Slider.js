import styles from './Slider.module.css'
import { Card } from '../Card/Card'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
import data from './Slider.json'
import { useRef, useState } from 'react'

export const Slider = () => {
    const swiperRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(1);

    const goToPrevSlide = () => {
        swiperRef.current.swiper.slidePrev();
        setCurrentSlide(swiperRef.current.swiper.activeIndex + 1)
    };
    
    const goToNextSlide = () => {
        swiperRef.current.swiper.slideNext();
        setCurrentSlide(swiperRef.current.swiper.activeIndex + 1)
    };

    return(
        <div className={styles.sliderWrapper}>
            <Swiper ref={swiperRef}>
                {data.cards.map(card => {
                    return<SwiperSlide key={card.id}>
                        <Card item={card} />
                    </SwiperSlide>
                })}
            </Swiper>
            <div className={styles.sliderControls}>
            <svg onClick={goToPrevSlide} className={styles.prev} width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_24174_68)">
                <path d="M32.6718 15.6719H4.54488L9.20421 11.0351C9.7241 10.5177 9.7261 9.67678 9.20866 9.15689C8.69122 8.63693 7.85025 8.635 7.33036 9.15237L0.390637 16.0586C0.390173 16.059 0.389841 16.0595 0.389442 16.0599C-0.129124 16.5773 -0.130784 17.4209 0.389309 17.9401C0.389774 17.9405 0.390106 17.941 0.390505 17.9414L7.33022 24.8476C7.85005 25.3649 8.69102 25.3631 9.20852 24.8431C9.72596 24.3232 9.72397 23.4823 9.20408 22.9648L4.54488 18.3281H32.6718C33.4053 18.3281 33.9999 17.7335 33.9999 17C33.9999 16.2665 33.4053 15.6719 32.6718 15.6719Z" fill="#E1E1E1"/>
                </g>
                <defs>
                <clipPath id="clip0_24174_68">
                <rect width="34" height="34" fill="white"/>
                </clipPath>
                </defs>
            </svg>
                <div className={styles.sliderNumbers}><span className={styles.numberOfCard}>{currentSlide}</span>/4</div>
            <svg onClick={goToNextSlide} className={styles.next} width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_24174_68)">
                <path d="M32.6718 15.6719H4.54488L9.20421 11.0351C9.7241 10.5177 9.7261 9.67678 9.20866 9.15689C8.69122 8.63693 7.85025 8.635 7.33036 9.15237L0.390637 16.0586C0.390173 16.059 0.389841 16.0595 0.389442 16.0599C-0.129124 16.5773 -0.130784 17.4209 0.389309 17.9401C0.389774 17.9405 0.390106 17.941 0.390505 17.9414L7.33022 24.8476C7.85005 25.3649 8.69102 25.3631 9.20852 24.8431C9.72596 24.3232 9.72397 23.4823 9.20408 22.9648L4.54488 18.3281H32.6718C33.4053 18.3281 33.9999 17.7335 33.9999 17C33.9999 16.2665 33.4053 15.6719 32.6718 15.6719Z" fill="#E1E1E1"/>
                </g>
                <defs>
                <clipPath id="clip0_24174_68">
                <rect width="34" height="34" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            </div>
        </div>
    )
}