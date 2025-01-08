import { defineConfig } from '@playwright/test';

export default defineConfig({
    use: {
        headless: false, // Disable headless mode
        browserName: 'chromium', // Optional: Specify the browser
    },
});