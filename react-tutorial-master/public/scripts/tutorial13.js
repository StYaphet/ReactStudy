var CommentBox = React.createClass({
	getIntialState: function  () {
		return {data: []};
	},
	// componentDidMount is a method called automatically by React 
	// after a component is rendered for the first time.
	componentDidMount: function  () {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function  (data) {
				// The key to dynamic updates is the call to this.setState(). 
				// We replace the old array of comments with the new one from the server 
				// and the UI automatically updates itself.
				this.setState({data});
			}.bind(this),
			error:function  (xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
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