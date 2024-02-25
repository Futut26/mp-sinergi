<?php

namespace App\Http\Controllers;

use App\Models\Pembiayaan;
use App\Http\Requests\StorePembiayaanRequest;
use App\Http\Requests\UpdatePembiayaanRequest;

class PembiayaanController extends Controller
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
    public function store(StorePembiayaanRequest $request)
    {
        //
        $id_jenis_pembiayaan = $request->id_jenis_pembiayaan;
        $kd_properti = $request->kd_properti;
        $pembiayaan = new Pembiayaan();
        $pembiayaan->id_jenis_pembiayaan = $id_jenis_pembiayaan;
        $pembiayaan->kd_properti = $kd_properti;
        $pembiayaan->save() ? back()->with('message', 'Data berhasil disimpan') : back()->with('error', 'Data gagal disimpan');
    }

    /**
     * Display the specified resource.
     */
    public function show(Pembiayaan $pembiayaan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pembiayaan $pembiayaan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePembiayaanRequest $request, Pembiayaan $pembiayaan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pembiayaan $pembiayaan)
    {
        // delete data
        $pembiayaan->delete() ? back()->with('message', 'Data berhasil dihapus') : back()->with('error', 'Data gagal dihapus');

    }
}
