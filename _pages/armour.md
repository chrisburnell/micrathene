---
title: Armour
body_class: page--armour
---

<figure id="armour">
    <table>
        <thead>
            <tr>
                <th> </th>
                <th class="center  stretch">Class</th>
                <th class="center  stretch">AC Bonus</th>
                <th class="center  stretch">Cost</th>
            </tr>
        </thead>
        <tbody>
            {%- for armour in equipment_armour -%}
                <tr>
                    <th>
                        {{ armour.title }}
                    </th>
                    <td class="center">
                        {{ armour.class }}{%- if armour.nonmetal %}, Non-metal{% endif -%}
                    </td>
                    <td class="center  mono">
                        {{ armour.bonus | default: '—' }}
                    </td>
                    <td class="center  mono">
                        {%- if armour.cost and armour.cost >= 1 -%}
                            <span style="color: gold;">{{ armour.cost }} gold
                        {%- elsif armour.cost -%}
                            <span style="color: silver;">{{ armour.cost | times: 100 }} silver
                        {%- else -%}
                            —
                        {%- endif -%}
                    </td>
                </tr>
            {%- endfor -%}
        </tbody>
    </table>
</figure>
