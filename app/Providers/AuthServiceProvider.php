<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Notifications\Messages\MailMessage;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        //
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        //

        VerifyEmail::toMailUsing(function ($notifiable, string $url) {
            return (new MailMessage)
            ->subject('Verifikasi Email Anda')
            ->greeting('Hello!')
            ->line('Terima kasih telah mendaftar! Mohon klik tombol di bawah ini untuk verifikasi email Anda.')
            ->action('Verifikasi Email', $url)
            ->line('Jika Anda tidak mendaftar, abaikan pesan ini.')
            ->salutation('Regards, ' . config('app.name'));
        });
    }
}
