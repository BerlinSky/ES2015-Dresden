import 'jquery';

import { helpMe } from './helper';

const siteSetup = () => {
  console.log("Set up ... in arrow function now")
}

const testjQuery = () => {
  const thisBody = $('body');
  thisBody.css({ 'color': '#fff' })
}

$(function () {
  helpMe();
  siteSetup();
  testjQuery();
});

