import { createSlice } from "@reduxjs/toolkit"
const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
    },
    reducers: {
        filterdUsers: (state, action) => {
            state.data = state.data.filter((user) => user.email.toLowerCase().includes(action.payload))
        },
        setProducts(state, action) {
            state.data = action.payload
        },
    },
})
export default productSlice.reducer;
export const { setProducts,filterdUsers } = productSlice.actions;
export function fetchProducts() {                        //First method with Thunk
    return async function fetchProductThunk(dispatch, getState) {
        try {
            const res = await fetch('https://fakestoreapi.com/users')
            const data = await res.json()
            dispatch(setProducts(data))
        }
        catch (error) {
            console(error)
        }
    }
}
