const productReducer = (state, action) => {
    switch (action.type) {
      case "SORT_BY_PRICE":
        return { ...state, sort: action.payload, delivery_cost:"" };
      case "FILTER_BY_DELIVERY_COST":
        return { ...state, delivery_cost: action.payload, sort: false };
        // case "MARGINAL BENEFIT":
        // return { ...state, delivery_cost: action.payload, ratings: action.payload, pay_after_delivery:  action.payload,};
      case "CLEAR_FILTERS":
        return {  delivery_cost:"", sort:false };
      default:
        return state;
    }
  };

        

  
  export { productReducer }