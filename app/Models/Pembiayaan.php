<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pembiayaan extends Model
{
    use HasFactory;


    protected $table = 'pembiayaan';

    

    protected $guarded = ['id'];

    public function properti()
    {
        return $this->belongsTo(Properti::class, 'kd_properti', 'kd_properti');
    }

    public function jenisPembiayaan()
    {
        return $this->belongsTo(JenisPembiayaan::class, 'id_jenis_pembiayaan', 'id');
    }
}
