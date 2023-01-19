# webapp - skeleton

Using the monorepo approach supported by the Angular CLI:

[https://angular.io/cli/add](https://angular.io/cli/add)

## Create web applications by

- creating the ui components needed in the app;
- creating a demo page for each ui component showing all its variations;
- creating services in the data-module;
- creating the web app by using the components in the ui-components library and services in the data-modules library;

### Add a new page in the demo:

- create a new component in projects\demo\src\app\pages: `ng g c pages/logo --module=pages/pages.module --type=page  --project=demo`
- *Don't forget to add the component to the module's exports: array*
- add a link to the new page in `projects\demo\src\app\layout\components\layout.component.ts`
- add a new route pointing to the page in `projects\demo\src\app\app-routing.module.ts`

### Add a new component 'toggle' to the ui-components library (add  --dry-run to check out)

- add module: `ng g m components/toggle --project=ui-components`
- add component: `ng g c components/toggle --project=ui-components`
- update index file `projects\ui-components\src\index.ts`
