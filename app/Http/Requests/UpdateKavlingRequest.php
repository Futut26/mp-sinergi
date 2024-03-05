<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateKavlingRequest extends FormRequest
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
            'nama_unit' => ['required', 'string'],
            'status' => ['required', 'string'],
        ];
    }

    public function messages(): array
    {
        return [
            'nama_unit.required' => 'Nama unit tidak boleh kosong',
            'status.required' => 'Status tidak boleh kosong',
        ];
    }
}
