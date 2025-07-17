<?php

namespace App\Http\Services\Tarefa;

use App\Http\Repositories\Tarefa\TarefaRepository;
use App\Http\Data\Tarefa\TarefaData;
use Illuminate\Support\Collection;
use App\Models\Tarefa;

class TarefaService
{
    public function __construct(public readonly TarefaRepository $tarefaRepository)
    {
    }

    public function listarTarefas(): ?Collection
    {
        return $this->tarefaRepository->list();
    }

    public function cadastrarTarefa(TarefaData $data): Tarefa
    {
        try {
            return $this->tarefaRepository->create($data);
        } catch (\Exception $e) {
            throw new \Exception('Erro ao cadastrar a tarefa:' . $e);
        }
    }

    public function removerTarefa(int $id): void
    {
        $removido = $this->tarefaRepository->delete($id);
        if (!$removido) {
            throw new 
                \Exception('Tarefa não encontrada para exclusão.');
        }
    }
}