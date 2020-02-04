const puppeteer = require('puppeteer');

(async () => {
  const username = '' // insert username here
  const password = '' // insert password here

  const clockIn = '' // insert clock in here
  const clockOut = '' // insert clock out here
  const activity = '' // insert activity here
  const description = '' // insert description here

  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('http://industry.socs.binus.ac.id/learning-plan/')
  await page.$eval('input[name=username]', (el, value) => el.value = value, username)
  await page.$eval('input[name=password]', (el, value) => el.value = value, password)
  await page.$eval('input.ui.fluid.large.primary.button', form => form.click())

  await page.goto('https://industry.socs.binus.ac.id/learning-plan/student/log-book')
  await page.$eval('input[name=clock-in]', (el, value) => el.value = value, clockIn)
  await page.$eval('input[name=clock-out]', (el, value) => el.value = value, clockOut)
  await page.$eval('input[name=activity]', (el, value) => el.value = value, activity)
  await page.$eval('textarea[name=description]', (el, value) => el.value = value, description)
  await page.$eval('button.ui.primary.large.button', form => form.click())

  await browser.close()
})()