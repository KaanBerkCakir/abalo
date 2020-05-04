<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('application.js', function() {
    $res = response()->file('../public/js/application.js');
    $res->headers->set('Content-Type', 'application/javascript');
    return $res;
});

Route::get('application.css', function() {
    $res = response()->file('../public/css/application.css');
    $res->headers->set('Content-Type', 'text/css');
    return $res;
});

Route::get('cookie.js', function() {
    $res = response()->file('../public/js/cookieConsent.js');
    $res->headers->set('Content-Type', 'application/javascript');
    return $res;
});

Route::get('cookie.css', function() {
    $res = response()->file('../public/css/cookieConsent.css');
    $res->headers->set('Content-Type', 'text/css');
    return $res;
});

Route::prefix('authentification')->group(function () {
    Route::get('login', 'AuthController@login')->name('login');
    Route::get('logout', 'AuthController@logout')->name('logout');
    Route::get('isloggedin', 'AuthController@isloggedin')->name('haslogin');
});

Route::prefix('article')->group(function () {
    Route::get('form', 'ArticleController@articleForm');
    Route::get('find/{search}', 'ArticleController@findArticles');
});

Route::prefix('category')->group(function () {
    Route::get('all', 'CategoryController@showAll');
});
