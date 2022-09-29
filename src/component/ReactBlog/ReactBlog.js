import React from 'react';
import './ReactBlog.css'
const ReactBlog = () => {
    return (
        <div className='blog'>
          <div>
          <h1>How does React works?</h1>
            <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>

          </div>
          <div><h1> different between react props and state?</h1>
<p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p></div>
          

<div>
<h1>Use cases of useState</h1>
<p>There are many use cases for the useState hook, but use cases
State management,Conditional rendering,Toggle flags,Counter,Get API data and store it in state</p>
</div>



    
        </div>
    );
};

export default ReactBlog;