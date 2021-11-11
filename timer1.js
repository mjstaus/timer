// 'use strict';
const args = process.argv;
let relevantArgs = args.slice(2);

for (let arg of relevantArgs) {
  if (Number(arg) && Number(arg) > 0) {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, arg * 1000);
  }
}
