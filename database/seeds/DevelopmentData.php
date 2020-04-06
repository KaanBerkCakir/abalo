<?php

use Illuminate\Database\Seeder;

class DevelopmentData extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $userCSV = fopen(base_path() . '/src/user.csv', 'r');
        while(($user = fgetcsv($userCSV, 1000, ":")) !== FALSE) {
            \App\ABUser::create($user);
        }

        $articleCSV = fopen(base_path() . '/src/article.csv', 'r');
        while(($article = fgetcsv($articleCSV, 1000, ":")) !== FALSE) {
            \App\ABArticle::create($article);
        }

        $catCSV = fopen(base_path() . '/src/user.csv', 'r');
        while(($category = fgetcsv($catCSV, 1000, ":")) !== FALSE) {
            \App\ABCategory::create($category);
        }
    }
}
