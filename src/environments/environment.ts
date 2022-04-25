// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCjadLff3rK-uL-cgHcNguJRR9ef-VA3Ds",
    authDomain: "login-demo-app-backend.firebaseapp.com",
    projectId: "login-demo-app-backend",
    storageBucket: "login-demo-app-backend.appspot.com",
    messagingSenderId: "70807447403",
    appId: "1:70807447403:web:c9e1737e3b999c46478e2e"
  },
  apiRoot: 'localhost:3000'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
