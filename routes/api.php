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

Route::prefix('category')->group(function () {
    Route::get('all', 'CategoryController@getAll');
});

Route::prefix('article')->group(function () {
    Route::get('find/{search}', 'ArticleController@findArticles');
    Route::post('create', 'ArticleController@createArticle');
    Route::delete('delete/{id}', 'ArticleController@deleteArticle');
});
