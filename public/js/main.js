import "/js/games.js";

document.addEventListener("DOMContentLoaded", function () {
  var originalTitle = document.title;
  var favicon = document.getElementById("favicon").href;

  var switchState = localStorage.getItem("toggleSwitchState");
  if (switchState === "enabled") {
    document.getElementById("clickoffcloak").checked = true;
    addTabEventListener();
  }

  document
    .getElementById("clickoffcloak")
    .addEventListener("change", function () {
      var isChecked = this.checked;
      if (isChecked) {
        localStorage.setItem("toggleSwitchState", "enabled");
        addTabEventListener();
      } else {
        localStorage.setItem("toggleSwitchState", "disabled");
        removeTabEventListener();
      }
    });

  function changeTabNameAndIcon(enabled) {
    var tabTitle = enabled ? "Inbox (162) - Gmail" : originalTitle;
    var tabIcon = enabled ? "media/cloaks/Gmail.ico" : favicon;
    document.title = tabTitle;
    document.getElementById("favicon").href = tabIcon;
  }

  function addTabEventListener() {
    window.addEventListener("blur", function (event) {
      var switchState = localStorage.getItem("toggleSwitchState");
      if (switchState === "enabled") {
        changeTabNameAndIcon(true);
      }
    });

    window.addEventListener("focus", function (event) {
      var switchState = localStorage.getItem("toggleSwitchState");
      if (switchState === "enabled") {
        changeTabNameAndIcon(false);
      }
    });
  }

  function removeTabEventListener() {
    window.removeEventListener("blur");
    window.removeEventListener("focus");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const themeSelector = document.getElementById("theme-selector");

  function setTheme(themeName) {
    document.body.setAttribute("theme", themeName);
    localStorage.setItem("selectedTheme", themeName);
  }

  const savedTheme = localStorage.getItem("selectedTheme");

  if (savedTheme) {
    setTheme(savedTheme);
    themeSelector.value = savedTheme;
  }

  themeSelector.addEventListener("change", function () {
    setTheme(themeSelector.value);
  });
});

fetch("../package.json")
  .then((response) => response.json())
  .then((data) => {
    const versionEl = document.getElementById("version");
    if (versionEl) {
      versionEl.textContent = data.version;
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  var headElement = document.querySelector("head");

  var htmlToInject = ` 

    `;

  headElement.insertAdjacentHTML("beforeend", htmlToInject);
});

document.addEventListener("DOMContentLoaded", function () {
  var existingNavs = document.querySelectorAll(".navbar");

  if (existingNavs.length === 0) {
    fetch("/./navbar.html")
      .then((response) => response.text())
      .then((navHTML) => {
        var bodyElement = document.querySelector("body");
        bodyElement.insertAdjacentHTML("afterbegin", navHTML);
      })
      .catch((error) => {
        console.error("Error fetching navbar.html:", error);
      });
  }
});

var textOptions = [
  "Ewww gay people whats that",
  "Rip 1nCH!",
  "Now with a hyatt! ",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "fuck you mr whitby",
  "The site to cure Total horniness",
  "bro stop stealing my sites inch - doge",
  "hyatt",
  "What is hoogle hites?",
  "Nah",
  "whaddup my n-",
  "insert dick here",
  "autism at its finest!",
  "blocked!",
  "Welcome To Lunaar, you pedo!",
  "Did you know we are open wide? Fuck US!",
  "https://discord.gg/pornhub",
  "404: rileys dad not found.",
  "Snappier is bad at black truck simulator",
  "Ctrl + Alt + Delete your family.",
  "Oops! I broke it again. - doge",
  "Ass Ass Ass",
  "Ctrl+Z is my favorite key. - cool people",
  "hop on pornhub",
  "chase gets no girls",
  "I sure do love CP",
  "chromebooks can suck my balls",
  "who is mr smith???",
  "404: jews not found.",
  "technoblade never dies",
  "about:full on bottom",
  "this class is more absent than my father",
  "cats are almost better",
  "thx inchrys",
  "Yup this is Riley.",
  "worse than rammerhead",
  "NodeJewS on top!",
  "Julian Has a foot fetish",
  "orgasm sim",
  "HEEEENNNNTTTAAAAAIIII!!!!!!",
  "I SUCK!",
  "i inserted my meat into the toaster - ms milstead",
  "i love meat in my mouth",
  "sigma",
  "womp womp doges dog died",
];

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

function updateText() {
  var randomIndex = getRandomIndex(textOptions.length);
  var randomText = textOptions[randomIndex];
  document.getElementById("randomText").textContent = randomText;
}

if (window.location.pathname === "/") {
  window.onload = updateText;
}

const originalTitle = "Lunaar";
const favicon = document.querySelector("#favicon").getAttribute("href");

function changeTabCloak(title, favicon) {
  document.title = title;
  document.querySelector("#favicon").setAttribute("href", favicon);
}

function applyPreset() {
  const dropdown = document.getElementById("presetDropdown");
  const selectedPreset = dropdown.value;

  switch (selectedPreset) {
    case "default":
      changeTabCloak(originalTitle, favicon);
      break;
    case "preset1":
      changeTabCloak("Preset 1 Title", "./media/cloaks/GoogleDrive.ico");
      break;
    case "preset2":
      changeTabCloak("Preset 2 Title", "./media/cloaks/preset2-favicon.png");
      break;
    case "preset3":
      changeTabCloak("Preset 3 Title", "./media/cloaks/Calendar.ico");
      break;
    default:
      break;
  }
}

function updateCustomTitle() {
  const customTitle = document.getElementById("customTitle").value;
  changeTabCloak(
    customTitle,
    document.querySelector("#favicon").getAttribute("href")
  );
}

function updateCustomFavicon() {
  const customFavicon = document.getElementById("customFavicon").value;
  changeTabCloak(document.title, customFavicon);
}

window.addEventListener("beforeunload", function () {
  sessionStorage.setItem("savedTitle", document.title);
  sessionStorage.setItem(
    "savedFavicon",
    document.querySelector("#favicon").getAttribute("href")
  );
});

window.addEventListener("load", function () {
  const savedTitle = sessionStorage.getItem("savedTitle");
  const savedFavicon = sessionStorage.getItem("savedFavicon");

  if (savedTitle && savedFavicon) {
    changeTabCloak(savedTitle, savedFavicon);
  }
});

function showCustomMenu(x, y) {
  var menu = document.getElementById("customMenu");

  var maxX = window.innerWidth - menu.offsetWidth;
  var maxY = window.innerHeight - menu.offsetHeight;

  var adjustedX = Math.min(x, maxX);
  var adjustedY = Math.min(y, maxY);

  menu.style.left = adjustedX + "px";
  menu.style.top = adjustedY + "px";
  menu.style.display = "block";

  document.addEventListener("click", function closeMenu(event) {
    if (!event.target.closest(".custom-menu")) {
      hideCustomMenu();
      document.removeEventListener("click", closeMenu);
    }
  });
}

function hideCustomMenu() {
  var menu = document.getElementById("customMenu");
  menu.style.display = "none";
}

function customAction(action) {
  alert("Selected: " + action);
  hideCustomMenu();
}

document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  showCustomMenu(event.clientX, event.clientY);
});

