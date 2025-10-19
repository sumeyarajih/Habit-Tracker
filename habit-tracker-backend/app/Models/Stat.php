<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stat extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'total_habits',
        'completed_today',
        'completion_rate',
        'current_streak',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
