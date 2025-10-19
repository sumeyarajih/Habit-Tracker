<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\HabitController;
use App\Http\Controllers\Api\HabitLogController;
use App\Http\Controllers\Api\StatController;
use App\Http\Controllers\Api\QuoteController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
// Habits
Route::apiResource('habits', HabitController::class);

// Habit Logs
Route::apiResource('habit-logs', HabitLogController::class);

// Stats
Route::apiResource('stats', StatController::class);

// Quotes
Route::get('/quotes/random', [QuoteController::class, 'random']);
Route::apiResource('quotes', QuoteController::class)->except(['show', 'update']);

// Protected routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/profile', [AuthController::class, 'profile']);
});