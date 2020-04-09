---
title: Classes
description: Who are you?
body_class: page--classes
---

{%- for class in classes -%}
    <figure>
        <table>
            <thead>
                <tr>
                    <th class="center  stretch" colspan="3">{{ class.title }}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Bonuses</th>
                    <td class="nobold">
                        <ul class="list">
                            {%- if class.communication_bonus -%}
                                <li>🗣 Communication {% plusminus class.communication_bonus %}</li>
                            {%- endif -%}
                            {%- if class.knowledge_bonus -%}
                                <li>📖 Knowledge {% plusminus class.knowledge_bonus %}</li>
                            {%- endif -%}
                            {%- if class.physical_bonus -%}
                                <li>🏃‍♂️ Physical {% plusminus class.physical_bonus %}</li>
                            {%- endif -%}
                            {%- if class.subterfuge_bonus -%}
                                <li>🔎 Subterfuge {% plusminus class.subterfuge_bonus %}</li>
                            {%- endif -%}
                            {%- if class.survival_bonus -%}
                                <li>🍃 Survival {% plusminus class.survival_bonus %}</li>
                            {%- endif -%}
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th>Proficiencies</th>
                    <td class="nobold">
                        <ul class="list">
                            {%- if class.light_armour -%}
                                <li>Light Armour</li>
                            {%- endif -%}
                            {%- if class.medium_armour -%}
                                <li>Medium Armour</li>
                            {%- endif -%}
                            {%- if class.heavy_armour -%}
                                <li>Heavy Armour</li>
                            {%- endif -%}
                            {%- if class.nonmetal_armour -%}
                                <li>Non-Metal Armour</li>
                            {%- endif -%}
                            {%- if class.shields -%}
                                <li>Shields</li>
                            {%- endif -%}
                            {%- if class.nonmetal_shields -%}
                                <li>Non-Metal Shields</li>
                            {%- endif -%}
                            {%- if class.buckler_shields -%}
                                <li>Bucklers</li>
                            {%- endif -%}
                            {%- if class.two_weapon_fighting -%}
                                <li>Two-Weapon Fighting</li>
                            {%- endif -%}
                            {%- if class.arcane_spells -%}
                                <li>Arcane Spellcasting</li>
                            {%- endif -%}
                            {%- if class.divine_spells -%}
                                <li>Divine Spellcasting</li>
                            {%- endif -%}
                            {%- if class.illusionist_spells -%}
                                <li>Illusionist Spellcasting</li>
                            {%- endif -%}
                            {%- if class.druid_spells -%}
                                <li>Druid Spellcasting</li>
                            {%- endif -%}
                        </ul>
                    </td>
                </tr>
                {%- if class.features -%}
                    {%- if class.title == 'Cleric' -%}
                        {%- assign replace_one = '(2 + Level + MIND)' -%}
                    {%- elsif class.title == 'Paladin' -%}
                        {%- assign replace_one = '(1 + Level ÷ 5)' -%}
                        {%- assign replace_two = '(Level × 2)' -%}
                    {%- endif -%}
                    <tr>
                        <th>Class Features</th>
                        <td class="nobold">
                            {%- for feature in class.features -%}
                                <div>{{ feature | replace: 'REPLACE_ONE', replace_one | replace: 'REPLACE_TWO', replace_two }}</div>
                            {%- endfor -%}
                        </td>
                    </tr>
                {%- endif -%}
            </tbody>
        </table>
    </figure>
{%- endfor -%}
