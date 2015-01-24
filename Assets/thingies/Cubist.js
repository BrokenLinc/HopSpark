#pragma strict

var step : GameObject;
var cube : GameObject;
var cam : GameObject;
var totalSteps : int = 0;

function Start () {
}

function Update () {
	if(Input.GetKeyDown("r"))
	{
		BuildStairs(this.gameObject.transform.position);
	}
	if(Input.GetKey("f"))
	{
		BuildFloor();
	}
	if(Input.GetKeyDown("t"))
	{
		BuildPlatform();
	}
}

function BuildStairs (currentPosition : Vector3) {
	var startingPosition : Vector3 = currentPosition;
	
	for(var i = 0;i < totalSteps;i++) {
		var newStep : GameObject = Instantiate(step, startingPosition, transform.rotation);
		
		startingPosition += newStep.transform.forward * step.transform.localScale.z;
		startingPosition += newStep.transform.up * step.transform.localScale.y;
	}
	
}

function BuildFloor () {
	var pos : Vector3 = this.gameObject.transform.position;
	var rot : Quaternion = this.gameObject.transform.rotation;
	var scale : Vector3 = new Vector3(5,0.5,0.5);
	pos.y -= (1 + scale.y/2);
	
	var newb : GameObject = Instantiate(cube, pos, rot);
	newb.transform.localScale = scale;
}

function BuildPlatform () {
	var pos : Vector3 = cam.transform.position + cam.transform.forward * 100;
	var rot : Quaternion = this.gameObject.transform.rotation;
	var scale : Vector3 = new Vector3(7,0.5,7);
	
	var newb : GameObject = Instantiate(cube, pos, rot);
	newb.transform.localScale = scale;
}