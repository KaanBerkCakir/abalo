<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAbShoppingcartItem extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ab_shoppingcart_item', function (Blueprint $table) {
            $table->bigIncrements('id')
                ->comment('Primärschlüssel');

            $table->bigInteger('ab_shoppingcart_id')
                ->comment('Referenz auf den Warenkorb');

            $table->bigInteger('ab_article_id')
                ->comment('Referenz auf den Artikel');

            $table->timestamp('ab_createdate', 0)
                ->comment('Zeitpunkt der Erstellung');

            $table->foreign('ab_shoppingcart_id')
                ->references('id')
                ->on('ab_shoppingcart')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->foreign('ab_article_id')
                ->references('id')
                ->on('ab_article')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->unique(['ab_shoppingcart_id', 'ab_article_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ab_shoppingcart_item');
    }
}
