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

## Webpack setup :

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
