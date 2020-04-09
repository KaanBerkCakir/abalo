<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAbArticleHasArticlecategory extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ab_article_has_articlecategory', function (Blueprint $table) {
            $table->increments('id')->comment('Primärschlüssel');
            $table->integer('ab_articlecategory_id')->comment('Referenz auf eine Artikelkategorie');
            $table->integer('ab_article_id')->comment('Referenz auf einen Artikel artikelkategorie_id, artikel_id');

            $table->foreign('ab_articlecategory_id')->references('id')->on('ab_articlecategory');
            $table->foreign('ab_article_id')->references('id')->on('ab_article');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ab_article_has_articlecategory');
    }
}
