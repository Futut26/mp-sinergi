<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePropertiRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'id_kategori_properti' => 'required',
            'nama_properti' => 'required|string|max:255',
            'logo' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'thumbnail' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'deskripsi' => 'required|string',
            'lokasi' => 'required|string|max:255',
            'url_maps' => 'required|url',
            'pinvalue_min' => 'required|string|numeric',
            'pinvalue_max' => 'required|string|numeric',
            'status' => 'nullable|string',
            'pembiayaan' => 'required',
        ];
    }

    public function messages():array {
        return [
            'id_kategori_properti.required' => 'Kategori Properti tidak boleh kosong',
            'nama_properti.required' => 'Nama Properti tidak boleh kosong',
            'nama_properti.max' => 'Nama Properti tidak boleh lebih dari 255 karakter',
            'logo.required' => 'Logo tidak boleh kosong',
            'logo.image' => 'Logo harus berupa gambar',
            'logo.mimes' => 'Logo harus berupa gambar dengan format jpeg, png, jpg, gif, svg',
            'logo.max' => 'Ukuran logo tidak boleh lebih dari 2MB',
            'thumbnail.required' => 'Thumbnail tidak boleh kosong',
            'thumbnail.image' => 'Thumbnail harus berupa gambar',
            'thumbnail.mimes' => 'Thumbnail harus berupa gambar dengan format jpeg, png, jpg, gif, svg',
            'thumbnail.max' => 'Ukuran thumbnail tidak boleh lebih dari 2MB',
            'deskripsi.required' => 'Deskripsi tidak boleh kosong',
            'lokasi.required' => 'Lokasi tidak boleh kosong',
            'lokasi.max' => 'Lokasi tidak boleh lebih dari 255 karakter',
            'url_maps.required' => 'URL Maps tidak boleh kosong',
            'url_maps.url' => 'URL Maps harus berupa URL',
            'pinvalue_min.required' => 'Pinvalue Min tidak boleh kosong',
            'pinvalue_min.numeric' => 'Pinvalue Min harus berupa angka',
            'pinvalue_max.required' => 'Pinvalue Max tidak boleh kosong',
            'pinvalue_max.numeric' => 'Pinvalue Max harus berupa angka',
            'status.string' => 'Status harus berupa string',
            'pembiayaan' => 'Pembiayaan tidak boleh kosong',
        ];
    }
}
