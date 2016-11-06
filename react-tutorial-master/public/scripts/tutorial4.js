var Comment = React.createClass({
	render: function  () {
		return (
			// By surrounding a JavaScript expression in braces inside JSX 
			// (as either an attribute or child), you can drop text or React components into the tree. 
			// We access named attributes passed to the component as keys on this.
			// props and any nested elements as this.props.children.
			<div className="comment">
			<h2 className="commentAuthor">
				{this.props.author}
			</h2>
			{this.props.children}
			</div>
		);
	}
});