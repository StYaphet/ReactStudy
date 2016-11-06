
// We pass some methods in a JavaScript object to 
// React.createClass() to create a new React component.
// The most important of these methods is called render 
// which returns a tree of React components that will eventually render to HTML.
var CommentBox = React.createClass({
	render: function(){
		return (
			<div class="commentBox">
			 Hello,world!, I'm a CommentBox.
			</div>
			// 通过一个简单的预编译器将这种类XML的语法糖转化为纯JavaScript表示
			// 转化为JavaScript如下：
			// React.createElement('div', {className: "commentBox"},
        "Hello, world! I am a CommentBox."
      )
		);
	}
});

// The first thing you'll notice is the XML-ish syntax in your JavaScript. 
// We have a simple precompiler that translates the 
// syntactic sugar to this plain JavaScript
// 上面的<div class>也会被转换为JavaScript的表示


// ReactDOM.render() instantiates the root component, 
// starts the framework, and injects 
// the markup into a raw DOM element, provided as the second argument.
// 		
//    Note: ReactDOM.render should only be called after the composite components have been defined.
ReactDOM.render(
	<CommentBox />, // root component
	document.getElementById('content') // 插入的原始 DOM 元素
	// 转化为JavaScript代码如下：
	// React.createElement(CommentBox, null),
	
)