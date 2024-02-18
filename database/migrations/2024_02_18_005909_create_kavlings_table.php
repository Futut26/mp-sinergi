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
        Schema::create('kavling', function (Blueprint $table) {
            $table->id('kd_kavling');
            $table->foreignId('kd_tipe');
            $table->string('nama_unit')->nullable();
            $table->string('status')->nullable();
            $table->timestamps();

        });

        DB::table('kavling')->insert([
            [
                'kd_tipe' => 1,
                'nama_unit' => 'A1',
                'status' => 'Tersedia',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kd_tipe' => 1,
                'nama_unit' => 'A2',
                'status' => 'Tersedia',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kd_tipe' => 1,
                'nama_unit' => 'A3',
                'status' => 'Tersedia',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kd_tipe' => 1,
                'nama_unit' => 'A4',
                'status' => 'Tersedia',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kd_tipe' => 1,
                'nama_unit' => 'A5',
                'status' => 'Tersedia',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kd_tipe' => 1,
                'nama_unit' => 'A6',
                'status' => 'Tersedia',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kd_tipe' => 1,
                'nama_unit' => 'A7',
                'status' => 'Tersedia',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kd_tipe' => 1,
                'nama_unit' => 'A8',
                'status' => 'Tersedia',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kd_tipe' => 1,
                'nama_unit' => 'A9',
                'status' => 'Tersedia',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kd_tipe' => 1,
                'nama_unit' => 'A10',
                'status' => 'Tersedia',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kd_tipe' => 1,
                'nama_unit' => 'A11',
                'status' => 'Tersedia',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kd_tipe' => 1,
                'nama_unit' => 'A12',
                'status' => 'Tersedia',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kd_tipe' => 1,
                'nama_unit' => 'A13',
                'status' => 'Tersedia',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kd_tipe' => 1,
                'nama_unit' => 'A14',
                'status' => 'Tersedia',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'kd_tipe' => 2,
                'nama_unit' => 'B1',
                'status' => 'Tersedia',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);

        Schema::table('kavling', function (Blueprint $table) {
            $table->foreign('kd_tipe')->references('kd_tipe')->on('tipe_unit');
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kavling');
    }
};
