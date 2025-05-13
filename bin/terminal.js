function write(message) {
  process.stdout.write(message);
}

const ESC = '\x1b';



write(ESC + '[1;41m'); write("Hello, TA23A!"); write(ESC + '[0m'); write("\n");
write(ESC + '[1;42m'); write("Hello, TA23A!"); write(ESC + '[0m'); write("\n");
write(ESC + '[1;43m'); write("Hello, TA23A!"); write(ESC + '[0m'); write("\n");
write(ESC + '[1;44m'); write("Hello, TA23A!"); write(ESC + '[0m'); write("\n");
write(ESC + '[1;45m'); write("Hello, TA23A!"); write(ESC + '[0m'); write("\n");
write(ESC + '[1;46m'); write("Hello, TA23A!"); write(ESC + '[0m'); write("\n");
write(ESC + '[1;47m'); write("Hello, TA23A!"); write(ESC + '[0m'); write("\n");

for(let i = 0; i < 256; i++) {
    write(ESC + `[48;5;${i}m`); write(' '); write(ESC + '[0m'); write(ESC + '[49m'); 
}

for(let i = 0; i < 256; i++) {
    write(ESC + `[48;2;${i};0;0m`); write(' '); write(ESC + '[0m'); write(ESC + '[49m'); 
}

