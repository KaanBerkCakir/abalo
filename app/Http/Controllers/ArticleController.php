<?php

namespace App\Http\Controllers;

use App\ABUser;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    function findArticles($search) {
        $articles = \App\ABArticle::where('ab_name', 'ILIKE', '%'.$search.'%')->orderBy('id', 'ASC')->get();
        /*$res = [];
        foreach($articles as $elem){
            array_push($res, ['id' => $elem->id,
                                    'name' => $elem->ab_name,
                                    'price' => $elem->ab_price,
                                    'desc' => $elem->ab_description,
                                    'creator' => $elem->ab_creator_id,
                                    'date' => $elem->ab_createdate]);
        }*/
        return view('all_articles', ['articles' => $articles]);
    }

    function getArticles($input) {
        $articles = \App\ABArticle::where('ab_name', 'ILIKE', '%'.$input.'%')->orderBy('id', 'ASC')->get();
        return response()->json(['articles' => $articles]);
    }

    function getArticlesLimited($input, $limit, $offset) {
        if($limit < 1) return $this->getArticles($input);
        $articles = \App\ABArticle::where('ab_name', 'ILIKE', '%'.$input.'%')->orderBy('id', 'ASC')->skip($offset)->take($limit)->get();
        $amount = \App\ABArticle::where('ab_name', 'ILIKE', '%'.$input.'%')->orderBy('id', 'ASC')->count();
        return response()->json(['articles' => $articles, 'amount' => $amount]);
    }

    function getUserArticles ($usernmae) {
        $articles = \App\ABUser::where(['ab_name' => $usernmae])->first()->articles;
        return response()->json(['articles' => $articles]);
    }

    function getTrashedArticles($usernmae) {
        $trashed = \App\ABUser::where(['ab_name' => $usernmae])->first()->articles()->onlyTrashed()->get();
        return response()->json(['trashed' => $trashed]);
    }

    function createArticle(Request $request) {
        $name = $request['name'];
        if(!$name) {
            return response()->json(['message' => 'Es wurde leider kein Artikelname übergeben.']);
        }
        $price = $request['price'];
        if ($price < 1) {
            return response()->json(['message' => 'Du willst doch auch was dabei verdienen....']);
        }elseif($price > 500000){
            return response()->json(['message' => 'Wir sind doch nicht Krösus!']);
        }
        $desc = $request['desc'];
        $creator = $request['creator'];
        $date = date('Y-m-d H:i:s');
        $creator = \App\ABUser::select('id')->where('ab_name', $creator)->first();
        \App\ABArticle::create([
            'ab_name' => $name,
            'ab_price' => $price,
            'ab_description' => $desc,
            'ab_creator_id' => $creator->id,
            'ab_createdate' => $date
        ]);

        return response()->json(['message' => 'Der Artikel wurde erfolgreich hinzugefügt.']);
    }

    function articleForm() {
        return view('article_form');
    }

    function deleteArticle($id) {
        \App\ABArticle::find($id)->delete();
    }

    function restoreArticle($id) {
        \App\ABArticle::withTrashed()->find($id)->restore();
    }

    function removeArticle($id) {
        \App\ABArticle::withTrashed()->find($id)->forceDelete();
    }
}
