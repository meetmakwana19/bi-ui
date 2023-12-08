## Issues :

### 1. Venus styling not getting applied 

- Need to import the Venus CSS explicitly like for example import it in the `App.tsx` or `App.css` 
```js
import "@contentstack/venus-components/build/main.css"
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

## Downgrading :

1. Change versions of react, react-dom to 16 and react-router-dom to 5. 
2. Replace useNavigation hook with useHistory hook and use the following code to avoid changing the already widely used variable `navigate`.
```
  const histroy = useHistory();
  const navigate = (path: any) => {
    // react-router-dom v6 syntax :
    histroy.push(path);
  }
```
3. Keep using useLocation hook.
4. Remove the use of `Outlet` of the react-router-dom.
5. Make routing structure for version 5 like :
```
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
```
```js
export default funtion Layout(){
  return(
    <Router history={histroy}>
      <Switch>
        <Route path="/" component={MainLayout} />
        <Route path="/" render={() => <BrandVoice />} />
      </Switch>
    </Router>
  )
}
```
