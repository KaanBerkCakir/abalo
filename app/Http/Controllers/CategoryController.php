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
        $categories = \App\ABCategory::all();
        $res = [];
        $name = '';
        $tmp = [];
        foreach ($categories as $index => $elem) {
            if ($elem->ab_parent) {
                array_push($tmp, $elem->ab_name);
            } else {
                if ($index > 0) {
                    array_push($res, array('parent' => $name, 'children' => $tmp));
                }
                $name = $elem->ab_name;
                $tmp = [];
            }
        }
        array_push($res, array('parent' => $name, 'children' => $tmp));
        return view('all_categories', ['categoryGroups' => $res, 'colors' => ['backBlue', 'backGreen', 'backRed', 'backYellow']]);
//        return json_encode($res[0])->parent;
    }
}
