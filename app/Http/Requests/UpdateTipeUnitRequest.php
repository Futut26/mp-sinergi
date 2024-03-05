<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTipeUnitRequest extends FormRequest
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
            "nama_tipe" => "required |string |max:255",
            "spesifikasi" => "required |string",
            "fasilitas" => "required |string",
            "harga" => "required",
        ];
    }

    public function messages(): array {
        return [
            "nama_tipe.required" => "Nama Tipe tidak boleh kosong",
            "spesifikasi.required" => "Spesifikasi tidak boleh kosong",
            "fasilitas.required" => "Fasilitas tidak boleh kosong",
            "harga.required" => "Harga tidak boleh kosong",
            "spesifikasi.string" => "Spesifikasi harus berupa karakter",
            "fasilitas.string" => "Fasilitas harus berupa karakter",
            "nama_tipe.string" => "Nama Tipe harus berupa karakter",
        ];
    }
}
