// GlideDateTime()
// Reference: https://developer.servicenow.com/dev.do#!/reference/api/tokyo/server/c_APIRef




// Instantiates a new GlideDateTime object with the current date and time.
var gdt = new GlideDateTime();
gs.info("Current datetime: " + gdt);
// Output: Current datetime: 2022-08-08 16:51:44




// Get the current date only.
var current_date = new GlideDateTime().getDisplayValue();




