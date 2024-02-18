<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JenisProperti extends Model
{
    use HasFactory;

    protected $table = 'jenis_properti';
    protected $guarded = ["id"];

    public function kategoriProperti()
    {
        return $this->hasMany(KategoriProperti::class, 'id_jenis_properti', 'id');
    }

}
