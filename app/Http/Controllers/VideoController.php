<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVideoRequest;
use App\Http\Requests\UpdateVideoRequest;
use App\Models\Galeri;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreVideoRequest $request)
    {
        // simpan data jika berhasil di validasi
        Galeri::create([
            'kd_properti' => $request->kd_properti,
            'url' => $request->url,
            'judul' => $request->judul,
            'jenis_file' => $request->jenis_file,
            'kd_tipe' => $request->kd_tipe,
        ]);

        return redirect()->back()->with('message', 'Video berhasil ditambahkan');


    }

    /**
     * Display the specified resource.
     */
    public function show(Galeri $galeri)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Galeri $galeri)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Galeri $galeri)
    {
        // find data by id

        $galeri = Galeri::find($request->id);
        $galeri->update([
            'url' => $request->url,
            'kd_properti' => $request->kd_properti,
            'jenis_file' => $request->jenis_file,
            'judul' => $request->judul,
            'kd_tipe' => $request->kd_tipe,
        ]) ? redirect()->back()->with('message', 'Video berhasil diupdate') : redirect()->back()->with('error', 'Video gagal diupdate');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Galeri $galeri, $request)
    {
        // hapus data
        $galeri = Galeri::find($galeri->id);
        dd($galeri);
        $galeri->delete() ? redirect()->back()->with('message', 'Video berhasil dihapus') : redirect()->back()->with('error', 'Video gagal dihapus');
    }
}
