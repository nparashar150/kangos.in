function asusDeviceList() {
    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", 'Assets/device.json', false);
    xhReq.send(null);
    var jsonObject = JSON.parse(xhReq.responseText);
    var main = document.getElementById('down');
    for (var i = 0; i < jsonObject.device_list[0].asus.length; i++) {
        console.log(jsonObject.device_list[0].asus[i]);
        var asusList = `
        <div class="flex flex-asus">
            <div class="card">
                <div class="imgBx">
                    <img src="${jsonObject.device_list[0].asus[i].Image}" alt="${jsonObject.device_list[0].asus[i].Developer}">
                </div>
                <div class="contentBx">
                    <h3>By ${jsonObject.device_list[0].asus[i].Developer}</h3>
                    <h2 class="brand">${jsonObject.device_list[0].asus[i].Device}</h2>
                    <a href="${jsonObject.device_list[0].asus[i].Download}" target="_blank" class="find">Download</a>
                    <a href="${jsonObject.device_list[0].asus[i].DeviceGroup}" target="_blank" class="find">Telegram</a>
                </div>
            </div>
        </div>`
        main.innerHTML += asusList;
    }
}

function lenovoDeviceList() {
    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", 'Assets/device.json', false);
    xhReq.send(null);
    var jsonObject = JSON.parse(xhReq.responseText);
    var main = document.getElementById('down');
    for (var i = 0; i < jsonObject.device_list[0].lenovo.length; i++) {
        console.log(jsonObject.device_list[0].lenovo[i]);
        var lenovoList = `
        <div class="flex flex-lenovo">
            <div class="card">
                <div class="imgBx">
                    <img src="${jsonObject.device_list[0].lenovo[i].Image}" alt="${jsonObject.device_list[0].lenovo[i].Developer}">
                </div>
                <div class="contentBx">
                    <h3>By ${jsonObject.device_list[0].lenovo[i].Developer}</h3>
                    <h2 class="brand">${jsonObject.device_list[0].lenovo[i].Device}</h2>
                    <a href="${jsonObject.device_list[0].lenovo[i].Download}" target="_blank" class="find">Download</a>
                    <a href="${jsonObject.device_list[0].lenovo[i].DeviceGroup}" target="_blank" class="find">Telegram</a>
                </div>
            </div>
        </div>`
        main.innerHTML += lenovoList;
    }
}

function oneplusDeviceList() {
    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", 'Assets/device.json', false);
    xhReq.send(null);
    var jsonObject = JSON.parse(xhReq.responseText);
    var main = document.getElementById('down');
    for (var i = 0; i < jsonObject.device_list[0].oneplus.length; i++) {
        console.log(jsonObject.device_list[0].oneplus[i]);
        var oneplusList = `
        <div class="flex flex-oneplus">
            <div class="card">
                <div class="imgBx">
                    <img src="${jsonObject.device_list[0].oneplus[i].Image}" alt="${jsonObject.device_list[0].oneplus[i].Developer}">
                </div>
                <div class="contentBx">
                    <h3>By ${jsonObject.device_list[0].oneplus[i].Developer}</h3>
                    <h2 class="brand">${jsonObject.device_list[0].oneplus[i].Device}</h2>
                    <a href="${jsonObject.device_list[0].oneplus[i].Download}" target="_blank" class="find">Download</a>
                    <a href="${jsonObject.device_list[0].oneplus[i].DeviceGroup}" target="_blank" class="find">Telegram</a>
                </div>
            </div>
        </div>`
        main.innerHTML += oneplusList;
    }
}

