<form method="POST"
action="http://localhost:8000/api/article/create"
onsubmit="return submitForm(this);" >
<label for="aName">Artikel Name:</label><br>
<input type="text" id="aName" name="name" required><br>
<label for="aPreis">Preis in Euro:</label><br>
<input type="number" id="aPreis" name="price" min=1><br>
<label for="aBeschreibung">Artikel Beschreibung:</label><br>
<textarea name="desc" rows="10" cols="30"></textarea><br>
<input id="hidden-input" type="hidden" name="creator" value="">
<input type="submit" value="Submit"/>
</form>
