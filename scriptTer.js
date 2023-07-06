//mod from ForrestKnight fk.codes

function $(elid) {
    return document.getElementById(elid);
  }
  
var cursor;
window.onload = init;

function init() {
  cursor = $("cursor");
  cursor.style.left = "0px";
}

function nl2br(txt) {
  return txt.replace(/\n/g, '');
}

function typeIt(from, e) {
  e = e || window.event;
  var w = $("typer");
  var tw = from.value;
  if (!pw){
    w.innerHTML = nl2br(tw);
  }
}

function moveIt(count, e) {
  e = e || window.event;
  var keycode = e.keyCode || e.which;
  if (keycode == 37 && parseInt(cursor.style.left) >= (0 - ((count - 1) * 10))) {
    cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
  } else if (keycode == 39 && (parseInt(cursor.style.left) + 10) <= 0) {
    cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
  }
}

function alert(txt) {
  console.log(txt);
}

var soundcloud = "https://soundcloud.com/gggoemon";

var password = "passwo";

var github = "https://github.com/apokarteron";
var email = 'disperazioneee@proton.me';

wis = [
  "<br>",
  "I'm TTERMINATO!",
  "the machine outside your body.",
  "<br>"
];

wami = [
  "<br>",
  "You are a filthy human, aren't you?",
  "hahahah",
  "<br>"
];

social = [
  "<br>",
 
  'soundcloud     <a href="' + soundcloud + '" target="_blank">soundcloud/gggoemon' + "</a>",
  'github         <a href="' + github + '" target="_blank">github/apokarteron' + "</a>",
  "<br>"
];

secret = [
  "<br>",
  '<span class="command">sudo</span>           Only use if you\'re admin   if u knw what i men..',
  "<br>"
];

projects = [
  "<br>",
  "No projects...",
  "I live on line of code at a time.",
  "<br>"
];


help = [
  "<br>",
  '<span class="command">wis</span>            Who are you?',
  '<span class="command">wami</span>           Who am I?',
  '<span class="command">social</span>         Display social networks',
  '<span class="command">secret</span>         Not so secret, but you need a password',
  '<span class="command">projects</span>       View my projects',
  '<span class="command">history</span>        View command history',
  '<span class="command">help</span>           NObody can really help you :(',
  '<span class="command">email</span>          I do not read email, but u can try',
  '<span class="command">clear</span>          Clear terminal',
  '<span class="command">banner</span>         Display the header',
  '<span class="command">moon</span>           Current footage of the moon',
  "<br>",
];

banner = [
  '<span class="index"> Stolen and remixed by Apokarteron Inc.  All lefts reserved.</span>',

   "##########################-------------------------------------------------------------------------",
  "#######################---  fk                            ",
  "####################---              ^^                   @@@@@@@@@@",
  "#######                         ^^       ^^            @@@@@@@@@@@@@@@",
  "####                                                 @@@@@@@@@@@@@@@@@@              ^^",
  "##        ,,,                                       @@@@@@@@@@@@@@@@@@@@",
  "#        (/`\\)            ~~~~ ~~ ~~~~~ ~~~~~~~~ ~~ &&&&&&&&&&&&&&&&&&&& ~~~~~~~ ~~~~~~~~~~~ ~~~",
  "#       ((o.o))           ~         ~~   ~  ~       ~~~~~~~~~~~~~~~~~~~~ ~       ~~     ~~ ~        ",
  "#       )) - ((     /\\      ~      ~~      ~~ ~~ ~~  ~~~~~~~~~~~~~ ~~~~  ~     ~~~    ~ ~~~  ~ ~~",
  "#      ((() ()))   /  )     ~  ~~     ~         ~      ~~~~~~  ~~ ~~~       ~~ ~ ~~  ~~ ~",
  "#     ()))    (() /B (    ~  ~       ~ ~      ~           ~~ ~~~~~~  ~      ~~  ~             ~~",
  "#     / (_>o<_) \\//   \\  pjb    ~             ~        ~      ~      ~~   ~             ~",
  "#    / / )   ( \\_/     )    _______ ,---.  ,---.           ,-..-. .-.  .--.  _______  .---.   ",
  "#    \\ \\/\\___/\\            |__   __|| .-'  | .-\\.  |\\    /||(||  \\| | / /\\ \\|__   __|/ .-. )  ",
  "##    \\_)|\\_/| |             )| |   | `-.  | `-'/  |(\\  / |(_)|   | |/ /__\\\\ \\ )| |   | | |(_) ",
  "###     \\|/_/|/             (_) |   | .-'  |   (   (_)\\/  || || |\\  ||  __  |(_) |   | | | |  ",
  "#####    \\/  / ScS            | |   |  `--.| |\\ \\  | \\  / || || | |)|| |  |)|  | |   \\ `-' /  ",
  "#######  (  /                 `-'   /( __.'|_| \\)\\ | |\\/| |`-'/(  (_)|_|  (_)  `-'    )---'  ",
  "###############################--- (__)        (__)'-'  '-'  (__)                    (_)      ",
  "##################################---",
  "########################################-----------------------------------------------------------",
  
  '<span class="color2">Welcum to the web, where the spiderz hide!</span>',
  "<span class=\"color2\">If you are so stupid... beseech</span> <span class=\"command\">'help'</span><span class=\"color2\">!</span>"
];

