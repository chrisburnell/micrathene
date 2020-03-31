---
title: Races
body_class: page--races
---

<div class="h-feed" id="races">
    <ul class="shelf" role="list">
        {%- for race in races -%}
            <li role="listitem" class="h-entry">
                <h2 class="delta">{{ race.title }}</h2>
                {%- if class.communication_bonus -%}
                    <br>Communication Bonus: {{ class.communication_bonus }}
                {%- endif -%}
                {%- if class.knowledge_bonus -%}
                    <br>Knowledge Bonus: {{ class.knowledge_bonus }}
                {%- endif -%}
                {%- if class.physical_bonus -%}
                    <br>Physical Bonus: {{ class.physical_bonus }}
                {%- endif -%}
                {%- if class.subterfuge_bonus -%}
                    <br>Subterfuge Bonus: {{ class.subterfuge_bonus }}
                {%- endif -%}
                {%- if class.survival_bonus -%}
                    <br>Survival Bonus: {{ class.survival_bonus }}
                {%- endif -%}
            </li>
        {%- endfor -%}
    </ul>
</div>
