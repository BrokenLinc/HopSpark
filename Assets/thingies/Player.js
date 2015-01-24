#pragma strict

var characterMotor : CharacterMotor;

function Start () {

}

function Update () {

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