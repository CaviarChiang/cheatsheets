# Component Architecture

Single responsibility  
Gather brains in the higher hierarchy: more stupid  
components than smart ones  

# Component Lifecycle

`componentDidMount` triggered directly after `render`  
`componentWillUpdate` triggered right before the cmp has been updated  
`componentDidUpdate` triggered directly after the cmp has been updated  

# State & Prop

State: private, cmp can change its own states  
Props: shared between cmps, cmp cannot change props directly themselves (should *never modify props*)

Need a `constructor` method in order to init the state  
Pass down states to children, the data becomes props

The only way to modify the state is through *`setState`*s  
Whenever the state changes the component will be *re-rendered*

Inverse data flow:
  - pass down *method* from parent to child as *props*

# Functional Component

Cmps that don't have states or lifecycle hooks besides `render` (no `this`)

# Full Controlled Component

State/Value change goes full circle
  - value change resets state
  - reset value based on state

```js
handleChange(e) {
  this.setState({
    message: e.target.value;
  });
}
```
<input value={this.state.message}
       onChange={this.handleChange}
       type="text"
/>

# Events

`onChange` and `onSubmit` are react event listeners  
To use `this` in event handlers, bind handlers with `this` in `constructor`

# TODOs

Add OnlineUsers cmp  
Add typing indicators


