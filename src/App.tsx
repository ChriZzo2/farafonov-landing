import Header from './components/Header'
import ImageCarousel from './components/ImageCarousel'
import FloatingSocial from './components/FloatingSocial'
import About from './components/About'
import NewsSection from './components/NewsSection'

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 pb-20 lg:pb-0">
            {/* Декоративные элементы фона */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-blue-300/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
                <FloatingSocial />
                <Header />
                <ImageCarousel />
                <About />
                <NewsSection />

                <footer className="text-center py-8 text-gray-600 text-sm border-t border-gray-300/50 bg-white/30 backdrop-blur-sm">
                    <p>© 2026 Фарафонов Анатолий Анатольевич • Все права защищены</p>
                </footer>
            </div>
        </div>
    )
}

export default App