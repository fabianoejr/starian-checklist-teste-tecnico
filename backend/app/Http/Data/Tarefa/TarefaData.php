<?php

namespace App\Http\Data\Tarefa;

use Spatie\LaravelData\Attributes\Validation\IntegerType;
use Spatie\LaravelData\Attributes\Validation\StringType;
use Spatie\LaravelData\Attributes\Validation\BooleanType;
use Spatie\LaravelData\Attributes\Validation\Min;
use Spatie\LaravelData\Attributes\Validation\Required;
use Spatie\LaravelData\Data;

class TarefaData extends Data
{
    public function __construct(
        #[IntegerType, Min(1)]
        public readonly ?int $id,

        #[Required, StringType, Min(1)]
        public readonly string $title,

        #[BooleanType]
        public readonly ?bool $completed = false
    )
    {
    }
}