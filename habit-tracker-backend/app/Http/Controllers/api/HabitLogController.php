<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\HabitLog;
use Illuminate\Http\Request;

class HabitLogController extends Controller
{
    public function index()
    {
        return HabitLog::with('habit')->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'habit_id' => 'required|exists:habits,id',
            'date' => 'required|date',
            'completed' => 'required|boolean',
        ]);

        $log = HabitLog::create($validated);
        return response()->json($log, 201);
    }

    public function show($id)
    {
        return HabitLog::with('habit')->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $log = HabitLog::findOrFail($id);
        $log->update($request->only(['date', 'completed']));
        return response()->json($log);
    }

    public function destroy($id)
    {
        $log = HabitLog::findOrFail($id);
        $log->delete();

        return response()->json(['message' => 'Habit log deleted successfully']);
    }
}
