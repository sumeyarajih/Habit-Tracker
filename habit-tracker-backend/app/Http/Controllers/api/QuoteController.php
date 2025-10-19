<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Quote;
use Illuminate\Http\Request;

class QuoteController extends Controller
{
    public function index()
    {
        return Quote::all();
    }

    public function random()
    {
        return Quote::inRandomOrder()->first();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'text' => 'required|string',
            'author' => 'nullable|string|max:100',
        ]);

        $quote = Quote::create($validated);
        return response()->json($quote, 201);
    }

    public function destroy($id)
    {
        $quote = Quote::findOrFail($id);
        $quote->delete();

        return response()->json(['message' => 'Quote deleted successfully']);
    }
}
