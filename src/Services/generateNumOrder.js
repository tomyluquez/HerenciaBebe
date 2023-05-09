function generateNumOrder() {
  const usedNumbers = [];

  while (true) {
    const number = Math.floor(Math.random() * 1000);

    if (usedNumbers.indexOf(number) === -1) {
      usedNumbers.push(number);
      if (usedNumbers.length === 3) {
        break;
      }
    }
  }

  return "#" + usedNumbers.join("");
}

export default generateNumOrder;
