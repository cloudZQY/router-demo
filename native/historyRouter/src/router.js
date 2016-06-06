 function Router() {
     this.routes = {};
     this.currentUrl = '';
 }
 Router.prototype.get = function(path, callback) {
     this.routes[path] = callback || function() {};
 };
 Router.prototype.refresh = function() {
     this.currentUrl = location.pathname.replace(/^\/|\/$/g,'');
     this.routes[this.currentUrl]();
 };
 Router.prototype.init = function() {
     window.addEventListener('load', this.refresh.bind(this), false);
     window.addEventListener('popstate', this.refresh.bind(this), false);
 }
 window.Router = new Router();
 window.Router.init();
 var content = document.querySelector('.container');
 // change Page anything
 function changeBgColor(color) {
     content.style.backgroundColor = color;
 }
 Router.get('native/historyRouter/white', function() {
     changeBgColor('white');
 });
 Router.get('native/historyRouter/blue', function() {
     changeBgColor('blue');
 });
 Router.get('native/historyRouter/green', function() {
     changeBgColor('green');
 });

document.addEventListener('click',function(event){
     if (event.target.tagName === 'A') {
          event.preventDefault();
          window.history.pushState(null,null,event.target.href);
          Router.routes[location.pathname.slice(1)]();
     }
})