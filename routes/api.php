<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('categories')->group(function () {
    Route::get('', 'CategoryController@getAll');
});

Route::prefix('articles')->group(function () {
    Route::get('{input}', 'ArticleController@getArticles');
    Route::get('{input}/limit/{limit}/offset/{offset}', 'ArticleController@getArticlesLimited');
    Route::post('', 'ArticleController@createArticle');
    Route::delete('{id}', 'ArticleController@deleteArticle');
});

Route::prefix('shoppingcarts')->group(function () {
    Route::get('{creator}', 'ShoppingcartController@getCart');
    Route::delete('{cart}', 'ShoppingcartController@deletCart');
    Route::get('{cart}/articles', 'ShoppingcartController@getArticles');
    Route::post('{cart}/articles/{article}', 'ShoppingcartController@addArticle');
    Route::delete('{cart}/articles/{article}', 'ShoppingcartController@deleteArticle');
});
