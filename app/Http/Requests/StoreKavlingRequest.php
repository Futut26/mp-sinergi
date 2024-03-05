<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreKavlingRequest extends FormRequest
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
            // nama_unit unik berdasarkan kolom nama_unit di tabel kavling dan berdasarkan kd_tipe
            'nama_unit' => 'required|string|max:255',
            'kd_tipe' => 'required',
            'status' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            'nama_unit.required' => 'Nama unit tidak boleh kosong',
            'nama_unit.string' => 'Nama unit harus berupa string',
            'nama_unit.max' => 'Nama unit tidak boleh lebih dari 255 karakter',
            'nama_unit.unique' => 'Nama unit sudah ada',
            'kd_tipe.required' => 'Tipe unit tidak boleh kosong',
            'status.required' => 'Status tidak boleh kosong',
        ];
    }
}
