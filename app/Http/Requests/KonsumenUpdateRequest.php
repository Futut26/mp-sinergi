<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class KonsumenUpdateRequest extends FormRequest
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
            "no_hp" => ['required', 'string', 'min:11', 'max:13'],
            "jenis_kelamin" => ['required', 'string', 'max:225'],
            "agama" => ['required', 'string', 'max:225'],
            "pekerjaan" => ['required', 'string', 'max:225'],
            "status_perkawinan" => ['required', 'string', 'max:225'],
            "no_ktp" => ['required', 'string', 'min:16', 'max:16'],
            "npwp" => ['required', 'string', 'min:15', 'max:15'],
            "alamat" => ['required', 'string', 'max:255'],
            "kelurahan" => ['required', 'string', 'max:255'],
            "kecamatan" => ['required', 'string', 'max:255'],
            "kabupaten" => ['required', 'string', 'max:255'],
            "provinsi" => ['required', 'string', 'max:255'],
            "kode_pos" => ['required', 'string', 'max:5'],
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */

    public function messages(): array
    {
        return [
            "no_hp.required" => "No HP tidak boleh kosong",
            "no_hp.min" => "No HP minimal 11 karakter",
            "no_hp.max" => "No HP maksimal 13 karakter",
            "jenis_kelamin.required" => "Jenis Kelamin tidak boleh kosong",
            "agama.required" => "Agama tidak boleh kosong",
            "pekerjaan.required" => "Pekerjaan tidak boleh kosong",
            "status_perkawinan.required" => "Status Perkawinan tidak boleh kosong",
            "no_ktp.required" => "No KTP tidak boleh kosong",
            "no_ktp.min" => "No KTP minimal 16 karakter",
            "no_ktp.max" => "No KTP maksimal 16 karakter",
            "npwp.required" => "NPWP tidak boleh kosong",
            "npwp.min" => "NPWP minimal 15 karakter",
            "npwp.max" => "NPWP maksimal 15 karakter",
            "alamat.required" => "Alamat tidak boleh kosong",
            "kelurahan.required" => "Kelurahan tidak boleh kosong",
            "kecamatan.required" => "Kecamatan tidak boleh kosong",
            "kabupaten.required" => "Kabupaten tidak boleh kosong",
            "provinsi.required" => "Provinsi tidak boleh kosong",
            "kode_pos.required" => "Kode Pos tidak boleh kosong",
        ];
    }
}
