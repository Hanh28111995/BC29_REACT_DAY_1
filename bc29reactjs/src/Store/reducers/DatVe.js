import data from "../../Data/danhSachGhe.json";

const DEFAULT_sTATE = {
  name: "",
  soVe: "",
  selectedTicket: data,
  checkedTicket: [],
  input_disabled: false,
  show_block: [false, false],
};

export const DatVe = (state = DEFAULT_sTATE, action) => {
  switch (action.type) {
    case "SELECT_TICKET": {
      console.log(action.payload);
      const [x, e, d] = action.payload;
      let checkValue = e.target.checked;
      console.log({ checkValue });
      let dataC = state.checkedTicket;
      if (x === false) {
        if (checkValue === true) {
          dataC.push(d);
        }
        if (checkValue === false) {
          let filterResult = dataC.filter(function (element) {
            return element !== d;
          });
          dataC = filterResult;
        }
      }

      state.checkedTicket = dataC;

      console.log(dataC.length, state.soVe);
      if (dataC.length == state.soVe) {
        let c = document.querySelectorAll("input.seats");
        for (let i = 0; i < c.length; i++) {
          c[i].disabled = true;
        }
        for (let i = 0; i < dataC.length; i++) {
          document.getElementById(dataC[i]).disabled = false;
          console.log(dataC[i]);
        }
      }
      if (dataC.length < state.soVe) {
        let c = document.querySelectorAll("input.seats");
        for (let i = 0; i < c.length; i++) {
          c[i].disabled = false;
        }
      }

      return { ...state };
    }

    case "TAKE_DATA": {
      let c = document.querySelectorAll("input.seats");
      for (let i = 0; i < c.length; i++) {
        c[i].disabled = false;
      }

      console.log(action.payload);
      state.name = action.payload[0];
      state.soVe = action.payload[1];
      state.show_block = action.payload[2];
      state.checkedTicket = [];
      return { ...state };
    }

    case "CONFIRM_DATA": {
      state.show_block = [true, true];
      let new_data = state.selectedTicket;
      new_data.map((item) => {
        if (item.hang !== "") {
          item.danhSachGhe.map((ele, index) => {
            for (let i = 0; i < state.checkedTicket.length; i++) {
              if (state.checkedTicket[i] == ele.soGhe) {
                ele.daDat = true;
              }
            }
          });
        }
      });
        state.selectedTicket = new_data;
        console.log(state.checkedTicket)


      return { ...state };
    }

    default:
      return state;
  }
};
