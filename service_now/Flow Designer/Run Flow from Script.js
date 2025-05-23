// Documentation: https://service-nerd.com How to trigger a subflow from a script?

/*
Server side:
    FlowAPI => 
    ScriptableFlowRunner =>

Client side:
    Make individual flows, subflows or actions available - client callable
    GlideFlow

Server Side: (FlowAPI is replaced by ScriptableFlowRunner)
    Access using sn_fd name space
    Synchronous methods: 
        FlowAPI: sn_fd.FlowAPI.executeFlow(name, inputs)
        ScriptableFlowRunner: sn_fd.FlowAPI.getRunner().flow(name).inForeground()

    Asynchronous methods:
        FlowAPI: sn_fd.FlowAPI.startFlow(name, inputs)
        ScriptableFlowRunner: sn_fd.FlowAPI.getRunner().flow(name).inBackground()
*/



(function() {
	
	try {

		// Start Asynchronously: Uncomment to run in background.
		// sn_fd.FlowAPI.getRunner().flow('global.utps_active_boc_tracker').inBackground().run();
				
		// Execute Synchronously: Run in foreground.
		sn_fd.FlowAPI.getRunner().flow('global.utps_active_boc_tracker').inForeground().run();
		
	} catch (ex) {
		var message = ex.getMessage();
		gs.error(message);
	}
})();