# PetAdopt

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.1.

This Angular app is made out of three components. Home, Pets, and Adoptions page. Click on any of the pets on the adoptions page opens up a page with further details. The app contains filters (sex and category) and also sort options. The adoption form which is consisted out of personal info (name, surname, and contact) can be found in the Pet details section. Form validation is also implemented. Once you submit a request for adoption there is a post request on the server and you get transferred to the Adoptions page by router, where all adoptions are listed in a table. By clicking the approve button, a delete request is sent to the server and the information about that specific adoption is deleted as the pet is adopted.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
