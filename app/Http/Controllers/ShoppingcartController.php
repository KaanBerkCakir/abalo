<?php

namespace App\Http\Controllers;

use App\ABUser;
use Illuminate\Http\Request;

class ShoppingcartController extends Controller
{
    function getCart($creator) {
        $cart = \App\ABUser::where('ab_name', $creator)->first()->shoppingcart()->first();
        if(!$cart) {
            $date = date('Y-m-d H:i:s');
            $user = \App\ABUser::where('ab_name', $creator)->select(['id'])->first();
            $cart = \App\ABShoppingcart::create([
                'ab_creator_id' => $user->id,
                'ab_createdate' => $date]);
        }
        return json_encode($cart);
    }

    function addArticle($cart, $article) {

    }

    function deleteArticle($cart, $article) {

    }
}
