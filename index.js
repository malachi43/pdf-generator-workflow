const puppeteer = require("puppeteer");
const fs = require('fs');
const path = require('path');

const htmlContent = fs.readFileSync(path.join(__dirname, 'resume.html'), 'utf8');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    // Load the HTML content
    await page.setContent(htmlContent, { waitUntil: 'networkidle2' });

    await page.pdf({ path: 'resume.pdf', format: 'A4', printBackground: true });

    await browser.close();
})();
