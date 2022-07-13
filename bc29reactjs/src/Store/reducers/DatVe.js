import phoneList from "../../Data/danhSachGhe.json";

const DEFAULT_sTATE = {
    selectedPhone: phoneList[0],
    cartList: [],
};

export const phoneReducer = (state = DEFAULT_sTATE, action) => {
    switch (action.type) {
        case "SELECT_PHONE": {
            state.selectedPhone = action.payload;
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