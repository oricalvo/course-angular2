"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./home.component");
var about_component_1 = require("./about.component");
var contact_component_1 = require("./contact.component");
var notFound_component_1 = require("./notFound.component");
exports.routes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent,
    },
    {
        path: 'contact/:id',
        component: contact_component_1.ContactComponent,
        canActivate: [contact_component_1.ContactComponentGuard],
    },
    {
        path: '**',
        component: notFound_component_1.NotFoundComponent,
    },
];
