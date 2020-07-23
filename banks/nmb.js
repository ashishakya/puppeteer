const puppeteer = require('puppeteer');

(async () => {
    const URL = "https://nmbbanknepal.com/nmb-visa-card-discount";

    let browser = await puppeteer.launch({headless: false});
    let page = await browser.newPage();

    await page.goto(URL, {waitUntil: 'networkidle2'});
    await page.evaluate(() => {

        // let offerTable = document.querySelector("table[class='nmb-table']").rows[0].


        let offerTable = document.querySelector("table[class='nmb-table']").rows

        Object.values(offerTable).forEach(offerRow => {
            console.log(offerRow)
        })
    })
})();
