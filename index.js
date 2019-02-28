const count = () => {
  for (let i = 1; i <= 100; i++) {
    const isEven = i % 2 === 0;
    const isDivByThree = i % 3 === 0;
    if (isEven) {
      if (isDivByThree) {
        console.log(`The number ${i} is divisible by two and three.`);
      } else {
        console.log(`The number ${i} is even`);
      }
    } else if (isDivByThree) {
      console.log(`The number ${i} is divisible by three.`);
    } else {
      console.log(`The number ${i} is odd`);
    }
  }
};

count();
