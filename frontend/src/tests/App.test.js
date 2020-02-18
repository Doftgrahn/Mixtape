import React from 'react'
import { render } from '@testing-library/react'
import puppeteer from 'puppeteer'

describe('testLandingPage', () => {
  let browser
  let page
  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false })
    page = await browser.newPage()
    await page.goto('http://localhost:3000/')
  })

  afterAll(async () => {
    await browser.close()
  })

  it('Should show landingpage', async () => {
    const getTextContent = await page.waitForSelector('.landing_container')
    console.log('hejsan', getTextContent)
  })
})
