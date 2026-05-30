const input = document.getElementById("commandInput");
const output = document.getElementById("output");
const terminal = document.getElementById("terminal");
const boot = document.getElementById("boot");
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
    "Access Granted...",
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
      input.focus();
    }, 2500);
  }
});

/* COMMANDS */
const commands = {
  help: `help
about
whoami
hack
social
clear`,

  about: "CRYX is the Cyber Security Club of MNIT Jaipur, dedicated to fostering a culture of cybersecurity, ethical hacking, and research. Through workshops, CTFs, technical events and sessions, we help students to develop their skills.",

  whoami: "guest",

  hack: `Hacking system...
████████████ 100%
Access Denied...`,

  social: `GitHub: https://github.com/manish_jatav`
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