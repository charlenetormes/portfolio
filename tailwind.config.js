/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: "#011221",
                    200: "#011627",
                    300: "#01080E",
                    400: "#010C15",
                    500: "#1C2B3A",
                },
                secondary: {
                    100: "#607B96",
                    200: "#3C9D93",
                    300: "#4D5BCE",
                },
                accent: {
                    100: "#FEA55F",
                    200: "#43D9AD",
                    300: "#E99287",
                    400: "#C98BDF",
                    500: "#5565E8",
                },
                lines: {
                    100: "#1E2D3D",
                },
                "custom-yellow": "#FEA55F",
                react: "#86E1F9",
                vue: "#81D4AF",
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                customTheme: {
                    primary: "#011627",
                    secondary: "#607B96",
                    accent: "#9ca3af",
                    neutral: "#374151",
                    "base-100": "#f3f4f6",
                    info: "#3b82f6",
                    success: "#10b981",
                    warning: "#f59e0b",
                    error: "#ef4444",
                },
            },
        ],
    },
};
