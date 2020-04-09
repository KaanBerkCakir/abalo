<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ArticleController extends Controller
{
    function findArticles($search) {
        $articles = \App\ABArticle::where('ab_name', 'ILIKE', '%'.$search.'%')->get();
        $res = [];
        foreach($articles as $elem){
            array_push($res, ['id' => $elem->id,
                                    'name' => $elem->ab_name,
                                    'price' => $elem->ab_price,
                                    'desc' => $elem->ab_description,
                                    'creator' => $elem->ab_creator_id,
                                    'date' => $elem->ab_createdate]);
        }
        return array(['articles' => $res]);
    }
}
