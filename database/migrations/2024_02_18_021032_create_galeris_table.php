<?php

use App\Models\Galeri;
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
        Schema::create('galeri', function (Blueprint $table) {
            $table->id();
            $table->foreignId('kd_tipe');
            $table->string('judul')->nullable();
            $table->string('url')->nullable();
            $table->string('jenis_file')->nullable();
            $table->timestamps();
        });
        Galeri::factory(5)->create();
        Schema::table('galeri', function (Blueprint $table) {
            $table->foreign('kd_tipe')->references('kd_tipe')->on('tipe_unit')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('galeri');
    }
};
