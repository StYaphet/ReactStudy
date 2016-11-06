var CommentBox = React.createClass({
	loadCommentsFromServer: function  () {
		$ajax.({
			url: this.props.url,
			dataType: 'json',
			cache: false;
			success: function  (data) {
				this.setState({data: data});
			}.bind(this),
			error: function  (xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	// getInitialState() executes exactly once during the lifecycle of the component and sets up the initial state of the component.
	getIntialState: function  () {
		return {data: []};
	},
	// componentDidMount is a method called automatically by React after a component is rendered for the first time.
	componentDidMount: function  () {
		// 调用 loadCommentsFromServer 方法从服务器取数据
		// loadCommentsFromServer中成功的取回数据来回调用this.setState方法，re-render self
		// 
		// 然后每两秒调用一次（从服务器取数据）
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	},
	render: function  () {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data="this.state.data" />
				<CommentForm />
			</div>
		);
	}
});

React.render(
	<CommentBox url="/api/comments" pollInterval={2000} />,
	document.getElementById('comment')
);
