const displayHeader = () => {
    const tab = document.getElementById("tabs").dataset.tab

    const aboutTab = 
    `<a 
        href = "/about" 
        id="abouttab">
            about
    </a>`;
    const projectsTab = 
    `<a
        href = "/projects" 
        id="projectstab">
            projects
    </a>`;
    const randomTab = 
    `<a 
        href = "/random" 
        id="randomtab">
            random
    </a>`;
    const image = `<img src="https://www.pngkit.com/png/full/5-52117_oval-drawing-oval-png.png">`;

    const currentTab = document.getElementById("current-tab");

    if (tab == "about") {
        const html = image + aboutTab;
        currentTab.innerHTML = html;

        currentTab.insertAdjacentHTML("afterend", projectsTab);
        currentTab.parentNode.insertAdjacentHTML("beforeend", randomTab);
    } else if (tab == "projects") {
        currentTab.parentNode.insertAdjacentHTML("afterbegin", aboutTab);

        const html = image + projectsTab;
        currentTab.innerHTML = html;

        currentTab.parentNode.insertAdjacentHTML("beforeend", randomTab);
    } else if (tab == "random") {
        currentTab.parentNode.insertAdjacentHTML("afterbegin", projectsTab);
        currentTab.parentNode.insertAdjacentHTML("afterbegin", aboutTab);
        
        const html = image + randomTab;
        currentTab.innerHTML = html;
    }
};

const displayBars = () => {
    let html = ``;

    const bars = document.querySelectorAll('#bar');
    for (const bar of bars) {

        h = bar.dataset.height

        html += `
        <div id = "bar"
            style="width: ${h}em">
        </div>
        `;
    }
    document.querySelector('#bars').innerHTML = html;
};



const initPage = () => {
    displayHeader();
    displayBars();
};



// invoke init page to display:
initPage();