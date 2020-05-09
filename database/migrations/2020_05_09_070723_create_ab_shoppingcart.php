<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAbShoppingcart extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ab_shoppingcart', function (Blueprint $table) {
            $table->bigIncrements('id')->comment('Primärschlüssel');
            $table->bigInteger('ab_creator_id')->comment('Referenz auf den Benutzer, dem der Warenkorb gehört');
            $table->timestamp('ab_createdate', 0)->comment('Zeitpunkt der Erstellung');

            $table->foreign('ab_creator_id')->references('id')->on('ab_user');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ab_shoppingcart');
    }
}
