<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Habit;
use Illuminate\Http\Request;

class HabitController extends Controller
{
    public function index()
    {
        return Habit::with('logs')->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'title' => 'required|string|max:150',
            'description' => 'nullable|string',
            'frequency' => 'required|string',
        ]);

        $habit = Habit::create($validated);
        return response()->json($habit, 201);
    }

    public function show($id)
    {
        return Habit::with('logs')->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $habit = Habit::findOrFail($id);
        $habit->update($request->only(['title', 'description', 'frequency', 'streak', 'completed']));
        return response()->json($habit);
    }

    public function destroy($id)
    {
        $habit = Habit::findOrFail($id);
        $habit->delete();

        return response()->json(['message' => 'Habit deleted successfully']);
    }
}
