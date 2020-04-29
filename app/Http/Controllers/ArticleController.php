<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ArticleController extends Controller
{
    function findArticles($search) {
        $articles = \App\ABArticle::where('ab_name', 'ILIKE', '%'.$search.'%')->get();
        /*$res = [];
        foreach($articles as $elem){
            array_push($res, ['id' => $elem->id,
                                    'name' => $elem->ab_name,
                                    'price' => $elem->ab_price,
                                    'desc' => $elem->ab_description,
                                    'creator' => $elem->ab_creator_id,
                                    'date' => $elem->ab_createdate]);
        }*/
        return json_encode($articles);
    }

    function createArticle(Request $request) {
        $id = $request['id'];
        $name = $request['name'];
        $price = $request['price'];
        $desc = $request['desc'];
        $creator = $request['creator'];
        $date = date('Y-m-d H:i:s');
        \App\ABArticle::create([
            'id' => $id,
            'ab_name' => $name,
            'ab_price' => $price,
            'ab_description' => $desc,
            'ab_creator_id' => $creator,
            'ab_createdate' => $date
        ]);
    }
}
