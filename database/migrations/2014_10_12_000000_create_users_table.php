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
        Schema::create('user', function (Blueprint $table) {
            $table->id();
            $table->foreignId('role_id')->constrained('role')->onDelete('no action')->onUpdate('no action');
            $table->string('nama_lengkap');
            $table->string('email')->unique();
            $table->string('avatar')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('status')->default('aktif')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::table('user', function (Blueprint $table) {
            $table->string('google_id')->nullable()->after('status');
        });

        // insert data
        $faker = Faker\Factory::create('id_ID');
        DB::table('user')->insert([
            [
                'role_id' => '1',
                'nama_lengkap' => 'Konsumen',
                'email' => 'konsumen@gmail.com',
                'avatar' => '/assets/img/avatar/'.$faker->image('public/assets/img/avatar/', 440, 280, null, false),
                'password' => bcrypt('password'),
                'email_verified_at' => now(),
                'status' => 'aktif',
                'created_at' => now(),

            ],
            [
                'role_id' => '2',
                'nama_lengkap' => 'Marketing',
                'email' => 'marketing@gmail.com',
                'avatar' => '/assets/img/avatar/'.$faker->image('public/assets/img/avatar/', 440, 280, null, false),
                'password' => bcrypt('password'),
                'email_verified_at' => now(),
                'status' => 'aktif',
                'created_at' => now(),
            ],
            [
                'role_id' => '3',
                'nama_lengkap' => 'Staff',
                'email' => 'staff@gmail.com',
                'avatar' => '/assets/img/avatar/'.$faker->image('public/assets/img/avatar/', 440, 280, null, false),
                'password' => bcrypt('password'),
                'email_verified_at' => now(),
                'status' => 'aktif',
                'created_at' => now(),
            ],
            [
                'role_id' => '4',
                'nama_lengkap' => 'Pimpinan',
                'email' => 'pimpinan@gmail.com',
                'avatar' => '/assets/img/avatar/'.$faker->image('public/assets/img/avatar/', 440, 280, null, false),
                'password' => bcrypt('password'),
                'email_verified_at' => now(),
                'status' => 'aktif',
                'created_at' => now(),
            ],
        ]);


    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user');
    }
};
