var CommentForm = React.createClass({
	render: function(){
		return (
			<form class="commentForm">
			<input type="text" placeholder="Your Name" />
			<input type="text" placeholder="Say something…" />
			<input type="submit" value="post" />
			</form>
		)
	}
})