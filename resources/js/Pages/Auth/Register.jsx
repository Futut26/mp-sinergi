import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        nama_lengkap: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <Link href="/" className="w-auto flex justify-center items-center">
                <img className="w-[50%]" src="/assets/img/konten/Logo.png" alt="" />
            </Link>
            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="nama_lengkap" value="Nama Lengkap" />

                    <TextInput
                        id="nama_lengkap"
                        name="nama_lengkap"
                        value={data.nama_lengkap}
                        className="mt-1 block w-full"
                        autoComplete="nama_lengkap"
                        isFocused={true}
                        onChange={(e) => setData('nama_lengkap', e.target.value)}
                        required
                    />

                    <InputError message={errors.nama_lengkap} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Konfirmasi Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-center mt-4">
                    <button className="w-full  btn btn-secondary" processing={processing}>
                        Registrasi
                    </button>
                </div>

            {/* login with google */}
                <div className="flex items-center justify-center mt-4">
                    <a href='auth/google/' className="w-full  btn  btn-primary" >
                        <img  width="30"  src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />Daftar dengan Google
                    </a>
                </div>

                <div className="flex items-center justify-between mt-4 ">


                    <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none" as="button"
                    >
                        Sudah Punya Akun ? Login
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
