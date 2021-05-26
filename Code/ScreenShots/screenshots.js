const holder = document.getElementById('screenshots-holder');
function screenshots() {
    fetch('Code/ScreenShots/slides.json')
        .then(response => response.json())
        .then(data => {
            for (const list in data) {
                let ss = `
                <div class="mySlides">
                    <img src="${data[list]}">
                </div>`
                holder.innerHTML += ss;
            }
        });
}

screenshots();