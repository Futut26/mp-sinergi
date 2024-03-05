<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\KonsumenController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
*/

Route::get('/', function () {
    return Inertia::render('User/index', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});



Route::get('/auth/google', [AuthenticatedSessionController::class, 'redirectToGoogle'])->name('login.google');
Route::get('/auth/google/callback', [AuthenticatedSessionController::class, 'handleGoogleCallback']);


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::post('/profile/{user}', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/personal-data', [KonsumenController::class, 'edit'])->name('personal-data.edit');
    Route::post('/personal-data', [KonsumenController::class, 'update'])->name('personal-data.update');
    Route::delete('/personal-data', [KonsumenController::class, 'destroy'])->name('personal-data.destroy');
});



require __DIR__.'/auth.php';

