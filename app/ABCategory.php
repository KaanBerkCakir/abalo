<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ABCategory extends Model
{
    public $timestamps = false;
    protected $table = 'ab_articlecategory';

    protected $primaryKey = 'id';

    protected $fillable = ['id', 'ab_name', 'ab_description', 'ab_parent'];

    public function parent() {
        return $this->belongsTo('App\ABCategory', 'ab_parent');
    }

    public function children() {
        return $this->hasMany('App\ABCategory', 'ab_parent');
    }

    public function articles() {
        return $this->belongsToMany('App\ABArticle','ab_article_has_articlecategory', 'id', 'ab_articlecategory_id');
    }
}
