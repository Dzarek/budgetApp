const incomeColors = [
  "#123123",
  "#154731",
  "#165f40",
  "#16784f",
  "#14915f",
  "#10ac6e",
  "#0bc77e",
  "#04e38d",
  "#00ff9d",
];
const expenseColors = [
  "#b50d12",
  "#bf2f1f",
  "#c9452c",
  "#d3583a",
  "#dc6a48",
  "#e57c58",
  "#ee8d68",
  "#f79d79",
  "#ffae8a",
  "#cc474b",
  "#f55b5f",
];

export const incomeCategories = [
  { type: "Biznes", amount: 0, color: incomeColors[0] },
  { type: "Inwestycje", amount: 0, color: incomeColors[1] },
  { type: "Dodatkowy Przychód", amount: 0, color: incomeColors[2] },
  // { type: "Deposits", amount: 0, color: incomeColors[3] },
  { type: "Wygrana", amount: 0, color: incomeColors[4] },
  { type: "Dary", amount: 0, color: incomeColors[5] },
  { type: "Wypłata", amount: 0, color: incomeColors[6] },
  { type: "Oszczędności", amount: 0, color: incomeColors[7] },
  { type: "Dochód z Wynajmu", amount: 0, color: incomeColors[8] },
];

export const expenseCategories = [
  { type: "Rachunki", amount: 0, color: expenseColors[0] },
  { type: "Samochód", amount: 0, color: expenseColors[1] },
  { type: "Ciuchy", amount: 0, color: expenseColors[2] },
  { type: "Podróże", amount: 0, color: expenseColors[3] },
  { type: "Jedzenie", amount: 0, color: expenseColors[4] },
  { type: "Zakupy", amount: 0, color: expenseColors[5] },
  { type: "Dom", amount: 0, color: expenseColors[6] },
  { type: "Rozrywka", amount: 0, color: expenseColors[7] },
  { type: "Telefon", amount: 0, color: expenseColors[8] },
  { type: "Zwierzęta", amount: 0, color: expenseColors[9] },
  { type: "Inne", amount: 0, color: expenseColors[10] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => (c.amount = 0));
  expenseCategories.forEach((c) => (c.amount = 0));
};
