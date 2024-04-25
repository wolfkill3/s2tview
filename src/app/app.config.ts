import { ApplicationConfig } from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding())]
};

// export const BASE_URL: string = "http://sdg-hdp-master1.bankspb.ru:40000/";
export const BASE_URL: string = "http://localhost:8080/";
