<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Galeri>
 */
class GaleriFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'kd_tipe' => $this->faker->numberBetween(1, 1),
            'judul' => $this->faker->sentence(mt_rand(3, 6)),
            'url' => 'public/assets/img/properti/galeri/' . $this->faker->image('public/assets/img/properti/galeri/', 640, 480, null, false),
            'jenis_file' => 'image',
        ];
    }
}
