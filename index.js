// index.js
const Mustache = require('mustache');
const fetch = require('node-fetch');
const fs = require('fs');
const MUSTACHE_MAIN_DIR = './main.mustache';

let DATA = {
    name: 'Duc-Thomas',
    date: new Date().toLocaleDateString('en-GB', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short',
        timeZone: 'Europe/Paris',
    }),
};

function generateReadMe() {
    fs.readFile(MUSTACHE_MAIN_DIR, (err, data) =>  {
        if (err) throw err;
        const output = Mustache.render(data.toString(), DATA);
        fs.writeFileSync('README.md', output);
    });
}

async function action() {  
    /**
     * Generate README
     */
    await generateReadMe();
}
  
action();
  
