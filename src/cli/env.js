const parseEnv = () => {
  process.env.RSS_1 = 'First value';
  process.env.RSS_2 = 'Second value';

  const myEnvs = process.env;

  for (const key in myEnvs) {
    if (key.includes('RSS_')) console.log(`${key}=${myEnvs[key]}`)
  }
};

parseEnv();