import { useState, useEffect, useRef } from 'react'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'
import image7 from '../assets/image7.jpg'
import image8 from '../assets/image8.jpg'
import image9 from '../assets/image9.jpg'

export default function ImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [imageOrientation, setImageOrientation] = useState<'landscape' | 'portrait'>('landscape')
    const imgRef = useRef<HTMLImageElement>(null)

    const images = [
        image9,
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
    ]

    useEffect(() => {
        if (imgRef.current) {
            const img = imgRef.current
            const checkOrientation = () => {
                if (img.naturalWidth && img.naturalHeight) {
                    setImageOrientation(img.naturalHeight > img.naturalWidth ? 'portrait' : 'landscape')
                }
            }

            if (img.complete) {
                checkOrientation()
            } else {
                img.addEventListener('load', checkOrientation)
                return () => img.removeEventListener('load', checkOrientation)
            }
        }
    }, [currentIndex])

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 animate-fadeIn">
            <div className="relative group">
                {/* Основное изображение */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800">
                    {/* Декоративный градиент */}
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/30 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent z-10 pointer-events-none"></div>

                    <div className="flex items-center justify-center min-h-[500px] sm:min-h-[600px] md:min-h-[700px]">
                        <img
                            ref={imgRef}
                            key={currentIndex}
                            src={images[currentIndex]}
                            alt={`Фото ${currentIndex + 1}`}
                            className={`w-full animate-fadeIn ${
                                imageOrientation === 'portrait'
                                    ? 'h-[500px] sm:h-[600px] md:h-[700px] object-contain'
                                    : 'h-[500px] sm:h-[600px] md:h-[700px] object-cover'
                            }`}
                        />
                    </div>

                    {/* Счетчик фото */}
                    <div className="absolute top-6 right-6 z-20 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium">
                        {currentIndex + 1} / {images.length}
                    </div>
                </div>

                {/* Кнопки навигации */}
                <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white p-4 md:p-5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-x-1 opacity-0 group-hover:opacity-100"
                    aria-label="Previous image"
                >
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white p-4 md:p-5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:translate-x-1 opacity-0 group-hover:opacity-100"
                    aria-label="Next image"
                >
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Превью миниатюр */}
            <div className="mt-6 md:mt-8 overflow-x-auto scrollbar-hide">
                <div className="flex gap-3 md:gap-4 justify-start md:justify-center min-w-max md:min-w-0 px-2">
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden transition-all duration-300 ${
                                idx === currentIndex
                                    ? 'ring-4 ring-primary shadow-xl scale-110'
                                    : 'opacity-60 hover:opacity-100 hover:scale-105'
                            }`}
                        >
                            <img
                                src={img}
                                alt={`Превью ${idx + 1}`}
                                className="w-full h-full object-cover"
                            />
                            {idx === currentIndex && (
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Индикаторы (точки) - для мобилки */}
            <div className="flex md:hidden justify-center gap-2 mt-6 px-4">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            idx === currentIndex
                                ? 'bg-gradient-to-r from-primary to-accent w-8 shadow-lg'
                                : 'bg-gray-300 w-2'
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}