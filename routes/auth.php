<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\GaleriController;
use App\Http\Controllers\KavlingController;
use App\Http\Controllers\KelolaProperti;
use App\Http\Controllers\PembiayaanController;
use App\Http\Controllers\TipeUnitController;
use App\Http\Controllers\VideoController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('guest')->group(function () {
    Route::get('register', [RegisteredUserController::class, 'create'])
                ->name('register');

    Route::post('register', [RegisteredUserController::class, 'store']);

    Route::get('login', [AuthenticatedSessionController::class, 'create'])
                ->name('login');

    Route::post('login', [AuthenticatedSessionController::class, 'store']);

    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
                ->name('password.request');

    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
                ->name('password.email');

    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
                ->name('password.reset');

    Route::post('reset-password', [NewPasswordController::class, 'store'])
                ->name('password.store');
});

Route::middleware('auth')->group(function () {
    Route::get('verify-email', EmailVerificationPromptController::class)
                ->name('verification.notice');

    Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
                ->middleware(['signed', 'throttle:6,1'])
                ->name('verification.verify');

    Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
                ->middleware('throttle:6,1')
                ->name('verification.send');

    Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
                ->name('password.confirm');

    Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

    Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
                ->name('logout');
});


Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('dashboard');
    Route::get('/manage_property', [KelolaProperti::class, 'index'])->name('manage_property');
    Route::get('/add-property', [KelolaProperti::class, 'create'])->name('add_property');
    Route::post('/add-property', [KelolaProperti::class, 'store'])->name('store_property');
    Route::delete('/delete-property/{properti}', [KelolaProperti::class, 'destroy'])->name('delete_property');
    Route::get('/edit-property/{properti}', [KelolaProperti::class, 'edit'])->name('edit_property');
    Route::post('/edit-property{properti}', [KelolaProperti::class, 'update'])->name('update_property');

    Route::post('/add-pembiayaan', [PembiayaanController::class, 'store'])->name('store_pembiayaan');
    Route::delete('/delete-pembiayaan/{pembiayaan}', [PembiayaanController::class, 'destroy'])->name('delete_pembiayaan');

    Route::post("/add-tipe-unit", [TipeUnitController::class, 'store'])->name('tipe_unit.store');
    Route::delete('/delete-tipe-unit/{tipeUnit}', [TipeUnitController::class, 'destroy'])->name('tipe-unit.destroy');
    Route::post('/edit-tipe-unit/{tipeUnit}', [TipeUnitController::class, 'update'])->name('tipe-unit.update');

    Route::post('/add-kavling', [KavlingController::class, 'store'])->name('kavling.store');
    Route::post('/edit-kavling/{kavling}', [KavlingController::class, 'update'])->name('kavling.update');
    Route::delete('/delete-kavling/{kavling}', [KavlingController::class, 'destroy'])->name('kavling.destroy');

    Route::post('/add-galeri', [GaleriController::class, 'store'])->name('galeri.store');
    Route::post('/edit-galeri/{galeri}', [GaleriController::class, 'update'])->name('galeri.update');
    Route::delete('/delete-galeri/{galeri}', [GaleriController::class, 'destroy'])->name('galeri.destroy');

    Route::post('/add-video', [VideoController::class, 'store'])->name('video.store');
    Route::post('/edit-video/{video}', [VideoController::class, 'update'])->name('video.update');
    

});
