'use strict';

require('dotenv').config();

const Promise = require('bluebird');
const scrapeIt = require('scrape-it');

const tclBaseUri = process.env.TCL_BASE_URI;
const tclRandomGifUri = process.env.TCL_RANDOM_GIF_URI;

class TCL {

  random() {

    return Promise.coroutine(function*() {

      return scrapeIt(tclRandomGifUri, {
        title: "#post1 h3",
        gif: {
          selector: "#post1 img",
          attr: "src"
        },
        by: "#post1 i"
      })
        .then((page) => {
          // console.log(page);

          let rval = {
            "text": page.by,
            "attachments": [{
              "text": page.title,
              "image_url": page.gif
            }]
          };

          return rval;
        })
        .catch((error) => {
          console.error(error);
          throw error;
        });

    })();

  }

}

module.exports = new TCL();
