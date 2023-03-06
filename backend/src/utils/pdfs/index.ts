import puppeteer from "puppeteer";
import schedule from "node-schedule";

import fs from "fs";
import path from "path";

export const generatePdf = async () => {
  const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html);
  const pdf = await page.pdf({
    format: "A2",
    printBackground: true,
  });
  await browser.close();
  return pdf;
};

export const scheduler = async () => {
  // 1 minute from now
  const date = new Date(Date.now() + 60000);

  const job = schedule.scheduleJob("date-schedule", "* * * * * *", async () => {
    console.log("I am running a task every minute");
  });

  schedule.cancelJob("date-schedule");
};
