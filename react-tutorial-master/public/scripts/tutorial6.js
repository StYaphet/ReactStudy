var Comment = React.createClass({
	render:function  () {
		// 第三方库：remarkable
		var md = new Remarkable();
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				<h2>
				// takes Markdown text and converts it to raw HTML.
				{md.render(this.props.children.toSting())}
			</div>
		);
	}
});