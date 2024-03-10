<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateVideoRequest extends FormRequest
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
            'url' => 'required|url',
        ];
    }

    public function messages()
    {
        return [
            'judul.required' => 'Judul tidak boleh kosong',
            'kd_tipe.required' => 'Tipe tidak boleh kosong',
            'url.required' => 'URL tidak boleh kosong',
            'url.url' => 'URL tidak valid',
        ];
    }
}
