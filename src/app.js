const Ractive = require('Ractive');

// removing the wrapping <div> fixes the issue
const dashboard = Ractive.extend({
  template: `
  <div>
    {{#with { example: true } }}
      <h1 decorator="tooltipDecorator">This is decorated</h1>
    {{/with}}
  </div>
  `,

});


/**
 * Main application component
 */

const Application = Ractive.extend({
  template: `
<p>Open the console.</p>
<button on-click="setPage:'dashboard'">Click here to set up decorator</button>
<button on-click="setPage:'welcome'">This should console.info('Teardown')</button>

{{#if route.page === 'dashboard'}}
  <dashboard/>
{{else}}
  <h1>Welcome</h1>
{{/if}}
`,

  decorators: {
    tooltipDecorator: function TooltipDecorator() {
      console.info('Decorated')

      return {
        teardown: () => {
          console.info('Teardown');
        },
      };
    }
    ,
  },

  data: () => ({
    route: {
      page: 'welcome',
    },
  }),

  oninit() {
    this.on('setPage', (e, page) => {
      this.set('route.page', page);
    });
  },
});


const app = new Application({
  components: {
    dashboard,
  },

});


/**
 * Render application
 */
app.render('#application')


