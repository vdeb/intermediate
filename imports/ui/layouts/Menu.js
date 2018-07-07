import './Menu.html';

import { Recipes } from '../../api/recipes/recipes.js';

Template.Menu.onCreated(function RecipestOnCreated() {
	var self = this;
	self.autorun(function() {
		self.subscribe('Recipes');
	});
	
});

Template.Menu.helpers({
	recipes: ()=> {
		return Recipes.find({inMenu: true});
	},
});﻿