var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer"); 
var textarea = document.getElementById("texter"); 
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
let pwd = false;
var commands = [];

setTimeout(function() {
  loopLines(banner, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

console.log(
  "wowwww You hacked my password!ðŸ˜ ",
  "color: #04ff00; font-weight: bold; font-size: 24px;"
);
console.log("%cPassword: '" + password + "' - siuuuum”", "color: grey");

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  if (pw) {
    let et = "*";
    let w = textarea.value.length;
    command.innerHTML = et.repeat(w);
    if (textarea.value === password) {
      pwd = true;
    }
    if (pwd && e.keyCode == 13) {
      loopLines(secret, "color2 margin", 120);
      command.innerHTML = "";
      textarea.value = "";
      pwd = false;
      pw = false;
      liner.classList.remove("password");
    } else if (e.keyCode == 13) {
      addLine("Wrong password", "error", 0);
      command.innerHTML = "";
      textarea.value = "";
      pw = false;
      liner.classList.remove("password");
    }
  } else {
    if (e.keyCode == 13) {
      commands.push(command.innerHTML);
      git = commands.length;
      addLine("undesideredGuest@terminato:~$ " + command.innerHTML, "no-animation", 0);
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
  }
}

function commander(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "wis":
      loopLines(wis, "color2 margin", 80);
      break;
    case "wami":
      loopLines(wami, "color2 margin", 80);
      break;

    case "sudo":
      addLine("Mmmh there's nothing as congenial as fresh sweat xD", "color2", 80);
      setTimeout(function() {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      }, 1000); 
      break;
    case "social":
      loopLines(social, "color2 margin", 80);
      break;
    case "secret":
      liner.classList.add("password");
      pw = true;
      break;
    case "projects":
      loopLines(projects, "color2 margin", 80);
      break;
    case "password":
      addLine("<span class=\"inherit\"> BRUH! It is not so trivial˜‚</span>", "error", 100);
      break;
    case "history":
      addLine("<br>", "", 0);
      loopLines(commands, "color2", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
    case "email":
      addLine('Opening mailto:<a href="mailto:disperazioneee@proton.me"> mail</a>...', "color2", 80);
      newTab(email);
      break;
    case "clear":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "banner":
      loopLines(banner, "", 80);
      break;
    // socials
    case "soundcloud":
      addLine("Opening SoundCloud...", "color2", 80);
      newTab(soundcloud);
      break;

    case "github":
      addLine("Opening GitHub...", "color2", 0);
      newTab(github);
      break;
    default:
      addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
      break;

    case "moon":
      
      break;
  }
}

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function() {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style, index * time);
  });
}



const openButton = document.querySelector("[data-open-modal]");
const closeButton = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");
openButton.addEventListener("click", () => { modal.show()})
closeButton.addEventListener("click", () => { modal.close()})



//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}