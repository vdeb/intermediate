import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './Recipes.html'
import './NewRecipe.js'
import './Recipe.js'

import { Recipes } from '../../api/recipes/recipes.js';

Template.Recipes.helpers({
        recipes: ()=> {
            return Recipes.find({});
        },
    });﻿