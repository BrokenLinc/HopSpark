#pragma strict

//static var minHeight: float;
//var maxHeight: float = 1;

function Start () {
	//minHeight = this.gameObject.transform.position.y;
	//maxHeight += this.gameObject.transform.position.y;
	Animate();
}

function Update () {
	
}

function Animate() {
	iTween.MoveTo(this.gameObject, {
		"y": this.gameObject.transform.position.y + 1,
		"looptype": "pingPong",
		"easetype": "easeInOutQuad"
	});
}