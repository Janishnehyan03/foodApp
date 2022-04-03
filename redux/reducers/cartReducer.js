const defaultState = {
  selectedItems: {
    items: [],
    restaurantName: "",
  },
};

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newState = { ...state };
      if (action.payload.checkBoxValue) {
        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],
          restaurantName: action.payload.restaurantName,
        };
      } else {
        newState.selectedItems = {
          items: newState.selectedItems.items.filter(
            (item) => item.name !== action.payload.name
          ),
          restaurantName: action.payload.restaurantName,
        };
      }
      return newState;
    }

    default:
      return state;
  }
};
export default cartReducer;
