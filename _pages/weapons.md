---
title: Weapons
body_class: page--weapons
---

<figure id="weapons">
    <table>
        <thead>
            <tr>
                <th> </th>
                <th class="center  stretch">Class</th>
                <th class="center  stretch">Range</th>
                <th class="center  stretch">Base Damage</th>
                <th class="center  stretch">Cost</th>
            </tr>
        </thead>
        <tbody>
            {%- for weapon in equipment_weapons -%}
                <tr>
                    <th>
                        {{ weapon.title }}{% if weapon.class != 'Ranged' and weapon.range %} <span class="nobold">†</span>{% endif %}
                    </th>
                    <td class="center">
                        {{ weapon.class | default: '—' }}
                    </td>
                    <td class="center">
                        {%- if weapon.range -%}
                            {{ weapon.range }} ft.
                        {%- else -%}
                            —
                        {%- endif -%}
                    </td>
                    <td class="center  mono">
                        {{ weapon.damage | default: '—' }}
                    </td>
                    <td class="center  mono">
                        {%- if weapon.cost and weapon.cost >= 1 -%}
                            <span style="color: gold;">{{ weapon.cost }} gold
                        {%- elsif weapon.cost -%}
                            <span style="color: silver;">{{ weapon.cost | times: 100 }} silver
                        {%- else -%}
                            —
                        {%- endif -%}
                    </td>
                </tr>
            {%- endfor -%}
        </tbody>
        <tfoot>
            <tr>
                <th class="nobold" colspan="5">† Designates a weapon as both melee and ranged.</th>
            </tr>
        </tfoot>
    </table>
</figure>
