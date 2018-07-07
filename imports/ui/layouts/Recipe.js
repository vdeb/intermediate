import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import { Recipes } from '../../api/recipes/recipes.js';
import './Recipe.html';

Template.Recipe.events({
	'click .toggle-menu': function(){
		console.log('click');
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
	},
	'click .fa-trash' : function(){
		Meteor.call('deleteRecipe', this._id)
	},
	'click .fa-pencil' : function(){
		Session.set('editMode', !Session.get('editMode'));
	},
});

Template.Recipe.helpers({
        getRecipes() {
            return Recipes;
        },
        updateRecipeId : function() {
            return this._id;
        },
    });﻿