// state 介绍:
// props are immutable: they are passed from the parent 
// and are "owned" by the parent. To implement interactions, 
// we introduce mutable state to the component. 
// this.state is private to the component 
// and can be changed by calling this.setState(). 
// When the state updates, the component re-renders itself.


var CommentBox = React.createClass({
	// getInitialState() executes exactly once 
	// during the lifecycle of the component 
	// and sets up the initial state of the component.
	getIntialState: function  () {
		return {data: []};
	},
	render: function  () {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data} />
				<CommentForm />
			</div>
		);
	}
});