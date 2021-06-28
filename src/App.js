import React from 'react';
import dva, { connect } from 'dva';
import Counter1 from './counter';


const Counter = (props = {}) => {
    const {count = 0, dispatch} = props;
    // console.log('count1=',count)
    return <div>
        <p>{count}</p>
        <button onClick={() => dispatch({type: 'count/add'})}>加</button>
        <br/>
        <button onClick={() => dispatch({type: 'count/minus'})}>减</button>
        <br/>

        <Counter1 />
    </div>;
}
const mapStateToProps = (state = {}) => {
    return state;
}
export default connect(mapStateToProps)(Counter);