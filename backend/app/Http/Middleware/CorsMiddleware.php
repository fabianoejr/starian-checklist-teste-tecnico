<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CorsMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Só deixa passar se o token estiver correto
        $authToken = env('CORS_AUTH_TOKEN');
        $requestToken = $request->header('Authorization');

        // Remove o prefixo 'Bearer ' se existir
        if (strpos($requestToken, 'Bearer ') === 0) {
            $requestToken = substr($requestToken, 7);
        }

        if (!$authToken || $requestToken !== $authToken) {
            return response('Não autorizado', 403);
        }

        $response = $next($request);
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->headers->set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        $response->headers->set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

        return $response;
    }
}
