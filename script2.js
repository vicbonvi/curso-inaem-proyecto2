const wait = (segundos) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`han pasado ${segundos} segundos`);
    }, segundos * 1000);
  });
};

wait(1)
  .then((data) => {
    console.log(data);
    return wait(2);
  })
  .then((data) => {
    console.log(data);
    return wait(3);
  })
  .then((data) => {
    console.log(data);
    return wait(4);
  })
  .then((data) => console.log(data));
