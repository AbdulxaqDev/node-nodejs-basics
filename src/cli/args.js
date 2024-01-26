const parseArgs = () => {
  const args = process.argv;

  for (let i = 2; i < args.length; i++) {
    if (args[i].startsWith("--")) {
      const propName = args[i].slice(2);
      const propVal = args[i + 1];
      console.log(`${propName} is ${propVal}`);
    }
  }
};

parseArgs();
