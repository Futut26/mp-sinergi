<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function authorize(): bool
    {
        return true;
    }


    public function rules(): array
    {


        if ($this->hasFile('avatar')) {
            return [
                'avatar' => 'mimes:jpg,jpeg,png|max:1024',
            ];
        } else {
            return [
                'nama_lengkap' => 'required|string|max:255',
                'email' => ['required', 'string', 'lowercase', 'email', 'max:255', Rule::unique(User::class)->ignore($this->user()->id)],
            ];
        }
    }

    public function messages(): array
    {
        return [
            'nama_lengkap.required' => 'Nama lengkap tidak boleh kosong',
            'nama_lengkap.max' => 'Nama lengkap maksimal 255 karakter',
            'email.lowercase' => 'Email harus berupa huruf kecil',
            'email.required' => 'Email tidak boleh kosong',
            'email.email' => 'Email tidak valid',
            'email.unique' => 'Email sudah terdaftar',
            'avatar.max' => 'Ukuran avatar maksimal 1MB',
            'avatar.mimes' => 'Format avatar harus jpg, jpeg, atau png',
        ];
    }
}
