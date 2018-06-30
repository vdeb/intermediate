import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { Recipes } from '../../api/recipes/recipes.js';

import './RecipeSingle.html'

Template.RecipeSingle.onCreated(function() {
	var self = this;
	self.autorun(function() {
		var id = FlowRouter.getParam('id');
		self.subscribe('singleRecipe',id);
	});
	
});

Template.RecipeSingle.helpers({
        recipe: ()=> {
        	var id = FlowRouter.getParam('id');
            return Recipes.findOne({_id: id});
        },
    });﻿