import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './Recipes.html'
import './NewRecipe.js'
import './Recipe.js'

import { Recipes } from '../../api/recipes/recipes.js';

Template.Recipes.onCreated(function RecipestOnCreated() {
	var self = this;
	self.autorun(function() {
		self.subscribe('Recipes');
	});
	
});

Template.Recipes.helpers({
	recipes: ()=> {
		return Recipes.find({});
	},
});﻿

