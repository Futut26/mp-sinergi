<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('properti', function (Blueprint $table) {
            $table->id('kd_properti');
            $table->foreignId('id_kategori_properti')->constrained('kategori_properti')->onDelete('no action');
            $table->string('nama_properti');
            $table->text('logo');
            $table->text('thumbnail');
            $table->text('deskripsi');
            $table->string('lokasi');
            $table->text('url_maps');
            $table->string('pinvalue_min');
            $table->string('pinvalue_max');
            $table->string('status')->nullable();
            $table->timestamps();
        });


        $faker = Faker\Factory::create('id_ID');
        DB::table('properti')->insert(
            [
                [
                    'id_kategori_properti' => 1,
                    'nama_properti' => 'Stellar Jardin',
                    'logo' => '/assets/img/properti/logo/' . $faker->image('public/assets/img/properti/logo/', 440, 280, null, false),
                    'thumbnail' => '/assets/img/properti/thumbnail/' . $faker->image('public/assets/img/properti/thumbnail/', 440, 280, null, false),
                    'deskripsi' => $faker->paragraphs(3, true),
                    'lokasi' => 'Cikunir, Bekasi Selatan, Bekasi',
                    'url_maps' => 'https://goo.gl/maps/3Z9J6Z8Zz3z',
                    'pinvalue_min' => '1600000000',
                    'pinvalue_max' => '1700000000',
                    'status' => 'active',
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
                [
                    'id_kategori_properti' => 1,
                    'nama_properti' => 'Alpen Hills',
                    'logo' => '/assets/img/properti/logo/' . $faker->image('public/assets/img/properti/logo/', 440, 280, null, false),
                    'thumbnail' => '/assets/img/properti/thumbnail/' . $faker->image('public/assets/img/properti/thumbnail/', 440, 280, null, false),
                    'deskripsi' => $faker->paragraphs(3, true),
                    'lokasi' => 'Cikunir, Bekasi Selatan, Bekasi',
                    'url_maps' => 'https://goo.gl/maps/3Z9J6Z8Zz3z',
                    'pinvalue_min' => '400000000',
                    'pinvalue_max' => '600000000',
                    'status' => 'active',
                    'created_at' => now(),
                    'updated_at' => now(),

                ],
                [
                    'id_kategori_properti' => 1,
                    'nama_properti' => 'Kenari Residence',
                    'logo' => '/assets/img/properti/logo/' . $faker->image('public/assets/img/properti/logo/', 440, 280, null, false),
                    'thumbnail' => '/assets/img/properti/thumbnail/' . $faker->image('public/assets/img/properti/thumbnail/', 440, 280, null, false),
                    'deskripsi' => $faker->paragraphs(3, true),
                    'lokasi' => 'Cikunir, Bekasi Selatan, Bekasi',
                    'url_maps' => 'https://goo.gl/maps/3Z9J6Z8Zz3z',
                    'pinvalue_min' => '1400000000',
                    'pinvalue_max' => '1600000000',
                    'status' => 'active',
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
            ]
        );
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('properti');
    }
};
