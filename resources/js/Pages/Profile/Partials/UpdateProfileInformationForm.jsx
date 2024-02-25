import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { useRef, useState } from "react";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
}) {
    const user = usePage().props.auth.user;
    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            nama_lengkap: user.nama_lengkap || "",
            avatar: user.avatar || null,
            email: user.email || "",
        });
    const submit = (e) => {
        e.preventDefault();
        post(route("profile.update"));
    };

    // State untuk menyimpan URL gambar priview
    const [avatarPreviewUrl, setAvatarPreviewUrl] = useState(null);

    // Fungsi untuk menampilkan priview gambar
    const previewImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setAvatarPreviewUrl(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            setAvatarPreviewUrl(null);
        }
    };
    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Pengaturan Akun
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                    Update informasi Akun anda.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                {/* priview avatar */}
                <div className="flex items-center gap-4">
                    {avatarPreviewUrl ? (
                        <img
                            src={avatarPreviewUrl}
                            alt="avatar"
                            className="w-20 h-20 rounded-full object-cover"
                        />
                    ) : user.avatar ? (
                        <img
                            src={user.avatar}
                            alt="avatar"
                            className="w-20 h-20 rounded-full object-cover"
                        />
                    ) : (
                        <i className="bi bi-person-circle text-3xl"></i>
                    )}

                    <div>
                        <InputLabel htmlFor="avatar" value="Foto Profile" />
                        {/* file input */}
                        <TextInput
                            type="file"
                            id="avatar"
                            name="avatar"
                            className="mt-1 block w-full"
                            onChange={(e) => {
                                setData("avatar", e.target.files[0]);
                                previewImage(e);
                            }}
                        />
                        <InputError className="mt-2" message={errors.avatar} />
                    </div>
                </div>
                <div>
                    <InputLabel htmlFor="nama_lengkap" value="Nama Lengkap" />

                    <input
                        id="nama_lengkap"
                        type="text"
                        name="nama_lengkap"
                        className="mt-1 block w-full"
                        value={data.nama_lengkap}
                        onChange={(e) =>
                            setData("nama_lengkap", e.target.value)
                        }
                        required
                        isFocused 
                        autoComplete="nama_lengkap"
                    />

                    <InputError
                        className="mt-2"
                        message={errors.nama_lengkap}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <input
                        id="email"
                        type="email"
                        name="email"
                        className={`mt-1 block w-full ${
                            user.google_id ? "bg-gray-100" : ""
                        }`}
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        // tidak bisa diganti kalo ada google_id
                        disabled={user.google_id}
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                {user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            Email anda belum terverifikasi.
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Klik disini untuk verifikasi email.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                Link verifikasi telah dikirim ke email anda.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <button
                        type="submit"
                        disabled={processing}
                        className="btn btn-secondary"
                    >
                        Simpan
                    </button>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
