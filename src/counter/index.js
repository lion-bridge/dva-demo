import React from 'react';
import dva, { connect } from 'dva';

const app = dva();

const Counter = (props = {}) => {
    const {count = 0, dispatch} = props;
    return <div>
        <p>{count}</p>
        <button onClick={() => dispatch({type: 'counter/add'})}>加</button>
        <br/>
        <button onClick={() => dispatch({type: 'counter/minus'})}>减</button>
    </div>;
}
const mapStateToProps = state => state;

export default connect(mapStateToProps)(Counter);
