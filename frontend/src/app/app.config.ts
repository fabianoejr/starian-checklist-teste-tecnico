import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { TAREFA_REPOSITORY } from './core/domain/repositories/tarefa.repository';
import { TarefaHttpRepository } from './core/infrastructure/api/tarefa-http.repository';
import { tokenInterceptorFn } from './core/infrastructure/api/token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([tokenInterceptorFn])
    ),
    {
      provide: TAREFA_REPOSITORY,
      useClass: TarefaHttpRepository
    },
    // outros providers
  ]
};
