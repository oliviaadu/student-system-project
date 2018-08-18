import React from 'react';
import './App.css';
import Header from "./Header";
import StudentList from "./StudentList";
import AddStudent from "./AddStudent";
import SearchStudents from "./SearchStudents";
import _ from "lodash";

class App extends React.Component {
  state = {
    pageHeader: "Students",
    myStudents: [],
    formBodyVisible: false,
    orderBy: "petName",
    orderDir: "asc",
    queryText: ""
  };

  componentDidMount(){
    // this.serverRequest =  $.get('./data.json', function(result){
		// 	var tempData = result;
		// 	this.setState({
		// 		myStudents: tempData
		// 	}); //setState
		// }.bind(this));
  }
  componentWillUnmount(){
    // this.serverRequest.abort();
  }

  deleteMessage(item){
		var allStudents = this.state.myStudents;
		var remainStudents = _.without(allStudents, item);
		this.setState({
			myStudents: remainStudents
		}); //setState
	} //deleteMessage

	toggleDisplay(){
		this.setState({
			formBodyVisible: !this.state.formBodyVisible
		}); //setState
	} //toggleDisplay

	addItem(tempItem){
		var tempStuds = this.state.myStudents;
		tempStuds.push(tempItem);
		this.setState({
			myStudents: tempStuds
		}); //setState
	} //addItem

	reorder(orderBy, orderDir){
		this.setState({
			orderBy: orderBy,
			orderDir: orderDir
		}); //setState
	} //reorder

	search(q){
		this.setState({
			queryText: q
		}) //setState
	} //search

  render(){
    var filteredStudents = [];
		var orderBy = this.state.orderBy;
		var orderDir = this.state.orderDir;
		var queryText = this.state.queryText;
		var myStudents = this.state.myStudents;

		myStudents.forEach(function(item){
			if((item.petName.toLowerCase().indexOf(queryText) != -1) || (item.petName.toLowerCase().indexOf(queryText) != -1) || (item.petName.toLowerCase().indexOf(queryText) != -1) || (item.petName.toLowerCase().indexOf(queryText) != -1)){
				filteredStudents.push(item);
			}
		}); //forEach

		filteredStudents = _.orderBy(filteredStudents, function(item){
			return item[orderBy].toLowerCase();
		}, orderDir); //orderBy

    filteredStudents = filteredStudents.map(function(item, index){
      return(
			 <StudentList key = {index}
			 	singleItem = {item}
				whichItem = {item}
				onDelete = {this.deleteMessage}/>
      ) //return
    }.bind(this)); //filteredStudents.map
		return(
      <div className="App">
  			<div className="interface">
  				<AddStudent
  					bodyVisible = {this.state.formBodyVisible}
  					handleToggle = {this.toggleDisplay}
  					addStud = {this.addItem}
  				/>
  				<SearchStudents
  					orderBy = {this.state.orderBy}
  					orderDir = {this.state.orderDir}
  					onReorder = {this.reorder}
  					onSearch = {this.search}
  				/>
  				 <ul className ="item-list media-list">{filteredStudents}</ul>
  			</div> //interface
        <Header message = {this.state.pageHeader}/>
        <p className="App-intro">
          ---
        </p>
      </div>
		)//return
  }
};

export default App;