window.addEventListener("load", function () {
  const savedTitle = sessionStorage.getItem("savedTitle");
  const savedFavicon = sessionStorage.getItem("savedFavicon");

  if (savedTitle && savedFavicon) {
    changeTabCloak(savedTitle, savedFavicon);
  }
});

function createBlank() {
  win = window.open();
  win.document.body.style.margin = "0";
  win.document.body.style.height = "100vh";
  var iframe = win.document.createElement("iframe");
  iframe.style.border = "none";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.margin = "0";
  iframe.referrerpolicy = "no-referrer";
  iframe.allow = "fullscreen";
  iframe.src = location.origin;
  win.document.body.appendChild(iframe);
  window.location.href = "https://www.google.com/search?q=what+day+is+today";
}

const asciiv4 = `

\x1b[35m██╗     ██╗   ██╗███╗   ██╗ █████╗  █████╗ ██████╗     ██╗   ██╗██╗  ██╗
\x1b[35m██║     ██║   ██║████╗  ██║██╔══██╗██╔══██╗██╔══██╗    ██║   ██║██║  ██║
\x1b[35m██║     ██║   ██║██╔██╗ ██║███████║███████║██████╔╝    ██║   ██║███████║
\x1b[35m██║     ██║   ██║██║╚██╗██║██╔══██║██╔══██║██╔══██╗    ╚██╗ ██╔╝╚════██║
\x1b[35m███████╗╚██████╔╝██║ ╚████║██║  ██║██║  ██║██║  ██║     ╚████╔╝      ██║
\x1b[35m╚══════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝      ╚═══╝       ╚═╝
                                                                        

`;

console.log(asciiv4);

// var asciiv3 = `

//        ++++++++++
//       ++#++++++##++
//      +##++     ++#++
//     ++##+       +##+
//     +###+       +##++
//     +###+       +###+
//     +###+       +###+   +++++
//     +###+       +###+   ++##+
//     +++++       +++++    ++++
//                                   `;
// console.log(asciiv3);
