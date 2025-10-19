<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Stat;
use Illuminate\Http\Request;

class StatController extends Controller
{
    public function index()
    {
        return Stat::all();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'total_habits' => 'required|integer',
            'completed_today' => 'required|integer',
            'completion_rate' => 'required|numeric',
            'current_streak' => 'required|integer',
        ]);

        $stat = Stat::create($validated);
        return response()->json($stat, 201);
    }

    public function show($id)
    {
        return Stat::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $stat = Stat::findOrFail($id);
        $stat->update($request->all());
        return response()->json($stat);
    }

    public function destroy($id)
    {
        $stat = Stat::findOrFail($id);
        $stat->delete();

        return response()->json(['message' => 'Stat deleted successfully']);
    }
}
