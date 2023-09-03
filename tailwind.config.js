/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                "dark-purple": "#081A51",
                "light-white": "rgba(255,255,255,0.18)",
            },
        },
    },
    plugins: [],
};
