import React, { useState } from 'react';

import { MainWrapperCon } from './MainWrapperCon';

import { EndPoints, IntiServer } from './axiosinstance'
const { getURLMethod } = EndPoints;
const arr = [{ id: 1 }, { id: 2 }, { id: 3 }];
const MainWrapperLogic = (props) => {
  console.log(props.test);
  const [data, setState] = useState([]);
  console.log(IntiServer());

  return <MainWrapperCon
  >

    <div>
      <button type='button' role='button' onClick={async () => {
        const { data } = await getURLMethod.getData({ params: { id: "1" } });

        console.log(data, "data")
        setState(data);
      }}>Call API</button>
      <div><button onClick={() => {
        var myWindow = window.open("https://www.w3schools.com", "def", "width=200,height=100");
        
        myWindow.params={id:"2"};
        console.log("myWindow",myWindow);
        return window;
      }}>click</button></div>
      <div>
        {
          data.map(obj => {
            return <li>{obj.title}</li>
          })
        }
      </div>
      <div>
        {
          arr.slice(0, 1).map((keys = '') => {
            console.log('keys---', keys);
            return <li>{keys['id']}</li>
          })

        }
      </div>


    </div>
  </MainWrapperCon>
}
MainWrapperLogic.defaultProps = {
  test: '1'
}
export { MainWrapperLogic }