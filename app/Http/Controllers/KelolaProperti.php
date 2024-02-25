<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePropertiRequest;
use App\Models\JenisPembiayaan;
use App\Models\JenisProperti;
use App\Models\KategoriProperti;
use App\Models\Properti;
use Illuminate\Http\Request;

class KelolaProperti extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $kategori_properti = KategoriProperti::all();
        $properti = Properti::latest()->with('tipeUnit.galeri', 'tipeUnit.kavling', 'pembiayaan', 'kategoriProperti')->paginate(6);

        $search = request()->query('search');
        if ($search) {
            // cari properti berdasarkan nama properti, deskripsi, dan lokasi
            $properti = Properti::where('nama_properti', 'LIKE', "%{$search}%")
                ->orWhere('deskripsi', 'LIKE', "%{$search}%")
                ->orWhere('lokasi', 'LIKE', "%{$search}%")
                ->latest()
                ->with('tipeUnit', 'pembiayaan', 'kategoriProperti')
                ->paginate(6);
        }
        ;
        return inertia('Admin/Properti/Index', [
            'title' => 'Kelola Properti',
            // 'properti' => properti yang berelasi dengan tipe unit dan pakai pagination
            'properti' => $properti,
            'kategori_properti' => $kategori_properti
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $jenis_properti = JenisProperti::with('kategoriProperti')->get();
        $jenis_pembiayaan = JenisPembiayaan::all();
        return inertia('Admin/Properti/AddProperty', [
            'title' => 'Tambah Properti',
            'jenis_properti' => $jenis_properti,
            'jenis_pembiayaan' => $jenis_pembiayaan,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePropertiRequest $request)
    {
        $requestData = $request->all();

        $properti = Properti::create([
            'id_kategori_properti' => $request->id_kategori_properti,
            'nama_properti' => $request->nama_properti,
            'logo' => '/assets/img/properti/logo/' . $request->nama_properti . '-' . $request->file('logo')->getClientOriginalName(),
            'thumbnail' => '/assets/img/properti/thumbnail/' . $request->nama_properti . '-' . $request->file('thumbnail')->getClientOriginalName(),
            'deskripsi' => $request->deskripsi,
            'lokasi' => $request->lokasi,
            'url_maps' => $request->url_maps,
            'pinvalue_min' => $request->pinvalue_min,
            'pinvalue_max' => $request->pinvalue_max,
            'status' => 'nonaktif',
        ]);

        $kdProperti = $properti->kd_properti;

        $pembiayaan = [];
        foreach ($requestData['pembiayaan'] as $key => $value) {
            $pembiayaan[$key] = [
                'id_jenis_pembiayaan' => $value['id_jenis_pembiayaan'],
                'kd_properti' => $kdProperti,
            ];
        }
        $properti->pembiayaan()->createMany($pembiayaan);
        $request->file('logo')->move(public_path('/assets/img/properti/logo'), $request->nama_properti . '-' . $request->file('logo')->getClientOriginalName());
        $request->file('thumbnail')->move(public_path('/assets/img/properti/thumbnail'), $request->nama_properti . '-' . $request->file('thumbnail')->getClientOriginalName());
        return redirect()->route('manage_property')->with('message', 'Data properti berhasil ditambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(Properti $properti)
    {
        //

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Properti $properti)
    {
        //
        $properti = Properti::with('tipeUnit.galeri', 'tipeUnit.kavling', 'pembiayaan.jenisPembiayaan', 'kategoriProperti')->find($properti->kd_properti);
        $jenis_properti = JenisProperti::with('kategoriProperti')->get();
        $kategori_properti = KategoriProperti::all();
        $jenis_pembiayaan = JenisPembiayaan::all();
        return inertia('Admin/Properti/EditProperty', [
            'title' => 'Edit Properti',
            'properti' => $properti,
            'jenis_properti' => $jenis_properti,
            'jenis_pembiayaan' => $jenis_pembiayaan,
            'kategori_properti' => $kategori_properti,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Properti $properti)
    {
        //
        dd($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Properti $properti)
    {
        $properti->delete();
        // delete logo and thumbnail
        unlink(public_path($properti->logo));
        unlink(public_path($properti->thumbnail));
        return redirect()->route('manage_property')->with('message', 'Data properti berhasil dihapus');
    }
}
