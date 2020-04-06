<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ABUser extends Model
{
    public $timestamps = false;
    protected $table = 'ab_user';

    protected $primaryKey = 'id';

    protected $fillable = ['id', 'ab_name', 'ab_password', 'ab_mail'];
}
