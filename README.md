# Sample Custom Front Plugin

Through Front's Plugin API, developers can build Custom Plugins in Front which can read, manipulate, and communicate with conversation data in Front.

This is a simple example plugin with a mocked CRM service with fake data to show how a very simple Front Custom Plugin could provide value by bringing your own data into context for conversations. If you want to test it directly, go to Settings > Plugins and API > Plugins and add a new plugin with `https://frontapp.github.io/plugin.html` as the endpoint. You should see a plugin appear in your integration side panel like this:

![Front Sample Plugin](/frontSamplePlugin.gif)

You can use this sample as a starting point to begin developing, but you must host the plugin yourself and include our library. You may use any framework or library you wish, just add `<script type="text/javascript" src="//dl.frontapp.com/libs/plugin-sdk-1.0.1.min.js"></script>`. We used VanillaJS/HTML/CSS for simplicity.

For more information about Front's Plugin API, visit the documentation here: https://dev.frontapp.com/plugin.html
