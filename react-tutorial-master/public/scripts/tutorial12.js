var CommentBox = React.createClass({
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