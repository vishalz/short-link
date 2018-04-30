import React from 'react';


export default class LinksFilter extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      showHidden: false
    };
  };//end of constructor

  componentDidMount(){
    this.tracker = Tracker.autorun(()=>{
      this.setState({
        showHidden: Session.get('showHidden'),
      });
    });//end of tracker
  };//end of componentDidMount

  componentWillUnmount(){
    this.tracker.stop();
  };//end of componentWillUnMount

  onChanged(e){
    const showHidden = e.target.checked;
    Session.set('showHidden', showHidden);
  };//end of onChanged

  render(){
    return(
      <div>
        <label>
          <input type='checkbox' onChange={this.onChanged.bind(this)} checked={this.state.showHidden} />
          Show Hidden Links
        </label>
      </div>
    );
  };//end of render

};//end of LinksFilter



