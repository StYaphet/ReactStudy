var CommentForm = React.createClass({
	getInitialState: function() {
		return {author: '', text: ''};
	},
	handleAuthorChange: function(e) {
		this.setState({author: e.target.value});
	},
	handleTextChange: function(e) {
		this.setState({text: e.target.value});
	},
	handleSubmit: function(e) {
		e.preventDefault();
		var author = this.state.author.trim();
		var text = this.state.text.trim();
		if(!text||!author) {
			return;
		}
		// TODO: send request to the server
		this.setState({author:'',text:''});
	}
	render: function() {
		return(
			<form className="commentform" onSubmit={this.handleSubmit}>
			<input type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange} />
			<input type="text" placeholder="Say something…" vaule="{this.state.text} onChange={this.handleTextChange} />
			<input type="submit" value="Post" />
			</form>
		);
	}
});