<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ArticleController extends Controller
{
    function findArticles($search) {
        $articles = \App\ABArticle::where('ab_name', $search);
        return json_encode($articles);
    }
}
