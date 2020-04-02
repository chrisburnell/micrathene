---
draft: true
list_priority: true
title: Example
description: Description


##
# CHARACTER CREATION
# Enter these once.
##
race: Half-Elf
class: Bard
strength_rolled: 10
dexterity_rolled: 10
mind_rolled: 10


##
# CLASS/RACE/LEVEL UPGRADES
# Enter these when your class or race requires it and as you level.
##
# If you picked Half-Elf, enter 2 skills:
# [Communication, Knowledge, Physical, Subterfuge, (Survival if Druid/Ranger)]
half_elf_skills: [Knowledge, Physical]
# If you picked Bard, at Level 6, enter a Spell list:
# Illusionist, Druid
bard_spell_list: Illusionist
# If you picked a Spellcaster, at Level 1 and every 2 Levels thereafter (9 at
# Level 20), enter a Spell from your highest level Spells to specialise in:
spell_specialisations: [Magic Missile]
# Every 3 levels, add 1 Stat to this array (6 at Level 18):
# STR, DEX, MIND
stat_bonuses: [MIND, MIND, MIND, MIND, MIND, MIND]
# Every Level except first for which you automatically get a 6, add the result
# of 1d6 to this array (20 at Level 20):
hitpoints: [6, 5, 4, 3, 2, 1]


##
# GAMEPLAY
# Enter these as you play.
##
temporary_hitpoints: 0
hitpoints_lost: 0
hitpoints_spent: 0 # Use if you're a Spellcaster
gold: 120
equipment:
  - name: Leather Armour
    equipped: true
  - name: Buckler
    equipped: true
  - name: Rapier
    equipped: true
  - name: Light Hammer
  - name: Hand Crossbow
  - name: Net
  - name: Thieves Tools
---
