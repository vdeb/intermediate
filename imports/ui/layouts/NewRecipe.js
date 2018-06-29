import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import { Recipes } from '../../api/recipes.js';
import './NewRecipe.html';

Template.NewRecipe.helpers({
        getRecipes() {
            return Recipes;
        },
    });﻿