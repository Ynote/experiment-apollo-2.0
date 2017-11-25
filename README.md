# Try Apollo client 2.0

This is a personnal experiment to try Apollo client 2.0.

## Requirements

- [Github personnal access token for this
  app](https://github.com/settings/tokens)

## Usage

- Clone the repository:
```
git clone git@github.com:Ynote/try-apollo.git
```

- Update the application namescope in `src/config/app.js`

- Set your app personal configuration in `localStorage` directly in the browser
  console:

```js
var config = { github: { token: 'your-github-token' } }

localStorage.setItem('your-app-namescope', config)
```

- Start the app:
```
yarn start
```

- Open [http://localhost:3000/](http://localhost:3000/) to see the app.

## Resources

- [Create React App](https://github.com/facebookincubator/create-react-app)
- [Apollo Client 2.0](https://www.apollographql.com/docs/react/index.html)
- [Use a Render
  Prop](https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce)
