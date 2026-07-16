/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#4F46E5",     // Indigo
                secondary: "#06B6D4",   // Cyan
            },
        },
    },
    plugins: [],
};