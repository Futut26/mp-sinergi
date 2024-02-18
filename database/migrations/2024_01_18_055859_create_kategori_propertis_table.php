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
        Schema::create('kategori_properti', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_jenis_properti')->constrained('jenis_properti');
            $table->string('kategori');
            $table->string('slug')->unique();
            $table->timestamps();
        });

        DB::table('kategori_properti')->insert([
            [
                'id_jenis_properti' => 1,
                'kategori' => 'Rumah Baru',
                'slug' => 'rumah-baru',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id_jenis_properti' => 1,
                'kategori' => 'Rumah Second',
                'slug' => 'rumah-second',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id_jenis_properti' => 2,
                'kategori' => 'Ruko Baru',
                'slug' => 'ruko-baru',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id_jenis_properti' => 2,
                'kategori' => 'Ruko Second',
                'slug' => 'ruko-second',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kategori_properti');
    }
};
