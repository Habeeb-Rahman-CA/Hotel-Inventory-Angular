import { APP_INITIALIZER, ApplicationConfig, ErrorHandler, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { RequestInterceptor } from './request.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouteConfigToken } from './services/routeConfig.service';
import { GlobalErrorHandler } from './errorhandler.service';
// import { InitService } from './init.service';

// function initFactory(initService: InitService) {
//   console.log(initService);
// }

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  provideHttpClient(withInterceptors([RequestInterceptor])),
  provideAnimationsAsync(),
  { provide: APP_SERVICE_CONFIG, useValue: APP_CONFIG },
  { provide: RouteConfigToken, useValue: { title: 'Home' } },
  { provide: ErrorHandler, useClass: GlobalErrorHandler },
  ]
}
