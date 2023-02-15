import React, { useEffect, useState } from 'react'
import { InputField } from './Input'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../Store/ProductSlice'
import { filterdUsers } from '../Store/ProductSlice'
import dot from '../images/dot.png'
import search from '../images/search.png'
const Product = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product) //{data: products} products in data
    const [inputValue, setInputValue] = useState("");
    console.log("inputvalue", inputValue)
    const handleChange = (inputValue) => {
        setInputValue(inputValue)
        dispatch(filterdUsers(inputValue))
    }
    useEffect(() => {
        dispatch(fetchProducts());
    }, [])
    return (
        <div>
            <div className="form-outline">
                <InputField
                    type="text"
                    value={inputValue}
                    placeholder="Search with email"
                    name="password"
                    img={search}
                    onChange={handleChange} />
            </div>
            <table className="table p-2 table-borderless caption-top">
                <thead>
                    <tr className="align-middle mx-auto">
                        <th scope="col" className='order'>Order#</th>
                        <th scope="col">Order status</th>
                        <th scope="col" className='gardsbua'>GARDSBUA AS</th>
                        <th scope="col">Purchase date</th>
                        <th scope="col">Fulfilled date</th>
                        <th scope="col">Invoice status</th>
                        <th scope="col" className='a' > Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((user,i) => (
                        <tr className="align-middle mx-auto" key={i}>
                            <td scope="col" className='order'>{user.id}</td>
                            <td scope="col">{user.password}</td>
                            <td scope="col" className='gardsbua'>{user.username}</td>
                            <td scope="col">{user.email}</td>
                            <td scope="col">{user.phone}</td>
                            <td scope="col">{user.password}</td>
                            <td scope="col" className='a'><p className='amount'>{user.password} 
                            <span><img className="align-middle" src={dot} width='30' height='12'/></span></p></td>
                        </tr>
                    ))} </tbody>
            </table>
        </div>
    )}
export default Product