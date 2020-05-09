<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ABUser extends Model
{
    public $timestamps = false;
    protected $table = 'ab_user';

    protected $primaryKey = 'id';

    protected $fillable = ['id', 'ab_name', 'ab_password', 'ab_mail'];

    public function articles() {
        return $this->hasMany('App\ABArticle', 'ab_creator_id');
    }

    public function shoppingcart() {
        return $this->hasOne('App\ABShoppingcart', 'ab_creator_id');
    }
}
