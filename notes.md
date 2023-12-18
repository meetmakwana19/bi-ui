## Issues :

### 1. Venus styling not getting applied

- Need to import the Venus CSS explicitly like for example import it in the `App.tsx` or `App.css`

```js
import "@contentstack/venus-components/build/main.css";
```

### 2. Font style not getting applied in ViteJS React project

- It happens because ViteJS needs that css @import statements must precede but in the css build file at `node_modules/@contentstack/venus-components/build/main.css` is not at the top of the file.
- So had to navigate in that file and copy that google fonTS url and paste it in the HTML head link tag.
- Had to import 'Inter' & 'IBM' fonts URL by copy pasting the url from node_modules to the `index.html`.

### 3. Making a build of the project :

1. On initial `npm run build`, many typescript errors can be thrown of unused variable. Therefore change `noUnusedLocals` to false in the `tsconfig.json` file.

```js
    "noUnusedLocals": false,
```

2. Then run the following command for a successful build process.

```bash
npm run build
```

3. Then we would need to serve the `index.html` which got built with the `/dist` folder. Use either of the following commands :

```
npm run preview
```

or

```
npx serve -s dist
```

## Migration into ui-react

1. In `routes.tsx`, created 2 routes under MicroAppsWrapper. One for home endpoint and other for handling subroutes.
2. Created 6 intelligencehubRoutes subroutes and individual Loadable components for each subroute.
3. Major change in `SideNav`: Replaced the existng onClick's navigation with a `link` property with `#!` based url.
4. For routing to form pages, used `history.replace()` instead of `history.push()` in the template files for the modal's onClicks.
5. Carefully changed the navigation url without `#!` in the modal files.
6. For backNavigation from the forms, directly navigated to a hardcore url due issues coming in `go(-1)`, `goBack()`......

---

## Changes in project to set it up for the micro-frontend : 

1. First of all in the main entry point file of the project ie. `main.tsx`, we need to write a render function on the window function like `window.renderIntelligenceHub`.
2. Changes in the vite config file to generate a umd type of bundle along with generating a single js bundle file which can have css injected into it.
  
---

## Building bundle of vite app :

1. Run the build command to generate a `/dist` folder 
```
npm run build
```
2. Serve the build file using :
```
npm run preview
```
3. Open the url in browser and give the javascript bundle's path from the dist folder into the URL like `http://127.0.0.1:4173/assets/main-273a9c4c.js`
4. Use the above url in the constants file of the ui-react.
5. Following error was prevalent :
```
SyntaxError: Unexpected token 'export'
    at eval (<anonymous>)
    at IntelligenceHub.eval (index.tsx:82:16)
```
6. So the meaning of the error is that the js bundle is not compatible with ui-react coz of the `exports, imports` which ES Modules system. We need to expose the bundle in commonJS form of `module.exports`.
7. This would need changes in the `vite.config.ts`
   1. Initial issues faced : 
      1. Adding umd format to the config will cause no css bundle generation.
      ```
      export default defineConfig({
        plugins: [react()],
        build: {
          rollupOptions: {
            output: {
              format: "umd",
            },
          },
        }
      })
      ```
      2. So gave `cssCodeSplit: false` key since if it's disabled, all CSS in the entire project will be extracted into a single CSS file. from https://vitejs.dev/config/build-options#build-csscodesplit
8. If `window.process` is commented from the `index.html` then 
   1. the app doesnt load in both **dev mode** & **prod mode** 
   2. but the build file serves to ui-react. 
   3. no separate CSS bundle is built.
   4. In dev mode following errors appears : 
   ```
   Uncaught ReferenceError: process is not defined
   ```
   ```
   Uncaught TypeError: window.renderIntelligenceHub is not a function
    at HTMLDocument.<anonymous>
   ```
   But the above errors disappears when it is not commented.
   5. In prod built mode following errors appears :
   ```
   Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "default-src 'none'". Note that 'script-src' was not explicitly set, so 'default-src' is used as a fallback.
   ```
   Also the following error because index.html is not generated :
   ```
   Failed to load resource: the server responded with a status of 404 (Not Found)
   ```
9. Following are the few links which were looked into :
> https://github.com/vitejs/vite/discussions/6636
> 
10. But finally the following config worked and had to use `cssInjectedByJsPlugin` along with umd format 
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    rollupOptions: {
      input: "src/main.tsx",
      output: {
        format: "umd",
      },
    },
    cssCodeSplit: false,
  }
})

