import { useState } from 'react'

export default function About() {
    const [showDiplomas, setShowDiplomas] = useState(false)

    const diplomas = [
        '/images/diploma1.jpg',
        '/images/diploma2.jpg',
        '/images/diploma3.jpg',
        '/images/diploma4.jpg',
        '/images/diploma5.jpg',
        '/images/diploma6.jpg',
    ]

    return (
        <section className="max-w-5xl mx-auto px-4 py-12 md:py-20 animate-fadeIn">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-dark animate-slideUp">
                Обо мне
            </h2>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl md:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 lg:p-16 mb-10 md:mb-12 transform transition-all duration-500 hover:shadow-primary/20 hover:scale-[1.01] animate-scaleIn">
                <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                    <p className="font-semibold text-gray-800 text-lg sm:text-xl">
                        📅 Дата рождения: 21 августа 1981 г., г. Москва
                    </p>

                    <div className="border-l-4 border-primary pl-6">
                        <h3 className="font-bold text-primary text-xl mb-3">🎓 Образование:</h3>
                        <ul className="space-y-2 ml-2">
                            <li className="flex items-start">
                                <span className="text-accent mr-2">•</span>
                                <span>2003 г. — Российский биотехнологический университет (экономист, красный диплом)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-accent mr-2">•</span>
                                <span>2004 г. — Русский Университет Инноваций (политолог)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-accent mr-2">•</span>
                                <span>2011 г. — Первая национальная школа телевидения (тележурналист)</span>
                            </li>
                        </ul>
                    </div>

                    <div className="border-l-4 border-accent pl-6">
                        <h3 className="font-bold text-primary text-xl mb-3">💼 Профессиональный опыт:</h3>
                        <ul className="space-y-2 ml-2">
                            <li className="flex items-start">
                                <span className="text-accent mr-2">•</span>
                                <span><strong>С 2019 г.</strong> — Вице-президент банка</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-accent mr-2">•</span>
                                <span><strong>2001-2003 гг.</strong> — Помощник депутата ГД ФС РФ III созыва</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-accent mr-2">•</span>
                                <span><strong>С 2025 г.</strong> — Советник Академии в РАЕН</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-accent mr-2">•</span>
                                <span><strong>С 2025 г.</strong> — Помощник депутата ГД ФС РФ VIII созыва</span>
                            </li>
                        </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-6">
                        <h3 className="font-bold text-primary text-xl mb-3">🏛️ Политическая деятельность:</h3>
                        <ul className="space-y-2 ml-2">
                            <li className="flex items-start">
                                <span className="text-accent mr-2">•</span>
                                <span>2022-2024 гг. — Участие в выборах разных уровней</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-accent mr-2">•</span>
                                <span>Доверенное лицо кандидатов на выборах Президента РФ и Мэра Москвы</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-6">
                        <h3 className="font-bold text-primary text-xl mb-3">❤️ Благотворительность:</h3>
                        <p>Ежегодная помощь кризисным центрам, фондам, приютам для животных, бойцам СВО. Имеются благодарственные письма.</p>
                    </div>

                    <div className="bg-gradient-to-r from-primary/10 to-blue-100 rounded-xl p-6">
                        <h3 className="font-bold text-primary text-xl mb-3">📺 Экспертная деятельность:</h3>
                        <p>Эксперт "Аргументы и факты", "Россия 1", URА.RU, "Московские ведомости".</p>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <button
                    onClick={() => setShowDiplomas(!showDiplomas)}
                    className="bg-gradient-to-r from-primary via-blue-600 to-accent hover:from-primary/90 hover:via-blue-700 hover:to-accent/90 text-white font-bold text-base sm:text-lg py-4 sm:py-5 px-8 sm:px-12 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-accent/50"
                >
                    {showDiplomas ? '🔼 Скрыть дипломы' : '📜 Дипломы и благодарности'}
                </button>

                {showDiplomas && (
                    <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-fadeIn">
                        {diplomas.map((diploma, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl md:rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                <img
                                    src={diploma}
                                    alt={`Диплом ${idx + 1}`}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}