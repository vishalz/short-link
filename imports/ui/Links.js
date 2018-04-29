import React         from 'react';
import PrivateHeader from './PrivateHeader';
import LinksList     from './LinksList';
import AddLink       from './AddLink';



const Links = ()=>{
  return(
    <div>
      <PrivateHeader title='Your Links Below'/>
      <LinksList/>
      <AddLink/>
    </div>
  );
};//end of Links

export default Links;