```
11. Also in the output key, `entryFileNames` can be used to output the bundle of specific name like :
```js
      output: {
        format: "umd",
        entryFileNames: "app.bundle.js"
      }
```

---

## Learnings :

1. Never use `/` in the `navigate()` function of react-router-dom. 
```
navigate("brand-voice") will leave to http://127.0.0.1:5173/projects/123456789/brand-voice

navigate("/brand-voice") will leave to http://127.0.0.1:5173/brand-voice
```
2. Use that `/` in the switch case matching conditions like `case "/user-tone":`
3. Parent (ui-react) uses 'Hashrouter'.
4. Passing of history prop in the highest level of Router used in `main.tsx` to wrap the App component in essential to maintain the hashed routing with the parent ui-react.

## Major change due to `react-router-dom` v6 :

1. The requirement is to pass a `history` prop whose value is generated from `createBrowserHistory()` like the following :
```js
              <Router history={history}>
                <App microAppsObj={microAppsObj} />
              </Router>
```
so that the history passed from the parent(ui-react project) can be accessed over here in my micro-app(micro-frontend) attached to the parent via a js bundle. 
2. But the above code was in the react-router-dom v5 of other micro-apps. We are using v6 now which doesn't has `<Router>` as the highest level of router thus we tried using `BrowserRouter`  in our new microapp :
```js
      <BrowserRouter history={history}>
        <App microAppsObj={microAppsObj}/>
      </BrowserRouter>
```
3. But the above code of v6 gave the following error : 
```
Type '{ children: Element; history: History; }' is not assignable to type 'IntrinsicAttributes & BrowserRouterProps'.
  Property 'history' does not exist on type 'IntrinsicAttributes & BrowserRouterProps'.ts(2322)
```
4. So following this error, a comment on S/O's [question](https://stackoverflow.com/q/69948150) was that 
> Router components no longer take a history object in v6.x. You should also instead now use one of the higher level routers, i.e. BrowserRouter, etc.
5. Needed to find some way so that the routing of my microapp can have access to the parent's histroy but this github [discussion]([https://](https://github.com/remix-run/react-router/discussions/8241#discussioncomment-1677474)) wasn't helpful either even after trying the custom 'HistoryRouter' approach.
6. This one question at [S/O]([https://](https://stackoverflow.com/q/74768328)) was the one I needed but the answers weren't suitable for my usecase. 
7. A comment at this [question]([https://](https://stackoverflow.com/q/70788581)) was saying about making a custom Router component but doing that didn't helped either.....

## Routers :


- SERVER SIDE: HashRouter uses a hash symbol in the URL, which has the effect of all subsequent URL path content being ignored in the server request (ie you send "www.mywebsite.com/#/person/john" the server gets "www.mywebsite.com". As a result the server will return the pre # URL response, and then the post # path will be handled (or parsed) by your client side react application.

- CLIENT SIDE: BrowserRouter will not append the # symbol to your URL, however will create issues when you try to link to a page or reload a page. If the explicit route exists in your client react app, but not on your server, reloading and linking(anything that hits the server directly) will return 404 not found errors.

> https://stackoverflow.com/questions/51974369/what-is-the-difference-between-hashrouter-and-browserrouter-in-react
---

(Can ignore)

## About Webpack :

- Must have `/dist` and `/src` folders in the project
- Install `webpack` and `webpack-cli` using

```
npm i webpack webpack-cli --save
```

- A default file for configuration of webpack would be needed to create ie. `webpack.config.js`
- For simple bundling we can simple pass the webpack command in the package.json build script like :

```
"build": "webpack"
```

- To give some custom file rather than the default `webpack.config.js` file, use the `--config` flag in the script.

```
"build": "webpack --config custom.js"
```

- For different modes like "development", "production", "testing" mentioned in the `webpack.config.js` file, there will be different bundles built with very different bundle files.
- By default the entry point for the bundler to create a bundle would be `src/index.js` and the resulting output file by default will be `dist/main.js`.
- Install `webpack-dev-server` package which will help us in uninterrupted created of bundle files on the go when we are developing with frequent changes.
  - So write a start script for like
    ```
    "start": "webpack-dev-server --mode development --open
    ```
  - To serve a specific build 
    ```
    "start": "webpack-dev-server --mode development --open --config config.dev.js 
    ```
- Bundler cant directly use CSS files for building bunndles so we need another packages or loaders to let that work.

```
npm i --save-dev style-loader css-loader
```

- These loaders configuration would be placed inside the `module` key of the webpack config file. It has a `rule` object whose value is always an array of objects.

```js
  module: {
    rules: [
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
```
