<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CategoryController extends Controller
{
    function getAll() {
        $categories = \App\ABCategory::all();
        return json_encode($categories);
    }
}
