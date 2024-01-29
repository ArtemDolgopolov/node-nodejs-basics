const parseArgs = () => {
 const args = process.argv;

args.forEach((arg, index) => {
  if (index % 2 === 0) {
    const key = arg.replace('--', '');
    const value = args[index + 1];
    console.log(`${key} is ${value}`);
  }
});
};

parseArgs();