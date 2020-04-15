'use strict';

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const { App } = require('jovo-framework');
const { Alexa } = require('jovo-platform-alexa');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { JovoDebugger } = require('jovo-plugin-debugger');
const { FileDb } = require('jovo-db-filedb');
const { getSuggetion }  = require('./requestHelper');
const app = new App();

app.use(
    new Alexa(),
    new GoogleAssistant(),
    new JovoDebugger(),
    new FileDb()
);


// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({
    LAUNCH() {
        return this.toIntent('HelloWorldIntent');
    },

    HelloWorldIntent() {
        this.ask('Hello World! What\'s your name?', 'Please tell me your name.');
    },

    MyNameIsIntent() {
        this.ask('Hey ' + this.$inputs.name.value + ', welcome to cloud assistant!How can I help you');
    },

    DeploymentStartIntent() {
        this.ask('tell me the project you want to deploy?')
    },

    async DeploymentTriggerIntent() {
        await getSuggetion(this.$inputs.project.value)
        this.tell('build started for'+ this.$inputs.project.value)
    }

});

module.exports.app = app;
