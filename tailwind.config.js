/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#1F2937',      // Тёмно-серый
                'accent': '#6B7280',       // Средний серый
                'dark': '#111827',         // Почти чёрный
                'light-bg': '#F9FAFB',     // Светло-серый фон
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'slideUp': 'slideUp 0.6s ease-out',
                'fadeIn': 'fadeIn 0.8s ease-out',
                'scaleIn': 'scaleIn 0.5s ease-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
