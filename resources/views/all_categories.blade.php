<div class="row al-s-stretch">
    @foreach($categoryGroups as $index => $parent)
        <div class="cat-card column {{$colors[$index%4]}}">
            <div class="cat-card-header al-s-center">{{$parent['parent']}}</div>
            <div class="cat-card-content column">
                @foreach($parent['children'] as $child)
                    <span>{{$child}}</span>
                @endforeach
            </div>
        </div>
    @endforeach
</div>
