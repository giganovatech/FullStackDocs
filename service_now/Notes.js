/*
Form Design
Form Layout
List Layout

Notifications
Access Controls
ATF (Automated Test Framework)
Process Automation (Flow Designer)
Workflows
Catalog Client Scripts
Scripted Audit (Compliance)
Dictionary Entries
*/



/*
Business Rules 
- Scripts that act as database triggers. Business rules run whenever a record is inserted, updated, deleted or when a query is run against the table.

- https://devportaldocs.service-now.com/dev.do#!/learn/courses/tokyo/app_store_learnv2_scripting_tokyo_scripting_in_servicenow/app_store_learnv2_scripting_tokyo_server_side_scripting/app_store_learnv2_scripting_tokyo_business_rules
- https://blog.snowycode.com/post/what-is-a-business-rule-in-servicenow
*/

/*
Script Includes
- Allows you to create resusable code such as classes, utility functions, libraries, etc.

- https://www.linkedin.com/pulse/what-script-include-oskar-mizgier-wixaf
*/

/*
Data Policies 
- Force a field to meet a condition by rejecting a database operation if necessary, indedepent of source ie user entry, scripts, etc.

- https://developer.servicenow.com/dev.do#!/learn/courses/washingtondc/app_store_learnv2_scripting_washingtondc_scripting_in_servicenow/app_store_learnv2_scripting_washingtondc_data_policies/app_store_learnv2_scripting_washingtondc_using_data_policies
- https://therockethq.gitbooks.io/servicenow1/content/index/index/fundamentals/fundamentals-concepts/scripting/ui-data-policy.html


*/

/*
UI Policies 
- Same as Data Policies except they only work at the browser level and therefore before the data is submitted to the instance.

- https://blog.snowycode.com/post/what-is-a-ui-policy-in-servicenow
*/

/* 
UI Actions
- UI Actions are UI elements that can show up on a form or a list as a button, link, or context menu. UI Action Types: 
Form Banner Buttons - Buttons that show up at the top right of the form.
Form Bottom Buttons - Same as Form Banner Buttons except they show up at the bottom left of the form.
Form Links - Presented underneath the form with a title named Related Links.
Form Context Menus - These show up when you right-click on the form header or use the Additional Actions menu button.
List Links - Displayed the same as Form Links except are visible in the List Layout.
List Banner Buttons - Show up at the top right of a list and generally apply to selected records. The New button is an example of a list banner button.
List Bottom Buttons - Same as List Banner Buttons except they show up at the bottom left of the list.
List Choices - These show up in the drop-down menu of a list.

- https://servicenowguru.com/ui-actions-system-ui_client-server-code-ui-action/
*/

/* 
Client Scripts
- Allows developers to execute JavaScript in the web browser when various actions occur in the system. They are basically a way to control, via scripting, the behavior of fields on forms or lists that are presented to the end user. Client scripts have access to the client-side GlideUser (g_user) and GlideForm (g_form) classes. Both these classes are essential to working with client scripts. They run on 4 different scenarios: onChange, onLoad, onSubmit and onCellEdit.

- https://blog.snowycode.com/post/what-is-a-client-script-in-servicenow
- https://medium.com/@gabrielfordan/mastering-client-scripts-in-servicenow-a-definitive-guide-d2610f5f3d11

*/

/* 
Scheduled Jobs
- A scheduled job in ServiceNow is an action (usually a script) that is executed, based on a schedule.


- https://thesnowball.co/how-to-create-a-recurring-task-use-scheduled-jobs/

*/

/*
Script Actions
-   Script Actions are pieces of server-side code that are associated with a table and run against a record, just like a Business Rule. But instead of being triggered by a database action, a Script Action is started with an event.

- https://service-nerd.com/what-is-a-script-action-in-servicenow-servicenow-script-action-basics/
*/

/*
Fix Scripts
    - A fix script is server-side JavaScript code that you run after an application is installed or upgraded.

    - https://devportaldocs.service-now.com/blog.do?p=/post/training-fixscripts/
    - https://sn-nerd.com/2021/05/02/fix-script-vs-background-script-which-is-the-better-choice/
*/