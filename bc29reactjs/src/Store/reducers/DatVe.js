import data from "../../Data/danhSachGhe.json";

const DEFAULT_sTATE = {
  name: "",
  soVe: "",
  selectedTicket: data,
  checkedTicket: [],
};

export const DatVe = (state = DEFAULT_sTATE, action) => {
    switch (action.type) {
    //     // case "SELECT_TICKET": {
    //     //     const dataC = [...state.data];
            

    //     //     state.selectedTicket = action.payload;
    //         return { ...state };
    //     }


        default:
            return state;
    }
};