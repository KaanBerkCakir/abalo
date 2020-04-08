<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ABArticle extends Model
{
    public $timestamps = false;
    protected $table = 'ab_article';

    protected $primaryKey = 'id';

    protected $fillable = ['id', 'ab_name', 'ab_price', 'ab_description', 'ab_creator_id', 'ab_createdate'];
}
