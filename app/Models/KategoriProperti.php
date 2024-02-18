<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KategoriProperti extends Model
{
    use HasFactory;

    protected $table = 'kategori_properti';
    protected $guarded = ["id"];

    public function jenisProperti()
    {
        return $this->belongsTo(JenisProperti::class, 'id_jenis_properti', 'id');
    }

    public function properti()
    {
        return $this->hasMany(Properti::class, 'id_kategori_properti', 'id');
    }

}
