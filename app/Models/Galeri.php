<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Galeri extends Model
{
    use HasFactory;

    protected $table = 'galeri';
    protected $guarded = ['id'];


    
    public function tipeUnit()
    {
        return $this->belongsTo(TipeUnit::class, 'tipe_unit_id', 'id');
    }

}
