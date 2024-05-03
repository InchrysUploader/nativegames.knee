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
  "Now with a hyatt!",
  "please mr whitby, stop blocking these 🥺",
  "The best site for procrastination",
  "hyatt",
  "What is hoogle hites?",
  "Nah",
  "whaddup my n-",
  "insert water here, it goes to africa trust",
  "autism at its finest!",
  "blocked!",
  "Did you know we are open wide? i love food!",
  "https://discord.gg/sigmas",
  "404: abdiels dad not found.",
  "my crush is github",
  "Ctrl + Alt + Delete your family.",
  "right back on my drip",
  "chase gets no girls",
  "'Ermmm, actually' - James Burriesci",
  "I sure do love CP (cheese pizza)",
  "who is mr smith???",
  "404: jews not found - soem guy in 1940",
  "this class is more absent than my father - ms smith",
  "cats are almost better",
  "Yup this is a sigma.",
  "worse than rammerhead",
  "chicken is better",
  "i dont know - celyn",
  "hop off",
  "fordnite",
  "im changing these quotes",
  "mmmh that dog was scrumptious - darin",
  "i inserted my meat into the toaster - ms milstead",
  "i love meat in my mouth - mr whitby",
  "sigma",
  "hi guys",
  "the most sigma game site",
  "vercel on top!",
  "pvz stands for p*nis vs zombies",
  "i hate emo people",
  "pedophile and kids: mr barone",
  "i like little kids (as friends of course",
  "sambucha is a racist",
  "matthew dablo",
  "immigrants need to go back",
  "fatima needs to jump off a bridge",
  "this bridge is lookin real scrumptious right now",
  "i love eating windows 10",
  "these quotes are a fever dream",
  "mr alseph on top!",
  "mr alseph getting rizzy",
  "member quotes server edition",
  "should i make a company called hyatt labs?",
  "bisexual orphans",
  "pigs are in gta 6",
  "MY ROBLOX USER NAME IS OOFER JUNIOPR UNDERSCORE PRO ON ROBLOX - some loser in 3rd grade",
  "emory has a small tv (and pp)",
  "riley has a gyatt",
  "my friend is about to finger me",
  "skibidi toilet will be mine yeah"
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
