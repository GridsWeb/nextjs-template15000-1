import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// 2. นำเข้า Prettier config เพื่อปิดกฎที่ขัดแย้งกับการจัดรูปแบบ
import prettier from "eslint-config-prettier";

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,

    // 4. เพิ่ม Prettier
    // ต้องอยู่ท้ายสุดเสมอ เพื่อปิดการทำงานของกฎ ESLint ที่ซ้ำซ้อนกับ Prettier
    prettier,

    // Override default ignores of eslint-config-next.
    globalIgnores([
        // Default ignores of eslint-config-next:
        ".next/**",
        "out/**",
        "build/**",
        "next-env.d.ts",
    ]),
]);

export default eslintConfig;