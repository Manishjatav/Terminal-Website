const input = document.getElementById("commandInput");
const output = document.getElementById("output");
const terminal = document.getElementById("terminal");
const boot = document.getElementById("boot");

/* BOOT ANIMATION */
new Typed("#typed", {
  strings: [
    // "Booting system...",
    // "Loading kernel modules...",
    // "Starting services...",
    // "Bypassing firewall...",
    // "Access Granted 😈",
    "Welcome SRM..."
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
    }, 1200);
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

  about: "Cybersecurity enthusiast 🚀",

  whoami: "guest",

  hack: `Hacking system...
████████████ 100%
Access Granted`,

  social: `GitHub: https://github.com/yourname`
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