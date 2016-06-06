 function Router() {
   this.routes = {};
   this.currentUrl = '';
 }
 Router.prototype.get = function(path, callback) {
   this.routes[path] = callback || function() {};
 };
 Router.prototype.refresh = function() {
   this.currentUrl = location.hash.slice(1) || '/';
   this.routes[this.currentUrl]();
 };
 Router.prototype.init = function() {
   window.addEventListener('load', this.refresh.bind(this), false);
   window.addEventListener('hashchange', this.refresh.bind(this), false);
 }
 var Router = new Router();
 Router.init();
 var content = document.querySelector('.container');
 // change Page anything
 function changeBgColor(color) {
   content.style.backgroundColor = color;
 }
 Router.get('/', function() {
   changeBgColor('white');
 });
 Router.get('/blue', function() {
   changeBgColor('blue');
 });
 Router.get('/green', function() {
   changeBgColor('green');
 });