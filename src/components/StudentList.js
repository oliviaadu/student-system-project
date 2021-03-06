import React from "react";

class StudentList extends React.Component{
	handleDelete(){
		this.props.onDelete(this.props.whichItem);
	}

	render(){
		return(
			<li className="pet-item media">
				<div className="media-left">
					<button classname="pet-delete btn btn-xs btn-danger" onClick={this.handleDelete}>
						<span className="glyphicon glyphicon-remove"></span>
					</button>
				</div>
				<div className="pet-info media-body">
					<div className="pet-head">
						<span className="pet-name"> {this.props.singleItem.petName} </span>
						<span className="apt-date pull-right"> {this.props.singleItem.aptDate} </span>
					</div>
					<div className="owner-name">
						<span className="label-item"> Owner: </span>
						{this.props.singleItem.ownerName}
					</div>
					<div className="apt-notes"> {this.props.singleItem.aptNotes} </div>
				</div>
			</li>
		) //return
	} //render
}; //StudentList

export default StudentList;
