'use strict';

require('dotenv').config();

const got = require('got');
const Promise = require('bluebird');
const parse5 = require('parse5');

const tclBaseUri = process.env.TCL_BASE_URI;
const tclRandomGifUri = process.env.TCL_RANDOM_GIF_URI;

class TCL {

  random() {

    return Promise.coroutine(function*() {

      return got(tclRandomGifUri)
        .then((response) => {
          // console.log(response.body);

          let data = response.body;
          // let document = parse5.parse(data);
          // console.log('document:', document);
          // let htmlDocument = document.childNodes[1];
          // console.log('htmlDocument:', htmlDocument);

          let rval = {
            "text": 'The coding love',
            "attachments": [{
              "text": "When someone tells me that he already coded in HTML",
              "image_url": "http://tclhost.com/kMm2iKp.gif"
            }]
          };

          return rval;
        })
        .catch((error) => {
          console.error(error.response.body);
          //=> 'Internal server error ...'
          throw error;
        });

    })();

  }

}

module.exports = new TCL();
