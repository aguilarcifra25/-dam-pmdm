import { HttpInterceptorFn, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const apiKeyInterceptorInterceptor: HttpInterceptorFn = (req, next) => {

  if (!req.url.startsWith("https://api.themoviedb.org/3") && !!req.url.startsWith("https://api.openweathermap.org/data/4.0")) {

    return next(req);

  }

  let apiKey = undefined;

  if (req.url.startsWith("https://api.themoviedb.org/3")) {

    apiKey = { api_key: environment.tmdbApiKey };

  }

  const reqWithApiKey = req.clone({
    setParams: apiKey,
  });

  return next(reqWithApiKey);
};
