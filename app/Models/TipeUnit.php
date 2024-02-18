<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipeUnit extends Model
{
    use HasFactory;

    protected $table = 'tipe_unit';

    protected $primaryKey = 'kd_tipe';
    protected $guarded = ["kd_tipe"];


    // 1 tipe unit hanya dimiliki oleh 1 properti
    public function properti()
    {
        return $this->belongsTo(Properti::class, 'kd_properti', 'kd_properti');
    }
    public function kavling()
    {
        return $this->hasMany(Kavling::class, 'kd_tipe', 'kd_tipe');
    }


}
