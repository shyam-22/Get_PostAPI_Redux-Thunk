import React, { Component } from 'react';
import Postlist from './component/postlist';



class  App extends Component 
{
  render()
  {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Postlist/>
          </div>
        </div>
      </div>
          );
  }
  
}

export default App;
