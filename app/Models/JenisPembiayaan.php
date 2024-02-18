<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JenisPembiayaan extends Model
{
    use HasFactory;

    protected $table = 'jenis_pembiayaan';
    protected $guarded = ["id"];

    public function pembiayaan()
    {
        return $this->hasMany(Pembiayaan::class, 'id_jenis_pembiayaan', 'id');
    }

    
}
