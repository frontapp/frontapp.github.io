# frontapp.github.io
Front's developer resources

# Getting started
Front supports plugins. A plugin is a small web application that can communicate with Front using a JavaScript API. It allows you to extend Front with new features, making it possible to connect it with other tools you use and optimize the workflow of your team:

+ Show additional data about your customers, that you can pull from your backend, your knowledge or any other source.
+ Take actions directly inside Front on behalf of the user so you can automate a workflow.
+ Link or create entries in your CRM, your knowledge base or any other tool.

![Frontapp Plugin Demo](https://www.filepicker.io/api/file/562i7pXVTbun3NlvVA2Q, "Plugin Demo")

# Plugin demo
You can use any web framework or library you wish: it's just a web page that can communicate with Front. It has to be hosted on your servers and [include our library] (http://dl.frontapp.com/libs/frontjs.min.js):

You can define the location of your plugin in the settings:


Plugin settings

>#HTTPS
>At the moment, your plugin has to be hosted on an HTTPS domain. You can use [https://ngrok.com/](https://ngrok.com/) if you want to quickly serve a local development server over HTTPS.

You can find the documentation for this library here : 
  - [Controlling Front from your Plugin](http://docs.frontapp.com/v1.0/docs/plugins-controls) 
  - [Getting updates from Front in your plugin](http://docs.frontapp.com/v1.0/docs/plugins-events) 
  - [Dialogs](http://docs.frontapp.com/v1.0/docs/plugins-dialogs)
  - [Accessing Front's data](http://docs.frontapp.com/v1.0/docs/plugins-data) 

We also provide a small sample plugin that shows some basic things you can do using our Javascript API. You can check the code [here](https://github.com/frontapp/frontapp.github.io/).
If you want to test directly, you can even target https://frontapp.github.io/plugin.html in your plugin settings to see what the basic plugin can do.

If you need any help in getting your plugin working, would like more information or a new feature please drop us a line at team@frontapp.com we will be happy to help.

# Troubleshooting
First, don't hesitate to ask team@frontapp.com for help :). Then, you can activate Web Inspector by this command in Terminal (restart the app):

<code>
defaults write com.frontapp.Front WebKitDeveloperExtras -bool true</code>

Then, right-click anywhere in the app and select "Inspect Element".