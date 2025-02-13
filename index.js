const puppeteer = require("puppeteer");
const fs = require('fs');
const path = require('path');

const htmlContent = fs.readFileSync(path.join(__dirname, 'resume.html'), 'utf8');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    await page.emulateMediaType('screen');

    // Load the HTML content
    await page.setContent(htmlContent, { waitUntil: 'networkidle2' });

    await page.pdf({
        path: 'resume.pdf',
        format: 'A4',
        format: 'A4',               // Standard paper size
        printBackground: true,       // Ensures background colors/images are included
        margin: {                    // Adds proper margins
            top: '10mm',
            bottom: '10mm',
            left: '10mm',
            right: '10mm'
        },
        scale: 0.9,                   // Adjusts content size to fit properly
        preferCSSPageSize: true,      // Uses @page size from CSS if defined                 // Keeps the content at the correct scale
    });

    await browser.close();
})();




