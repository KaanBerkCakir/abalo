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
            $table->bigIncrements('id')
                ->comment('Primärschlüssel');

            $table->bigInteger('ab_articlecategory_id')
                ->comment('Referenz auf eine Artikelkategorie');

            $table->bigInteger('ab_article_id')
                ->unique()
                ->comment('Referenz auf einen Artikel artikelkategorie_id, artikel_id');

            $table->foreign('ab_articlecategory_id')
                ->references('id')
                ->on('ab_articlecategory')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->foreign('ab_article_id')
                ->references('id')
                ->on('ab_article')
                ->onDelete('cascade')
                ->onUpdate('cascade');
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
