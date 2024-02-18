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
        Schema::create('role', function (Blueprint $table) {
            $table->id();
            $table->string('nama_role');
            $table->timestamps();
        });

        // insert data
        DB::table('role')->insert([
            [
                'nama_role' => 'konsumen',
                'created_at' => now(),
            ],
            [
                'nama_role' => 'marketing',
                'created_at' => now(),
            ],
            [
                'nama_role' => 'staff',
                'created_at' => now(),
            ],
            [
                'nama_role' => 'pimpinan',
                'created_at' => now(),
            ],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('role');
    }
};
