# Try Apollo client 2.0

> Experiment from 2017

This is a small project that intends to test Apollo client 2.0.

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

## Roadmap

### Stage 0

- Setup Apollo Client.
- Simple call on Github GraphQL endpoint.
- Display a list with fetched data.

### Stage 1

- Create a wrapping component to handle list display depending on data loading.
- Update files architecture into queries and components.

### Stage n

**Read**:
- Store lists queries variables into configuration file.
- Generate lists components from configuration file.
- Display same resource into different components.
- Add style on list components.

**Write**:
- Add form to add queries variables into configuration file.
- Add simple mutation (add label? update title?)

## Resources

- [Create React App](https://github.com/facebookincubator/create-react-app)
- [Apollo Client 2.0](https://www.apollographql.com/docs/react/index.html)
- [Use a Render
  Prop](https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce)
- [Github GraphQL explorer](https://developer.github.com/v4/explorer/)
