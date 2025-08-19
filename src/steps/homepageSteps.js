const { Given, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { strict: assert } = require('assert');
const { Builder, By } = require('selenium-webdriver');
require('chromedriver');                    // <-- ADICIONE ISSO

setDefaultTimeout(60000);

let driver;


Given('eu acesso a página {string}', async function (url) {
  driver = await new Builder().forBrowser('chrome').build();
  await driver.get(url);
});

Then('eu vejo o texto {string}', async function (expectedText) {
  const body = await driver.findElement(By.tagName('body')).getText();
  assert(body.includes(expectedText), `Texto "${expectedText}" não encontrado!`);
  await driver.quit();
});
