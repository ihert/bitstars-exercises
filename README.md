# Coding tasks

## function “getMaxTime(array)”
```javascript
function getMaxTime( array ) {

    return Math.max.apply(
    	this, 
    	array.map(function(obj){
        	return obj.time;
    	})
    );
}
```
## ./rest-client
There is implemetion of task 2 and 3(RESTful client on Backbone.js with Bootstrap).

## ./threejs-demo
Help:
  1. Add new object
  2. Select the object 
  3. in menu "object action" you cann rotate or move selected object
  4. to load model drag *.dae file in to the window and drop

