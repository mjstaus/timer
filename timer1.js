const args = process.argv.slice(2);

for (let arg of args) {
  if (!Number(arg) || Number(arg) < 0) {
    continue;
  }

  setTimeout(() => {
    process.stdout.write("\x07");
    console.log("beep", arg);
  }, arg * 1000);
}
