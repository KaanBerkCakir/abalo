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
        fgetcsv($userCSV);
        while(($user = fgetcsv($userCSV, 1000, ";")) !== FALSE) {
            \App\ABUser::create(['id' => $user[0], 'ab_name' => $user[1], 'ab_password' => $user[2], 'ab_mail' => $user[3]]);
        }

        $articleCSV = fopen(base_path() . '/src/articles.csv', 'r');
        fgetcsv($articleCSV);
        while(($article = fgetcsv($articleCSV, 1000, ";")) !== FALSE) {
            \App\ABArticle::create(['id' => $article[0], 'ab_name' => $article[1], 'ab_price' => $article[2], 'ab_description' => $article[3], 'ab_creator_id' => $article[4], 'ab_createdate' => $article[5]]);
        }

        $catCSV = fopen(base_path() . '/src/articlecategory.csv', 'r');
        fgetcsv($catCSV);
        while(($category = fgetcsv($catCSV, 1000, ";")) !== FALSE) {
            \App\ABCategory::create(['id' => $category[0], 'ab_name' => $category[1], 'ab_parent' => $category[2] == 'NULL' ? NULL : $category[2]]);
        }
    }
}
