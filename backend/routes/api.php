<?php

use App\Http\Controllers\Tarefa\TarefaController;
use Illuminate\Support\Facades\Route;

/*
    Tarefas
*/

Route::prefix('tarefas')->middleware('api.token')->group(function () {
    Route::get('/', [TarefaController::class, 'listar']);
    Route::post('/', [TarefaController::class, 'cadastrar']);
    Route::delete('/{id}', [TarefaController::class, 'remover']);
});