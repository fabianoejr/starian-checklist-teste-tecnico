import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptorFn: HttpInterceptorFn = (req, next) => {
  const token = 'fqyBlvV9r9cggWufad0Ar8MqMLUseZKk';
  const authReq = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  return next(authReq);
};
