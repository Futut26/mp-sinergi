<?php

namespace App\Http\Controllers;

use App\Http\Requests\KonsumenUpdateRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class KonsumenController extends Controller
{
    public function edit(Request $request): Response
    {


        $user = User::with('konsumen.alamat')->find($request->user()->id);

        return Inertia::render('Konsumen/Edit', [
            'title' => 'Data Pribadi',
            'user' => $user,
        ]);
    }

    public function update(KonsumenUpdateRequest $request ) {
        $user = $request->user();

        // Mengupdate data konsumen
        $user->konsumen->update($request->only([
            'no_ktp',
            'npwp',
            'agama',
            'jenis_kelamin',
            'no_hp',
            'status_perkawinan',
            'pekerjaan',
        ]));

        // Mengupdate data alamat yang berelasi dengan konsumen
        $user->konsumen->alamat->update($request->only([
            'alamat',
            'kelurahan',
            'kecamatan',
            'kabupaten',
            'provinsi',
            'kode_pos',
        ]));

        return Redirect::route('personal-data.edit');
    }
}