function pocoDeviceList() {
    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", 'Assets/device.json', false);
    xhReq.send(null);
    var jsonObject = JSON.parse(xhReq.responseText);
    var main = document.getElementById('down');
    for (var i = 0; i < jsonObject.device_list[0].poco.length; i++) {
        console.log(jsonObject.device_list[0].poco[i]);
        var pocoList = `
        <div class="flex flex-poco">
            <div class="card">
                <div class="imgBx">
                    <img src="${jsonObject.device_list[0].poco[i].Image}" alt="${jsonObject.device_list[0].poco[i].Developer}">
                </div>
                <div class="contentBx">
                    <h3>By ${jsonObject.device_list[0].poco[i].Developer}</h3>
                    <h2 class="brand">${jsonObject.device_list[0].poco[i].Device}</h2>
                    <a href="${jsonObject.device_list[0].poco[i].Download}" target="_blank" class="find">Download</a>
                    <a href="${jsonObject.device_list[0].poco[i].DeviceGroup}" target="_blank" class="find">Telegram</a>
                </div>
            </div>
        </div>`
        main.innerHTML += pocoList;
    }
}

function realmeDeviceList() {
    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", 'Assets/device.json', false);
    xhReq.send(null);
    var jsonObject = JSON.parse(xhReq.responseText);
    var main = document.getElementById('down');
    for (var i = 0; i < jsonObject.device_list[0].realme.length; i++) {
        console.log(jsonObject.device_list[0].realme[i]);
        var realmeList = `
        <div class="flex flex-realme">
            <div class="card">
                <div class="imgBx">
                    <img src="${jsonObject.device_list[0].realme[i].Image}" alt="${jsonObject.device_list[0].realme[i].Developer}">
                </div>
                <div class="contentBx">
                    <h3>By ${jsonObject.device_list[0].realme[i].Developer}</h3>
                    <h2 class="brand">${jsonObject.device_list[0].realme[i].Device}</h2>
                    <a href="${jsonObject.device_list[0].realme[i].Download}" target="_blank" class="find">Download</a>
                    <a href="${jsonObject.device_list[0].realme[i].DeviceGroup}" target="_blank" class="find">Telegram</a>
                </div>
            </div>
        </div>`
        main.innerHTML += realmeList;
    }
}

function xiaomiDeviceList() {
    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", 'https://raw.githubusercontent.com/nparashar150/json_data/master/device.json', false);
    xhReq.send(null);
    var jsonObject = JSON.parse(xhReq.responseText);
    var main = document.getElementById('down');
    for (var i = 0; i < jsonObject.device_list[0].xiaomi.length; i++) {
        console.log(jsonObject.device_list[0].xiaomi[i]);
        var xiaomiList = `
        <div class="flex flex-xiaomi">
            <div class="card">
                <div class="imgBx">
                    <img src="${jsonObject.device_list[0].xiaomi[i].Image}" alt="${jsonObject.device_list[0].xiaomi[i].Developer}">
                </div>
                <div class="contentBx">
                    <h3>By ${jsonObject.device_list[0].xiaomi[i].Developer}</h3>
                    <h2 class="brand">${jsonObject.device_list[0].xiaomi[i].Device}</h2>
                    <a href="${jsonObject.device_list[0].xiaomi[i].Download}" target="_blank" class="find">Download</a>
                    <a href="${jsonObject.device_list[0].xiaomi[i].DeviceGroup}" target="_blank" class="find">Telegram</a>
                </div>
            </div>
        </div>`
        main.innerHTML += xiaomiList;
    }
}

function joinAsk() {
    var main = document.getElementById('down');
    var joinAskinnterHTML = `
        <div class="flex flex-poco">
            <div class="card">
                <div class="imgBx">
                    <img src="Assets/devs/pocof1.png" alt="mi_logo">
                </div>
                <div class="contentBx">
                    <h3>KangOS</h3>
                    <h2 class="brand">Join Community</h2>
                    <a href="https://t.me/kangos" target="_blank" class="find">Telegram</a>
                </div>
            </div>
        </div>
        <div class="flex flex-asus">
            <div class="card">
                <div class="imgBx">
                    <img src="Assets/nothere.jpg" alt="mi_logo">
                </div>
                <div class="contentBx">
                    <h3>Asus</h3>
                    <h2 class="brand">Your Device not here?</h2>
                    <a href="https://t.me/kangos" target="_blank" class="find">Contact US</a>
                </div>
            </div>
        </div>`
    main.innerHTML += joinAskinnterHTML;
}