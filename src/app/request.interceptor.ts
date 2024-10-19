import { HttpHandler, HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const RequestInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Request Interceptors', req);

  if (req.method === 'POST') {
    const newRequest = req.clone({ headers: new HttpHeaders({ 'token': '136423647dfh234' }) })
    return next(newRequest);
  }
  return next(req)
};
