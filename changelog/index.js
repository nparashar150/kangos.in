const changelog = document.getElementById('changelogBody');
const features = document.getElementById('featuresBody');
const theming = document.getElementById('themingBody');

function changelogFunc() {
    fetch('data/change.json')
        .then(function(response) {
            return response.json();
        }).then (function (object) {
            for (const data in object) {
                let list = `<ul><li>${object[data]}</li></ul>`
                changelog.innerHTML += list;
            }
        }).catch (function (error) {
            console.log(error)
        })
};

function featureFunc() {
    fetch('data/features.json')
        .then(function(response) {
            return response.json();
        }).then (function (object) {
            for (const data in object) {
                let list = `<ul><li>${object[data]}</li></ul>`
                features.innerHTML += list;
            }
        }).catch (function (error) {
            console.log(error)
        });
};

function themingFunc() {
    fetch('data/theming.json')
        .then(function(response) {
            return response.json();
        }).then (function (object) {
            for (const data in object) {
                let list = `<ul><li>${object[data]}</li></ul>`
                theming.innerHTML += list;
            }
        }).catch (function (error) {
            console.log(error)
        });
};
changelogFunc();
featureFunc();
themingFunc();