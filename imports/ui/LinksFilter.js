import React from 'react';

const LinksFilter = ()=>{

  onChange = (e)=>{
    const checked = e.target.checked
    Session.set('showHidden', checked);
  };//end of onChange

  return(
    <div>
      <label>
        <input type='checkbox' onChange={onChange} />
        Show Hidden Links
      </label>
    </div>
  );

};//end of LinksFilter 

export default LinksFilter;
