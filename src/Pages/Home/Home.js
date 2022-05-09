import React, {useEffect} from "react";
import { useDispatch,useSelector } from 'react-redux'

import { actionDecrement, actionIncrement } from '../../redux/action/action';

function Home() {
    const dispatch = useDispatch();

    const counter = useSelector(state=>state.counter)

    const btnClick = (type) => {
       
        if (type === 'increment') {
         dispatch(actionIncrement())   
        }
        if (type === 'decrement') {
            dispatch(actionDecrement())   
           }
    }

    useEffect(() => {
        console.log(counter.value)
        
    },[counter])
    

    return (
        <div>
            Home Component

            <hr />
            <button onClick={() => {
                btnClick('increment')
            }}>Incremental</button>

            <div> counter value {counter.value}</div>

            <button onClick={() => {
                btnClick('decrement')
            }}>Decremental</button>
        </div>
    )
}
export default Home;