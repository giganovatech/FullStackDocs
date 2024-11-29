// Access client state parameter.
var parameter_var = api.state.client_state_parameter_name;

// Get current user sys_id.
var current_user_sys_id = api.context.session.user.sys_id;

// How to execute data resource to update a record in a table.
var encoded_query = 'assigned_to=' + user + '^short_description=' + inputText;
api.data.name_of_data_resource.execute({
    "table": "name_of_table",
    "templateFields": encoded_query,
    "useSetDisplayValue": false
});

// Set client state parameters.
api.setState('client_state_parameter_name', 'Any value');

// Access the value of a required or optional page parameter.
var page_property = api.context.props.page_property_name;

// Access available session properties like the logged in user’s sys_id, roles, timezone, etc.
var session_property = api.context.session.session_property_name;


// Triggers an execute operation on a data resource that mutates data, most commonly the create or update data resources.
api.data.name_of_data_resource.execute(inputValuesObject);

// Triggers a refresh operation for the specified non-mutating data resource instance. This method is asynchronous and emits an internal event to trigger the refresh of the specified data resource instance.
api.data.name_of_data_resource.refresh();

// Emits an event with the specified name and payload. Note that the event being emitted must be part of the associated page definition’s dispatched events list.
api.emit('EVENT_NAME', payloadObject);
//ie
const modal_payload = {
    "modalID": "[component-id$='alert_2']",
    "showModal": true,
    "displayOptions": null
}
const OPEN_MODAL = 'MODAL_SELECTED';
api.emit(OPEN_MODAL, modal_payload);

// Imports a client script include into your client script. Note that you also have to include it in the details page to the left of the script.
imports['Client_script_include_ API_Name']();


// Print entire api object to console.
 console.log('API: ' + JSON.stringify(api));
