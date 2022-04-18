const sentence = "hello there from lighthouse labs";

const typeWriter = (string) => {
  let x = 50;
  for (let char of string) {
    setTimeout(() => {
      process.stdout.write(char);
    }, x);
    x += 50;
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, x);
};

typeWriter("i love billie eilish");
