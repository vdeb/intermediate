import './ShoppingList.html'

import { Recipes } from '../../api/recipes/recipes.js';

Template.ShoppingList.onCreated(function RecipestOnCreated() {
	var self = this;
	self.autorun(function() {
		self.subscribe('Recipes');
	});
	
});

Template.ShoppingList.helpers({
	shoppingList: ()=> {
		return Recipes.find({inMenu: true});
	},
});﻿