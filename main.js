import { createElement, Component, render } from './toy-react'

class MyComponent extends Component {
    render() {
        return <div>
            <h1>aj's component</h1>
            {this.children}
        </div>
    }

}

render(<MyComponent id="a" class="c">
    <div>hello</div>
    <div>hi</div>
    <div>are you ok</div>
</MyComponent>, document.body);