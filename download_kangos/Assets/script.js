function asusDeviceList() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            console.log(data.device_list[0].asus);
            var main = document.getElementById('down');
            for (var i = 0; i < data.device_list[0].asus.length; i++) {
                console.log(data.device_list[0].asus[i]);
                var asusList = `
                    <div class="flex flex-asus">
                        <div class="card">
                            <div class="imgBx">
                                <img src="${data.device_list[0].asus[i].Image}" alt="${data.device_list[0].asus[i].Developer}">
                            </div>
                            <div class="contentBx">
                                <h3>By ${data.device_list[0].asus[i].Developer}</h3>
                                <h2 class="brand">${data.device_list[0].asus[i].Device}</h2>
                                <a href="${data.device_list[0].asus[i].Download}" target="_blank" class="find">Download</a>
                                <a href="${data.device_list[0].asus[i].DeviceGroup}" target="_blank" class="find">Telegram</a>
                            </div>
                        </div>
                    </div>`
                main.innerHTML += asusList;
            }
            var joinAsk = `
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
            main.innerHTML += joinAsk;
        }
    };
    xhttp.open("GET", "https://raw.githubusercontent.com/nparashar150/json_data/master/Assets/device.json", true);
    xhttp.send();
}

function lenovoDeviceList() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            console.log(data.device_list[0].lenovo);
            var main = document.getElementById('down');
            for (var i = 0; i < data.device_list[0].lenovo.length; i++) {
                console.log(data.device_list[0].lenovo[i]);
                var lenovoList = `
                    <div class="flex flex-lenovo">
                        <div class="card">
                            <div class="imgBx">
                                <img src="${data.device_list[0].lenovo[i].Image}" alt="${data.device_list[0].lenovo[i].Developer}">
                            </div>
                            <div class="contentBx">
                                <h3>By ${data.device_list[0].lenovo[i].Developer}</h3>
                                <h2 class="brand">${data.device_list[0].lenovo[i].Device}</h2>
                                <a href="${data.device_list[0].lenovo[i].Download}" target="_blank" class="find">Download</a>
                                <a href="${data.device_list[0].lenovo[i].DeviceGroup}" target="_blank" class="find">Telegram</a>
                            </div>
                        </div>
                    </div>`
                main.innerHTML += lenovoList;
            }
            var joinAsk = `
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
                <div class="flex flex-lenovo">
                    <div class="card">
                        <div class="imgBx">
                            <img src="Assets/nothere.jpg" alt="mi_logo">
                        </div>
                        <div class="contentBx">
                            <h3>Lenovo</h3>
                            <h2 class="brand">Your Device not here?</h2>
                            <a href="https://t.me/kangos" target="_blank" class="find">Contact US</a>
                        </div>
                    </div>
                </div>`
            main.innerHTML += joinAsk;
        }
    };
    xhttp.open("GET", "https://raw.githubusercontent.com/nparashar150/json_data/master/Assets/device.json", true);
    xhttp.send();
}

function oneplusDeviceList() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            console.log(data.device_list[0].oneplus);
            var main = document.getElementById('down');
            for (var i = 0; i < data.device_list[0].oneplus.length; i++) {
                console.log(data.device_list[0].oneplus[i]);
                var oneplusList = `
                    <div class="flex flex-oneplus">
                        <div class="card">
                            <div class="imgBx">
                                <img src="${data.device_list[0].oneplus[i].Image}" alt="${data.device_list[0].oneplus[i].Developer}">
                            </div>
                            <div class="contentBx">
                                <h3>By ${data.device_list[0].oneplus[i].Developer}</h3>
                                <h2 class="brand">${data.device_list[0].oneplus[i].Device}</h2>
                                <a href="${data.device_list[0].oneplus[i].Download}" target="_blank" class="find">Download</a>
                                <a href="${data.device_list[0].oneplus[i].DeviceGroup}" target="_blank" class="find">Telegram</a>
                            </div>
                        </div>
                    </div>`
                main.innerHTML += oneplusList;
            }
            var joinAsk = `
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
                <div class="flex flex-oneplus">
                    <div class="card">
                        <div class="imgBx">
                            <img src="Assets/nothere.jpg" alt="mi_logo">
                        </div>
                        <div class="contentBx">
                            <h3>OnePlus</h3>
                            <h2 class="brand">Your Device not here?</h2>
                            <a href="https://t.me/kangos" target="_blank" class="find">Contact US</a>
                        </div>
                    </div>
                </div>`
            main.innerHTML += joinAsk;
        }
    };
    xhttp.open("GET", "https://raw.githubusercontent.com/nparashar150/json_data/master/Assets/device.json", true);
    xhttp.send();
}

function pocoDeviceList() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            console.log(data.device_list[0].poco);
            var main = document.getElementById('down');
            for (var i = 0; i < data.device_list[0].poco.length; i++) {
                console.log(data.device_list[0].poco[i]);
                var pocoList = `
                    <div class="flex flex-poco">
                        <div class="card">
                            <div class="imgBx">
                                <img src="${data.device_list[0].poco[i].Image}" alt="${data.device_list[0].poco[i].Developer}">
                            </div>
                            <div class="contentBx">
                                <h3>By ${data.device_list[0].poco[i].Developer}</h3>
                                <h2 class="brand">${data.device_list[0].poco[i].Device}</h2>
                                <a href="${data.device_list[0].poco[i].Download}" target="_blank" class="find">Download</a>
                                <a href="${data.device_list[0].poco[i].DeviceGroup}" target="_blank" class="find">Telegram</a>
                            </div>
                        </div>
                    </div>`
                main.innerHTML += pocoList;
            }
            var joinAsk = `
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
                <div class="flex flex-poco">
                    <div class="card">
                        <div class="imgBx">
                            <img src="Assets/nothere.jpg" alt="mi_logo">
                        </div>
                        <div class="contentBx">
                            <h3>Poco</h3>
                            <h2 class="brand">Your Device not here?</h2>
                            <a href="https://t.me/kangos" target="_blank" class="find">Contact US</a>
                        </div>
                    </div>
                </div>`
            main.innerHTML += joinAsk;
        }
    };
    xhttp.open("GET", "https://raw.githubusercontent.com/nparashar150/json_data/master/Assets/device.json", true);
    xhttp.send();
}

function realmeDeviceList() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            console.log(data.device_list[0].realme);
            var main = document.getElementById('down');
            for (var i = 0; i < data.device_list[0].realme.length; i++) {
                console.log(data.device_list[0].realme[i]);
                var realmeList = `
                    <div class="flex flex-realme">
                        <div class="card">
                            <div class="imgBx">
                                <img src="${data.device_list[0].realme[i].Image}" alt="${data.device_list[0].realme[i].Developer}">
                            </div>
                            <div class="contentBx">
                                <h3>By ${data.device_list[0].realme[i].Developer}</h3>
                                <h2 class="brand">${data.device_list[0].realme[i].Device}</h2>
                                <a href="${data.device_list[0].realme[i].Download}" target="_blank" class="find">Download</a>
                                <a href="${data.device_list[0].realme[i].DeviceGroup}" target="_blank" class="find">Telegram</a>
                            </div>
                        </div>
                    </div>`
                main.innerHTML += realmeList;
            }
            var joinAsk = `
                 <div class="flex flex-realme">
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
                <div class="flex flex-realme">
                    <div class="card">
                        <div class="imgBx">
                            <img src="Assets/nothere.jpg" alt="mi_logo">
                        </div>
                        <div class="contentBx">
                            <h3>Realme</h3>
                            <h2 class="brand">Your Device not here?</h2>
                            <a href="https://t.me/kangos" target="_blank" class="find">Contact US</a>
                        </div>
                    </div>
                </div>`
            main.innerHTML += joinAsk;
        }
    };
    xhttp.open("GET", "https://raw.githubusercontent.com/nparashar150/json_data/master/Assets/device.json", true);
    xhttp.send();
}

function xiaomiDeviceList() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            console.log(data.device_list[0].xiaomi);
            var main = document.getElementById('down');
            for (var i = 0; i < data.device_list[0].xiaomi.length; i++) {
                console.log(data.device_list[0].xiaomi[i]);
                var xiaomiList = `
                    <div class="flex flex-xiaomi">
                        <div class="card">
                            <div class="imgBx">
                                <img src="${data.device_list[0].xiaomi[i].Image}" alt="${data.device_list[0].xiaomi[i].Developer}">
                            </div>
                            <div class="contentBx">
                                <h3>By ${data.device_list[0].xiaomi[i].Developer}</h3>
                                <h2 class="brand">${data.device_list[0].xiaomi[i].Device}</h2>
                                <a href="${data.device_list[0].xiaomi[i].Download}" target="_blank" class="find">Download</a>
                                <a href="${data.device_list[0].xiaomi[i].DeviceGroup}" target="_blank" class="find">Telegram</a>
                            </div>
                        </div>
                    </div>`
                main.innerHTML += xiaomiList;
            }
            var joinAsk = `
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
                            <h3>Xiaomi</h3>
                            <h2 class="brand">Your Device not here?</h2>
                            <a href="https://t.me/kangos" target="_blank" class="find">Contact US</a>
                        </div>
                    </div>
                </div>`
            main.innerHTML += joinAsk;
        }
    };
    xhttp.open("GET", "https://raw.githubusercontent.com/nparashar150/json_data/master/Assets/device.json", true);
    xhttp.send();
}