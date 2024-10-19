import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { RequestInterceptor } from './request.interceptor';
import { InitService } from './init.service';

function initFactory(initService: InitService) {
  return () => initService.init()
}

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(withInterceptors([RequestInterceptor])), {
    provide: APP_SERVICE_CONFIG,
    useValue: APP_CONFIG
  }
    , {
    provide: APP_INITIALIZER,
    useFactory: initFactory,
    deps: [InitService],
    multi: true
  }
  ]
}
