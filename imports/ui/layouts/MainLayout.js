import { Template } from 'meteor/templating';

import './MainLayout.html'
import './Recipes.js'

import { Recipes } from '../../api/recipes/recipes.js';

Template.MainLayout.onCreated(function MainLayoutOnCreated() {
	Meteor.subscribe('Recipes');
});