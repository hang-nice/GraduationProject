import React from 'react';
import { getRequest, postRequest } from '../../fetch';

function Home() {
    return (
        <div>
            home组件
            <button onClick={() => getRequest('getUser')}>aaaaaaaaaa</button>
            <button onClick={() => postRequest('addUser')}>bbbbbbbbbb</button>
            {/* <button onClick={() => postRequest('/api/addUser')}>bbbbbbbbbb</button> */}
        </div>
    );
}
export default Home;
