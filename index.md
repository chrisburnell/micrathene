---
layout: default
body_class: page--home
---

<h2 class="delta">Characters</h2>

<div class="h-feed" id="characters">
    <ul class="shelf" role="list">
        {%- for character in collections.characters -%}
            <li role="listitem" class="h-entry">
                <div class="h-cite">
                    <h2 class="delta">
                        <a href="{{ character.url }}" class="u-url">
                            <cite class="p-name">{{ character.data.title }}</cite>
                        </a>
                    </h2>
                </div>
                <div>
                    Level {{ character.data.hitpoints.size | default: 1 | at_most: 20 }}
                    {% if character.data.race %}{{ character.data.race }}{% endif %}
                    {% if character.data.class %}{{ character.data.class }}{% endif %}
                </div>
            </li>
        {%- endfor -%}
    </ul>
</div>
