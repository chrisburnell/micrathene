---
list_priority: true
title: Example
description: Description


##
# CHARACTER CREATION
# Enter these once.
##
race: Dwarf
class: Ranger
strength_rolled: 10
dexterity_rolled: 10
mind_rolled: 10


##
# CLASS/RACE/LEVEL UPGRADES
# Enter these when your class or race requires it and as you level.
##
# Every 3 levels, add 1 Stat to this array (6 at Level 18):
# STR, DEX, MIND
stat_bonuses: []
# Every Level except first for which you automatically get a 6, add the result
# of 1d6 to this array (20 at Level 20):
hitpoints: [6]


##
# GAMEPLAY
# Enter these as you play.
##
temporary_hitpoints: 0
hitpoints_lost: 0
gold: 120
equipment:
  - name: Leather Armour
    equipped: true
  - name: Buckler
    equipped: true
  - name: Rapier
    equipped: true
  - name: Thieves Tools
---
