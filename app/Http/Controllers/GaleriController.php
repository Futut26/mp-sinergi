<?php

namespace App\Http\Controllers;

use App\Models\Galeri;
use App\Http\Requests\StoreGaleriRequest;
use App\Http\Requests\UpdateGaleriRequest;

class GaleriController extends Controller
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
    public function store(StoreGaleriRequest $request)
    {
        // simpan file
        $url =  '/assets/img/properti/galeri/' . $request->file('url')->getClientOriginalName();
        $request->file('url')->move(public_path('/assets/img/properti/galeri/'), $request->file('url')->getClientOriginalName());
       
        Galeri::create([
            'kd_properti' => $request->kd_properti,
            'url' => $url,
            'judul' => $request->judul,
            'jenis_file' => $request->jenis_file,
            'kd_tipe' => $request->kd_tipe,
        ]);

        return redirect()->back()->with('message', 'Data berhasil ditambahkan');

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
    public function update(UpdateGaleriRequest $request, Galeri $galeri)
    {
        // cek apakah ada url yang diupload
        if($request->hasFile('url')){
            // ambil nama file
            $url =  '/assets/img/properti/galeri/' . $request->file('url')->getClientOriginalName();
            // hapus file lama
            if($galeri->url){
                unlink(public_path($galeri->url));
            }
            $request->file('url')->move(public_path('/assets/img/properti/galeri/'), $request->file('url')->getClientOriginalName());
            $galeri->update([
                'url' => $url,
                'judul' => $request->judul,
                'kd_tipe' => $request->kd_tipe,
            ]);
        }else{
            // update data
            $galeri->update([
                'judul' => $request->judul,
                'kd_tipe' => $request->kd_tipe,
            ]);
        }
        return redirect()->back()->with('message', 'Data berhasil diupdate');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Galeri $galeri)
    {
        if($galeri->url){
            // cek apakah file ada
            if(file_exists(public_path($galeri->url))){
                // hapus file
                unlink(public_path($galeri->url));
            }
            
        }
        $galeri->delete();
        return redirect()->back()->with('message', 'Data berhasil dihapus');
    }
}
