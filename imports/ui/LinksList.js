import React       from 'react';
import { Meteor }  from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { LinksDB } from './../api/LinksDB';
import LinkItem    from './LinkItem';

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
      const visible = !Session.get('showHidden');
      this.setState({
        links: LinksDB.find({visible}).fetch()
      });
    });//end of tracker
  };//end of componentDidMount

  componentWillUnmount(){
    this.tracker.stop();
  };//end of componentWillUnMount

  renderLinks(){
    return this.state.links.map((link)=>{
      const shortUrl =   Meteor.absoluteUrl(link._id);
      return <LinkItem key={link._id} shortUrl={shortUrl} {...link}/>
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


