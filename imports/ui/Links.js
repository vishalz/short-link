import React      from 'react';
import PropTypes  from 'prop-types';
import { Meteor } from 'meteor/meteor';
import LinksTitle from './LinksTitle';
import LinksList  from './LinksList';
import AddLink    from './AddLink';


export default class Links extends React.Component{
  render(){
    return(
      <div>
        <h1>Your Links</h1>
        <LinksTitle title='Your Links'/>
        <LinksList/>
        <AddLink/>
        <button onClick={()=>Meteor.logout()}>Log Out</button>
      </div>
    );
  };
};//end of Links

Links.propTypes = {

};
