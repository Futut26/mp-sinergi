<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePropertiRequest extends FormRequest
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
            'deskripsi' => 'required|string',
            'lokasi' => 'required|string|max:255',
            'url_maps' => 'required|url',
            'pinvalue_min' => 'required',
            'pinvalue_max' => 'required',
            'status' => 'nullable',
        ];
    }

    public function messages(): array {
        return [
            'id_kategori_properti.required' => 'Kategori properti harus diisi',
            'nama_properti.required' => 'Nama properti harus diisi',
            'nama_properti.max' => 'Nama properti maksimal 255 karakter',
            'deskripsi.required' => 'Deskripsi properti harus diisi',
            'lokasi.required' => 'Lokasi properti harus diisi',
            'lokasi.max' => 'Lokasi properti maksimal 255 karakter',
            'url_maps.required' => 'URL Maps harus diisi',
            'url_maps.url' => 'URL Maps harus berupa URL',
            'pinvalue_min.required' => 'Pinvalue Min harus diisi',
            'pinvalue_max.required' => 'Pinvalue Max harus diisi',
        ];
    }
}
