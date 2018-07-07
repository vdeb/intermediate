import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import { Recipes } from '../../api/recipes/recipes.js';
import './NewRecipe.html';

Template.NewRecipe.helpers({
        getRecipes() {
            return Recipes;
        },
    });﻿

Template.NewRecipe.events({
	'click .fa-close' : function() {
		Session.set('newRecipe', false);
	},
});