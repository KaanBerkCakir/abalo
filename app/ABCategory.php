<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ABCategory extends Model
{
    public $timestamps = false;
    protected $table = 'ab_articlecategory';

    protected $primaryKey = 'id';

    protected $fillable = ['id', 'ab_name', 'ab_description', 'ab_parent'];
}
