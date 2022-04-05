const switchTabs = ev => {
    // document.querySelector('#modal-container').innerHTML="";

    const buttonId = ev.currentTarget.getAttribute('data-post-id');
    
    console.log(buttonId);
    // console.log(document.querySelector(new_focus));
    // document.querySelector(new_focus).focus();
};

const displayHeader = () => {
    let html = `
    <div class="tabs">
        <div id="current-tab" >
            <img src="https://www.pngkit.com/png/full/5-52117_oval-drawing-oval-png.png">
            <button 
                id="abouttab"
                onlclick = "switchTabs(event)">
                about
            </button>
        </div>
        <button 
            id="projectstab"
            onlclick = "switchTabs(event)">
            projects
        </button>
        <button 
            id="randomtab"
            onlclick = "switchTabs(event)">
            random
        </button>
    </div>
    `;

    document.querySelector('#header').innerHTML = html; //html;
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
    document.querySelector('#bars').innerHTML = html; //html;
};

const displayFooter = () => {
    
    let html = `
        <a class = "footerLink" href= "https://www.linkedin.com/in/niva-r/" target="_blank" title="LinkedIn">
            <i class="fab fa-linkedin"></i>
        </a>
        <a class = "footerLink" href= 'mailto:nivarazin2022@u.northwestern.edu' title="Send me an email!">
            <i class="fas fa-envelope"> </i>
        </a>
        `;
    document.querySelector('#footer').innerHTML = html; //html;
};

const initPage = () => {
    displayHeader();
    displayBars();
    displayFooter();
};



// invoke init page to display stories:
initPage();