<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json([
        'message' => 'Habit Tracker API is running!',
        'version' => '1.0.0',
    ]);
});

Route::get('/test', function () {
    return response()->json([
        'status' => 'success',
        'message' => 'API is working!',
        'timestamp' => now(),
    ]);
});

// Fallback route for undefined routes
Route::fallback(function () {
    return response()->json([
        'message' => 'Route not found. Please check the API documentation.',
        'available_endpoints' => [
            'GET /' => 'API status',
            'GET /test' => 'Test endpoint',
            'POST /api/register' => 'User registration',
            'POST /api/login' => 'User login',
        ]
    ], 404);
});