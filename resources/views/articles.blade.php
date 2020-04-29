@if(count($articles) > 0)
    <table>
        <tr id="head">
            <th>Artikel-Id</th>
            <th>Name</th>
            <th>Beschreibung</th>
            <th>Erstellt am</th>
            <th>Preis</th>
            <th>Wk</th>
        </tr>
        @foreach($articles as $index => $elem)
            <tr>
                <td>{{$elem->id}}</td>
                <td>{{$elem->ab_name}}</td>
                <td>{{$elem->ab_description}}</td>
                <td>{{$elem->ab_createdate}}</td>
                <td>{{$elem->ab_price}}</td>
                <td><button onclick="handleAdd($event, {{$index}})">Add</button></td>
            </tr>
        @endforeach
    </table>
@else
    Es wurden keine Artikel gefunden.
@endif
