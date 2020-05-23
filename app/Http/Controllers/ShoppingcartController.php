<?php

namespace App\Http\Controllers;

use App\ABUser;
use Illuminate\Http\Request;

class ShoppingcartController extends Controller
{
    function getCart($creator)
    {
        $cart = \App\ABUser::where('ab_name', $creator)->first()->shoppingcart()->first();
        if (!$cart) {
            $date = date('Y-m-d H:i:s');
            $user = \App\ABUser::where('ab_name', $creator)->select(['id'])->first();
            $cart = \App\ABShoppingcart::create([
                'ab_creator_id' => $user->id,
                'ab_createdate' => $date]);
        }
        return response()->json(['cart' => $cart]);
    }

    function addArticle($cart, $article)
    {
        $date = date('Y-m-d H:i:s');
        \App\ABShoppingcartItem::create([
            'ab_shoppingcart_id' => $cart,
            'ab_article_id' => $article,
            'ab_createdate' => $date
        ]);

        return $this->getArticles($cart);
    }

    function deleteArticle($cart, $article)
    {
        \App\ABShoppingcartItem::where([
            ['ab_shoppingcart_id', '=', $cart],
            ['ab_article_id', '=', $article],
        ])->delete();

        return $this->getArticles($cart);
    }

    function getArticles($cartId)
    {
        $items = \App\ABShoppingcart::find($cartId)->items()->get();
        $res = [];
        foreach ($items as $item) {
            array_push($res, $item->article()->first());
        }
        return response()->json(['articles' => $res]);
    }
}
