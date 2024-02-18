<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Properti extends Model
{
    use HasFactory;

    protected $table = 'properti';
    protected $primaryKey = 'kd_properti';

    protected $guarded = ["kd_properti"];

    public function kategoriProperti()
    {
        return $this->belongsTo(KategoriProperti::class, 'id_kategori_properti', 'id');
    }

    public function pembiayaan()
    {
        return $this->hasMany(Pembiayaan::class, 'kd_properti', 'kd_properti');
    }

    // 1 properti memiliki banyak tipe unit
    public function tipeUnit()
    {
        return $this->hasMany(TipeUnit::class, 'kd_properti', 'kd_properti');
    }


}
