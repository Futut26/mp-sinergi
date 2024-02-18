<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Laravel\Socialite\Facades\Socialite;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */

    public function redirectToGoogle(): RedirectResponse
    {
        return Socialite::driver('google')->redirect();

    }

    public function handleGoogleCallback(): RedirectResponse
    {
        $user = Socialite::driver('google')->stateless()->user();
        $finduser = User::where('google_id', $user->id)->first();
        if($finduser){
            Auth::login($finduser);
            return redirect()->intended('/');
        }else{
            $newUser = User::create([
                'nama_lengkap' => $user->name,
                'email' => $user->email,
                'google_id'=> $user->id,
                'password' => encrypt('123456dummy'),
                'email_verified_at' => now(),
                'role_id' => '1',
                'avatar' => $user->avatar,
                'status' => 'aktif',
            ]);

            $newUser->konsumen()->create([
                'user_id' => $newUser->id,
            ]);

            Auth::login($newUser);
            return redirect()->intended('/');
        }
    }


    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();
         if (Auth::user()->role->nama_role == 'staff' || Auth::user()->role->nama_role == 'marketing' || Auth::user()->role->nama_role == 'pimpinan') {

            // redirect to /dashboard
            return redirect()->intended(RouteServiceProvider::ADMIN);

        } else {
            return redirect()->intended(RouteServiceProvider::HOME);
        }
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
