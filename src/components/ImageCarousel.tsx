import { useState } from 'react'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'
import image7 from '../assets/image7.jpg'
import image8 from '../assets/image8.jpg'
import image9 from '../assets/image9.jpg'
import image10 from '../assets/image10.jpg'
import image11 from '../assets/image11.jpg'
import image12 from '../assets/image12.jpg'

export default function ImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)

    const images = [
        image3,
        image10,
        image12,
        image8,
        image1,
        image9,
        image2,
        image4,
        image5,
        image6,
        image7,
        image11,
    ]

    const changeImage = (newIndex: number) => {
        setIsTransitioning(true)
        setTimeout(() => {
            setCurrentIndex(newIndex)
            setIsTransitioning(false)
        }, 200)
    }

    const nextImage = () => {
        changeImage((currentIndex + 1) % images.length)
    }

    const prevImage = () => {
        changeImage((currentIndex - 1 + images.length) % images.length)
    }

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
            <div className="relative group">
                <div className="relative flex items-center justify-center h-[500px] sm:h-[600px] md:h-[700px] rounded-xl">
                    <img
                        src={images[currentIndex]}
                        alt={`Фото ${currentIndex + 1}`}
                        loading="lazy"
                        className={`w-full h-full object-contain transition-all duration-500 ${
                            isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                        }`}
                    />

                    {/* Счетчик */}
                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium">
                        {currentIndex + 1} / {images.length}
                    </div>

                    {/* Кнопки - более элегантные */}
                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-900 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-900 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>


            {/* Превью миниатюр - БЕЗ рамок */}
            <div className="mt-6 md:mt-8 overflow-x-auto scrollbar-hide">
                <div className="flex gap-3 md:gap-4 justify-start md:justify-center min-w-max md:min-w-0 px-2">
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 overflow-hidden transition-all duration-300 ${
                                idx === currentIndex
                                    ? 'scale-110 opacity-100'
                                    : 'opacity-50 hover:opacity-80 hover:scale-105'
                            }`}
                        >
                            <img
                                src={img}
                                alt={`Превью ${idx + 1}`}
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* Индикаторы (точки) - БЕЗ рамок */}
            <div className="flex md:hidden justify-center gap-2 mt-6 px-4">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            idx === currentIndex
                                ? 'bg-gray-800 w-8'
                                : 'bg-gray-400 w-2'
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}