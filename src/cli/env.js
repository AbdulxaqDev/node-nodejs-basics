const parseEnv = () => {
  const envs = process.env;
  const keys = Object.keys(envs);

  for (const key of keys) {
    if (key.startsWith("RSS_")) {
      console.log(`${key}=${envs[`${key}`]}`);
    }
  }
};

parseEnv();
