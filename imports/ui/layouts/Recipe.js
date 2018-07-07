import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import { Recipes } from '../../api/recipes/recipes.js';
import './Recipe.html';

Template.Recipe.onCreated(function(){
	this.editMode = new ReactiveVar(false);
	//this.editMode.set(false);
});

Template.Recipe.events({
	'click .toggle-menu': function(){
		console.log('click');
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
	},
	'click .fa-trash' : function(){
		Meteor.call('deleteRecipe', this._id)
	},
	'click .fa-pencil' : function(event, template){
		template.editMode.set(!template.editMode.get());
	},
});

Template.Recipe.helpers({
        getRecipes() {
            return Recipes;
        },
        updateRecipeId : function() {
            return this._id;
        },
        editMode : function() {
        	return Template.instance().editMode.get();
        }
    });﻿