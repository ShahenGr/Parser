let axios = require('axios');
let cheerio = require('cheerio');
let $ = require('jquery')
let fs = require('fs');

$('#countbtn').on('click', () => {
    var text = `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>ParSer</title>
        <link rel = "stylesheet" 
           href = "./bower_components/bootstrap/dist/css/bootstrap.min.css" />
      </head>
      <body>
          <div class = "container">
          <h1>The Result of the scraping</h1>`;
    axios.get('https://www.list.am/category/56?gl=2').then((Response) => {
        if (Response.status === 200) {
            var html = Response.data;
            let $ = cheerio.load(html);

            $('tbody tr').each(function (index, element) {
                var header = $(element).find('div.t');

                var x = $(header).find('a').text();
                //var href = $(header).find('a').getAttribute('href');
                console.log("HHH ", href);

                if(x != null || x == " "){
                    text += "<p><a href=\"\">" + x + "</a></p><br>";
                }
                

            });
            console.log("XXX ", text);
            text += `        </div>
            </body>
          </html>`
            fs.writeFileSync('ph.html', text);
        }
    }, (error) => {
        console.log("Hmmmm: ", error)
    });
    console.log("SSS ", text);
    //$('#click-counter').text(text);
})


