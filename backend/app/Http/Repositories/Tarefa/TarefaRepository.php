<?php

namespace App\Http\Repositories\Tarefa;

use App\Http\Data\Tarefa\TarefaData;
use Illuminate\Support\Collection;
use App\Models\Tarefa;

class TarefaRepository
{
    public function __construct(private readonly Tarefa $tarefa)
    {
    }

    public function find(int $id): ?Tarefa
    {
        return $this->tarefa->find($id);
    }

    public function list(): ?Collection
    {
        $query = $this->tarefa->newQuery();
        return $query->get();
    }

    public function create(TarefaData $data): Tarefa
    {
        $tarefa = new $this->tarefa;
        $tarefa->title = $data->title;
        $tarefa->completed = $data->completed ?? false;
        $tarefa->save();
        return $tarefa;
    }

    public function delete(int $id): bool
    {
        $tarefa = $this->find($id);

        if (!$tarefa) return false;

        $tarefa->delete();
        return true;
    }
}