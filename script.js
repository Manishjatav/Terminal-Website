const input = document.getElementById("commandInput");
const output = document.getElementById("output");
const terminal = document.getElementById("terminal");
const boot = document.getElementById("boot");
const navbar = document.getElementById("navbar-section");
// for responsive navbar
const menu = document.querySelector(".menu-icon");
const links = document.querySelector(".links");

menu.addEventListener("click", () => {
    links.classList.toggle("active");
});

/* BOOT ANIMATION */
new Typed("#typed", {
  strings: [
    "Booting system...",
    "Welcome to cryx",
    // "Starting services...",
    // "Bypassing firewall...",
    // "Access Granted...",
  ],
  typeSpeed: 50,
  backSpeed: 20,
  backDelay: 800,
  loop: false,
  showCursor: true,
  onComplete: function () {
    setTimeout(() => {
      boot.style.display = "none";
      terminal.classList.remove("hidden");
      navbar.classList.remove("hidden");
      input.focus();
    }, 2500);
  }
});

/* COMMANDS */
const commands = {
  help: `
Club Info:
about
mission
status
members
event-info

Linux Basics:
ls
pwd
touch
cat
grep

System:
whoami
date
uname
uptime
clear

Fun:
hack
matrix
ctf

Connect:
social
`,

  ls: `
events/
members/
resources/
ctf/
README.md
flag.txt
`,

  pwd: `
/home/guest/cryx
`,

  touch: `
File created successfully.
`,

  cat: `
Welcome to CRYX Terminal.
Cyber Security Club of MNIT Jaipur.
`,

  grep: `
Usage:
grep <keyword>

Example:
grep flag flag.txt

Output:
flag{d3m0_fl4g}
`,

  about: `
CRYX is the Cyber Security Club of MNIT Jaipur.
We promote cybersecurity awareness, ethical hacking,
research, CTFs and hands-on learning.
`,

  mission: `
- Learn Cyber Security
- Practice Ethical Hacking
- Participate in CTFs
- Build Security Tools
`,

  status: `
Club Status: ACTIVE
Members: Recruiting
CTF Team: Training
`,

  members: `
  command not found
`,

  "event-info": `
Upcoming:
- Intro to Linux
- Web Exploitation Workshop
- Internal CTF
`,

  whoami: `
guest@cryx
`,

  uname: `
CRYX Linux 1.0 x86_64
`,

  uptime: `
up 1337 days, 7 hours, 13 minutes
`,

  date: new Date().toString(),

  hack: `
Hacking system...
... 100%

Access Denied System Locked
`,

  matrix: `
01001000 01000001 01000011 01001011
10101010 11001100 11110000 00110011
`,

  ctf: `
flag{n0t_th3_r34l_fl4g}
`,

  social: `
GitHub    : github.com/cryx-mnit
Instagram : instagram.com/cryx_mnit
LinkedIn  : linkedin.com/company/cryx
`,

  clear: ""
};

/* INPUT */
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const cmd = input.value.trim();

    printLine(`guest@manish:~$ ${cmd}`);

    if (cmd === "clear") {
      output.innerHTML = "";
    }
    else if (commands[cmd]) {
      printLine(commands[cmd]);
    }
    else {  
      printLine("Command not found");
    }

    input.value = "";
  }
});

function printLine(text) {
  const div = document.createElement("div");
  div.classList.add("line");
  div.innerText = text;
  output.appendChild(div);

  window.scrollTo(0, document.body.scrollHeight);
}