export default function SocialLinks() {
    return (
        <section className="max-w-4xl mx-auto px-4 py-8 md:py-12">
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12">
                <a
                    href="https://t.me/Anatoly_Farafonov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 md:gap-3 group"
                >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold shadow-xl transform group-hover:scale-110 transition">
                        TG
                    </div>
                    <span className="text-sm sm:text-base font-medium text-gray-700">Telegram</span>
                    <span className="text-xs text-gray-500">11K подписчиков</span>
                </a>

                <a
                    href="https://vk.com/farafonovaa81"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 md:gap-3 group"
                >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold shadow-xl transform group-hover:scale-110 transition">
                        VK
                    </div>
                    <span className="text-sm sm:text-base font-medium text-gray-700">ВКонтакте</span>
                    <span className="text-xs text-gray-500">10K подписчиков</span>
                </a>

                <a
                    href="https://instagram.com/farafonov_anatoly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 md:gap-3 group"
                >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold shadow-xl transform group-hover:scale-110 transition">
                        IG
                    </div>
                    <span className="text-sm sm:text-base font-medium text-gray-700">Instagram</span>
                </a>
            </div>
        </section>
    )
}
