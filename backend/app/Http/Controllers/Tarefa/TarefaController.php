<?php

namespace App\Http\Controllers\Tarefa;

use Illuminate\Validation\ValidationException;
use App\Http\Services\Tarefa\TarefaService;
use App\Http\Controllers\Controller;
use App\Http\Data\Tarefa\TarefaData;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TarefaController extends Controller
{
    public function __construct(public readonly TarefaService $tarefaService)
    {
    }

    public function listar(): JsonResponse
    {
        $tarefas = $this->tarefaService->listarTarefas();
        return response()->json(['data' => $tarefas]);
    }

    public function cadastrar(Request $request): JsonResponse
    {
        try {
            $tarefaData = TarefaData::from($request->all());
        } catch (ValidationException $e) {
            return response()->json(['errors' => $e->errors()], 422);
        }

        $tarefa = $this->tarefaService->cadastrarTarefa($tarefaData);
        return response()->json([
            'message' => 'Tarefa cadastrada com sucesso!',
            'data' => $tarefa
        ], 201);
    }

    public function remover(int $id): JsonResponse
    {
        try {
            $this->tarefaService->removerTarefa($id);
            return response()->json([
                'message' => 'Tarefa removida com sucesso!'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage()
            ], 404);
        }
    }
}