import React       from 'react';
import PropTypes   from 'prop-types';
import LinkItem    from './LinkItem';
import { Meteor }  from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { LinksDB } from './../api/LinksDB';

export default class LinksList extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      links: [],
      error: ''
    };
  };//end of constructor

  componentDidMount(){
    this.tracker = Tracker.autorun(()=>{
      Meteor.subscribe('links');
      this.setState({
        links: LinksDB.find().fetch()
      });
    });//end of tracker
  };//end of componentDidMount

  componentWillUnmount(){
    this.tracker.stop();
  };//end of componentWillUnMount

  renderLinks(){
    return this.state.links.map((link)=>{
      return <LinkItem key={link._id} {...link}/>
    });//end of map
  };//end of renderLinks

  render(){
    return(
      <div>
        {this.renderLinks()}
      </div>
    );
  };
};//end of LinksList

LinksList.propTypes = {

};
