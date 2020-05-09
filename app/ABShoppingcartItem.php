<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ABShoppingcartItem extends Model
{
    public $timestamps = false;
    protected $table = 'ab_shoppingcart_item';

    protected $primaryKey = 'id';

    protected $fillable = ['id', 'ab_shoppingcart_id', 'ab_article_id', 'ab_createdate'];

    public function shoppingcart() {
        return $this->belongsTo('App\ABShoppingcart', 'ab_shoppingcart_id');
    }

    public function articles() {
        return $this->hasMany('App\ABArticle', 'ab_article_id');
    }
}
