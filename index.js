const puppeteer = require('puppeteer');

(async () => {
    const URL = "https://www.imdb.com/title/tt0111161/?ref_=nv_sr_srsg_0"

    // let browser = await puppeteer.launch({headless:false}); //load the browser and open
    let browser = await puppeteer.launch(); //load the browser
    let page = await browser.newPage(); // open a new page

    // await page.goto(URL) // open the url in new browser tab
    await page.goto(URL, {waitUntil: 'networkidle2'});

    // evaluate anything on the current page
    let data = await page.evaluate(() => {
        let title = document.querySelector("div[class='title_wrapper'] > h1").innerText
        let rating = document.querySelector("span[itemprop='ratingValue']").innerText
        let ratingCount = document.querySelector("span[itemprop='ratingCount']").innerText

        return {
            title,
            rating,
            ratingCount
        }
    });

    console.log(data);

    await browser.close();
})();
