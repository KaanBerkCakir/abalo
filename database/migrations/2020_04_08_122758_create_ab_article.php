<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAbArticle extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ab_article', function (Blueprint $table) {
            $table->increments('id')->comment('Primärschlüssel');
            $table->string('ab_name', 80)->comment('Name');
            $table->integer('ab_price')->comment('Preis in Cent');
            $table->string('ab_description', 1000)->comment('Beschreibung, die die Güte oder die Beschaffenheit näher
darstellt. Wird durch den „Ersteller“ (Benutzer) gepflegt');
            $table->integer('ab_creator_id')->comment('Referenz auf den Benutzer, der den Artikel erstellt hat und
verkaufen möchte');
            $table->foreign('ab_creator_id')->references('id')->on('ab_user');
            $table->timestamp('ab_createdate', 0)->comment('Zeitpunkt der Erstellung des Artikels');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ab_article');
    }
}
