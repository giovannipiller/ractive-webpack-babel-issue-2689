# How to reproduce

Github issue: https://github.com/ractivejs/ractive/issues/2689

- Clone the repository and `npm install`.
- Run `npm run dev`.
- Open public/index.html using any browser
- Open the console and click the first button "Click here to set up decorator"
- A message should appear "Decorated"
- Now click on "This should console.info('Teardown')"

**EXPECTED:** console.info("Teardown") should appear in the console

**ACTUAL:** nothing gets displayed. Decorator's teardown is not called.


**Note:** unwrapping the `{{#with}}` from `dashboard` component will result in the expected result:

**Note 2:** commit 667c490c55505b208708a3112eedb890fed7c476 is hardcoded in package.json

```
{{#with { example: true } }}
  <h1 decorator="tooltipDecorator">This is decorated</h1>
{{/with}}
```
dashboard's template
