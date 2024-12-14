/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-500": "#6366f1",
                "primary-400": "#818cf8",
                "primary-300": "#a5b4fc",
                light: "#e2e8f0",
                dark: "#1e293b",
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["nord"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    },
};
