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
        Schema::create('tipe_unit', function (Blueprint $table) {
            $table->id('kd_tipe');
            $table->foreignId('kd_properti');
            $table->string('nama_tipe')->nullable();
            $table->integer('jumlah_unit')->nullable();
            $table->text('spesifikasi')->nullable();
            $table->text('fasilitas')->nullable();
            $table->string('harga')->nullable();
            $table->timestamps();
        });

        $faker = Faker\Factory::create('id_ID');
        DB::table('tipe_unit')->insert([
              [
                'kd_properti' => 1,
                'nama_tipe' => 'Standard',
                'jumlah_unit' => 17,
                'spesifikasi' => $faker->paragraphs(3, true),
                'fasilitas' => $faker->paragraphs(3, true),
                'harga' => '160000000',
                'created_at' => now(),
                'updated_at' => now(),
              ],
              [
                'kd_properti' => 1,
                'nama_tipe' => 'Premium',
                'jumlah_unit' => 17,
                'spesifikasi' => $faker->paragraphs(3, true),
                'fasilitas' => $faker->paragraphs(3, true),
                'harga' => '170000000',
                'created_at' => now(),
                'updated_at' => now(),
              ]
            ]);

            Schema::table('tipe_unit', function (Blueprint $table) {
                $table->foreign('kd_properti')->references('kd_properti')->on('properti');
            });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tipe_unit');
    }
};
