<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreGaleriRequest extends FormRequest
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
            //

            'judul' => 'required|max:255|string',
            'kd_tipe' => 'required',
            'url' => 'required| image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ];
    }

    public function messages()
    {
        return [
            'judul.required' => 'Judul tidak boleh kosong',
            'kd_tipe.required' => 'Tipe tidak boleh kosong',
            'url.required' => 'Gambar tidak boleh kosong',
            'url.image' => 'File harus berupa gambar',
            'url.mimes' => 'File harus berupa gambar dengan format jpeg, png, jpg, gif, svg',
            'url.max' => 'Ukuran file tidak boleh lebih dari 2MB',
        ];
    }
}
