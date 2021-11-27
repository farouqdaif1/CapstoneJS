import counterItem from './counter_items';

const jsdom = require('jsdom');// eslint-disable-line
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><ul class="d-flex todo-lists"></ul>`); // eslint-disable-line
const document = dom.window.document; // eslint-disable-line
test('test Number of comments returned by counterItem', () => {
  document.body.innerHTML = '<ul>'
        + '<li>'
        + '<li>'
        + '<li>'
        + '</ul>';
  const container = document.querySelector('ul');
  expect(counterItem(container)).toBe(3);
});