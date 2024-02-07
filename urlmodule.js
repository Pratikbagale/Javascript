import url from 'url';

const myURL = new URL('https://example.org');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';
myURL.username = 'pratik';
myURL.password = '0123456789';

console.log(myURL)
console.log(myURL.href)