const DEFAULT_sTATE = {
    selectedType: 'topclothes',
    model: {
        hairstyle: "/images/hairstyle/hairstyle3.png",
        necklaces : "/images/necklaces/necklace3.png",
        topclothes: "/images/clothes/topcloth5.png",
        botclothes: "/images/clothes/botcloth4.png",
        handbags: "/images/handbags/handbag2.png",
        shoes: "/images/shoes/shoes2.png",
        background: "/images/background/background1.jpg",
    }
};
export const thuDoReducer = (state = DEFAULT_sTATE, { type, payload }) => {
    switch (type) {
        case "SET_SELECTED_TYPE":
            {
                state.selectedType = payload ;
                return {...state};
            }
        case "CHANGE_MODEL":
            {
                const {type, imgSrc_png} = payload;
                const newModel = {...state.model};
                newModel[type] = imgSrc_png;
                state.model = newModel ;
                return {...state};
            }
        default:
            return state;
    }
}
