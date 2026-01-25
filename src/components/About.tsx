import { useState, useRef } from 'react'
import image1 from '../../public/image1.jpg'
import image2 from '../../public/image2.jpg'
import image3 from '../../public/image3.jpg'
import image4 from '../../public/image4.jpg'
import image5 from '../../public/image5.jpg'
import image6 from '../../public/image6.jpg'
import image7 from '../../public/image7.jpg'
import image8 from '../../public/image8.jpg'
import image9 from '../../public/image9.jpg'
import image10 from '../../public/image10.jpg'
import image11 from '../../public/image11.jpg'
import image12 from '../../public/image12.jpg'
import image13 from '../../public/image13.jpg'
import image14 from '../../public/image14.jpg'
import image15 from '../../public/image15.jpg'
import image16 from '../../public/image16.jpg'
import image17 from '../../public/image17.jpg'
import image18 from '../../public/image18.jpg'
import image19 from '../../public/image19.jpg'
import image20 from '../../public/image20.jpg'
import image21 from '../../public/image21.jpg'
import image22 from '../../public/image22.jpg'
import image23 from '../../public/image23.jpg'
import image24 from '../../public/image24.jpg'
import image25 from '../../public/image25.jpg'
import image26 from '../../public/image26.jpg'
import image27 from '../../public/image27.jpg'
import image28 from '../../public/image28.jpg'
import image29 from '../../public/image29.jpg'

