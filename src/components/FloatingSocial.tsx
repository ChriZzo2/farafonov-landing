export default function FloatingSocial() {
    return (
        <>
            {/* Десктоп версия - справа сбоку, ниже по экрану */}
            <div className="hidden lg:flex fixed right-4 top-[60%] -translate-y-1/2 z-40 flex-col gap-4 animate-slideUp">
                <a
                    href="https://t.me/Anatoly_Farafonov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                >
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-2xl transform transition-all duration-300 group-hover:scale-125 group-hover:shadow-blue-500/50 animate-float">
                        TG
                    </div>
                    <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Telegram • 11K подписчиков
          </span>
                </a>

                <a
                    href="https://vk.com/farafonovaa81"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    style={{ animationDelay: '0.1s' }}
                >
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-2xl transform transition-all duration-300 group-hover:scale-125 group-hover:shadow-blue-600/50 animate-float">
                        VK
                    </div>
                    <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            ВКонтакте • 10K подписчиков
          </span>
                </a>

                <a
                    href="https://instagram.com/farafonov_anatoly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    style={{ animationDelay: '0.2s' }}
                >
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-2xl transform transition-all duration-300 group-hover:scale-125 group-hover:shadow-pink-500/50 animate-float">
                        IG
                    </div>
                    <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Instagram
          </span>
                </a>
            </div>

            {/* Мобильная версия - снизу */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-2xl border-t border-gray-200">
                <div className="flex justify-around items-center py-3 px-4 max-w-md mx-auto">
                    <a
                        href="https://t.me/Anatoly_Farafonov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-1 active:scale-95 transition-transform"
                    >
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-base font-bold shadow-lg">
                            TG
                        </div>
                        <span className="text-xs text-gray-600 font-medium">Telegram</span>
                    </a>

                    <a
                        href="https://vk.com/farafonovaa81"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-1 active:scale-95 transition-transform"
                    >
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-base font-bold shadow-lg">
                            VK
                        </div>
                        <span className="text-xs text-gray-600 font-medium">ВКонтакте</span>
                    </a>

                    <a
                        href="https://instagram.com/farafonov_anatoly"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-1 active:scale-95 transition-transform"
                    >
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white text-base font-bold shadow-lg">
                            IG
                        </div>
                        <span className="text-xs text-gray-600 font-medium">Instagram</span>
                    </a>
                </div>
            </div>
        </>
    )
}