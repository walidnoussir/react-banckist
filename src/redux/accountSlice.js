import { createSlice } from "@reduxjs/toolkit";

const account1 = {
  user: "Walid Noussir",
  pin: 9999,
  // mouvements: [300, 400, -100, -50],
  mouvements: [
    300, -100, 5000, -20, -1000, 70, 400, 350, 1000, -700, 140, 2000, -200,
    -100, 400,
  ],
  movementsDates: [
    "09-24-2022",
    "09-25-2022",
    "09-25-2022",
    "01-25-2022",
    "09-26-2022",
    "05-20-2022",
    "07-08-2022",
    "07-03-2023",
    "02-24-2023",
    "09-25-2023",
    "12-29-2024",
    "05-18-2024",
    "10-24-2024",
    "06-12-2024",
    "11-30-2024",
  ],
  notifications: [],
  notificationNumbers: "",
  currency: "EUR",
  symbole: "€",
};
const account2 = {
  user: "Oussama Aliouane",
  pin: 2222,
  // mouvements: [10000, 500, -20, -40],
  mouvements: [10000, 200, -5000, 350, -20, 40, -10],
  movementsDates: [
    "12-25-2021",
    "01-25-2022",
    "02-05-2022",
    "04-10-2022",
    "06-25-2022",
    "07-26-2022",
    "08-02-2022",
  ],
  notifications: [],
  notificationNumbers: "",
  currency: "EUR",
  symbole: "€",
};
const account3 = {
  user: "Abdelhak Hammioui",
  pin: 3333,
  // mouvements: [10000, 500, -20, -40],
  mouvements: [20000, 50, -1000, 30],
  movementsDates: ["12-25-2021", "01-25-2022", "02-05-2022", "09-07-2024"],
  notifications: [],
  notificationNumbers: "",
  currency: "USD",
  symbole: "$",
};
const account4 = {
  user: "Reda Elallali",
  pin: 4444,
  // mouvements: [10000, 500, -20, -40],
  mouvements: [100, 500, -1000, 790, -200, 4560, -5],
  movementsDates: [
    "12-25-2021",
    "01-25-2022",
    "02-25-2023",
    "02-05-2022",
    "04-10-2022",
    "06-25-2022",
    "07-26-2022",
  ],
  notifications: [],
  notificationNumbers: "",
  currency: "MAD",
  symbole: "DH",
};

const initialState = {
  accounts: [account1, account2, account3, account4],
  curAccount: {},
  resiver: {},
  isAuthenticated: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccount(state, action) {
      state.curAccount = action.payload;
      state.isAuthenticated = true;
    },
    withdrawal(state, action) {
      state.resiver = state.accounts.find(
        (acc) =>
          acc.user
            .toLowerCase()
            .split(" ")
            .map((name) => name[0])
            .join("") === action.payload.user
      );

      state.curAccount.mouvements.push(-action.payload.amount);
      state.curAccount.movementsDates.push("Today");

      state.curAccount.notifications.push(
        `${action.payload.amount}${state.curAccount.symbole} Transferred to ${state.resiver.user}`
      );
      state.curAccount.notificationNumbers++;

      state.resiver.mouvements.push(+action.payload.amount);

      state.resiver.movementsDates.push("Today");

      state.resiver.notifications.push(
        `${action.payload.amount}${state.resiver.symbole} Resived from ${state.curAccount.user}`
      );
      state.resiver.notificationNumbers++;
    },
    deposit(state, action) {
      state.curAccount.mouvements.push(+action.payload);
      state.curAccount.movementsDates.push("Today");
      state.curAccount.notifications.push(
        `${action.payload}${state.curAccount.symbole} successfully added.`
      );
      state.curAccount.notificationNumbers++;
    },
  },
});

export const { setAccount, withdrawal, deposit } = accountSlice.actions;

export default accountSlice.reducer;
