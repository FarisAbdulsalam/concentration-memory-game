let cardArr = [1, 2, 3, 4, 5, 6];
cardArr = [...cardArr, ...cardArr]
cardArr.sort(() => Math.random() - 0.5);
console.log(cardArr)
