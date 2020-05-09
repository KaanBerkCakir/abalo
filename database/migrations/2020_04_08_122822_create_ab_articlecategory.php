<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAbArticlecategory extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ab_articlecategory', function (Blueprint $table) {
            $table->bigIncrements('id')->comment('Primärschlüssel');
            $table->string('ab_name', 100)->unique()->comment('Name');
            $table->string('ab_description', 1000)->nullable()->comment('Beschreibung');
            $table->bigInteger('ab_parent')->nullable()->comment('Referenz auf die mögliche Elternkategorie.
Artikelkategorien sind hierarchisch organisiert. Eine Kategorie
kann beliebig viele Kindkategorien haben. Eine Kategorie kann
nur eine Elternkategorie besitzen.
NULL, falls es keine Elternkategorie gibt und es sich um eine
Wurzelkategorie handelt.');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ab_articlecategory');
    }
}
