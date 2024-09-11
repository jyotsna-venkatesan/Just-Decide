const express = require("express");
const puppeteer = require("puppeteer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

let browser;
let page;

async function initializeBrowser() {
  console.log("Initializing browser...");
  browser = await puppeteer.launch({
    headless: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  console.log("Browser launched");
  page = await browser.newPage();
  console.log("New page created");
  await page.setViewport({ width: 1280, height: 800 });
  console.log("Viewport set");
}

initializeBrowser();

app.post("/api/search", async (req, res) => {
  try {
    const { query } = req.body;

    if (!page) {
      await initializeBrowser();
    }

    // Navigate to Claude chat if not already there
    if (!page.url().includes("claude")) {
      await page.goto("https://poe.com/claude");
    }

    // Type the query
    await page.type('textarea[placeholder="Ask me anything..."]', query);

    // Submit the query
    await page.keyboard.press("Enter");

    // Wait for the response
    await page.waitForSelector(".Message_botMessageBubble__CPGMI");

    // Get the latest response
    const response = await page.evaluate(() => {
      const messages = document.querySelectorAll(
        ".Message_botMessageBubble__CPGMI"
      );
      return messages[messages.length - 1].innerText;
    });

    res.json({ response });
  } catch (error) {
    console.error("Error communicating with Poe:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
