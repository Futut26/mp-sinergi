<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pembiayaan', function (Blueprint $table) {
            $table->id();
            $table->foreignId('kd_properti');
            $table->foreignId('id_jenis_pembiayaan');
            $table->timestamps();
        });

        DB::table('pembiayaan')->insert([
            [
                'kd_properti' => 1,
                'id_jenis_pembiayaan' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kd_properti' => 1,
                'id_jenis_pembiayaan' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

        Schema::table('pembiayaan', function (Blueprint $table) {
            $table->foreign('id_jenis_pembiayaan')->references('id')->on('jenis_pembiayaan')->onDelete('cascade');
            $table->foreign('kd_properti')->references('kd_properti')->on('properti')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pembiayaan');
    }
};
