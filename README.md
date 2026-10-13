# test-hosting-toy-api

Learning how to host nodejs api built with express on heroku. test hosting toy api is an application containing JavaScript. The checked-in dependency manifests use Express. The repository layout and entry points below describe the checked-in implementation.

## Repository layout

- `index.js` — source file.

## Local setup

Run each package setup block from the repository root. For workspace repositories, install dependencies at the root before running application-specific scripts.

Clone this repository and enter its directory:

```sh
git clone https://github.com/stanleyHayes/test-hosting-toy-api.git
cd test-hosting-toy-api
```

### Node package: `package.json`

Use Node.js and npm (14.2.0 declared in the manifest).

```sh
npm install
```

- `npm run dev` — runs the declared `dev` script (`nodemon`).
- `npm run start` — runs the declared `start` script (`node index.js`).

## Source entry points

- [index.js](index.js)

## Development notes

Commands above come from the tracked manifests and source layout. External services and runtime configuration may be required. Documentation updates do not establish that the application is deployed or that its tests pass.
