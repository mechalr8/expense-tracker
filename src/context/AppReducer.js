const AppReducer = (state, action) => {
    switch (action.type) {
        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter(
                    (transaction) => transaction.id !== action.payload
                ),
            };
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        case "SET_USER":
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

export default AppReducer