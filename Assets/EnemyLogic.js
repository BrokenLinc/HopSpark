#pragma strict

var Health : int = 100;

function Update() {
	if(Health <= 0) {
		Dead();
	} else if(Health<100) {
	} else {
	}
}

function ApplyDamage(Damage : int){
	Health -= Damage;
}

function Dead() {
	Destroy(gameObject);
}