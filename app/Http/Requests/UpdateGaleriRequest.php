<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateGaleriRequest extends FormRequest
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
        if($this->hasFile('url')){
            return [
                'url' => '|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'judul' => 'required|string|max:255',
                'kd_tipe' => 'required',
            ];
        }else{
            return [
                'judul' => 'required|string|max:255',
                'kd_tipe' => 'required',
            ];
        }
    }

    public function messages(): array
    {
        return [
            'url.image' => 'File harus berupa gambar',
            'url.mimes' => 'File harus berupa gambar',
            'url.max' => 'Ukuran file tidak boleh lebih dari 2MB',
            'judul.required' => 'Judul tidak boleh kosong',
            'judul.max' => 'Judul tidak boleh lebih dari 255 karakter',
            'kd_tipe.required' => 'Tipe unit tidak boleh kosong',
        ];
    }
}
