Create a `.env` file with the following if you want to use the local database.


```
DATABASE_URL=file:dev.db
```

Make sure you have the latest Node.js LTS and NPM installed, then run `npm install` to install dependencies.

```bash
npm install
```

## Developing

Start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
