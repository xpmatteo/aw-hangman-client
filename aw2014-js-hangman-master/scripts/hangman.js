
function hangman_new_game(){
	return {
		remaining: 18,
		prisoners: '*****'
	}
}


var Prisoner = function(word) {
	this._remaining = 18;
	this._word = word;
	this._misses = [];
	this._hits = [];
}

Prisoner.prototype.remaining = function() {
  return this._remaining;
}

Prisoner.prototype.guess = function(lettera) {
	if ((this._misses.indexOf(lettera) == -1) && (this._hits.indexOf(lettera) == -1)){
		result = false;
		for (i=0; i < this._word.length ; i++ ) { 
			if (this._word[i] === lettera)
				result = true;
		}
		if (result) {
			this._hits.push(lettera);
		} else {
			this._misses.push(lettera);
		}
		this._remaining --;
	}
}

Prisoner.prototype.misses = function() {
  return this._misses;
}

Prisoner.prototype.hits = function() {
  return this._hits;
}

Prisoner.prototype.display = function() {
	var result="";
	var find = false
	for (i=0; i < this._word.length ; i++ ) {   //istruzioni }
		for ( j=0; j < this._hits.length; j ++){
			if (this._word[i] === this._hits[j] ) {
				result += this._hits[j];
				find = true;
			}
		}
		if (find) {
			find = false;
		} else {
			result += '*';
		}

	}	
  return result;
}

Prisoner.prototype.status = function() {
	var result = this.display();
	if (result.indexOf('*') != -1) {
		if (this._remaining === 0) {
			return 'lost';
		}
		return 'help';
	}
	return 'rescued';	
}