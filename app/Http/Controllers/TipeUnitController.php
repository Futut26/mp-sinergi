<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTipeUnit;
use App\Http\Requests\UpdateTipeUnitRequest;
use App\Models\TipeUnit;
use Illuminate\Http\Request;

class TipeUnitController extends Controller
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
    public function store(StoreTipeUnit $request)
    {
        $tipeUnit = new TipeUnit();
        $tipeUnit->kd_properti = $request->kd_properti;
        $tipeUnit->nama_tipe = $request->nama_tipe;
        $tipeUnit->spesifikasi = $request->spesifikasi;
        $tipeUnit->fasilitas = $request->fasilitas;
        $tipeUnit->harga = $request->harga;
        $tipeUnit->save();

        return redirect()->route('edit_property', $request->kd_properti)->with('message', 'Tipe Unit berhasil ditambahkan');


    }

    /**
     * Display the specified resource.
     */
    public function show(TipeUnit $tipeUnit)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TipeUnit $tipeUnit)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTipeUnitRequest $request, TipeUnit $tipeUnit)
    {
        $tipeUnit->nama_tipe = $request->nama_tipe;
        $tipeUnit->spesifikasi = $request->spesifikasi;
        $tipeUnit->fasilitas = $request->fasilitas;
        $tipeUnit->harga = $request->harga;
        $tipeUnit->save();
        return redirect()->route('edit_property', $request->kd_properti)->with('message', 'Tipe Unit berhasil diubah');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TipeUnit $tipeUnit)
    {
        // delete tipe unit
        $tipeUnit->delete() ? back()->with('message', 'Tipe Unit berhasil dihapus') : back()->with('error', 'Tipe Unit gagal dihapus');
    }
}
