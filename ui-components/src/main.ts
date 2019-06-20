import {enableProdMode} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {environment} from "./environments/environment";
import {DocsModule} from "./docs/docs.module";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(DocsModule)
  .catch(err => console.log(err));


// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//
// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';
//
// if (environment.production) {
//   enableProdMode();
// }
//
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));
