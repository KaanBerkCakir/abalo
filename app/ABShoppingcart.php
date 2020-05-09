<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ABShoppingcart extends Model
{
    public $timestamps = false;
    protected $table = 'ab_shoppingcart';

    protected $primaryKey = 'id';

    protected $fillable = ['id', 'ab_creator_id', 'ab_createdate'];

    public function creator() {
        return $this->belongsTo('App\ABUser', 'ab_creator_id');
    }

    public function items() {
        return $this->hasMany('App\ABShoppingcartItem', 'ab_shoppingcart_id');
    }
}
