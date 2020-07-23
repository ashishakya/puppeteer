const puppeteer = require('puppeteer');

(async () => {
    const URL = "https://nmbbanknepal.com/nmb-visa-card-discount";

    let browser = await puppeteer.launch({headless: false});
    // let browser = await puppeteer.launch();
    let page = await browser.newPage();

    await page.goto(URL, {waitUntil: 'networkidle2'});

    await page.evaluate(() => {
        let offers = [];

        let offerTable = document.querySelector("table[class='nmb-table']").rows

        Object.values(offerTable).forEach(offerRow => {
            let offerDetail = [];
            const offerInfo = offerRow.cells
            Object.values(offerInfo).forEach((info, j) => {
                offerDetail[j] = info.innerText.trim()
            })
            const [sn, merchant, address, discount, scheme_on] = offerDetail;

            offers.push({
                merchant,
                address,
                discount,
                scheme_on
            })
        })
        offers.shift()

        console.log(offers)
    })
})();
