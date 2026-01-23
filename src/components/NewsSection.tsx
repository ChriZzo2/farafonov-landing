export default function NewsSection() {
    return (
        <section className="max-w-4xl mx-auto px-4 py-16 md:py-24 pb-20 md:pb-32">
            <div className="text-center animate-scaleIn">
                <a
                    href="https://t.me/Anatoly_Farafonov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block relative group"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                    <span className="relative inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold text-xl sm:text-2xl md:text-3xl py-5 sm:py-6 md:py-7 px-12 sm:px-16 md:px-20 rounded-full shadow-2xl transform group-hover:scale-110 transition-all duration-300">
            📰 НОВОСТИ
          </span>
                </a>
                <p className="mt-6 text-gray-600 text-base sm:text-lg font-medium">
                    Подпишитесь на мой Telegram канал • 11 000 подписчиков
                </p>
            </div>
        </section>
    )
}