export default function About() {
    const [showDiplomas, setShowDiplomas] = useState(false)
    const [showMedia, setShowMedia] = useState(false)
    const [selectedImage, setSelectedImage] = useState<{ img: string, rotated: boolean } | null>(null)
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const diplomas = [
        { img: image8, rotated: false },
        { img: image23, rotated: false },
        { img: image28, rotated: false },
        { img: image21, rotated: false },
        { img: image16, rotated: false },
        { img: image1, rotated: false },
        { img: image22, rotated: false },
        { img: image27, rotated: false },
        { img: image2, rotated: false },
        { img: image14, rotated: true },
        { img: image25, rotated: false },
        { img: image3, rotated: false },
        { img: image10, rotated: false },
        { img: image9, rotated: false },
        { img: image4, rotated: true },
        { img: image5, rotated: false },
        { img: image15, rotated: false },
        { img: image24, rotated: false },
        { img: image26, rotated: false },
        { img: image29, rotated: false },
        { img: image11, rotated: false },
        { img: image18, rotated: false },
        { img: image19, rotated: false },
        { img: image12, rotated: false },
        { img: image17, rotated: false },
        { img: image20, rotated: false },
        { img: image6, rotated: false },
        { img: image13, rotated: false },
        { img: image7, rotated: false },
    ]

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    const mediaLinks = [
        { title: 'Банковское дело: Наши победы – в созидающей команде. Анатолий Фарафонов о карьере, стратегии АО «Первоуральскбанк» и личных вызовах', url: 'https://www.bankdelo.ru/interview/pub/10982?ysclid=mksmuv6zf8534061053', source: 'Банковское дело' },
        { title: 'АиФ: Отпуск отменяется? Гостиницы отказывают россиянам в размещении', url: 'https://aif.ru/travel/otpusk-otmenyaetsya-gostinicy-otkazyvayut-rossiyanam-v-razmeshchenii', source: 'АиФ' },
        { title: 'АиФ: Бабушки в Сети. Названы гаджеты, которые стоит иметь каждому пенсионеру', url: 'https://aif.ru/techno/gadgets/babushki-v-seti-nazvany-gadzhety-kotorye-stoit-imet-kazhdomu-pensioneru', source: 'АиФ' },
        { title: 'АиФ: Долги душат. Россияне могут получить кредитные каникулы в 2024 году', url: 'https://aif.ru/money/mymoney/dolgi_dushat_rossiyane_mogut_poluchit_kreditnye_kanikuly_v_2024_godu', source: 'АиФ' },
        { title: 'URA.RU: Экспертный комментарий о финансовой ситуации', url: 'https://m.ura.news/articles/1036288168', source: 'URA.RU' },
        { title: 'Первоуральскбанк: Новости банковского сектора', url: 'https://www.pervbank.ru/news/3096/', source: 'Первоуральскбанк' },
        { title: 'АиФ: Выше инфляции. В 2024 году в России вырастут пенсии, пособия и маткапитал', url: 'https://aif.ru/money/mymoney/vyshe_inflyacii_v_2024_godu_v_rossii_vyrastut_pensii_posobiya_i_matkapital', source: 'АиФ' },
        { title: 'Первоуральскбанк: Аналитика и прогнозы', url: 'https://www.pervbank.ru/news/3093/', source: 'Первоуральскбанк' },
        { title: 'АиФ: Пятое по счёту. Экономисты оценили влияние повышения ставки ЦБ на цены', url: 'https://aif.ru/money/economy/pyatoe_po_schetu_ekonomisty_ocenili_vliyanie_povysheniya_stavki_cb_na_ceny', source: 'АиФ' },
        { title: 'АиФ: Курс на сбережение. Экономисты прогнозируют рост ключевой ставки ЦБ до 16%', url: 'https://aif.ru/money/economy/kurs_na_sberezhenie_ekonomisty_prognoziruyut_rost_klyuchevoy_stavki_cb_do_16', source: 'АиФ' },
        { title: 'Московские Ведомости: Политики и зоозащитники московского региона обсудили проблемы', url: 'https://mosvedomosti.ru/2023/11/30/политики-и-зоозащитники-московского/', source: 'Московские Ведомости' },
        { title: 'АиФ: Как узнать кредитную историю', url: 'https://aif.ru/money/mymoney/kak_uznat_kreditnuyu_istoriyu', source: 'АиФ' },
        { title: 'АиФ: Приказано посчитать. С 1 декабря изменится метод учёта доходов пенсионеров', url: 'https://aif.ru/money/economy/prikazano_poschitat_s_1_dekabrya_izmenitsya_metod_ucheta_dohodov_pensionerov', source: 'АиФ' },
        { title: 'АиФ: Выплаты и новая ипотека. Россиян ожидает повышение пенсий с 1 ноября', url: 'https://aif.ru/money/mymoney/vyplaty_i_novaya_ipoteka_rossiyan_ozhidaet_povyshenie_pensiy_s_1_noyabrya', source: 'АиФ' },
        { title: 'Московские Ведомости: Московские политики обсудили проблемы района', url: 'https://mosvedomosti.ru/2023/10/04/московские-политики-обсудили-пробле/', source: 'Московские Ведомости' },
        { title: 'VMO24: Расклад на МосГорДуму. Какие партии имеют шансы на победу', url: 'https://vmo24.ru/news/rasklad_na_mosgordumu_kakie_partii_imeyut_shansy_na_pobedu', source: 'VMO24' },
        { title: 'ActualNews: Анатолий Фарафонов: ДЭГ стал неизменным атрибутом выборов в России', url: 'https://actualnews.org/exclusive/480943-anatolij-farafonov-djeg-stal-neizmennym-atributom-vyborov-v-rossii.html', source: 'ActualNews' },
        { title: 'Вестник: Публикация о политической деятельности', url: 'https://vestnik.net/post/76434/', source: 'Вестник' },
        { title: 'VMO24: Новые люди предложили установить в Москве фонтанчики с питьевой водой', url: 'https://vmo24.ru/news/novye_lyudi_predlozhili_ustanovit_v_moskve_fontanchiki_s_pitevoy_vodoy', source: 'VMO24' },
    ]

    const charityOrgs = [
        { name: 'Дом для Мамы', url: 'https://domdliamamy.ru/', description: 'Кризисный центр помощи женщинам' },
        { name: 'Благотворительный фонд ЛАКИ', url: 'https://лакифонд.рф/?ysclid=mks85plnr5754257578', description: 'Помощь детям-сиротам и детям в трудной жизненной ситуации' },
        { name: 'Центр в Дубках', url: 'https://krizis-centr.ru/', description: 'Кризисный центр' },
        { name: 'Фонд Настенька', url: 'https://nastenka.ru/', description: 'Помощь детям с онкологическими заболеваниями' },
        { name: 'Фонд Онкологика', url: 'https://oncologica.ru/', description: 'Помощь онкобольным' },
        { name: 'Приют Шереметьевский', url: 'https://helpdog.ru/', description: 'Собачий приют' },
    ]

    return (
        <section className="max-w-5xl mx-auto px-4 py-12 md:py-20 animate-fadeIn">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-gray-700 animate-slideUp">
                Обо мне
            </h2>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 lg:p-16 mb-10 md:mb-12 transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] animate-scaleIn border border-gray-300/50">
                <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                    <p className="font-semibold text-gray-800 text-lg sm:text-xl">
                        📅 Дата рождения: 21 августа 1981 г., г.&nbsp;Москва
                    </p>

                    <div className="border-l-4 border-gray-500 pl-6">
                        <h3 className="font-bold text-gray-800 text-xl mb-3">🎓 Образование:</h3>
                        <ul className="space-y-2 ml-2">
                            <li className="flex items-start">
                                <span className="text-gray-600 mr-2">•</span>
                                <span><strong>2003 г.</strong> — Российский биотехнологический университет (экономист, красный диплом)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-gray-600 mr-2">•</span>
                                <span><strong>2004 г.</strong> — Русский Университет Инноваций (политолог)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-gray-600 mr-2">•</span>
                                <span><strong>2011 г.</strong> — Первая национальная школа телевидения (тележурналист)</span>
                            </li>
                        </ul>
                    </div>

                    <div className="border-l-4 border-gray-500 pl-6">
                        <h3 className="font-bold text-gray-800 text-xl mb-3">💼 Профессиональный опыт:</h3>
                        <ul className="space-y-2 ml-2">
                            <li className="flex items-start">
                                <span className="text-gray-600 mr-2">•</span>
                                <span><strong>С 2019 г.</strong> — Банкир, Вице-президент банка</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-gray-600 mr-2">•</span>
                                <span><strong>2001-2003 гг.</strong> — Помощник депутата ГД ФС РФ III созыва</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-gray-600 mr-2">•</span>
                                <span><strong>С 2025 г.</strong> — Советник Академии в Российской Академии Естественных Наук</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-gray-600 mr-2">•</span>
                                <span><strong>С 2025 г.</strong> — Член секции Гуманитарных наук и творчества Европейской академии Естественных наук.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-gray-600 mr-2">•</span>
                                <span><strong>С 2025 г.</strong> — Помощник депутата ГД ФС РФ VIII созыва Ярослава Самылина</span>
                            </li>
                        </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-6">
                        <h3 className="font-bold text-gray-800 text-xl mb-3">🏛️ Политическая деятельность:</h3>
                        <ul className="space-y-2 ml-2">
                            <li className="flex items-start">
                                <span className="text-gray-600 mr-2">•</span>
                                <span><strong>2022 г.</strong> — Участие в муниципальных выборах г. Москва (район Крылатское)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-gray-600 mr-2">•</span>
                                <span><strong>2023 г.</strong> — Доверенное лицо кандидата на выборах Мэра Москвы</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-gray-600 mr-2">•</span>
                                <span><strong>2024 г.</strong> — Доверенное лицо кандидата на выборах Президента РФ</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-gray-600 mr-2">•</span>
                                <span><strong>2024 г.</strong> — Кандидат в депутаты МосГорДумы (7 округ)</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-red-50/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-red-400">
                        <h3 className="font-bold text-gray-800 text-xl mb-4">❤️ Благотворительность:</h3>
                        <p className="mb-4 text-gray-700">Ежегодная помощь организациям. Имеются благодарственные письма:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {charityOrgs.map((org, idx) => (
                                <a
                                    key={idx}
                                    href={org.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-2 p-3 bg-white/90 rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105 group"
                                >
                                    <span className="text-red-500 text-xl">🔗</span>
                                    <div>
                                        <p className="font-semibold text-gray-800 group-hover:text-red-600 transition">{org.name}</p>
                                        <p className="text-sm text-gray-600">{org.description}</p>
                                    </div>
                                </a>
                            ))}
                            <div className="flex items-start gap-2 p-3 bg-white/90 rounded-lg">
                                <span className="text-red-500 text-xl">🎖️</span>
                                <div>
                                    <p className="font-semibold text-gray-800">Помощь бойцам СВО</p>
                                    <p className="text-sm text-gray-600">Регулярная поддержка</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-2 p-3 bg-white/90 rounded-lg">
                                <span className="text-red-500 text-xl">💝</span>
                                <div>
                                    <p className="font-semibold text-gray-800">Другие организации</p>
                                    <p className="text-sm text-gray-600">Помощь иным благотворительным фондам и приютам</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-blue-500">
                        <h3 className="font-bold text-gray-800 text-xl mb-3">📺 Освещение в СМИ:</h3>
                        <p className="mb-4 text-gray-700">Эксперт газеты "Аргументы и факты", выступал экспертом в эфире телеканала "Россия 1", эксперт URA.RU, газеты "Московские ведомости" и других изданий.</p>
                        <button
                            onClick={() => setShowMedia(!showMedia)}
                            className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-full transition-all flex items-center gap-2 hover:scale-105 shadow-lg"
                        >
                            {showMedia ? '▼ Скрыть публикации' : `▶ Показать все публикации`}
                        </button>

                        {showMedia && (
                            <div className="mt-6 space-y-3 animate-fadeIn">
                                {mediaLinks.map((link, idx) => (
                                    <a
                                        key={idx}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-4 bg-white/90 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group border border-gray-200"
                                    >
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="flex-1">
                                                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-2">
                                                    {link.source}
                                                </span>
                                                <p className="font-medium text-gray-800 group-hover:text-blue-600 transition leading-snug">{link.title}</p>
                                            </div>
                                            <span className="text-blue-600 text-2xl group-hover:translate-x-1 transition-transform flex-shrink-0">→</span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="text-center">
                <button
                    onClick={() => setShowDiplomas(!showDiplomas)}
                    className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 text-white font-bold text-base sm:text-lg py-4 sm:py-5 px-8 sm:px-12 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                    {showDiplomas ? '🔼 Скрыть дипломы' : `📜 Дипломы и благодарности`}
                </button>

                {showDiplomas && (
                    <div className="mt-10 md:mt-12 animate-fadeIn">

                        {/* Горизонтальная прокрутка остальных */}
                        <div className="relative -mx-4 px-4">
                            <button
                                onClick={() => scroll('left')}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-xl rounded-full p-3 transition-all hover:scale-110 hidden md:block"
                                aria-label="Прокрутить влево"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <div
                                ref={scrollContainerRef}
                                className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-2 md:px-12 py-4"
                                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                            >
                                {diplomas.map((diploma, idx) => (
                                    <div
                                        key={idx + 2}
                                        onClick={() => setSelectedImage(diploma)}
                                        className={`flex-shrink-0 rounded-xl  overflow-visible transform hover:scale-105 transition-all duration-300  cursor-pointer  ${
                                            diploma.rotated ? 'h-50 w-72' : 'w-72'
                                        }`}
                                    >
                                        <div className="relative w-full h-full flex items-center justify-center">
                                            <img
                                                src={diploma.img}
                                                alt={`Диплом ${idx + 3}`}
                                                className={`object-contain ${
                                                    diploma.rotated
                                                        ? '-rotate-90 h-72 w-auto'
                                                        : 'w-72 h-auto'
                                                }`}
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center rounded-xl">
                                                <span className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity">🔍</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => scroll('right')}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-xl rounded-full p-3 transition-all hover:scale-110 hidden md:block"
                                aria-label="Прокрутить вправо"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        <p className="text-gray-500 text-sm mt-6">💡 Прокрутите горизонтально или кликните на диплом для увеличения</p>
                    </div>
                )}

                {/* Модальное окно с поддержкой поворота */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all hover:scale-110 z-10"
                            aria-label="Close"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="relative w-full h-full flex items-center justify-center p-8">
                            <img
                                src={selectedImage.img}
                                alt="Диплом в полном размере"
                                className={`max-w-full max-h-full object-contain ${
                                    selectedImage.rotated
                                        ? '-rotate-90'
                                        : 'animate-scaleIn'
                                }`}
                                style={selectedImage.rotated ? { willChange: 'transform' } : undefined}
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
