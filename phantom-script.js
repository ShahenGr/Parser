var page = require('webpage').create();
page.onConsoleMessage = function (str) {
    console.log(str);
}
page.open('https://www.list.am/category/56?gl=2', function (status) {
    //page.render('beforeclick.png'); 
    console.log(page.url);

    var element = page.evaluate(function () {
        console.log('Got here_1');
        return document.querySelector(".h");
    });
    console.log('Got here');
    //page.sendEvent('click', element.offsetLeft, element.offsetTop, 'left'); 
    // element.forEach(elem => {
    //     console.log('elem ' + element);
    // });

    window.setTimeout(function () {
        console.log(page.url);
        //page.render('afterclick.png'); 
        phantom.exit();
    }, 5000);

    //console.log('element is ' + Object.getOwnPropertyNames(element));
    console.log('element is ' + element.firstChild);
}); 