// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB7LaGHqBaQxmapkSAxnqTcW6kReHhutHc",
    authDomain: "skoleruter.firebaseapp.com",
    databaseURL: "https://skoleruter.firebaseio.com",
    projectId: "skoleruter",
    storageBucket: "skoleruter.appspot.com",
    messagingSenderId: "621434787905"
  }
};