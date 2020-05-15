<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ABArticle extends Model
{
    public $timestamps = false;
    protected $table = 'ab_article';

    protected $primaryKey = 'id';

    protected $fillable = ['id', 'ab_name', 'ab_price', 'ab_description', 'ab_creator_id', 'ab_createdate'];

    public function creator() {
        return $this->belongsTo('App\ABUser', 'ab_creator_id');
    }

    public function categories() {
        return $this->belongsToMany('App\ABCategory', 'ab_article_has_articlecategory',  'ab_article_id', 'ab_articlecategory_id');
    }

    public function cartItem() {
        return $this->hasMany('App\ABShoppingcartItem', 'ab_article_id');
    }
}
