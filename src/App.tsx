import Header from './components/Header'
import ImageCarousel from './components/ImageCarousel'
import FloatingSocial from './components/FloatingSocial'
import About from './components/About'
import NewsSection from './components/NewsSection'

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pb-20 lg:pb-0">
            <div className="relative z-10">
                <FloatingSocial />
                <Header />
                <ImageCarousel />
                <About />
                <NewsSection />

                <footer className="text-center py-8 text-gray-300 text-sm border-t border-gray-700/50 bg-gray-900/50 backdrop-blur-sm">
                    <p>© 2026 Фарафонов Анатолий Анатольевич • Все права защищены</p>
                </footer>
            </div>
        </div>
    )
}

export default App
