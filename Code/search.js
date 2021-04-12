        function autocomplete(inp, arr) {
            var currentFocus;
            inp.addEventListener("input", function(e) {
                var a, b, i, val = this.value;
                closeAllLists();
                if (!val) {
                    return false;
                }
                currentFocus = -1;
                a = document.createElement("DIV");
                a.setAttribute("id", this.id + "autocomplete-list");
                a.setAttribute("class", "autocomplete-items");
                this.parentNode.appendChild(a);
                for (i = 0; i < arr.length; i++) {
                    if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                        b = document.createElement("DIV");
                        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                        b.innerHTML += arr[i].substr(val.length);
                        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                        b.addEventListener("click", function(e) {
                            inp.value = this.getElementsByTagName("input")[0].value;
                            closeAllLists();
                        });
                        a.appendChild(b);
                    }
                }
            });
            inp.addEventListener("keydown", function(e) {
                var x = document.getElementById(this.id + "autocomplete-list");
                if (x) x = x.getElementsByTagName("div");
                if (e.keyCode == 40) {
                    currentFocus++;
                    addActive(x);
                } else if (e.keyCode == 38) {
                    currentFocus--;
                    addActive(x);
                } else if (e.keyCode == 13) {
                    e.preventDefault();
                    if (currentFocus > -1) {
                        if (x) x[currentFocus].click();
                    }
                }
            });

            function addActive(x) {
                if (!x) return false;
                removeActive(x);
                if (currentFocus >= x.length) currentFocus = 0;
                if (currentFocus < 0) currentFocus = (x.length - 1);
                x[currentFocus].classList.add("autocomplete-active");
            }

            function removeActive(x) {
                for (var i = 0; i < x.length; i++) {
                    x[i].classList.remove("autocomplete-active");
                }
            }

            function closeAllLists(elmnt) {
                var x = document.getElementsByClassName("autocomplete-items");
                for (var i = 0; i < x.length; i++) {
                    if (elmnt != x[i] && elmnt != inp) {
                        x[i].parentNode.removeChild(x[i]);
                    }
                }
            }
            document.addEventListener("click", function(e) {
                closeAllLists(e.target);
            });
        }
        var countries = ["Oneplus 7 Pro", "guacamole", "moditji", "OnePlus 7", "guacamoleb", "Spookcity138", "OnePlus 6T", "Fajita", "Ziauddin_Sameer", "OnePlus 6", "Enchilada", "Chandu078", "OnePlus 5T", "Dumpling", "sibieeeee", "Asus Zenfone Max Pro M1", "X00T/d", "rajat_kashyap154", "Asus Max Pro M2", "X01BD", "DarshanMevada", "Xiaomi Mi A2", "Jasmine_Sprout", "nparashar150", "Naman Parashar", "Xiaomi Redmi Note 9", "Miatoll", "bezke1", "Xiaomi Mi 6X", "wayne", "chdelacr", "Xiaomi Mi 8", "Dipper", "jullian14", "Realme X", "RMX1901", "Abh_ishe_K", "Realme X2", "RMX199X", "Harsh_799", "Realme 3 pro", "RMX1851", "R15H1", "Redmi 3s/3x", "Land", "MarvelMathesh", "Redmi 7", "Onclite", "NadinSylaa", "Redmi Note 7 Pro", "Violet", "mavji007", "Redmi S2/Y2", "AJ0195", "Redmi K20 Pro/Mi 9T Pro", "Raphael", "sherifrahim", "Redmi 6 Pro", "Sakura", "Soumyajitpaul007", "Redmi Note 8/8T", "Ginkgo", "Willow", "fernandosanch", "Redmi Note 7/7s", "Lavender", "zaidkhan0997", "Hazama25", "Poco X3 (NFC)", "surya", "karna", "NickvBokhorst", "Poco F1 ", "beryllium", "NickvBokhorst", "Lenovo Z5s", "jd2019", "HsyHusker", "Lenovo Z6 Pro", "zippo", "chematelegram"];
        autocomplete(document.getElementById("myInput"), countries);