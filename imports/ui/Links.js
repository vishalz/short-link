import React         from 'react';
import PrivateHeader from './PrivateHeader';
import LinksList     from './LinksList';
import AddLink       from './AddLink';
import LinksFilter   from './LinksFilter';



const Links = ()=>{
  return(
    <div>
      <PrivateHeader title='Your Links Below'/>
      <LinksFilter/>
      <AddLink/>
      <LinksList/>
    </div>
  );
};//end of Links

export default Links;
