import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import clevertap from 'clevertap-web-sdk';

clevertap.init('YOUR_ACCOUNT_ID'); 
clevertap.setLogLevel(3)

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
