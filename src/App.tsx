import Header from './components/Header'
import ImageCarousel from './components/ImageCarousel'
import FloatingSocial from './components/FloatingSocial'
import About from './components/About'
import NewsSection from './components/NewsSection'

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#b0b0b0] via-[#a8a8a8] to-[#9a9a9a] pb-20 lg:pb-0">
            <div className="relative z-10">
                <FloatingSocial />
                <Header />
                <ImageCarousel />
                <About />
                <NewsSection />

                <footer className="text-center py-8 text-gray-700 text-sm border-t border-gray-500/30 bg-gray-400/10 backdrop-blur-sm">
                    <p>© 2026 Фарафонов Анатолий Анатольевич • Все права защищены</p>
                </footer>
            </div>
        </div>
    )
}

export default App
