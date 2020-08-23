import {  InjectionToken } from '@angular/core';


export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export class AppConfig {
  apiEndpoint: string;
}

export const APP_DI_CONFIG: AppConfig = {
  apiEndpoint: 'https://glacial-escarpment-40412.herokuapp.com'
};