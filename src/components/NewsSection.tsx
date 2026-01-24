export default function NewsSection() {
    return (
        <section className="max-w-4xl mx-auto px-4 py-16 md:py-24 pb-20 md:pb-32">
            <div className="text-center animate-scaleIn">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-gray-800">
                    Следите за новостями
                </h2>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    {/* Telegram канал */}
                    <a
                        href="https://t.me/Anatoly_Farafonov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                        <span className="relative inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-lg sm:text-xl md:text-2xl py-4 sm:py-5 px-10 sm:px-12 md:px-14 rounded-full shadow-2xl transform group-hover:scale-110 transition-all duration-300 flex items-center gap-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
              </svg>
              Telegram
            </span>
                    </a>
                </div>

                <p className="mt-6 text-gray-600 text-base sm:text-lg font-medium">
                    Оперативные новости, аналитика и анонсы событий
                </p>
            </div>
        </section>
    )
}
