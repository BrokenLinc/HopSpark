#pragma strict

var characterMotor : CharacterMotor;
var indicator1 : GameObject;
var indicator2 : GameObject;
var indicator3 : GameObject;

function Start () {
	UpdateJumpIndicators();
}

function Update () {

}

function UpdateJumpIndicators() {
	indicator1.renderer.enabled = (characterMotor.jumping.airJumps >= 0);
	indicator2.renderer.enabled = (characterMotor.jumping.airJumps >= 1);
	indicator3.renderer.enabled = (characterMotor.jumping.airJumps >= 2);
}

function OnTriggerEnter(hit : Collider) {
	if(hit.gameObject.layer == LayerMask.NameToLayer("Powerup")) {
		var tag = hit.tag;
		Destroy(hit.gameObject);
		CollectPowerup(tag);
	}
}

function CollectPowerup(powerupCollected : String) {
	switch(powerupCollected) {
		case "JumpPowerup":
			characterMotor.jumping.airJumps++;
			UpdateJumpIndicators();
			break;
		case "SpeedPowerup":
			characterMotor.movement.maxForwardSpeed += 15;
			characterMotor.movement.maxSidewaysSpeed += 15;
			characterMotor.movement.maxBackwardsSpeed += 15;
			
			characterMotor.movement.maxGroundAcceleration += 150;
			characterMotor.movement.maxAirAcceleration += 150;
			
			break;
	}
}