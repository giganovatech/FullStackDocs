// nil() function. All of these checks can also be handled by using the if statement and a logical NOT operator such as if(!x).

GlideElement - nill()
// Determines if the field is null, applicable only to the elements of glideRecord object.
// Returns true if the field is null or an empty string, false
// The downside is, this method can not apply to native javascript variables.
var gr = new GlideRecord('incident');
gr.query('priority', '1');
gr.next();
gs.info(gr.state.nil());
 


GlideSystem - nil(Object);
// Queries an object and returns true if the object is null, undefined, or contains an empty string.
// Returns, True if the object is null, undefined, or contains an empty string; otherwise, returns false.
// This method can be used on native javascript objects, for example, if you're passing an object to a function as a parameter, you would like to ensure the object is not empty and not null, you could use this method.
var gr = new GlideRecord();
gs.info(gs.nil(gr));



JSUtil - nil(object)
// Checks if an item is null, undefined, or evaluates to the empty string.
// Returns True if the item is null, undefined, or evaluates to the empty string.
var x = "the quick brown fix";
var y = "";
var z ;
gs.print("x = '" + x + "', JSUtil.nil(x) = " + JSUtil.nil(x));
gs.print("y = '" + y + "', JSUtil.nil(y) = " + JSUtil.nil(y));
gs.print("z = '" + z + "', JSUtil.nil(z) = " + JSUtil.nil(z));




// 