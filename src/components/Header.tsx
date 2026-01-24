export default function Header() {
    return (
        <header className="relative text-center py-16 md:py-24 px-4 overflow-hidden">
            {/* Анимированный фон */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-400 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 animate-slideUp drop-shadow-2xl">
                    Фарафонов Анатолий Анатольевич
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium px-4 animate-slideUp drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
                    Финансист • Политик • Общественный деятель
                </p>
            </div>
        </header>
    )
}
