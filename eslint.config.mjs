import nextVitals from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier/flat";
import tailwind from "eslint-plugin-tailwindcss";

const config = [
    ...nextVitals,
    {
        plugins: {
            tailwindcss: tailwind,
        },
    },
    prettier,
];

export default config;
