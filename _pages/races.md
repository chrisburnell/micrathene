---
title: Races
body_class: page--races
---

{%- for race in races -%}
    <figure>
        <table>
            <thead>
                <tr>
                    <th class="center  stretch" colspan="3">{{ race.title }}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Size</th>
                    <td class="nobold">{{ race.size_class }}</td>
                </tr>
                <tr>
                    <th>Speed</th>
                    <td class="nobold">{% if race.size_class == 'Small' %}25 ft. <span class="muted">/</span> 5 squares{% else %}30 ft. <span class="muted">/</span> 6 squares{% endif %}</td>
                </tr>
                <tr>
                    <th>Bonuses</th>
                    <td class="nobold">
                        <ul class="list">
                            {%- if race.strength_bonus -%}
                                <li>💪 Strength {% plusminus race.strength_bonus %}</li>
                            {%- endif -%}
                            {%- if race.dexterity_bonus -%}
                                <li>💨 Dexterity {% plusminus race.dexterity_bonus %}</li>
                            {%- endif -%}
                            {%- if race.mind_bonus -%}
                                <li>🧠 Mind {% plusminus race.mind_bonus %}</li>
                            {%- endif -%}
                            {%- if race.communication_bonus -%}
                                <li>🗣 Communication {% plusminus race.communication_bonus %}</li>
                            {%- endif -%}
                            {%- if race.knowledge_bonus -%}
                                <li>📖 Knowledge {% plusminus race.knowledge_bonus %}</li>
                            {%- endif -%}
                            {%- if race.physical_bonus -%}
                                <li>🏃‍♂️ Physical {% plusminus race.physical_bonus %}</li>
                            {%- endif -%}
                            {%- if race.subterfuge_bonus -%}
                                <li>🔎 Subterfuge {% plusminus race.subterfuge_bonus %}</li>
                            {%- endif -%}
                            {%- if race.survival_bonus -%}
                                <li>🍃 Survival {% plusminus race.survival_bonus %}</li>
                            {%- endif -%}
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </figure>
{%- endfor -%}
