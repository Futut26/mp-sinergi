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
        Schema::create('jenis_pembiayaan', function (Blueprint $table) {
            $table->id();
            $table->string('jenis')->nullable();
            $table->timestamps();
        });
        DB::table('jenis_pembiayaan')->insert([
            [
                'jenis' => 'KPR',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'jenis' => 'Cash Bertahap',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'jenis' => 'Cash Keras',
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
        Schema::dropIfExists('jenis_pembiayaan');
    }
};
