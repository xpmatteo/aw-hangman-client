

test('remaining count initial value', function() {
	var p = new Prisoner('paperino');
	equal(p.remaining(), 18);
});

test('remaining count after a guess', function() {
	var p = new Prisoner('paperino');
	p.guess('x');

	equal(p.remaining(), 17);
 });

 test('remaining count after two guesses', function() {
	var p = new Prisoner('paperino');
	p.guess('x');
	p.guess('y');

	equal(p.remaining(), 16);
});



 test('new prisoner', function() {
   var p = new Prisoner('pippo');

   deepEqual(p.misses(), []);
   deepEqual(p.hits(), []);
   equal(p.display(), '*****');
 });

 test('miss', function() {
   var p = new Prisoner('pluto');

   p.guess('x');

   deepEqual(p.misses(), ['x']);
   deepEqual(p.hits(), []);
   equal(p.display(), '*****');
 });

 test('guess', function() {
   var p = new Prisoner('paperino');

   p.guess('p');

   deepEqual(p.misses(), []);
   deepEqual(p.hits(), ['p']);
   equal(p.display(), 'p*p*****');
 });

 test('guess twice', function() {
   var p = new Prisoner('paperino');

   p.guess('p');
   p.guess('n');

   deepEqual(p.misses(), []);
   deepEqual(p.hits(), ['p', 'n']);
   equal(p.display(), 'p*p***n*');
 });

 test('win', function() {
   var p = new Prisoner('zot');
   equal(p.status(), 'help');
   p.guess('z');
   p.guess('o');
   p.guess('t');
   equal(p.status(), 'rescued');
 });

 test('lose', function() {
   var p = new Prisoner('missionimpossible');
   equal(p.status(), 'help');
   for (var i=0; i<18; i++) {
     p.guess('z');
   }
   equal(p.remaining(), 0);
   equal(p.status(), 'lost');
 });

