import Header from './components/Header'
import ImageCarousel from './components/ImageCarousel'
import FloatingSocial from './components/FloatingSocial'
import About from './components/About'
import NewsSection from './components/NewsSection'
import backgroundImage from './assets/background.jpg'

function App() {
    return (
        <div className="min-h-screen pb-20 lg:pb-0 bg-[#a8a8a8] relative">
            {/* Текстура как паттерн */}
            <div
                className="fixed inset-0 opacity-100 pointer-events-none"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: '400px 400px',
                    backgroundRepeat: 'repeat'
                }}
            />

            <div className="relative z-10">
                <FloatingSocial />
                <Header />
                <ImageCarousel />
                <About />
                <NewsSection />

                <footer className="text-center py-8 text-gray-800 text-sm">
                    <p>© 2026 Фарафонов Анатолий Анатольевич • Все права защищены</p>
                </footer>
            </div>
        </div>
    )
}

export default App

