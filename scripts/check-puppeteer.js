#!/usr/bin/env node
const p = require('puppeteer');

(async () => {
  try {
    const execPath = typeof p.executablePath === 'function' ? p.executablePath() : p.executablePath;
    console.log('executablePath:', execPath);
    console.log('Attempting to launch browser (timeout 15s)...');
    const launchPromise = p.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const browser = await Promise.race([
      launchPromise,
      new Promise((_, reject) => setTimeout(() => reject(new Error('launch timeout after 15s')), 15000)),
    ]);
    console.log('Launched browser OK');
    await browser.close();
    process.exit(0);
  } catch (e) {
    console.error('ERROR:', e && e.message ? e.message : e);
    process.exit(1);
  }
})();
