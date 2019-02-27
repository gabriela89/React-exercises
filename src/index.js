import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyApp from './components/MyInfo';
//JSX
// ReactDOM.render(<div><h2>Hello World!</h2><p>This is a usual paragraph ...</p></div>, document.getElementById('root'));

ReactDOM.render(
<MyApp />, document.getElementById('test'));

var myNewSpan = document.createElement('span')
myNewSpan.innerHTML = "This is a span.."