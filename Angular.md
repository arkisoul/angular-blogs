## Common angular terms
1. Workspace
2. Project
3. Modules
    a) Types of module based on functionality
        i) root module (most commonly the AppModule)
        ii) feature module
        iii) shared module
    b) Built-in modules
        i) CommonModule
        ii) FormsModule
        iii) ReactiveFormsModule 

## Module
Reference [here](https://angular.io/guide/architecture-modules)

## Component
.ts, .html, .css
Architecture Component [here](https://angular.io/guide/architecture-components)
Component definition [here](https://angular.io/guide/what-is-angular#components)

## Services
## Directives
Modifies the behaviour of an HTML element.

There are two types of directives
### Structural Directives
ngIf
ngFor
ngSwitch

### Attribute Directives
ngClass
ngStyle

### Routing
### Pipe

## Data binding
1. One way data binding - Using component class properties or/and methods in template provides one way data binding.
2. Two way data binding - Using input/form elements we can achieve two way data binding. The template and component class propery is in sync.

### Interpolation
One way data binding {{}}
### Event binding
We can attach events to an element. We can pass the data as well as params to the component class.
### Two data binding
using ngModel

ng generate module path/to/featuremodule --route feature --routing --module app.module 
ng g m todos --route todos --routing --module app.module

module app/root
    module dashboard
        module profile
        module medication
        module appointments
        module events