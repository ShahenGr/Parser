let $ = require('jquery')  // jQuery now loaded and assigned to $
const phantom = require('phantom');
var spawn = require('child_process').spawn;
var args = ["./phantom-script.js"];
var options = {};
var phantomExecutable = 'phantomjs';

function Uint8ArrToString(myUint8Arr){
    return String.fromCharCode.apply(null, myUint8Arr);
};

$('#click-counter').text('')
$('#countbtn').on('click', () => {
    var text = ''
    var child = spawn(phantomExecutable, args, options);
    // Receive output of the child process
child.stdout.on('data', function(data) {
    var textData = Uint8ArrToString(data);

    text += textData;
});

// Receive error output of the child process
child.stderr.on('data', function(err) {
    var textErr = Uint8ArrToString(err);
    console.log(textErr);
});

// Triggered when the process closes
child.on('close', function(code) {
    $('#click-counter').text(text + '<br>' + 'Process closed with status code: ' + code);
});
  // $('#click-counter').text(count)
}) 