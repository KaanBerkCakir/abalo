<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CategoryController extends Controller
{
    function getAll()
    {
        $categories = \App\ABCategory::all();
        return json_encode($categories);
    }

    function showAll()
    {
        $categories = \App\ABCategory::all()->whereNull('ab_parent');
        $res = [];
        foreach ($categories as $parent) {
            $children = $parent->children()->select(['ab_name'])->get();
            array_push($res, array('parent' => $parent->ab_name, 'children' => $children));
        }
        return view('all_categories', ['categoryGroups' => $res, 'colors' => ['backBlue', 'backGreen', 'backRed', 'backYellow']]);
//        return json_encode($res[0])->parent;
    }
}
