 window.onload = function() {
    detect_system(
        document.getElementsByClassName('level6')[0], 
        document.getElementById('user-system-info'));

    draw_primitives(document.getElementsByClassName('canvas1')[0]);
}

function detect_system(block, paragraph) {
    var agent = detect.parse(navigator.userAgent);
    var browser = agent.browser.family;
    var OS = agent.os.name;

    paragraph.innerHTML = 'Браузер: ' + browser + ' ' + agent.browser.version;
    paragraph.innerHTML += '<br />';
    paragraph.innerHTML += 'Операційна система: ' + agent.os.name;
    paragraph.innerHTML += '<br />';
    paragraph.innerHTML += 'Разрешение екрана: ' + window.screen.availWidth + 'x' + window.screen.availHeight;

    if(browser.indexOf('Chrome') != -1)
        block.innerHTML += "<img src='../img/chrome.jpg'; width='50px'; height='50px'; alt='Chrome';>";
    else if(browser.indexOf('Firefox') != -1)
        block.innerHTML += "<img src='../img/firefox.png'; width='50px'; height='50px'; alt='Firefox';>";
    else if(browser.indexOf('Edge') != -1 || browser.indexOf('IE') != -1)
        block.innerHTML += "<img src='../img/ie.png'; width='50px'; height='50px'; alt='ie';>";

    if(OS.indexOf('Windows') != -1)
        block.innerHTML += "<img src='../img/windows.png'; width='50px'; height='50px'; alt='windows';>";
    else if(OS.indexOf('Linux') != -1)
        block.innerHTML += "<img src='../img/linux.png'; width='50px'; height='50px'; alt='linux';>";
    else if(OS.indexOf('MacOS') != -1)
        block.innerHTML += "<img src='../img/macos.gif'; width='50px'; height='50px'; alt='ios';>";
}

function draw_primitives(canvas) {
    context = canvas.getContext('2d');

    context.strokeStyle = "#009900";
    context.lineWidth = 3;

    context.beginPath();
    context.strokeRect(30, 2, 59, 59);
    context.closePath();

    context.beginPath();
    context.moveTo(120,20);
    context.lineTo(180,25);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.arc(230, 30, 28, 0, 2*Math.PI, true);
    context.stroke();
    context.closePath();
}

var changed = false;
function changeHeadersFont() {
    var tags = document.querySelectorAll('h1,h2,h3,h4,h5,h6');
    for(var i = 0 ; i < tags.length; i++) {
        if (changed) {
            tags.item(i).style.fontFamily = 'monospace';
        }
        else {
            tags.item(i).style.fontFamily = 'Aller';
        }
    }
    changed = !changed;
}

function headersCount() {
    var tags = document.querySelectorAll('h1,h2,h3,h4,h5,h6');
    return tags.length;
}

function checkPhoneNumber(string) {
    if(/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/.test(string))
        return "Номер введен верно.";
    else
        return "Номер введен неверно.";
}