<?php

namespace App\Http\Controllers;
use App\Http\Requests\StoreKavlingRequest;
use App\Http\Requests\UpdateKavlingRequest;
use App\Models\Kavling;
use Illuminate\Http\Request;

class KavlingController extends Controller
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
    public function store(StoreKavlingRequest $request)
    {
        //

        $kavling = new Kavling();
        $kavling->kd_tipe = $request->kd_tipe;
        $kavling->nama_unit = $request->nama_unit;
        $kavling->status = $request->status;
        $kavling->save() ? back()->with('message', 'Kavling berhasil ditambahkan') : back()->with('error', 'Kavling gagal ditambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(Kavling $kavling)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Kavling $kavling)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateKavlingRequest $request, Kavling $kavling)
    {
        //
        $kavling->nama_unit = $request->nama_unit;
        $kavling->status = $request->status;
        $kavling->save() ? back()->with('message', 'Kavling berhasil diubah') : back()->with('error', 'Kavling gagal diubah');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Kavling $kavling)
    {
        //
        $kavling->delete() ? back()->with('message', 'Kavling berhasil dihapus') : back()->with('error', 'Kavling gagal dihapus');
    }
}
