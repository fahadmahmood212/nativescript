import Vue from 'nativescript-vue';
import Homepage from './components/App';

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new Vue({

    template: `
        <Frame>
            <Homepage />
        </Frame>`,

    components: {
        Homepage
    }
}).$start();
