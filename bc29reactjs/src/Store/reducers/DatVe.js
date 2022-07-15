import data from "../../Data/danhSachGhe.json";

const DEFAULT_sTATE = {
    // name: "",
    // soVe: 0,
    // selectedTicket: data,
    // status: "disabled",
  };

export const TicketReducer = (state = DEFAULT_sTATE, action) => {
    switch (action.type) {
        case "SELECT_TICKET": {
            const dataC = [...state.data];
            

            state.selectedTicket = action.payload;
            return { ...state };
        }






        case "ADD_TO_CARD": {
            const data = [...state.cartList];
            const idx = data.findIndex((ele) => ele.maSP === action.payload.maSP);

            if (idx !== -1) {
                data[idx].soLuong += 1;
            } else {
                data.push({
                    ...action.payload,
                    soLuong: 1,
                });
            }
            state.cartList = data;
            
            
            return { ...state };
        }
        case "HANDLE_QUANTITY" : {
            const { phone, isIncrease} = action.payload;
            const data = [...state.cartList];

            const idx = data.findIndex((ele) => ele.maSP === phone.maSP);
            if (idx === -1) {
                alert("Không tìm thấy sản phẩm");
          
                throw new Error("Không tìm thấy sản phẩm");
              }
          
              if (isIncrease) {
                data[idx].soLuong += 1;
              } else if (data[idx].soLuong > 1) {
                data[idx].soLuong -= 1;
              } else if (window.confirm("Bạn có muốn xoá ko ?")) {
                data.splice(idx, 1);  
              }
              state.cartList = data ;

            return { ...state };
        }
        default:
            return state;
    }
};