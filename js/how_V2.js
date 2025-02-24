(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1920,
	height: 1080,
	fps: 60,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Tween9 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C2B197").ss(1,0,0,4).p("AgsCbIAIgnQgjgIgUgWIAPgYQAWAWAeAHQAVAFANgIQAPgIAEgQQAHgdgmgbQgdgSgMgRQgNgUAFgYQAGgZATgNQAUgNAaACIAJgnIAYAFIgJAmQAdAHASASIgPAXQgUgSgagGQgVgFgLAIQgLAHgEANQgDAPAJAMQAIALAWARQAcASALATQALAVgGAZQgFAYgUAOQgVAPgcgCIgJApg");
	this.shape.setTransform(9.2,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgsCbIAIgnQgigIgVgXIAQgXQAVAWAfAHQAUAFANgIQAPgIAEgQQAHgdgmgbQgdgTgLgQQgOgVAGgXQAFgZAUgNQATgOAaACIAJgmIAYAFIgJAmQAdAHATARIgQAXQgUgRgagHQgUgEgMAIQgLAHgDANQgDAPAIAMQAJALAWARQAcASAKATQALAVgFAYQgGAZgTAOQgWAPgcgCIgJApg");
	this.shape_1.setTransform(9.2,12.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C2B197").ss(2).p("AiJIZQiIgfhDhyQhAhvAdiNQAfiWCBh+QCRiODuhMQhjhQgVgmQgZgvBAgaQA3gXAWALQAQAHACAfQAEAqADAHQAIAXAggCQAMgBAvgQQAYgIAKAUQAvBohBAEQgCAAg2gEQgggCgHALQAwArA7ChQBDC3ACCdQADDHhtBbQiEBtkchBg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5D0B5").s().p("AiJIZQiIgfhDhyQhAhvAdiNQAfiWCBh+QCRiODuhMQhjhQgVgmQgZgvBAgaQA3gXAWALQAQAHACAfQAEAqADAHQAIAXAggCQAMgBAvgQQAYgIAKAUQAvBohBAEIg4gEQgggCgHALQAwArA7ChQBDC3ACCdQADDHhtBbQhSBFiQAAQhTAAhrgZg");

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-57.2,79.1,114.4);


(lib.shadow_graphic = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000033").s().p("A2vMiQoZhDjOhtQkjibC9kjQjMgilvggQmGghiKgVQkGgniDhIQichZgLicQAyhIBZggQBHgaBygFIDTgCQCEAABTgOQCLgYHjhYQGzhOBbgKQCkgRTnhPQUuhUCjAFQFuAMBIAkQAhAQgjAhQgaAYg7AeQgbAOCFgcQDHgpB1gJQCAgJKTA/QKsBCAMAAQAWAACHgbQChggBjgMQFngvBFB2QArBJhxB9Qh1CBj4CRQpOFZugDpQukDrw0BlQnNAsmDAHQhQAChJAAQkNAAisgWg");
	this.shape.setTransform(396,82.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,792.1,164.9);


(lib.man = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGANIABgFQABgGgCgCIgBAAIgBAAIABgBIgBgFIAAgDIABgCIACgBQADgCACAAQAFAAADAFQACADgCAGQgCAIgGAEIgEADg");
	this.shape.setTransform(118,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgSAJIASgKIAEgFIAHgCIAHgBIABABQgBADgDADIgFADIgbAJg");
	this.shape_1.setTransform(108.7,34.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AALASQgDAAgGgEIgGgJQgJgIgDgHIgEgJIABAAIAGAHQAGAHAHAFIAIAFIAHAHIAGAHIAAABIgCAAIgIgCg");
	this.shape_2.setTransform(75.9,70.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAiASQgPgPgPgHQgGgFgLgEIgQgIQgHgEgEAAIgFAAIAAgBIAFgDQAFgCAIACQAKACAIAEQAHADAKAJQASALAKAPIAKAPIAAABg");
	this.shape_3.setTransform(81,44.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgVA4IAGgSIAPgmQAHgNAIgYIAGgTIABAAIgDATQgDATgIAVQgEAMgEAJIgHARIgNAPg");
	this.shape_4.setTransform(111.8,48.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgCACIACgCIAAAAIACgCIABAAIgBABIgBABIgBABIgCACg");
	this.shape_5.setTransform(117.2,10.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAAAVIAAgCIAAgGQAAgGgDgGIgFgDQgBgCAAgEIgBgJIABgCIAEgBQAEAAABABQAFABADAFQABACABAJQABAEgBAEQgBAGgCADQgCAEgCABIgBABg");
	this.shape_6.setTransform(104,12.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AADBNIgSgCQgSgCgJgCIgBgCIAbgIIAYgEIAJgDQADgCACgDQADgDABgHIABgLIgGgyIgGg1IACgBIAaBnIABAPQAAAIgEAIQgFAKgIAEQgIAEgJAAIgDABg");
	this.shape_7.setTransform(111.5,18.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AkxLBIgZgEQgKgBgFgEQgFgEgCgKQgCgLACgQIACgZQADgjgEgPIgEgMQgDgGAAgIQAAgKADgRQAEgRALghQALghAbhAQAhhMA1hwIArheQAYg3ALgiQiPAZjPAOIi0ALQg7AEgeAFQg7AJgeADIgMgBQgIgBgFgDIgCgEIAAAAIgBgBIAAgCIgBgGQAAgHAEgGQAFgKAKgIIATgNQAdgQA3gQQBDgVBrgXQBTgSBegRQCLgbAlgJQAagHAQgHIAogUQAygaAagVQAKgIAGgHQAIgKABgJQACgJgJgIQgGgGgMgGQgbgLg7gJQg0gHh/gJIhagGQhBgGgZgFQgegGgNgIIgJgIQgEgFABgIQADgKAMgIQAQgLAbgEQAOgDAfgCQAogCAyACIBZAGIC0AOQA8AEAdAAQAcAAAPgBQAcgDANgHQgeg3gNgxQgQhBAMgyQAHgfARgVQARgYAcgMQAXgLAhgBQAZgCAgAGQAWAEAiALIAaAMQANAIAJALQARAUAGAgQAFAcgDAdQgHA7geAxQghA1gyAYQADAEAIABIANAAIAagEIAygLQAmgJA+gSIDHg5QA4gPAsgKQBEgOAjgCQAOgBAMACQARACAJAGQAGAEADAHQACAIAAAGQgBALgNANQgOANgeAOQgTAJgeAKQg8AViLAiQiVAmgzAQQhCAXgcARQgLAHgJAIIgHAJIgYA8QgXAzgbAoQgbApgmAnQhQBSg3BJIhOBmIgPAVIgaAsQg0BcguBaQgbA3gRAnIgNAiQAAADAFADQAHAFAQAIQAHAEAEAFIAEAHIAAAIQgBAJgHAGQgEADgKACIgHAAQgJAAgLgCgAh/AFQgLAhgcA/IgrBfQhACLgVAxQgYA3gOApQgLAhgDAQQgDANAAAMQAAAHACAEIAFAMQAEATgDAiIgCAaQgCAQACAJQABAFADADIAKADIAZAEQANADAMgBQAGgBAEgDQADgDABgEQACgJgNgHQgPgIgIgFQgDgCgDgDQgDgEAAgFIAAgFIACgDIAMgeQAQgmAcg4QAuhdAzhaIAbgsIBeh9QAcgkAkgrIBHhMQAkgkAcgqQAbglAXg1IAZg8IAIgLQAHgGAPgKQAcgRBEgXQA4gSCQgjQCMgjA7gUQAbgJAVgJQAdgNAOgOQALgJABgLQABgNgJgHQgIgFgPgCIgagBQgmAChAAOQgqAJg6APIjHA3Qg4AQgtALIgyALIgaADQgHABgGgBQgJgBgDgEIAAgBIAAAAQAygYAhg1QAfgzAGg5QACgggEgZQgHgggQgTQgIgKgOgJQgHgEgTgHQgbgJgcgGQgggGgZACQgeABgaALQgbANgRAWQgRAYgGAcQgLAzAQA+QANA1AfA0IABABIgCABQgNAIgfADQgUACgXAAQgeAAg8gEIizgOQh0gJg/ADQgXABgWAEQgcAGgNAIQgKAIgCAJQgCAIALAHQAMAHAeAGQAjAHA2AEIBaAGQB/AJA0AHQA6AIAeAMQANAGAHAHQALAKgCAMQgCALgJAKIgQARQgZAUg0AcIgoAUQgLAFghAJQghAIiPAcQiIAagoAJQhsAXhCAWQg1APgdAQQgZAPgHANIgDAKQAAAGACACQACABAHABQAFABAFgBQAegCA7gKQAlgFA1gDICzgMQDSgPCTgZIAHAAg");
	this.shape_8.setTransform(87.6,70.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEFEFE").s().p("AklLAIgpgHQgTgBAFgvQAHg8gKgUQgRgjBnjjQB+kTAHgbQh7AWiwAOIkJASQgXABhiAOQgzAHgDgLQgRg8E+hBIDugvQB5gYAZgMQCnhOgZgoQgTgfiOgNQivgLhIgIQh8gMALgdQASgzEZAXQC0AOAbABQBlAFAbgQQgqhIgJhFQgJhEAZguQAbgxA5gMQA/gMBZAiQAmAOAPAsQAOApgKA0QgJA2geAsQggAwguAWQAJANBkgZIDYg8QE4hYAWAqQATAkhXAkQg6AXiWAmQitAqg2ASQhtAjgOAiQgeBLgWAmQgjA/g7A6Qg/BBgsA5QgYAfhSBsQgTAYhDB+QhMCOgaBGQgDAJAXAMQAZANgCAMQgCAQgXAAIgHAAg");
	this.shape_9.setTransform(87.7,70.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAiASQgPgPgPgHQgGgFgLgEIgQgIQgHgEgEAAIgFAAIgBgBIAGgDQAFgCAIACQAKACAIAEQAHADAKAJQASALALAPIAKAPIgBABg");
	this.shape_10.setTransform(81,44.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgVA4IAGgTIAPglQAHgNAIgYIAGgSIABAAIgDASQgDAPgFASIgDAHQgEAMgEAJIgHASIgNAPg");
	this.shape_11.setTransform(111.8,48.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AghLBIgagEQgKgBgEgEQgGgEgCgKQgBgLABgQIADgZQADgjgEgPIgFgMQgCgGAAgIQAAgKADgRQADgRALghQALghAbhAQAfhMA1hwIArheQAZg3ALgiQiNAZjQAOIizALQg7AEgeAFQg7AJgfADIgMgBQgIgBgEgDIgDgEIAAAAIAAgBIgBgCIAAgGQAAgHADgGQAFgKAKgIIAUgNQAcgQA3gQQBEgVBrgXQBSgSBegRQCKgbAkgJQAbgHAQgHIAogUQAxgaAagVQALgIAFgHQAJgKABgJQABgJgIgIQgGgGgMgGQgbgLg8gJQgzgHh+gJIhagGQhBgGgYgFQgegGgOgIIgJgIQgEgFACgIQADgKALgIQAQgLAbgEQAPgDAegCQAogDAyADIBaAGICxAOQA8AEAeAAQAeAAAPgBQAcgDANgHQgfg3gNgxQgQhBAMgyQAIgfAQgVQASgYAbgMQAYgLAggBQAagCAgAGQAWAEAhALIAbAMQAMAIAJALQASAUAGAgQAFAcgDAdQgHA7gfAxQggA1gyAYQADAEAIABIAMAAIAOgCIAAAAIgJABIAAABIgEABQgHABgGgBQgKgBgCgEIgBgBIABAAQAygYAgg1QAfgzAGg5QADgggFgZQgHgggQgTQgIgKgNgJQgIgEgTgHQgagJgdgGQgfgGgaACQgeABgZALQgbANgRAWQgRAYgGAcQgMAzAQA+QAOA1AfA0IAAABIgBABQgOAIgeADQgUACgZAAQgeAAg8gEIixgOQh0gJhAADQgXABgVAEQgcAGgNAIQgLAIgCAJQgCAIAMAHQAMAHAeAGQAjAHA2AEIBZAGQB+AJA0AHQA6AIAeAMQAMAGAHAHQALAKgCAMQgCALgIAKIgRARQgZAUgzAcIgpAUQgKAFghAJQghAIiNAcQiJAagoAJQhsAXhCAWQg1APgdAQQgZAPgHANIgCAKQAAAGACACQABABAHABQAGABAFgBQAdgCA8gKQAlgFA0gDIC0gMQDSgPCRgZIAGAAIgCAFQgKAhgcA/IgrBfQg/CLgVAxQgYA3gNApQgLAhgDAQQgDANAAAMQAAAHACAEIAEAMQAFATgDAiIgDAaQgCAQACAJQABAFADADIALADIAZAEQANADALgBQAHgBABgDQAEgDABgEQABgJgLgHQgPgIgHgFQgEgCgCgDQgEgEAAgFIABgFIABgDIAMgeQAQgmAag4QAvhdAzhaIAagsIBeh9QAcgkAngrIBGhMQAlgkAcgqQAaglAXg1IAZg8IAJgLIAMgKIAAAFIgBAAQgCABgBAEQgHAGgCAIIAAABIgZA8QgWAzgcAoQgbApgmAnQhQBSg4BJIhOBmIgPAVIgbAsQg0BcgtBaQgcA3gOAnIgKAYIgEAKQAAADAGADQAGAFAQAIQAFAEAEAFIAEAHIABAIQgBAJgHAGQgEADgIACIgHAAQgJAAgLgCg");
	this.shape_12.setTransform(60.5,70.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEFEFE").s().p("AgWLAIgpgHQgTgBAFgvQAHg8gKgUQgRgjBljjQB+kTAHgbQh7AWiuAOIkJASQgXABhiAOQgzAHgDgLQgRg8E+hBIDugvQB3gYAZgMQCnhOgZgoQgTgfiOgNQitgLhIgIQh8gMALgdQASgzEXAXQC0AOAbABQBnAFAbgQQgqhIgJhFQgJhEAZguQAbgxA5gMQA/gMBZAiQAmAOAPAsQAOApgKA0QgJA2geAsQggAwguAWQAEAGAZgCIAAAKIAKAAIAcgEIABABIgCAMIgGApQgIASAAAjIAAAFIgBAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAABQgLAKgEAJQgeBLgWAmQgjA/g7A6Qg/BBguA5QgYAfhSBsQgTAYhDB+QhKCOgaBGQgDAJAXAMQAXANgCAMQgCAQgVAAIgHAAg");
	this.shape_13.setTransform(60.6,70.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVA4IAGgTIAPglQAHgNAIgYIAGgSIABAAIgDASQgDAQgGASIgCACIAAAEQgEAMgEAJIgHASIgNAPg");
	this.shape_14.setTransform(111.8,48.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AghLBIgagEQgKgBgEgEQgGgEgCgKQgBgLABgQIADgZQADgjgEgPIgFgMQgCgGAAgIQAAgKADgRQADgRALghQALghAbhAQAfhMA1hwIArheQAZg3ALgiQiNAZjQAOIizALQg7AEgeAFQg7AJgfADIgMgBQgIgBgEgDIgDgEIAAAAIAAgBIgBgCIAAgGQAAgHADgGQAFgKAKgIIAUgNQAcgQA3gQQBEgVBrgXQBSgSBegRQCKgbAkgJQAbgHAQgHIAogUQAxgaAagVQALgIAFgHQAJgKABgJQABgJgIgIQgGgGgMgGQgbgLg8gJQgzgHh+gJIhagGQhBgGgYgFQgegGgOgIIgJgIQgEgFACgIQADgKALgIQAQgLAbgEQAPgDAegCQAogDAyADIBaAGICxAOQA8AEAeAAQAeAAAPgBQAcgDANgHQgfg3gNgxQgQhBAMgyQAIgfAQgVQASgYAbgMQAYgLAggBQAagCAgAGQAWAEAhALIAbAMQAMAIAJALQASAUAGAgQAFAcgDAdQgHA7gfAxQggA1gyAYQADAEAIABIAMAAIABgBIAAACIAAAAQgHABgGgBQgKgBgCgEIgBgBIABAAQAygYAgg1QAfgzAGg5QADgggFgZQgHgggQgTQgIgKgNgJQgIgEgTgHQgagJgdgGQgfgGgaACQgeABgZALQgbANgRAWQgRAYgGAcQgMAzAQA+QAOA1AfA0IAAABIgBABQgOAIgeADQgUACgZAAQgeAAg8gEIixgOQh0gJhAADQgXABgVAEQgcAGgNAIQgLAIgCAJQgCAIAMAHQAMAHAeAGQAjAHA2AEIBZAGQB+AJA0AHQA6AIAeAMQAMAGAHAHQALAKgCAMQgCALgIAKIgRARQgZAUgzAcIgpAUQgKAFghAJQghAIiNAcQiJAagoAJQhsAXhCAWQg1APgdAQQgZAPgHANIgCAKQAAAGACACQABABAHABQAGABAFgBQAdgCA8gKQAlgFA0gDIC0gMQDSgPCRgZIAGAAIgCAFQgKAhgcA/IgrBfQg/CLgVAxQgYA3gNApQgLAhgDAQQgDANAAAMQAAAHACAEIAEAMQAFATgDAiIgDAaQgCAQACAJQABAFADADIALADIAZAEQANADALgBQAHgBABgDQAEgDABgEQABgJgLgHQgPgIgHgFQgEgCgCgDQgEgEAAgFIABgFIABgDIAMgeQAQgmAag4QAvhdAzhaIAagsIBeh9QAcgkAngrIBGhMQAlgkAcgqQAaglAXg1IAZg8IAJgLIALgJIAAAIIgGAEQgDAFgDABIAAAFIAAABIgZA8QgWAzgcAoQgbApgmAnQhQBSg4BJIhOBmIgPAVIgbAsQg0BcgtBaQgcA3gOAnIgKAYIgEAKQAAADAGADQAGAFAQAIQAFAEAEAFIAEAHIABAIQgBAJgHAGQgEADgIACIgHAAQgJAAgLgCg");
	this.shape_15.setTransform(60.5,70.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEFEFE").s().p("Ag/LAIgpgHQgSgBAFgvQAGg8gJgUQgSgjBojjQB7kTAIgbQh6AWivAOIkKASQgXABhiAOQgyAHgDgLQgRg8E9hBIDugvQB4gYAZgMQCnhOgZgoQgTgfiPgNQisgLhIgIQh9gMALgdQATgzEZAXQCxAOAcABQBmAFAcgQQgrhIgJhFQgJhEAaguQAagxA6gMQA/gMBZAiQAlAOAPAsQAOApgJA0QgKA2gdAsQghAwguAWQAEAGAWgCIAAAJIAKAAQAOgGACABIAAACIANAAIAAAHIABAtIAAAGQgNAcgBAVIAAAGQgOAKgEALQgeBLgWAmQgkA/g6A6Qg/BBguA5QgZAfhSBsQgTAYhDB+QhKCOgZBGQgDAJAXAMQAYANgBAMQgCAQgYAAIgHAAgAKBlxIABgBIgCACIABgBg");
	this.shape_16.setTransform(64.6,70.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_11},{t:this.shape_10},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_14},{t:this.shape_10},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).wait(5));

	// Layer 3
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AlAAPYAAAAAFgBAKgBYAKgBAOgDASgEYARgDAWgDAZgGYAYgGAcgHAegIYAPgEAQgEAQgEYAIgDAIgCAJgCYAIgDAIgCAJgDYARgFAPgGASgFYASgGASgGATgFYAlgLAogIAogHYAUgEAUgCAUgBYALAAAKAAAJACYAKADAJAEACAJYACAIgFAJgHAHYgGAHgJAGgIAGYgJAFgJAFgJAEYgJAEgKAEgJAEYgJAFgKADgJADYgKAEgJAEgKACYgTAGgSAHgTADYgmALgkAJgjAJYggAJghAJgeAIYgeAIgcAHgYAIYgYAHgVAIgRAGYgQAHgNAGgJAGYgEACgDADgCABYgCABgBABAAAAIAAAAYAAAAABgBACgBYACgBADgDAFgCYAIgFANgGARgGYARgHAVgHAYgHYAYgHAcgHAegHYAfgIAggIAhgIYAigJAlgJAmgLYASgFATgEATgGYAKgDAJgEAKgDYAKgEAKgDAJgEYAJgEAKgEAJgEYAKgFAJgFAJgFYAJgGAIgGAIgIYADgEAEgEACgGYADgFABgGgCgGYgBgGgEgGgFgDYgFgDgGgCgFgBYgLgCgKAAgLAAYgVAAgUADgVADYgoAIgnAIgmALYgTAFgSAHgSAGYgRAFgQAGgRAGYgIACgJADgIADYgIACgIACgJADYgQAEgPAFgPAEYgeAJgcAHgYAGYgZAHgVADgSAEYgSAEgNADgKABYgKACgFABAAAAIAAAA");
	this.shape_17.setTransform(110.9,38.8,1,1,0,0,0,-32,5.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ak+giYAOAAAPABAPgBYAOAAAPgBAOgBYAegCAdgCAdgDIBXgJYAOgBAPgCAOgCIAqgGYAdgFAdgEAcgDYAdgDAdgBAegBYAdAAAdAAAcAFYAHACAHACAGACYAHADAFAEADAFYABABAAACAAABIABADYAAAAgBABAAABYAAADgBADgBACYgEAGgFAEgGAEYgMAIgNAFgOAFYgNAFgOADgPACYgcAGgcAFgdAEYgPACgOACgPACYgOABgPACgOABIhVAIIhXAJYgeACgdADgdAFYgcAFgdAFgcAKYgHADgHAEgGADYgDABgDABgDgBYgDgCgDgCgBgEYgFgNABgPABgOIAAAAIALhFAk+giIgNBEIAAABYgBAOgCAPAGAOYABAEADAEAEABYAEACAEgBADgCYAHgDAGgDAHgDYAbgJAdgFAdgEYAdgFAdgDAdgCIBXgHIBWgIYAOgBAPgCAOgBYAPgCAOgBAPgDYAdgEAdgFAcgGYAcgHAegFAZgRYAHgEAGgFAEgHYACgDACgEAAgFYAAgCAAgCAAgCYgBgCAAgCgBgCYgEgIgIgFgHgDYgHgDgHgBgIgCYgdgFgdAAgeAAYgdABgdACgdADYgeADgcAFgdAEIgpAHYgPACgOACgPACIhXAKYgdADgdADgdACYgOABgPABgOABYgPABgPAAgOAA");
	this.shape_18.setTransform(143.4,38.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AlJAiIAMhFQApACCAgMQB7gLBCgNQBXgPBXAAQBugBAFAeQAHAfhPAXQhDASh7AMQiYAMhEAIQh0ANgiATQgHAEgGAAQgSAAAEgzg");
	this.shape_19.setTransform(143.3,38.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4261B6").s().p("AAOAPIABAAIABABIAAABIgBAAgAgpgFIgBgDIASAAQAbgGAjgCIAEAAIABAAIgBACIgMABQgvAGgHACg");
	this.shape_20.setTransform(129.7,36);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FEFEFE").s().p("AgdAzQANgKAIgJIATgXQAHgGADgFQADgEAEgKIAVgsIAEgHIgIAbQgDAOgGAOIgHANIgKAOQgKAMgLAMQgLAKgNAHIgaAMg");
	this.shape_21.setTransform(74.3,123.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FEFEFE").s().p("AgQA3QADgDADgJIAOgpQAIgVADgTIACgPIAAgFIACAFIACAPQAAAJgBAMQgCAJgFANQgHATgLAVQgEAIgGAEIgFACg");
	this.shape_22.setTransform(75.9,113.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FEFEFE").s().p("AgeAtQAGgDAEgGIAaggQAHgGAHgKIAQgjIAAAFIgCAPIgCAJQgCAHgDADQgFAJgIAJIgOARQgJAJgHAFQgGAEgHACIgGABg");
	this.shape_23.setTransform(68.8,114.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17}]}).to({state:[{t:this.shape_20},{t:this.shape_19,p:{rotation:0,x:143.3,y:38.7}},{t:this.shape_18,p:{rotation:0,x:143.4,y:38.6}}]},4).to({state:[{t:this.shape_20},{t:this.shape_19,p:{rotation:-9.5,x:142.8,y:33.4}},{t:this.shape_18,p:{rotation:-9.5,x:142.9,y:33.3}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175.3,141.5);


(lib.bag13 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C2B197").ss(1,0,0,4).p("AgOCiIABgoQglgCgXgSIAKgaQAZASAgABQATABANgLQAOgKAAgRQABgQgLgMQgLgLgUgKQgggMgPgOQgRgSABgYQABgZAQgRQARgQAbgEIACgoIAWABIgBAmQAeACAVANIgLAaQgWgOgbgBQgTAAgMAKQgKAJAAAOQgBAPAMAKQAKAJAZANQAfAOAOAOQAOASAAAaQgBAYgQASQgSATgeAEIgBApg");
	this.shape.setTransform(45.5,75.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPCiIACgoQglgCgXgSIAKgaQAZASAfABQATABAOgLQANgKABgRQAAgQgLgMQgKgLgVgKQgggMgOgOQgRgSAAgYQABgZARgRQAQgQAcgEIABgoIAXABIgBAmQAdACAWANIgLAaQgXgOgbgBQgTAAgLAKQgKAJgBAOQAAAPALAKQAKAJAZANQAfAOAOAOQAPASgBAaQgBAYgQASQgSATgdAEIgCApg");
	this.shape_1.setTransform(45.5,75.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C2B197").ss(2).p("AhKI3QiMgEhXhjQhVhhABiQQABibBmiSQB0ioDbh5Qhvg6gcgiQghgqA5gmQAyghAWAHQAQAEAJAeQAMApADAFQAOAWAegJQAMgDArgZQAWgMANASQBDBdhAAQQgBAAg3AHQgfAEgFAMQA4AhBYCTQBmCoAgCZQApDDhZBtQhsCFkjgJg");
	this.shape_2.setTransform(38.7,56.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5D0B5").s().p("AhKI3QiMgFhXhiQhVhhABiQQABibBmiTQB0inDbh5Qhvg7gcghQghgqA5gmQAyghAWAGQAQAFAJAeQAMAoADAGQAOAWAegJQAMgDArgZQAWgMANASQBDBdhAAPIg4AIQgfADgFANQA4AhBYCTQBmCoAgCZQApDChZBtQhlB+kGAAIgkgBg");
	this.shape_3.setTransform(38.7,56.8);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-3.6,80.1,118.6);


(lib.bag12 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C2B197").ss(1,0,0,4).p("AgPCVIACglQgigDgVgQIAKgYQAWARAdABQASABAMgJQANgJABgQQAAgPgJgLQgKgKgSgKQgegLgNgOQgPgRABgWQABgXAQgPQAQgPAYgDIACglIAWABIgCAkQAcACATANIgKAYQgUgOgagBQgRgBgLAJQgJAIgBANQgBAOAKAKQAJAIAXAMQAcAOANAOQANARgBAXQgBAXgQAQQgRARgbADIgCAmg");
	this.shape.setTransform(20,51.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPCVIACglQgigDgVgQIAKgYQAWARAdABQASABAMgJQANgJABgQQAAgPgJgLQgKgKgSgKQgegLgNgOQgPgRABgWQABgXAQgPQAQgPAYgDIACglIAWABIgCAkQAcACATANIgKAYQgUgOgagBQgRgBgLAJQgJAIgBANQgBAOAKAKQAJAIAXAMQAcAOANAOQANARgBAXQgBAXgQAQQgRARgbADIgCAmg");
	this.shape_1.setTransform(20,51.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C2B197").ss(2).p("ABmmqQAAAFgIABQgKAAgHgDQgIgEAPABQAJABAJgBQAfgEAlgYQARgMAKABQAOAAAPATQAkAugNAMQgGAFgzAEQgnAEgDAGQgDAGAVAhQBUCCAoCXQApCZgUB9QgVCIhaBCQhlBJisgcQiXgYg9hxQg4hlAgiQQAgiLBkh4QBriACOg2QAVgIgmgcQgcgUgigRQgXgLgBgPQgCgOAPgKQAkgbAnAdQAqAfABALg");
	this.shape_2.setTransform(32,48.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5D0B5").s().p("AhHHcQiXgYg9hxQg4hlAgiQQAgiLBkh4QBriACOg2QAVgIgmgcQgcgUgigRQgXgLgBgPQgCgOAPgKQAkgbAnAdQAqAfABALIAAAAQAAAFgIABIgDAAQgIAAgGgDIgBAAIAAgBQgFgCAHAAIABAAIAAAAIAAAAIAFAAIADAAIADABIAAAAIABAAIAEgBIAGAAIABAAIgBAAIgGAAIgEABIgBAAIAAAAIgDgBIgDAAIgFAAIAAAAIAAAAIgBAAQgHAAAFACIAAABIABAAQAGADAIAAIADAAQAIgBAAgFIAAAAQAfgEAlgYQARgMAKABQAOAAAPATQAkAugNAMQgGAFgzAEQgnAEgDAGQgDAGAVAhQBUCCAoCXQApCZgUB9QgVCIhaBCQhJA1hwAAQgoAAgwgIg");
	this.shape_3.setTransform(32,48.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.1,-5.2,67.3,103.5);


(lib.bag11 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C2B197").ss(1,0,0,4).p("AAACSIgBgkQgiADgWgNIAGgZQAZANAagDQASgBALgLQALgLgCgPQgBgOgLgKQgKgJgUgGQgegIgPgKQgRgOgCgWQgCgWANgRQANgQAYgHIgEgkIAWgCIACAjQAbgCAUAKIgHAYQgVgKgWACQgTACgKALQgIAJACAMQABAOAMAIQAKAHAXAHQAdAJAPAMQAPAOACAXQACAWgNASQgNATgaAHIADAlg");
	this.shape.setTransform(35.6,56.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgBBuQgiADgWgNIAGgZQAZANAagCQASgCALgLQALgLgCgPQgBgOgLgJQgKgKgUgFQgegJgPgKQgRgOgCgVQgCgWANgSQANgQAYgGIgEgkIAWgCIACAiQAbgCAUAKIgHAYQgVgKgWACQgTACgKALQgIAKACALQABAOAMAIQAKAHAXAHQAdAKAPALQAPAOACAYQACAVgNASQgNATgaAHIADAlIgWACg");
	this.shape_1.setTransform(35.6,56.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C2B197").ss(2).p("Ag3HuQiQAIhdhfQhXhagJiQQgJiVBOiHQBXiYCqhZQhCgYg0gIQgNgCgCgCQgBgCACgKQAHgkA0gGQAPgCAlgBQAkgDAagGQApgKARgYQAEgGADABQADACAPAQQAPARglAnQgsAwgEAPQBrAnBzCCQB5CHAoCLQAtCjhZBoQhqB7kYARg");
	this.shape_2.setTransform(39,49.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5D0B5").s().p("AkkGXQhXhagJiQQgJiVBOiHQBXiYCqhZQhCgYg0gIQgNgCgCgCQgBgCACgKQAHgkA0gGQAPgCAlgBQAkgDAagGQApgKARgYQAEgGADABQADACAPAQQAPARglAnQgsAwgEAPQBrAnBzCCQB5CHAoCLQAtCjhZBoQhqB7kYARIgYAAQiAAAhVhXg");
	this.shape_3.setTransform(39,49.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-8.1,81.2,108.4);


(lib.bag10 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C2B197").ss(1,0,0,4).p("AgMCiIAAgoQglgBgXgQIAJgbQAZARAgAAQATAAANgLQANgKAAgSQAAgPgLgMQgLgKgUgKQghgLgPgOQgSgRAAgYQAAgZARgRQAQgSAbgEIAAgoIAXAAIAAAnQAcAAAXANIgKAbQgXgOgbAAQgTAAgLALQgKAKAAANQAAAPAMAKQAKAJAZALQAgANAOAPQAQARAAAaQAAAYgQASQgRAUgeAFIAAApg");
	this.shape.setTransform(45.5,67.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMCiIAAgoQglgBgXgRIAJgaQAZARAgAAQATAAANgLQANgLAAgRQAAgQgMgLQgKgKgVgKQgggLgQgOQgRgRAAgZQAAgYARgRQAPgRAcgFIAAgoIAWAAIAAAmQAdABAXANIgKAaQgXgNgbAAQgTAAgLALQgKAJAAAOQAAAPALAKQALAJAZALQAfANAPAOQAPASAAAaQABAYgRATQgQATgeAFIAAApg");
	this.shape_1.setTransform(45.5,67.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C2B197").ss(2).p("AgXIEQjVgXhRhpQhIheAoiWQAkiIB4ibQByiVCbh+QgVgQgWAHQgXANgJAFQgQAJgLgLQgPgPgPg3QgCgJASgFQASgGAYACQBDAFAgAqQALAPAxgpQA1gsAVAIQAgAOADASQAEASgVARQgwAmhWgFQBcBdBGCjQBLCpAHCaQAJCwhVBdQhiBsjUgWg");
	this.shape_2.setTransform(38.5,69.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5D0B5").s().p("AgXIEQjVgXhRhoQhIheAoiWQAkiJB4ibQByiVCbh+QgVgQgWAHIggASQgQAJgLgLQgPgPgPg3QgCgIASgGQASgGAYACQBDAGAgAqQALAPAxgpQA1gtAVAJQAgANADASQAEASgVARQgwAnhWgGQBcBdBGCjQBLCpAHCaQAJCwhVBdQhRBaihAAQghAAgjgEg");
	this.shape_3.setTransform(38.5,69.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.2,16,76.2,106.1);


(lib.bag9 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C2B197").ss(1,0,0,4).p("AgJCNIAAgjQgggBgVgOIAIgXQAWAPAcAAQAQAAALgKQAMgJAAgPQAAgOgKgKQgJgJgSgIQgdgJgNgNQgPgOAAgWQAAgVAOgPQAOgQAYgDIAAgjIAUAAIAAAhQAZABATALIgIAXQgTgMgZAAQgQAAgKAKQgIAIAAAMQAAANAKAJQAJAHAWAKQAbALANANQANAPAAAXQAAAVgOAQQgPARgaAEIAAAkg");
	this.shape.setTransform(38.3,54);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKCNIAAgjQgggBgVgOIAIgXQAWAPAcAAQARAAAKgKQAMgJAAgPQAAgOgKgKQgJgJgSgIQgcgJgNgNQgQgOABgWQgBgVAOgPQAOgQAZgDIAAgjIATAAIAAAhQAZABATALIgIAXQgTgMgZAAQgQAAgKAKQgIAIAAAMQAAANAKAJQAJAHAWAKQAbALANANQANAPAAAXQAAAVgOAQQgOARgaAEIAAAkg");
	this.shape_1.setTransform(38.4,54);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C2B197").ss(2).p("AAWG4QiGAnhfhjQhZhcgFidQgFikBgiGQBuibDRg3QgSgOgRAGQgRAKgHAEQgXAOgWhOQgFgTAzAFQA1AGAbAkQALAPAcgRQAngYAOgCQA4gIAPAJQAMAIgWAQQgWAPglALQgqAMglgCQANBAA+CdQA9CZAOBOQAVB/g1BTQhABkiyA0g");
	this.shape_2.setTransform(30.2,45.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5D0B5").s().p("AjPF8QhZhcgFidQgFikBgiGQBuibDRg3QgSgOgRAGIgYAOQgXAOgWhOQgFgTAzAFQA1AGAbAkQALAPAcgRQAngYAOgCQA4gIAPAJQAMAIgWAQQgWAPglALQgqAMglgCQANBAA+CdQA9CZAOBOQAVB/g1BTQhABkiyA0QglALgjAAQhZAAhEhHg");
	this.shape_3.setTransform(30.2,45.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-4.2,68.4,95.6);


(lib.bag8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C2B197").ss(1,0,0,4).p("AgYByIAFgcQgbgFgPgPIAKgSQARAPAWAEQANACALgGQAKgGACgMQAEgWgdgRQgWgMgJgMQgLgOADgRQADgSAOgLQAOgKASAAIAEgdIASADIgEAcQAUADAPAMIgKASQgPgMgTgDQgPgDgIAHQgIAFgCAKQgBALAHAJQAGAHARALQAVALAIAOQAJAOgDASQgCASgOALQgPANgTAAIgFAdg");
	this.shape.setTransform(22,42.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYByIAFgcQgbgFgPgPIAKgRQARAOAWAEQANACALgFQAKgHACgMQAEgVgdgSQgWgMgJgMQgLgNADgSQADgRAOgLQAOgLASAAIAEgdIASADIgEAcQAUAEAPAMIgKASQgPgNgTgDQgPgDgIAHQgIAFgCAKQgBAMAHAIQAGAHARALQAVAMAIANQAJAOgDATQgCARgOALQgPANgTAAIgFAeg");
	this.shape_1.setTransform(22,42.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C2B197").ss(2).p("AhZF1QhggfgwhfQguhbAShuQAThzBUhXQBehiCZgiQhHgqgHgHQgEgEAIgHQAGgFAYgRQA3grACAgQAAAVACACQAFAJAUgLQA7giABAZQABAHgBAVQABATAMAJQAmAdgCAIQgCAFgcgFQhTgPgGAKQBMA5AqCDQApB/gPB8QgSCIhRA9QhfBHieg1g");
	this.shape_2.setTransform(26.8,39.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5D0B5").s().p("AhZF1QhggfgwhfQguhbAShuQAThzBUhXQBehiCZgiQhHgqgHgHQgEgEAIgHIAegWQA3grACAgQAAAVACACQAFAJAUgLQA7giABAZIAAAcQABATAMAJQAmAdgCAIQgCAFgcgFQhTgPgGAKQBMA5AqCDQApB/gPB8QgSCIhRA9Qg2AphMAAQg3AAhEgXg");
	this.shape_3.setTransform(26.8,39.6);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-7.5,57.5,87.8);


(lib.bag7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C2B197").ss(1,0,0,4).p("AhVCIIATgjQghgTgMgZIAVgTQAOAbAcAPQASAKARgEQAOgDAJgPQAHgOgEgPQgFgPgNgTQgXgZgGgTQgIgYAMgVQALgWAVgHQAXgIAaAJIASgjIAWAMIgSAhQAZAPAOAWIgWASQgOgXgXgMQgTgKgPAEQgNAEgGAMQgFANAFAPQADAMATAXQAVAYAFAVQAFAXgMAXQgMAVgWAJQgXAJgcgKIgTAlg");
	this.shape.setTransform(26.4,55.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhVCIIATgjQghgTgMgZIAVgTQAPAbAbAPQASAKARgEQAPgDAIgPQAIgOgFgPQgFgPgNgTQgXgZgGgTQgHgYALgVQALgWAVgHQAXgIAaAJIASgjIAXAMIgTAhQAaAPANAWIgVASQgPgXgXgMQgSgKgPAEQgNAEgHAMQgFANAFAPQADAMATAXQAWAYAEAVQAFAXgMAXQgLAVgXAJQgWAJgcgKIgUAlg");
	this.shape_1.setTransform(26.4,55.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C2B197").ss(2).p("AkcHTQh+gegLiDQgKh6BWiWQBYiXCLhfQCbhrCiAOQAZACgYgtQgSgigcggQgngwgEgZQgEgaArAgQA6AqACAUQACATAiAXQAkAYAwgFQAngEAZAeQAtA3gagDQgugRgagJQg2gdgPABQgXABAjBYQA/ChAJCPQAKCdg5BqQiID9nJhsg");
	this.shape_2.setTransform(42.3,50);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5D0B5").s().p("AkcHTQh+gegLiDQgKh6BWiWQBYiXCLhfQCbhrCiAOQAZACgYgtQgSgigcggQgngwgEgZQgEgaArAgQA6AqACAUQACATAiAXQAkAYAwgFQAngEAZAeQAtA3gagDIhIgaQg2gdgPABQgXABAjBYQA/ChAJCPQAKCdg5BqQhfCxj8AAQhsAAiKggg");
	this.shape_3.setTransform(42.3,50);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.7,-8.8,87.3,109.8);


(lib.bag6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C2B197").ss(1,0,0,4).p("AgyBZIALgXQgUgLgKgQIANgNQAKARASAJQAMAGALgDQAIgCAFgKQAIgRgSgXQgQgOgEgMQgFgPAGgOQAHgOAOgGQAMgFARAFIALgXIAPAHIgLAWQAQAIAJAOIgMAMQgKgOgPgHQgMgGgKADQgIADgCAIQgEAIAEAJQABAIANAOQAOAOAEAOQAEAOgHAPQgHAOgPAGQgNAHgSgGIgMAYg");
	this.shape.setTransform(22.6,42.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgyBZIAMgXQgVgLgKgQIAOgMQAJAQATAKQAMAFAKgCQAJgDAEgKQAJgQgTgYQgQgOgEgMQgFgPAHgOQAGgOAOgFQANgGAQAFIAMgXIAOAHIgLAWQARAIAJAPIgNALQgKgNgPgIQgMgGgKADQgIAEgCAHQgEAJAEAIQACAJAMAOQAPAOADANQAEAPgHAOQgHAOgOAHQgNAGgTgFIgLAXg");
	this.shape_1.setTransform(22.6,42.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C2B197").ss(2).p("Ai0ErQhTgigHhmQgGhdA5hnQA6hqBag1QBig8BkAmQgogyAIgyQADgRAHgJQAHgJADAIQAOAqAHAaQADAHAcARQARAKAvgHQAkgGAFAWQADAPgxAFQg4AFgIAIQAzBAAVBwQAWB0gdBeQghBthcAiQhrAnivhIg");
	this.shape_2.setTransform(27.2,34.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5D0B5").s().p("Ai0ErQhTgigHhmQgGhdA5hnQA6hqBag1QBig8BkAmQgogyAIgyQADgRAHgJQAHgJADAIQAOAqAHAaQADAHAcARQARAKAvgHQAkgGAFAWQADAPgxAFQg4AFgIAIQAzBAAVBwQAWB0gdBeQghBthcAiQgnAOgvAAQhTAAhxgvg");
	this.shape_3.setTransform(27.2,34.6);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-1,61.5,71.3);


(lib.bag5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C2B197").ss(1,0,0,4).p("AgiCeIAGgnQgkgIgVgTIAOgZQAXAVAfAFQASADAPgJQAPgIACgRQADgQgKgNQgIgMgTgNQgfgQgMgQQgPgUAEgYQAEgYATgOQASgPAaAAIAGgoIAZAEIgHAmQAdAGAUAQIgOAYQgVgRgagEQgVgDgLAJQgLAIgCANQgCAPAKALQAJALAXAPQAdAQALATQANATgEAaQgEAYgTAQQgUAQgcAAIgGApg");
	this.shape.setTransform(30.3,58.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AghCeIAGgnQglgIgVgTIAOgZQAYAVAeAFQATADAPgJQAOgIADgRQACgQgJgNQgJgMgTgNQgegQgNgQQgPgUAEgYQAEgYATgOQATgPAZAAIAHgoIAYAEIgGAmQAcAGAUAQIgNAYQgWgRgZgEQgVgDgLAJQgMAIgCANQgCAPAKALQAJALAXAPQAdAQALATQANATgEAaQgEAYgSAQQgUAQgdAAIgGApg");
	this.shape_1.setTransform(30.3,58.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C2B197").ss(2).p("Ah7ICQiEgrhBiCQhAh+AZiXQAZieB0h4QCCiHDTguQhig6gJgJQgGgGALgJQAWgPATgPQAvglASAAQAMAAABAVQABAcACAEQAHANAbgQQAxgcATgBQAOgBACARQAAALgBAcQACAaAQAMQA0AogDALQgCAIgngHQgygLgYgDQgpgGgGANQBoBNA5C0QA5CwgWCrQgXC7hwBTQiCBhjbhIg");
	this.shape_2.setTransform(36.8,54.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5D0B5").s().p("Ah7ICQiEgrhBiCQhAh+AZiXQAZieB0h4QCCiHDTguQhig6gJgJQgGgGALgJQAWgPATgPQAvglASAAQAMAAABAVQABAcACAEQAHANAbgQQAxgcATgBQAOgBACARQAAALgBAcQACAaAQAMQA0AogDALQgCAIgngHQgygLgYgDQgpgGgGANQBoBNA5C0QA5CwgWCrQgXC7hwBTQhLA4hoAAQhMAAhegfg");
	this.shape_3.setTransform(36.8,54.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-3.2,75.6,113.4);


(lib.bag4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C2B197").ss(1,0,0,4).p("AAiCfIgMgnQghALgcgJIABgcQAeAJAcgKQAUgHAJgOQAJgOgFgQQgEgPgPgIQgNgHgXgCQgjgCgTgIQgVgKgIgXQgHgYAKgVQAKgWAZgMIgMgmIAXgIIAMAlQAbgIAYAGIgBAcQgagGgYAIQgUAGgHAOQgHAMAEANQAFAOAOAGQANAGAbACQAiADASALQAUAKAIAZQAIAXgKAXQgKAXgbAOIAMAng");
	this.shape.setTransform(39.1,60.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAWB4QghALgcgJIABgcQAeAJAcgKQAUgHAJgOQAJgOgFgQQgEgPgPgIQgNgHgXgCQgjgCgTgIQgVgKgIgXQgHgYAKgVQAKgWAZgMIgMgmIAXgIIAMAlQAbgIAYAGIgBAcQgagGgYAIQgUAGgHAOQgHAMAEANQAFAOAOAGQANAGAbACQAiADASALQAUAKAIAZQAIAXgKAXQgKAXgbAOIAMAnIgYAIg");
	this.shape_1.setTransform(39.1,60.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C2B197").ss(2).p("AAyITQiCAphrhLQhmhHgoiTQgriZAsipQAwi+CQigQh9gKgYgHQgRgGAAgOQgBgNAQghQAbg3ARgLQAOgIAQAPQAbAbAEACQAWAOAdgOQAqgUAKgQQABgCAiAGQA+ANAHARQAGAOgfAVQgQALgrAZQgjAVAAANQB+AXB6B7QB4B6AyCYQA3Cog6CCQhDCXjMBBg");
	this.shape_2.setTransform(35.2,54.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5D0B5").s().p("Ai7HxQhmhHgoiTQgriZAsipQAwi+CQigQh9gKgYgHQgRgGAAgOQgBgNAQghQAbg3ARgLQAOgIAQAPQAbAbAEACQAWAOAdgOQAqgUAKgQQABgCAiAGQA+ANAHARQAGAOgfAVQgQALgrAZQgjAVAAANQB+AXB6B7QB4B6AyCYQA3Cog6CCQhDCXjMBBQgvAPgqAAQhPAAhFgxg");
	this.shape_3.setTransform(35.2,54.6);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.2,-2.5,74.9,114.3);


(lib.bag3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C2B197").ss(1,0,0,4).p("AgMCiIAAgoQgRAAgRgFQgQgFgKgHIAJgbQAZARAgAAQATAAANgLQANgKAAgRQAAgQgLgMQgLgKgVgKQgggKgPgPQgSgRAAgYQAAgZAQgRQAQgRAcgFIAAgoIAWAAIAAAnQAdAAAXANIgKAbQgWgOgcAAQgTAAgLALQgKAKAAANQAAAPAMAKQAKAJAZALQAgANAOAPQAQARAAAaQAAAYgQATQgRATgeAFIAAApg");
	this.shape.setTransform(35.6,67.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMCiIAAgoQgRgBgRgEQgRgFgKgIIAKgaQAZARAgAAQATAAANgLQANgLAAgQQAAgRgLgLQgLgKgVgKQgggLgPgOQgSgRAAgYQAAgZAQgRQAQgRAbgFIAAgoIAXAAIAAAnQAdAAAXANIgKAaQgWgNgcAAQgTAAgMALQgJAKAAANQAAAPAMAKQAKAJAZALQAgAMAOAQQAQARAAAZQAAAZgQASQgSAUgdAFIAAApg");
	this.shape_1.setTransform(35.6,67.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C2B197").ss(2).p("AhRI1QiKAAhPhoQhMhjAFiYQAGieBdiUQBoioC3htQgmgThJgRQhQgSgPgGQgjgOAPgWQARgaBZguQA2gbAYAFQARADAIAZQAJAlACAEQANAUAfgFQAfgEA1gTQAUgHAhASQA6AfgGAUQgEAQguAMQg6AMgaAHQguALgEANQA5AfBdCQQBqCmAlCXQAvDBhWBwQhoCJkjAAg");
	this.shape_2.setTransform(37.1,56.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5D0B5").s().p("AkqHNQhMhjAFiYQAGieBdiUQBoioC3htQgmgThJgRQhQgSgPgGQgjgOAPgWQARgaBZguQA2gbAYAFQARADAIAZQAJAlACAEQANAUAfgFQAfgEA1gTQAUgHAhASQA6AfgGAUQgEAQguAMIhUATQguALgEANQA5AfBdCQQBqCmAlCXQAvDBhWBwQhoCJkjAAQiKAAhPhog");
	this.shape_3.setTransform(37.1,56.6);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-6.9,76.8,121);


(lib.bag2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C2B197").ss(1,0,0,4).p("AhJCPIAQglQghgPgPgZIATgUQASAaAcAMQATAIAQgEQAOgFAHgQQAGgOgFgPQgGgOgPgSQgZgXgIgTQgKgXAKgWQAKgXAWgJQAUgKAaAHIAQgkIAXAJIgPAkQAZAMAQAVIgTAUQgQgWgZgKQgTgJgPAGQgMAFgEAMQgGAOAHAOQAEAMAUAVQAYAXAHAUQAHAWgKAYQgKAXgWAKQgVALgdgHIgRAmg");
	this.shape.setTransform(49.5,66.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhJCPIAQgkQghgPgPgaIATgUQASAbAcALQATAJAQgFQAOgFAHgPQAGgPgFgPQgGgOgPgSQgZgXgIgTQgKgWAKgWQAKgYAWgJQAUgKAaAHIAQgkIAXAJIgPAkQAZAMAQAVIgTAUQgQgVgZgLQgTgIgPAGQgMAEgEANQgGANAHAOQAEAMAUAWQAYAWAHAVQAHAVgKAZQgKAWgWAKQgVALgdgGIgRAlg");
	this.shape_1.setTransform(49.5,66.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C2B197").ss(2).p("AjgHhQiBg4gsh8Qgrh5A2iGQA6iNCXhkQCphxD4gfQhUhggNgqQgQgzBEgOQA6gMAUAOQAOALgDAeQgEArABAGQAEAZAgADQALACAygHQAZgEAGAWQAbBvhBgJQgBAAg1gOQgfgIgJAKQAoAzAcCpQAgDAgbCcQgiDEh7BFQiWBTkLh0g");
	this.shape_2.setTransform(41.8,54.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5D0B5").s().p("AjgHhQiBg4gsh8Qgrh5A2iGQA6iNCXhkQCphxD4gfQhUhggNgqQgQgzBEgOQA6gMAUAOQAOALgDAeQgEArABAGQAEAZAgADQALACAygHQAZgEAGAWQAbBvhBgJIg2gOQgfgIgJAKQAoAzAcCpQAgDAgbCcQgiDEh7BFQg/AjhTAAQhyAAidhEg");
	this.shape_3.setTransform(41.8,54.9);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-5.1,85.5,116);


(lib.bag1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C2B197").ss(1,0,0,4).p("AhJCPIAQglQgigPgOgZIATgUQARAZAcANQAUAIAQgFQAPgEAGgQQAGgPgGgPQgFgOgPgRQgZgXgIgTQgKgXAKgWQAKgXAWgJQAUgKAaAHIAQgkIAXAJIgQAkQAaAMAQAVIgTAUQgSgXgXgJQgTgJgPAGQgMAFgEAMQgGAOAHAOQAEAMAUAVQAYAXAHAUQAHAWgKAYQgKAXgWAKQgVALgdgHIgRAmg");
	this.shape.setTransform(43,64.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhJCPIAQglQgigPgOgYIATgVQARAZAcANQAUAJAQgGQAPgEAGgQQAGgPgGgOQgFgOgPgSQgZgXgIgTQgKgXAKgWQAKgWAWgKQAUgKAaAHIAQgkIAXAJIgQAkQAaAMAQAVIgTAUQgSgXgXgJQgTgIgPAFQgMAFgEAMQgGAOAHAOQAEANAUAUQAYAXAHAUQAHAWgKAYQgKAXgWALQgVAKgdgHIgRAmg");
	this.shape_1.setTransform(43,64.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C2B197").ss(2).p("AkEHeQighGAHhlQAHhTB7h5QAuguDTivQCmiMBAhUQixjLCEAAQAUAAALASQAEAGAMAhQAWA6A1AGQAZACA9gBQAwADgBAYQgFBlhJgNQgogLgQgFQgegIgJAKQAoA0AcCpQAgDAgbCbQgiDEh7BFQiWBUkLh1g");
	this.shape_2.setTransform(41.5,54.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5D0B5").s().p("AkEHeQighGAHhlQAHhTB7h5QAuguDTivQCmiMBAhUQixjLCEAAQAUAAALASQAEAGAMAhQAWA6A1AGQAZACA9gBQAwADgBAYQgFBlhJgNIg4gQQgegIgJAKQAoA0AcCpQAgDAgbCbQgiDEh7BFQg/AjhTAAQhzAAichEg");
	this.shape_3.setTransform(41.5,54.6);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-4,84.9,115.5);


(lib._14 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C2B197").ss(1,0,0,4).p("AgnCMIAIgjQgigJgQgSIAOgWQASAUAdAGQASAEAMgHQANgHADgPQAEgOgIgMQgHgLgRgNQgagQgLgPQgMgSAFgWQAFgWARgMQASgMAXACIAHgkIAWAFIgHAiQAZAHARAPIgOAVQgQgQgZgFQgSgEgKAHQgLAHgCAMQgDANAIALQAIAKATAPQAaAPAJARQAKATgFAWQgEAWgSANQgTAOgZgCIgIAlg");
	this.shape.setTransform(36.7,60.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmCMIAIgjQgjgJgQgSIAOgWQATAUAcAGQASAEAMgHQANgHADgPQAEgOgIgMQgHgLgRgNQgagQgKgPQgNgSAFgWQAFgWASgMQARgMAXACIAHgkIAWAFIgHAiQAZAHARAPIgNAVQgRgQgZgFQgSgEgKAHQgKAHgDAMQgDANAIALQAIAKATAPQAaAPAJARQAKATgEAWQgFAWgSANQgSAOgagCIgIAlg");
	this.shape_1.setTransform(36.7,60.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C2B197").ss(2).p("AilHkQh4gaguhsQgqhlAliHQAliIBqhzQB0h/Cig7QhHg3gEg1QgDgbAUgjQAKgTAKAIQAGAEARAbQAnA+AvADQAeADA3gNQAYgFAOAeQAJAUhCAWQhLAagIAPQBbBGBBCZQBECfgJCPQgLClhyBKQiHBXkDg5g");
	this.shape_2.setTransform(35.5,50.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5D0B5").s().p("AilHkQh4gaguhsQgqhlAliHQAliIBqhzQB0h/Cig7QhHg3gEg1QgDgbAUgjQAKgTAKAIQAGAEARAbQAnA+AvADQAeADA3gNQAYgFAOAeQAJAUhCAWQhLAagIAPQBbBGBBCZQBECfgJCPQgLClhyBKQhSA1iAAAQhRAAhngXg");
	this.shape_3.setTransform(35.5,50.8);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-5.6,73.5,108.2);


(lib.Tween11 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bag5("synched",0);
	this.instance.setTransform(-48.7,21.6,1,1,0,0,0,36.8,53.5);

	this.instance_1 = new lib.bag4("synched",0);
	this.instance_1.setTransform(89,87,1,1,0,0,0,34.2,54.6);

	this.instance_2 = new lib.bag3("synched",0);
	this.instance_2.setTransform(31.7,101.7,1,1,0,0,0,37.4,53.6);

	this.instance_3 = new lib.bag2("synched",0);
	this.instance_3.setTransform(-34.9,97.4,1,1,0,0,0,41.8,52.9);

	this.instance_4 = new lib.bag1("synched",0);
	this.instance_4.setTransform(-83.5,86,1,1,0,0,0,41.5,53.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C2B197").ss(1,0,0,4).p("AguCKIAKgjQgggJgRgVIAPgUQATAVAaAHQATAFAMgGQAOgHAEgOQADgOgHgNQgGgMgQgNQgZgRgKgQQgLgTAFgVQAGgWATgLQASgLAXADIAJgjIAVAGIgJAhQAaAIAQAQIgPAVQgSgSgWgGQgTgFgMAHQgJAGgDAMQgDANAHALQAHALATAQQAZAQAIASQAJATgGAWQgGAWgSAMQgTANgZgDIgKAkg");
	this.shape.setTransform(42.6,26.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AguCJIAKgiQgggKgRgUIAPgUQATAUAaAIQATAFAMgGQAOgHAEgOQADgPgHgMQgGgMgQgNQgZgRgKgQQgLgTAFgWQAGgVATgLQASgLAXADIAJgjIAVAGIgJAhQAaAIAQAQIgPAUQgSgRgWgGQgTgFgMAHQgJAGgDAMQgDAMAHAMQAHAKATARQAZAQAIASQAJASgGAXQgGAVgSANQgTAMgZgDIgKAkg");
	this.shape_1.setTransform(42.6,26.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C2B197").ss(2).p("Ai2HaQh9gagkiLQghiAA1ifQA1ihBuhhQB9htCRAbQhEg7gBhHQgBgZAIgOQAHgOAGAKQAeA3AQAiQAHAIArARQAZAJA/gWQAygRAMAdQAIAUhCATQhNAWgJAOQBYBMA6CVQA8CcgPCKQgSCfh3BHQiMBTkDg3g");
	this.shape_2.setTransform(38.6,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5D0B5").s().p("Ai2HaQh9gagkiLQghiAA1ifQA1ihBuhhQB9htCRAbQhEg7gBhHQgBgZAIgOQAHgOAGAKQAeA3AQAiQAHAIArARQAZAJA/gWQAygRAMAdQAIAUhCATQhNAWgJAOQBYBMA6CVQA8CcgPCKQgSCfh3BHQhVAyiAAAQhTAAhngWg");
	this.shape_3.setTransform(38.6,20);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#C2B197").ss(1,0,0,4).p("AgMCiIAAgoQglgBgXgQIAJgbQAZARAgAAQATAAANgLQANgLAAgQQAAgQgLgMQgLgLgUgIQghgLgPgPQgSgRAAgYQAAgZARgRQAQgRAbgFIAAgoIAXAAIAAAnQAdAAAWANIgKAbQgXgOgbAAQgTAAgLALQgKAJAAAOQAAAPAMAKQAKAJAZALQAgANAOAPQAQARAAAZQAAAZgQATQgRATgeAFIAAApg");
	this.shape_4.setTransform(59.2,-35.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMCiIAAgoQglgBgXgQIAJgbQAZARAgAAQATAAANgLQANgLAAgQQAAgRgMgLQgKgLgVgJQghgLgPgOQgRgRAAgYQAAgZARgRQAPgRAcgFIAAgoIAXAAIAAAnQAdAAAWANIgKAaQgXgNgbAAQgTAAgMALQgJAKAAANQAAAPALAKQALAJAZALQAfANAPAPQAPARAAAZQABAZgRASQgRAUgdAFIAAApg");
	this.shape_5.setTransform(59.2,-35.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#C2B197").ss(2).p("AgVIXQiKAAhPhnQhMhjAGiZQAGieBciUQBoinC4htQgUgQgUgDQgUgBgIgCQgYgIgZhfQgGgUA4AhQA7AiAhAsQALAPAigoQAogxAVgCQAkgEAJASQAIARgRAZQgRAZgfAQQgkATgogDQANBGBMDRQBJDIASBpQAcCjg/BVQhMBmjTAAg");
	this.shape_6.setTransform(41.9,-43.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E5D0B5").s().p("AjuGwQhMhjAGiZQAGieBciUQBoinC4htQgUgQgUgDQgUgBgIgCQgYgIgZhfQgGgUA4AhQA7AiAhAsQALAPAigoQAogxAVgCQAkgEAJASQAIARgRAZQgRAZgfAQQgkATgogDQANBGBMDRQBJDIASBpQAcCjg/BVQhMBmjTAAQiKAAhPhng");
	this.shape_7.setTransform(41.9,-43.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#C2B197").ss(1,0,0,4).p("AAVChIgJgnQgjAIgagLIADgcQAeALAcgHQAUgFALgNQAKgOgEgRQgDgPgOgJQgMgHgXgFQgjgFgSgJQgUgMgGgYQgFgYAMgVQAMgUAagKIgJgnIAYgGIAIAmQAbgGAZAIIgEAbQgbgHgXAFQgUAFgJANQgHALADAOQADAOAOAIQAMAGAaAFQAiAGASAMQASAMAGAZQAGAYgMAWQgMAXgcALIAJAog");
	this.shape_8.setTransform(2.4,27.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAMB6QgjAIgagMIADgcQAeAMAcgIQAUgEALgOQAKgNgEgRQgDgPgOgJQgMgIgXgEQgjgFgSgJQgUgMgGgZQgFgYAMgUQAMgVAagJIgJgnIAYgGIAIAlQAbgFAZAHIgEAcQgbgIgXAGQgUAFgJANQgHALADAOQADAOAOAHQAMAHAaAFQAiAFASANQASAMAGAZQAGAYgMAWQgMAXgcALIAJAnIgYAGg");
	this.shape_9.setTransform(2.4,27.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#C2B197").ss(2).p("AgNINQiCgJhYhoQhThigTiUQgTiWA3iLQA8ibCFhiQAUgOgwgSQgkgOgqgHQg9gKgTgQQgVgRA2gEQBHgHAPAOQAOANAogFQAsgGAggjQAbgdAlAHQBGAMgVAPQgBAAhHAbQgGADghAJQgXAGgGAGQgRAQBUAsQCMBKBgCfQBbCXALCgQAMCohSBkQhdBwi7gNg");
	this.shape_10.setTransform(3.5,22.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E5D0B5").s().p("AgNINQiCgJhYhoQhThigTiUQgTiWA3iLQA8ibCFhiQAUgOgwgSQgkgOgqgHQg9gKgTgQQgVgRA2gEQBHgHAPAOQAOANAogFQAsgGAggjQAbgdAlAHQBGAMgVAPIhIAbQgGADghAJQgXAGgGAGQgRAQBUAsQCMBKBgCfQBbCXALCgQAMCohSBkQhUBkigAAIgkgBg");
	this.shape_11.setTransform(3.5,22.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#C2B197").ss(1,0,0,4).p("AAACSIgBgkQghADgXgNIAGgZQAZANAagCQASgCALgLQALgLgCgPQgCgbgogMQgegIgPgKQgRgOgCgWQgCgWANgRQANgQAYgHIgEgkIAWgCIACAjQAagCAVAKIgHAYQgVgKgWACQgTACgJALQgIAJABAMQABAOAMAIQAKAHAXAIQAdAIAPAMQAPAOACAXQACAWgNASQgNATgaAHIADAlg");
	this.shape_12.setTransform(7.2,-40.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgBBuQghADgXgNIAGgZQAZANAagCQASgCALgLQALgLgCgPQgCgbgogLQgegJgPgKQgRgNgCgXQgCgWANgRQANgQAYgGIgEgkIAWgDIACAjQAagCAVAKIgHAYQgVgKgWADQgTABgJALQgIAJABANQABANAMAIQAKAHAXAIQAdAJAPALQAPAPACAWQACAXgNARQgNATgaAHIADAlIgWACg");
	this.shape_13.setTransform(7.2,-40.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#C2B197").ss(2).p("Ag3HuQiQAIhdhfQhXhagJiQQgJiUBOiHQBXiZCqhZQhCgYg0gIQgMgCgCgCQgCgCACgKQAHgkA0gGQAPgCAlgBQAkgDAagGQApgKARgYQAEgGADABQADACAPAQQAPARglAnQgsAwgEAPQBrAnBzCCQB5CHAoCLQAtCjhZBoQhqB7kYARg");
	this.shape_14.setTransform(10.7,-47.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E5D0B5").s().p("AkkGXQhXhagJiQQgJiUBOiHQBXiZCqhZQhCgYg0gIQgMgCgCgCQgCgCACgKQAHgkA0gGQAPgCAlgBQAkgDAagGQApgKARgYQAEgGADABQADACAPAQQAPARglAnQgsAwgEAPQBrAnBzCCQB5CHAoCLQAtCjhZBoQhqB7kYARIgYAAQiAAAhVhXg");
	this.shape_15.setTransform(10.7,-47.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#C2B197").ss(1,0,0,4).p("Ag2CKIALgjQgggLgQgWIAQgUQARAWAcAJQASAGANgGQAPgFAFgPQAEgOgGgNQgGgNgQgPQgZgSgJgRQgKgUAHgVQAHgWATgKQARgLAZAEIAMgjIAWAHIgMAiQAaAJAQASIgRAUQgRgTgWgIQgTgGgNAHQgJAFgEAMQgFANAIAMQAGALATASQAYASAIATQAIAUgHAWQgHAWgUALQgUANgagFIgLAkg");
	this.shape_16.setTransform(-38.3,-40.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag2CKIALgjQgggLgQgWIAQgUQARAWAcAJQASAGANgGQAPgFAFgPQAEgOgGgNQgGgNgQgPQgZgSgJgRQgKgUAHgVQAHgWATgKQARgLAZAEIAMgjIAWAHIgMAiQAaAJAQASIgRAUQgRgTgWgIQgTgGgNAHQgJAFgEAMQgFANAIAMQAGALATASQAYASAIATQAIAUgHAWQgHAWgUALQgUANgagFIgLAkg");
	this.shape_17.setTransform(-38.3,-40.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#C2B197").ss(2).p("ADdmLQAfAEAqgOQAUgGAJADQANADAKAXQAXA2gQAIQgHADgygJQgngGgFAFQgEAFAMAlQAvCTAACaQgBChg0BzQg4B+hoAoQhyAsihhIQiMg/geh8QgahxBEiCQBDh+CAhaQCGhgCagOQAWgCgdglQgWgcgegZQgUgRADgPQACgNARgGQAsgQAeAmQAgApgCALQgCAFgIgCQgJgBgGgGQgGgFAOAFQAIADAJABg");
	this.shape_18.setTransform(-27,-39.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E5D0B5").s().p("Ai1GuQiMg/geh8QgahxBEiCQBDh+CAhaQCGhgCagOQAWgCgdglQgWgcgegZQgUgRADgPQACgNARgGQAsgQAeAmQAgApgCALQgJgBgIgDQgOgFAGAFQAGAGAJABQAIACACgFQAfAEAqgOQAUgGAJADQANADAKAXQAXA2gQAIQgHADgygJQgngGgFAFQgEAFAMAlQAvCTAACaQgBChg0BzQg4B+hoAoQgsARgyAAQhSAAhjgtg");
	this.shape_19.setTransform(-27,-39.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#C2B197").ss(1,0,0,4).p("AAACTIgCgkQggADgXgNIAGgZQAYANAbgDQASgCALgKQALgLgCgQQgBgOgLgJQgKgIgUgHQgegJgPgJQgRgOgCgWQgCgWANgRQANgRAYgGIgEgkIAWgCIACAiQAbgBAUAJIgHAZQgVgKgWACQgTACgKALQgIAJACAMQABAOAMAHQAJAHAYAIQAdAJAPAMQAPAOACAXQACAWgNASQgNATgaAHIADAlg");
	this.shape_20.setTransform(74.4,34.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgCBuQggAEgXgOIAGgYQAYANAbgDQASgCALgLQALgKgCgQQgBgOgLgJQgKgJgUgGQgegJgPgJQgRgOgCgWQgCgWANgRQANgRAYgHIgEgjIAWgCIACAiQAbgBAUAJIgHAYQgVgKgWACQgTACgKAMQgIAIACANQABANAMAIQAJAHAYAIQAdAJAPAMQAPAOACAXQACAWgNARQgNAUgaAGIADAlIgWACg");
	this.shape_21.setTransform(74.4,34.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#C2B197").ss(2).p("AhJH3Qh7AMhMhZQhHhTgHiMQgGiPBBiMQBIicCKhqQhUgfgVgxQgKgZAIgoQAEgUAMAEQAGACAYAUQA5AvAtgLQAegHAvgcQAUgNAXAZQAPAQg3ApQg+AwgEAQQBrAnBsB+QByCEAjCJQApChhXBpQhmB8kHAag");
	this.shape_22.setTransform(76.2,26.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E5D0B5").s().p("AkQGqQhHhTgHiMQgGiPBBiMQBIicCKhqQhUgfgVgxQgKgZAIgoQAEgUAMAEQAGACAYAUQA5AvAtgLQAegHAvgcQAUgNAXAZQAPAQg3ApQg+AwgEAQQBrAnBsB+QByCEAjCJQApChhXBpQhmB8kHAaIgdABQhnAAhDhOg");
	this.shape_23.setTransform(76.2,26.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#C2B197").ss(1,0,0,4).p("Ag2CKIALgjQgggLgQgWIAQgVQASAWAbAKQATAGAMgGQAPgGAFgPQAEgOgGgNQgGgMgQgPQgZgTgJgRQgKgUAHgVQAHgVATgLQASgKAZAEIALgjIAWAHIgLAhQAZAJAQASIgQAUQgSgTgWgHQgTgGgNAHQgJAFgEAMQgEANAHAMQAGALATASQAYASAIATQAIATgHAXQgHAVgUAMQgUAMgZgEIgMAkg");
	this.shape_24.setTransform(1.8,74.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ag2CKIALgjQgggLgQgWIAQgVQASAWAbAKQATAGAMgGQAPgGAFgPQAEgOgGgNQgGgMgQgPQgZgTgJgRQgKgUAHgVQAHgVATgLQASgKAZAEIALgjIAWAHIgLAhQAZAJAQASIgQAUQgSgTgWgHQgTgGgNAHQgJAFgEAMQgEANAHAMQAGALATASQAYASAIATQAIATgHAXQgHAVgUAMQgUAMgZgEIgMAkg");
	this.shape_25.setTransform(1.8,74.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#C2B197").ss(2).p("ADdmMQAfAFAqgOQATgHAKADQANAEAKAXQAXA1gQAIQgIAEgxgJQgngHgFAFQgEAFAMAmQAvCTgBCaQgBChgzBzQg5B+hnAoQhzAsighIQiMg/geh8QgbhxBEiCQBDh+CAhaQCHhgCZgOQAXgCgdglQgXgcgegZQgTgRACgPQADgNARgGQAsgQAeAmQAgAogCALQgBAGgJgCQgJgCgGgFQgHgGAPAFQAIADAJABg");
	this.shape_26.setTransform(13.2,75.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E5D0B5").s().p("Ai1GuQiMg/geh8QgbhxBEiCQBDh+CAhaQCHhgCZgOQAXgCgdglQgXgcgegZQgTgRACgPQADgNARgGQAsgQAeAmQAgAogCALIAAABIAAAAIAAAAQgBADgEABIgBAAIgCAAIgBAAIgBgBQgJgCgGgFIgBgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAABAAIACAAIACABIABAAIAAAAIABABIABAAIABAAIABAAQAIADAJABQgJgBgIgDIgBAAIgBAAIgBAAIgBgBIAAAAIgBAAIgCgBIgCAAQgBAAAAAAQAAAAAAABQAAAAAAAAQABABAAAAIABABQAGAFAJACIABABIABAAIACAAIABAAQAEgBABgDIAAAAIAAAAIAAgBQAfAFAqgOQATgHAKADQANAEAKAXQAXA1gQAIQgIAEgxgJQgngHgFAFQgEAFAMAmQAvCTgBCaQgBChgzBzQg5B+hnAoQgtARgxAAQhSAAhjgtg");
	this.shape_27.setTransform(13.2,75.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#C2B197").ss(2,0,0,4).p("AAsCcIgOglQgiANgbgIIgBgcQAfAHAagLQAUgIAIgPQAJgOgGgQQgGgPgPgHQgNgGgXAAQgjgBgTgIQgXgHgIgXQgJgXAJgWQAJgWAYgOIgOglIAWgJIAOAkQAcgKAXAEIAAAcQgZgEgYAJQgUAIgGAOQgGAMAFANQAFAOAPAFQAMAFAcABQAiABATAKQAVAJAJAYQAJAXgJAXQgJAYgaAPIAPAmg");
	this.shape_28.setTransform(60.5,73.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAeB3QgiANgbgIIgBgcQAfAHAagLQAUgIAIgPQAJgOgGgQQgGgPgPgHQgNgGgXAAQgjgBgTgIQgXgHgIgXQgJgXAJgWQAJgWAYgOIgOglIAWgJIAOAkQAcgKAXAEIAAAcQgZgEgYAJQgUAIgGAOQgGAMAFANQAFAOAPAFQAMAFAcABQAiABATAKQAVAJAJAYQAJAXgJAXQgJAYgaAPIAPAmIgXAJg");
	this.shape_29.setTransform(60.5,73.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#C2B197").ss(2).p("AA0IaQihA+hBhOQg2g/AEitQABhAAckRQAWjZgNhpQh9gKgvgaQg0geAygwQAOgOAUAFQAIACAfAPQA4AaAqghQArgpAUgSQAlgfAQARQBCBMg9AqQgBAAgyAcQgbAPABANQBAAJCIBmQCeB0BaCCQBwCigoCHQgxClkSBog");
	this.shape_30.setTransform(61.6,66.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E5D0B5").s().p("AiuIKQg2g/AEitQABhAAckRQAWjZgNhpQh9gKgvgaQg0geAygwQAOgOAUAFQAIACAfAPQA4AaAqghQArgpAUgSQAlgfAQARQBCBMg9AqIgzAcQgbAPABANQBAAJCIBmQCeB0BaCCQBwCigoCHQgxClkSBoQhGAcg1AAQhDAAgkgsg");
	this.shape_31.setTransform(61.6,66.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#C2B197").ss(2,0,0,4).p("Ag2CKIALgjQgfgLgRgWIAQgUQASAWAbAJQASAGANgGQAPgFAFgPQAEgOgGgOQgGgMgQgPQgZgSgJgRQgKgUAHgWQAHgVATgLQARgKAaAEIALgjIAWAHIgLAhQAaAKAPARIgRAVQgOgSgZgJQgTgGgNAHQgJAFgEAMQgEANAHAMQAGALATASQAYASAIATQAIAUgHAWQgHAWgUALQgUAMgZgEIgMAkg");
	this.shape_32.setTransform(2,-114.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Ag2CKIALgjQgfgLgRgWIAQgUQASAWAbAJQASAGANgGQAPgFAFgPQAEgOgGgOQgGgMgQgPQgZgSgJgRQgKgUAHgWQAHgVATgLQARgKAaAEIALgjIAWAHIgLAhQAaAKAPARIgRAVQgOgSgZgJQgTgGgNAHQgJAFgEAMQgEANAHAMQAGALATASQAYASAIATQAIAUgHAWQgHAWgUALQgUAMgZgEIgMAkg");
	this.shape_33.setTransform(2,-114.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#C2B197").ss(2).p("ADdmLQAfAEAqgOQAUgGAJADQANADAKAXQAXA1gQAIQgHAEgygJQgngHgEAFQgFAFAMAmQAvCTAACaQgBChg0BzQg4B+hoAoQhyAsihhIQiMg/geh8QgahxBEiCQBDh+CAhaQCGhgCagOQAWgCgdglQgWgbgegaQgUgRADgPQACgNARgGQAsgQAeAmQAhApgDALQgBAFgIgCQgJgBgHgGQgGgFAOAFQAIADAJABg");
	this.shape_34.setTransform(13.3,-113.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E5D0B5").s().p("Ai1GuQiMg/geh8QgahxBEiCQBDh+CAhaQCGhgCagOQAWgCgdglQgWgbgegaQgUgRADgPQACgNARgGQAsgQAeAmQAhApgDALQgJgBgIgDQgOgFAGAFQAHAGAJABQAIACABgFQAfAEAqgOQAUgGAJADQANADAKAXQAXA1gQAIQgHAEgygJQgngHgEAFQgFAFAMAmQAvCTAACaQgBChg0BzQg4B+hoAoQgsARgyAAQhSAAhjgtg");
	this.shape_35.setTransform(13.3,-113.6);

	this.addChild(this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-126,-168.7,252.5,330.9);


(lib.moneyPilecopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.man();
	this.instance.setTransform(201,-61.9,1,1,0,0,0,87.6,70.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:70.7,rotation:6.5,x:221,y:-57},19).to({rotation:0,x:202,y:-62.9},19).to({regY:70.8,rotation:-6.2,x:169,y:-63.9},20).to({rotation:0,x:201,y:-61.9},20).wait(1));

	// Layer 23
	this.instance_1 = new lib.bag10("synched",0);
	this.instance_1.setTransform(89.5,212,1,1,0,0,0,35.9,52.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-7.4,x:87.4},19,cjs.Ease.get(-0.22)).to({rotation:0,x:89.5},19,cjs.Ease.get(-0.24)).to({rotation:-15,x:81.7,y:211},20,cjs.Ease.get(-0.19)).to({rotation:0,x:89.5,y:212},20).wait(1));

	// Layer 24
	this.instance_2 = new lib.bag11("synched",0);
	this.instance_2.setTransform(138.9,228.1,1,1,0,0,0,39.6,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-7.2,x:137.5},19,cjs.Ease.get(-0.22)).to({rotation:0,x:138.9},19,cjs.Ease.get(-0.24)).to({rotation:-8.7,x:137.7,y:228.2},20,cjs.Ease.get(-0.19)).to({rotation:0,x:138.9,y:228.1},20).wait(1));

	// Layer 21
	this.instance_3 = new lib.bag9("synched",0);
	this.instance_3.setTransform(141.3,175.9,1,1,0,0,0,33.1,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:43.6,rotation:8.2,x:144.8,y:176},19,cjs.Ease.get(-0.22)).to({regY:43.5,rotation:0,x:141.3,y:175.9},19,cjs.Ease.get(-0.24)).to({rotation:8.2,x:137.2},20,cjs.Ease.get(-0.19)).to({rotation:0,x:141.3},20).wait(1));

	// Layer 25
	this.instance_4 = new lib.bag13("synched",0);
	this.instance_4.setTransform(136.6,284.4,1,1,0,0,0,39.1,55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:39,rotation:-5.5,x:140.7},19,cjs.Ease.get(-0.22)).to({regX:39.1,rotation:0,x:136.6},19,cjs.Ease.get(-0.24)).to({rotation:8,x:140.1},20,cjs.Ease.get(-0.19)).to({rotation:0,x:136.6},20).wait(1));

	// Layer 26
	this.instance_5 = new lib.bag12("synched",0);
	this.instance_5.setTransform(87.1,301.9,1,1,0,0,0,31.5,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:31.6,rotation:-6,x:90},19,cjs.Ease.get(-0.22)).to({regX:31.5,rotation:0,x:87.1},19,cjs.Ease.get(-0.24)).to({rotation:8.5},20,cjs.Ease.get(-0.19)).to({rotation:0},20).wait(1));

	// Layer 20
	this.instance_6 = new lib.bag8("synched",0);
	this.instance_6.setTransform(106.1,145.6,1,1,0,0,0,26.7,36.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:36.4,rotation:3.7,x:108.2},19,cjs.Ease.get(-0.22)).to({regY:36.3,rotation:0,x:106.1},19,cjs.Ease.get(-0.24)).to({rotation:15,x:101.9},20,cjs.Ease.get(-0.19)).to({rotation:0,x:106.1},20).wait(1));

	// Layer 19
	this.instance_7 = new lib.bag7("synched",0);
	this.instance_7.setTransform(119.4,144.9,1,1,0,0,0,24.9,101.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:6.2},19,cjs.Ease.get(-0.22)).to({rotation:0},19,cjs.Ease.get(-0.24)).to({rotation:-5.5,x:113.9},20,cjs.Ease.get(-0.19)).to({rotation:0,x:119.4},20).wait(1));

	// Layer 18
	this.instance_8 = new lib.bag6("synched",0);
	this.instance_8.setTransform(162.3,70,1,1,0,0,0,36.6,70);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:7,x:169.9},19,cjs.Ease.get(-0.22)).to({rotation:0,x:162.3},19,cjs.Ease.get(-0.24)).to({rotation:-8.2,x:144.9},20,cjs.Ease.get(-0.19)).to({rotation:0,x:162.3},20).wait(1));

	// Layer 27
	this.instance_9 = new lib.Tween9("synched",0);
	this.instance_9.setTransform(89.6,361);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:7.5,x:93.1},19,cjs.Ease.get(-0.22)).to({rotation:0,x:89.6},19,cjs.Ease.get(-0.24)).to({rotation:-6.7,x:86.1},20,cjs.Ease.get(-0.19)).to({rotation:0,x:89.6},20).wait(1));

	// Layer 28
	this.instance_10 = new lib._14("synched",0);
	this.instance_10.setTransform(163.4,340.5,1,1,0,0,0,35.8,48.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:5.7,x:166.2},19,cjs.Ease.get(-0.22)).to({rotation:0,x:163.4},19,cjs.Ease.get(-0.24)).to({rotation:-8.7,x:157.1},20,cjs.Ease.get(-0.19)).to({rotation:0,x:163.4},20).wait(1));

	// Layer 1
	this.instance_11 = new lib.Tween11("synched",0);
	this.instance_11.setTransform(125.1,456.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({startPosition:0},19,cjs.Ease.get(-0.22)).to({startPosition:0},19,cjs.Ease.get(-0.24)).to({startPosition:0},20,cjs.Ease.get(-0.19)).to({startPosition:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-132.7,289.7,751.3);


// stage content:



(lib.how_V2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("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");
	this.shape.setTransform(1206,519.1);

	// Layer 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(70,70,70,0.282)").s().p("AAAAHQgDgHAAgJIAIAAIAAAJIAAAJQgFAAAAgCg");
	this.shape_1.setTransform(1147.8,874.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(86,86,86,0.345)").s().p("AATI0IAKAAIAKAAQAAAFgCABQgHAFgEAAQgHAAAAgLgAgnoqIAAgKIAAgKQAGAFACAGQACAEABAFIgLAAg");
	this.shape_2.setTransform(1166.3,864.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(214,214,214,0.847)").s().p("AgDAKIAAgKIAAgIIAIAAIAAAIIAAAKIgIAAg");
	this.shape_3.setTransform(1183.8,769.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(58,58,58,0.235)").s().p("AAAATQgDgTgBgTIAIAAIAAATIAAAKIAAAKQgEAAAAgBg");
	this.shape_4.setTransform(1340.8,1012.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(123,123,123,0.49)").s().p("AgEAdIAAgKIAAgvIAIAAIAAAvIAAAKIgIAAg");
	this.shape_5.setTransform(1340.8,1007.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(193,193,193,0.765)").s().p("AgYgDIAnAAIAKAAQAAADgBAAQgYAFgYAAIAAgIg");
	this.shape_6.setTransform(1343.8,1004.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(102,102,102,0.408)").s().p("AgEAAIAAgIIAIAAQAAAEgCAEQgCAEgEAGIAAgKg");
	this.shape_7.setTransform(1411.8,1003.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(253,253,253,0.996)").s().p("AAsB9QAAgGgCgCQgDgDgFAAQAAgFgCgCQgDgDgEAAQgBgFgCgCQgDgCgEgBQgBgEgCgDQgDgCgEgBQAAgEgDgDQgCgCgDgBQAAgEgDgDQgCgDgGABIAAgKQAAgFgCgDQgDgCgFAAQAAgGgCgCQgDgCgFAAQABgGgDgCQgDgDgFAAQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgCgEgBQgBgEgCgBQgDgCgEgBQgBgEgCgDQgDgCgEgBQAAgEgDgDQgCgDgFABIAAgKQAAgFgDgDQgCgCgGAAQAAgGgCgCQgDgCgFAAIAAgLIAAgKIAKAAQAGAAACgCQADgDAAgFQAFABACgDQADgDAAgFQAEAAADgCQACgDABgFQAEAAADgCQACgDABgEQAEgBADgCQACgDAAgEIAKAAQABAEACADQADACAEABQAAAEADADQACACAFAAQAAAFADADQACACAFAAQAAAFADADQACADAGgBQAAAFACADQABACAFAAIAAAKQAAAGACACQADADAFAAQgBAFADACQACADAGAAQgBAFADACQADACAEABQABAEACADQADACAEABQABAEACADQADACAEAAQAAAFADADQACACAFAAQAAAEADACQACADAFgBIAAAKQAAAFADADQACACAGAAQAAAGACACQACADAGAAQAAAFACACQADADAFAAQgBAFADACQACACAGABIAAAKIAAAJIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgLAAIAAAKIgKAAIgKAAIAAALIgKAAg");
	this.shape_8.setTransform(1766.8,954.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(134,134,134,0.533)").s().p("AgEAKIAAgKIAAgIIAIAAIAAAIIAAAKIgIAAg");
	this.shape_9.setTransform(1682.8,823.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(118,118,118,0.471)").s().p("EgrGADmIAAgKIAAgKIAJAAIAAAKIAAAKIgJAAgEgrQACfIAAgKIAAgJIAKAAIAAAJIAAAKIgKAAgEAoTgCUIgKAAIAAgKIAKAAIAKAAIAAAKIgKAAgEArHgDRIAAgJIAAgKIAKAAIAAAKIAAAJIgKAAg");
	this.shape_10.setTransform(1433.3,847.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(54,54,54,0.22)").s().p("AucOOIAAgKQARgBgLATQgBACgFAAIAAgKgAMGAyIAKAAIAKAAQAAAFgCABQgHAEgEAAQgHAAAAgKgEgvGgHKIAAgKIAAgKQAFAFADAGQACAEAAAFIgKAAgEAu8gOMIAAgKQARgBgLATQgBACgFAAIAAgKgEAlQgOMIAKAAIAKAAQAAAFgCABQgIAEgKAAIAAgKg");
	this.shape_11.setTransform(1459.8,921.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(198,198,198,0.784)").s().p("EgxJACZQgDgIAAgKIAJAAIAAAJIAAAKQgFAAgBgBgEgxTABSQgDgHAAgLIAKAAIAAAKIAAAKQgGAAgBgCgEgxdAAMQgDgHAAgJIAKAAIAAAIIAAALQgGgBgBgCgEAxXgCPIgJAAIAAgKQAKAAAIADQABABAAAGIgKAAg");
	this.shape_12.setTransform(1472.3,857.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(38,38,38,0.157)").s().p("A2tH4IAKAAIAKAAQAAAFgCABQgIAFgEAAQgHAAABgLgAWlnuIAAgKIAAgKIAKAAIAAAKIAAAKIgKAAg");
	this.shape_13.setTransform(1648.8,902.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(182,182,182,0.722)").s().p("Eg4yAJ2IgKAAIAAgKIAKAAIAKAAIAAAKIgKAAgEg54AH+IAAgKIAAgKQAFAFADAGQACAEAAAFIgKAAgEg6CAG4IAAgKIAAgKQAFAFADAGQACAEAAAFIgKAAgEg5QAFoIAKAAIAKAAQAAAFgCABQgIAEgKAAIAAgKgAayBGIAKAAIAKAAQAAAFgCABQgIAEgKAAIAAgKgEA54gJqIAAgKQARgBgLATQgBACgFAAIAAgKg");
	this.shape_14.setTransform(1516.8,814.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(67,67,67,0.271)").s().p("AAEAFIgSAAIAAgIIASAAIAKAAIAAAIIgKAAg");
	this.shape_15.setTransform(1907.8,689.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(60,60,60,0.243)").s().p("AAwBKIAAgKIAAhYQASAfgHA5IgBAKIgKAAgAg3AYQgEgwgBgxIAKAAIAABYIAAAKIgFgBg");
	this.shape_16.setTransform(1904.4,670.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(253,253,253,0.992)").s().p("EgziAnDQAAgEgDgDQgCgCgFgBQAAgEgDgDQgCgCgGgBQAAgEgCgDQgDgDgFABQAAgGgCgCQgDgDgFABQABgFgDgDQgDgCgFAAQAAgGgCgCQgDgCgFAAQAAgGgCgCQgDgDgEAAQgBgFgCgCQgDgDgEAAQgBgFgCgCQgDgCgEgBQAAgEgDgDQgCgCgFgBQAAgEgDgDQgCgCgGgBIgKAAQAAgEgCgDQgDgDgFABQABgGgDgCQgDgDgFABQAAgFgCgDQgDgCgFAAQAAgGgCgCQgDgCgEAAQgBgGgCgCQgDgDgEAAQgBgFgCgCQgDgDgEAAIAAgKQAEABADgDQACgDABgFQAEAAADgCQACgDABgFQAEAAADgCQACgDAAgEQAFgBADgCQACgDAAgEQAFgBADgCQADgCgBgFQAFAAADgDQACgCAAgFIAKAAIALAAQAAAFACACQACADAGAAQAAAFACACQACACAGABQgBAEADADQACACAGABQgBAEADADQADACAEAAQABAFACADQADACAEAAQABAFACADQADADAEgBQAAAFADADQACACAFAAQAAAFADADQACACAFAAQAAAGADACQACADAGAAQAAAFACACQACADAGAAQAAAFACACQACACAGABQgBAEADADQACACAGABQgBAEADADQADACAEAAQABAFACADQADACAEAAQABAFACADQADADAEgBQAAAFADADQACACAFAAQAAAFADADQACACAFAAIAAALIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAJIgJAAIAAAKIgKAAIAAAKIgKAAgEgEDAmvQAAgEgCgDQgDgDgFABQAAgGgCgCQgDgDgFABQABgFgDgDQgDgCgFAAIAAgKQAAgGgCgCQgDgDgFAAQAAgFgCgCQgDgDgEAAQgBgFgCgCQgDgCgEgBIAAgKQAEAAADgCQACgDABgFQAEAAADgCQACgDAAgEIAKAAQAFgBADgCQADgDgBgEQAFgBADgCQACgCAAgFQAFAAADgDQACgCAAgFIALAAQAFAAACgDQADgCAAgGQAEAAADgCQACgDABgFIAKAAQAEAAADgCQACgDAAgFQAFABADgDQACgDAAgFQAFAAADgCQADgDgBgFIAKAAQAFAAADgCQACgDAAgEQAGgBACgCQADgDAAgEQAFgBACgCQADgCAAgFIAKAAQAEAAADgDQACgCABgFQAEAAADgDQACgCAAgGIAKAAQABAGACACQADADAEAAQAAAFADACQACADAFAAQAAAFADACQACACAFABIAAAKQAAAEADADQACACAGAAQAAAFACADQACACAGAAQAAAFACADQACADAGgBIAAAKIgKAAIAAAKIgKAAIgLAAIAAALIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgJAAIAAAJIgKAAIAAAKIgKAAIgKAAIAAAKIgLAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAALIgKAAIAAAKIgJAAIgKAAIAAAKIgKAAIAAAKIgKAAIAAAJIgLAAgEABPAirIgKAAIAAgKQAAgEgCgDQgDgDgFABQAAgGgCgCQgDgDgEABQgBgFgCgDQgDgCgEAAQgBgGgCgCQgDgCgEAAIAAgLQAAgFgDgCQgCgDgFAAIAAgKIAKAAQAEABADgDQACgDABgFQAEAAADgCQACgDABgFQAEAAADgCQACgDAAgEIAKAAQAFgBADgCQADgDgBgEQAFgBADgCQACgCAAgFQAFAAADgDQACgCAAgFQAGAAACgDQADgCAAgGIAKAAQAEAAADgCQACgDABgFQAEAAADgCQACgDABgFQAEABADgDQACgDAAgFQAFAAADgCQACgDAAgFIAKAAQAFAAADgCQACgDAAgEQAFgBADgCQACgDAAgEQAGgBACgCQADgCAAgFIAKAAQAEAAADgDQACgCABgFIAKAAIAAAKQgBAFADACQADACAEABQABAEACADQADACAEABQABAEACADQADACAEAAQAAAFADADQACACAFAAIAAAKQAAAFADADQACACAFAAIAAAKIgKAAIAAALIgKAAIgKAAIAAAKIgKAAIAAAKIgJAAIAAAKIgKAAIAAAJIgKAAIgKAAIAAAKIgLAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAALIgJAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgLAAIAAAJIgKAAIAAAKIgKAAgEg4ZAhvIgKAAIAAgKQAAgFgCgCQgDgCgFgBIAAgKQAAgEgCgDQgDgCgEgBIAAgJQgBgGgCgCQgDgDgEABQgBgFgCgDQgDgCgEAAIAAgKQAAgGgDgCQgCgDgFAAIAAgKQAAgFgDgCQgCgCgGgBIAAgKQAAgEgCgDQgDgCgFgBQAAgEgCgDQgDgDgFABIAAgKQABgFgDgDQgDgCgFAAIAAgKQAAgGgCgCQgDgDgFAAQAAgFgCgCQgDgDgEAAIAAgKQgBgEgCgDQgDgCgEgBIAAgKQAEAAADgCQACgDABgEQAEgBADgCQACgDAAgEIAKAAQAFgBADgCQADgCgBgFIAKAAQAFAAADgDQACgCAAgFIALAAQAFAAACgDQADgCAAgGIAKAAIAAALQgBAFADACQACADAGAAQgBAFADACQADACAEABIAAAKQABAEACADQADACAEAAIAAAKQABAFACADQADADAEgBIAAAKQAAAFADADQACACAFAAQAAAGADACQACADAFAAIAAAKQAAAFADACQACACAGABIAAAKQAAAEACADQACACAGAAIAAAKQAAAFACADQACADAGgBQgBAFADADQACACAGAAIAAAKQgBAGADACQADADAEAAIAAAKQABAFACACQADACAEABIAAAKIAAAJIgKAAIAAAKIgJAAIgKAAIAAAKIgKAAIgKAAIAAAKIgLAAIgKAAIAAAKIgKAAgAGaenIgKAAIAAgKQgBgEgCgDQgDgCgEgBQAAgEgDgDQgCgDgFABQAAgGgDgCQgCgDgGABIAAgKQAAgGgCgCQgDgCgFAAQAAgGgCgCQgDgDgFAAIAAgKIAKAAQAFAAADgCQACgDAAgFQAGABACgDQADgDAAgFQAFAAACgCQADgDAAgFIAKAAQAEAAADgCQACgDABgEQAEgBADgCQACgDAAgEQAFgBADgCQACgCAAgFIAKAAQAFAAADgDQACgCAAgFQAFAAADgDQACgCAAgGQAGAAACgCQADgDAAgFQAFAAACgCQADgDAAgFIAKAAQAEABADgDQACgDABgFQAEAAADgCQACgDAAgFQAFAAADgCQACgDAAgEIAKAAQAFgBADgCQACgDAAgEQAFgBADgCQACgCAAgFIALAAQAAAFACACQACACAGABIAAAKQAAAEACADQACACAGAAQgBAFADADQACACAGAAQgBAFADADQADADAEgBIAAAKQABAFACADQADACAEAAIAAALIgKAAIAAAKIgJAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAJIgLAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgJAAIAAALIgKAAIgKAAIAAAKIgKAAIAAAKIgLAAIAAAKIgKAAIgKAAIAAAJIgKAAIAAAKIgKAAIAAAKIgJAAgEAuFAeTIAAgJQAAgGgCgCQgDgDgFABQAAgFgCgDQgDgCgEAAQgBgGgCgCQgDgCgEAAQgBgGgCgCQgDgDgEAAIAAgKQAAgFgDgCQgCgCgFgBQAAgEgDgDQgCgCgGgBQAAgEgCgDQgDgCgFgBQAAgEgCgDQgDgDgFABQABgGgDgCQgDgDgFABIAAgKQAAgGgCgCQgDgCgFAAQAAgGgCgCQgDgDgEAAQgBgFgCgCQgDgDgEAAQgBgFgCgCQgDgCgEgBQAAgEgDgDQgCgCgFgBIAAgKQAAgEgDgDQgCgDgGABIAAgKIAAgKQAGAAACgDQADgCAAgFIAKAAQAEAAADgDQACgCABgGQAEAAADgCQACgDABgFQAEAAADgCQACgDAAgFQAFABADgDQACgDAAgFIAKAAQAAAFADADQACADAFgBQAAAFADADQACACAFAAQAAAFADADQACACAGAAIAAALQAAAFACACQACADAGAAQAAAFACACQADACAFABQgBAEADADQACACAGABQgBAEADADQADACAEAAIAAAKQABAFACADQADADAEgBQABAFACADQADACAEAAQAAAFADADQACACAFAAQAAAGADACQACADAFAAQAAAFADACQACADAGAAIAAAKQAAAEACADQACACAGABQAAAEACADQADACAFAAQgBAFADADQACACAGAAQgBAFADADQADADAEgBIAAAKIgJAAIAAAKIgKAAIAAALIgKAAIAAAKIgKAAIAAAKIgLAAIgKAAIAAAKIgKAAIAAAJIgKAAgEA1bAKxQAAgEgCgDQgDgCgFgBQABgEgDgDQgDgDgFABIgKAAQAAgGgCgCQgDgDgEABQgBgFgCgDQgDgCgEAAIgKAAQAAgGgDgCQgCgCgFAAIAAgLIAAgKQAFAAACgCQADgDAAgFQAFABACgDQACgDABgFIAAgKQAEAAADgCQACgDABgEQAEgBADgCQACgDAAgEQAFgBADgCQACgDAAgEIAAgKQAFAAADgDQADgCgBgGQAFAAADgCQACgDAAgFIAAgKQAFABADgDQACgDAAgFQAGAAACgCQADgDAAgFQAFAAACgCQADgDAAgEIAAgKQAFgBACgCQACgDABgEQAEAAADgDQACgCABgFIAAgLQAEAAADgCQACgDAAgFQAFAAADgCQACgDAAgFIAKAAIAKAAIAKAAQAAAFADADQACACAGAAQAAAFACADQACACAGAAQAAAGACACQADADAFAAIAKAAQgBAFADACQADADAEAAIAAAKIAAAKIAAAJIgJAAIAAAKIgKAAIAAAKIgKAAIAAAKIAAAKIgKAAIAAALIgLAAIAAAKIAAAKIgKAAIAAAKIgKAAIAAAJIgKAAIAAAKIAAAKIgKAAIAAAKIgJAAIAAAKIAAALIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIAAAJIgLAAIAAAKIgKAAgEg0VAH9IgKAAQAAgEgCgDQgDgCgEgBQgBgEgCgDQgDgDgEABQgBgGgCgCQgDgDgEABQAAgFgDgDQgCgCgFAAQAAgGgDgCQgCgCgGAAQAAgGgCgCQgDgDgFAAIAAgKQAFAAADgCQACgDAAgFQAGABACgDQADgDAAgFQAFAAACgCQADgDAAgFQAEAAADgCQACgDABgEQAEgBADgCQACgDABgEQAEgBADgCQACgDAAgEQAFAAADgDQACgCAAgFQAFAAADgDQADgCgBgGQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgFQAGABACgDQADgDAAgFQAFAAACgCQADgDAAgFQAEAAADgCQACgDABgEQAEgBADgCQACgDABgEQAEgBADgCQACgDAAgEQAFAAADgDQACgCAAgFQAFAAADgDQADgCgBgGIAKAAIAKAAQAAAGADACQACADAGAAQAAAFACACQACADAGAAQAAAEACADQACACAGABQgBAEADADQACACAGABQgBAEADADQADACAEAAIAAAKIAAAKIgJAAIAAAKIgKAAIAAAKIgKAAIAAALIgKAAIAAAKIgLAAIAAAKIgKAAIAAAKIgKAAIAAAJIgKAAIAAAKIAAAKIgKAAIAAAKIgJAAIAAAKIgKAAIAAALIgKAAIAAAKIgKAAIAAAKIgLAAIAAAKIgKAAIAAAJIgKAAIAAAKIgKAAgEgveADSIgLAAQAAgFgCgDQgDgCgFAAIAAgKQAAgGgCgCQgDgDgFAAQABgFgDgCQgDgDgFAAQAAgFgCgCQgDgDgFAAQAAgEgCgDQgDgCgEgBIAAgKQAEAAADgCQACgDAAgEQAFgBADgCQACgDAAgEQAFgBADgCQADgDgBgEIAKAAQAFAAADgDQACgCAAgFQAGAAACgDQADgCAAgGQAFAAACgCQADgDAAgFQAEAAADgCQACgDABgFIAKAAQAEABADgDQACgDAAgFQAFAAADgCQACgDAAgFQAFAAADgCQADgDgBgEIAKAAQAFgBADgCQACgDAAgEQAGgBACgCQADgDAAgEQAFAAACgDQADgCAAgFQAEAAADgDQACgCABgFIAKAAQAEAAADgBQACgDAAgFIAKAAIAKAAQAAAFADADQACABAFAAQAAAFADACQACADAFAAIAAAKQAAAEADADQACACAGABQAAAEACADQACACAGABQAAAEACADQACACAGAAIAAAKIgKAAIAAAKIgKAAIAAAKIgLAAIAAAKIgKAAIgKAAIAAALIgKAAIAAAKIgKAAIAAAKIgJAAIgKAAIAAAKIgKAAIAAAJIgKAAIAAAKIgLAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAIAAALIgJAAIgKAAIAAAKIgKAAIAAAKIgKAAgEA5CgJMIAAgKQgBgGgCgCQgDgCgEAAIAAgKIAAgLQgBgFgCgCQgCgDgFAAIAAgKQAAgEgDgDQgCgCgFgBIAAgKIAAgJQAAgGgDgCQgCgDgGABIAAgKIAAgKQAAgGgCgCQgDgDgFAAIAAgKQAAgFgCgCQgDgDgFAAIAAgKIAAgKQABgEgDgDQgDgDgFABIAAgKIAAgKQAAgGgCgCQgDgCgFAAIAAgLQAAgFgCgCQgDgDgEAAIAAgKQAEABADgDQACgDAAgFIAKAAQAFAAADgCQADgDgBgFIAKAAIAKAAQAGAAACgCQADgDAAgEIAKAAQAFgBACgCQACgDABgEIAKAAQgBAEADADQADACAEABIAAAJQABAFACADQADACAEAAIAAAKIAAAKQABAFACADQADACAEAAIAAALIAAAKQABAEACADQACACAFABIAAAKQAAAEADADQACACAFAAIAAAKIAAAKQAAAFADADQACACAGAAIAAAKIAAALQAAAFACACQACADAGAAIAAAKQAAAEACADQADACAFABIAAAJIAAAKQgBAFADADQACADAGgBIAAAKIAAAKIAAALIgKAAIgKAAIAAAKIgKAAIgLAAIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgJAAgEAccgkEIgLAAQAAgFgCgDQgDgCgFAAIgKAAIgKAAQAAgFgCgDQgDgCgFAAIgJAAQgBgGgCgCQgDgDgEAAIgKAAQAAgFgDgCQgCgDgFAAIgLAAQAAgFgCgCQgDgCgFgBIgKAAIgKAAQAAgEgCgDQgDgCgFgBIgJAAQgBgEgCgDQgDgCgEgBIgKAAQAAgEgDgDQgCgDgFABIgLAAQAAgGgCgCQgDgDgFABIgKAAIgKAAIAAgKIAAgKIAAgLIAAgKQAFAAADgCQADgDgBgFIAAgKQAFABADgDQACgDAAgFIAAgJQAFgBADgCQACgDAAgEIAAgKIALAAQAAAFACACQACACAGABIAKAAIAKAAQgBAEADADQADACAEABIAKAAQABAEACADQADACAEAAIAKAAQAAAFADADQACACAFAAIALAAQAAAFACADQACADAGgBIAKAAIAKAAQgBAFADADQADACAEAAIAKAAQABAFACADQADACAEAAIAKAAQAAAGADACQACADAFAAIALAAQAAAFACACQACADAGAAIAKAAIAKAAQgBAFADACQADACAEABIAKAAIAAAKIAAAJIgKAAIAAAKIAAAKIgJAAIAAAKIAAAKIgKAAIAAALIAAAKIgKAAIAAAKIgKAAg");
	this.shape_17.setTransform(1530.3,704.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AFsLGIgUAAIgKAAIgyAAIABgKQAGglgRgOIAAgJIAAhaIAAgKIAAhaIBQAAIAKAAIAKAAIAAAnIAAAKIAABaIAAAKIAAALIAABPIAAALIAAAKIgKAAgAjCnUIgKAAQAAgGgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAQAAgEgCgDQgDgCgFgBQAAgEgCgDQgDgCgFgBQAAgEgCgDQgDgDgFABQAAgGgCgCQgDgDgFABQAAgGgCgCQgDgCgFAAQAAgGgCgCQgDgCgFAAQAAgGgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAQAAgEgCgDQgDgCgFgBQAAgEgCgDQgDgCgFgBQAAgEgCgDQgDgDgFABQAAgGgCgCQgDgDgFABQAAgGgCgCQgDgCgFAAIAAgKQAFAAADgDQACgCAAgGQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgFQAFABADgDQACgDAAgFQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgEIAKAAQAAAEADADQACACAFAAQAAAFADADQACACAFAAQAAAFADADQACADAFgBQAAAFADADQACACAFAAQAAAFADADQACACAFAAQAAAGADACQACADAFAAQAAAFADACQACADAFAAQAAAEADADQACACAFABQAAAEADADQACACAFABQAAAEADADQACACAFAAQAAAFADADQACACAFAAQAAAFADADQACADAFgBQAAAFADADQACACAFAAQAAAFADADQACACAFAAQAAAGADACQACADAFAAQAAAFADACQACADAFAAQAAAEADADQACACAFABIAAAKIAAAJIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAALIgKAAg");
	this.shape_18.setTransform(1871.8,617.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(222,222,222,0.878)").s().p("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");
	this.shape_19.setTransform(1534.8,709.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(174,174,174,0.69)").s().p("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");
	this.shape_20.setTransform(1524.3,711.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(110,110,110,0.439)").s().p("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");
	this.shape_21.setTransform(1527.3,708.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(62,62,62,0.251)").s().p("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");
	this.shape_22.setTransform(1526.8,710.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(206,206,206,0.816)").s().p("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QgCgCAAgGIAKAAIAAALQgGAAgCgDgEA1DgSVIAAgKQAFAAACACQACACABAGIgKAAgEA2pgS2QgDgDABgFIAKAAIAAAKQgGAAgCgCgEA1DgTvIAKAAQgBAEgCADQgCACgFABIAAgKgEAyvgVWQgCgCgBgFIAKAAIAAAKQgEAAgDgDgEAylgVgQgDgCABgGQAEAAADADQACACAAAGQgEAAgDgDgEAybgVqQgDgDABgFQAEAAADADQACACABAFQgGAAgCgCgEAyRgV0QgCgDAAgFQAFAAACADQACACABAFQgFAAgDgCgEAyHgV+QgCgDAAgFQAFABACACQADADAAAEQgGABgCgDgEAx9gWIQgDgDAAgFQAGABACACQADADAAAEQgGAAgCgCgEAxzgWSQgDgDAAgEQAFgBADADQACADAAAEQgFAAgCgCgEAxpgWcQgCgDgBgEQAFgBADADQACACAAAGQgFgBgCgCgEAxfgWmQgCgDgBgEQAFAAADACQADACgBAGQgEgBgDgCgEAxVgWwQgCgCgBgFQAFAAADACQACACAAAGQgEAAgDgDgEAxLgW6QgDgCABgGQAEAAADADQACACAAAGQgEAAgDgDgEAxBgXEQgDgDABgFQAEAAADADQACACABAFQgGAAgCgCgEAw3gXOQgCgDAAgFQAEAAADADQACACABAFQgFAAgDgCgEAwtgXYQgCgDAAgFQAFABACACQADADAAAEQgGABgCgDgEAwjgXiQgDgDAAgFQAGABACACQADADAAAEQgGAAgCgCgEAwZgXsQgDgDAAgEQAFgBADADQACADAAAEQgFAAgCgCgEAwPgX2QgDgDAAgEQAFgBADADQACACAAAGQgFgBgCgCgEAwFgYAQgCgDgBgEQAFAAADACQADACgBAGQgEgBgDgCgEAtigaKIAAgKQAFABADACQACADAAAEIgKAAgEAueganIAAgKIAKAAIAAAKIgKAAgEAsxgaxIAAgKQAEAAADACQACACABAGIgKAAgEAuNgbmQgDgDABgFIAKAAIAAAKQgGABgCgDgEArXgb4IAAgJQAEgBADADQACADABAEIgKAAgEAtbgcOQgDgDAAgEQAFAAADACQACACAAAGQgFgBgCgCgEArXgdSIAKAAQgBAFgCADQgDACgEAAIAAgKgEAsBgdUQgDgDAAgEIAKAAIAAAJQgFAAgCgCgEAnwgeYIAAgKQAFABADACQACADAAAEIgKAAgEApUge/IAAgKIAKAAIAAAKIgKAAgEAnBggwQgCgCAAgGIAKAAIAAALQgFAAgDgDgEAiIghzIAAgKQAFAAADACQACADAAAFIgKAAgEAjHgjGQgDgDABgEIAJAAIAAAKQgEgBgDgCgEAhFgkMQgDgDAAgFIALAAIAAAKQgGABgCgDgEAgHgknIAAgKIAKAAIAAAKIgKAAgEAVUgnlIAAgKQAFAAADACQADACgBAGIgKAAgEAU3gnvIAAgLQAEAAADADQACACABAGIgKAAgEAUYgn6IAAgKQAGAAACADQADACAAAFIgLAAgEAT6goEIAAgKQAFABADACQADACgBAFIgKAAgEATdgoOIAAgKQAEABADACQACADABAEIgKAAgEATTgpJIAKAAQgBAFgCACQgDADgEAAIAAgKgEATdgpoIAKAAQgBAFgCADQgDACgEAAIAAgKgEAQpgpeIAAgKIAKAAIAAAKIgKAAgEAI+gqjIAAgLQAFAAADADQACACAAAGIgKAAgEACvgrzIAAgKQAEAAADACQACACAAAGIgJAAgEADrgr9IAAgLIAKAAIAAALIgKAAgEAB8gr9IAAgLQAFAAADADQACACAAAGIgKAAgEAIPgsUQgDgDABgFIAKAAIAAAKQgGAAgCgCgEgANgtNIAKAAQgBAFgCACQgDACgEABIAAgKgEgFYgtXIAAgLQAFAAADADQADACgBAGIgKAAgEgADguAIAHAAQAAAFgCADQgCADgDgBIAAgKgEgGyguAIAKAAQABAFgDADQgDADgFgBIAAgKgEgGRgvIQgDgDAAgFIALAAIAAAKQgGAAgCgCg");
	this.shape_23.setTransform(1526.8,708.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(158,158,158,0.627)").s().p("EgV7AvQIAAgKIAKAAIAAAKIgKAAgEgh+AvGIAAgKIAKAAIAAAKIgKAAgEgWaAu8IAAgKQAFABADACQACADAAAEIgKAAgEgUNAuyIAAgJIAKAAIAAAJIgKAAgEgSdAtqQgCgDgBgFIAKAAIAAAKQgEAAgDgCgEgWQAtsIAAgKIAKAAIAAAKIgKAAgEghBAtsIAAgKIAKAAIAAAKIgKAAgEgnSAtiIAAgKIAKAAIAAAKIgKAAgEgnIAtYIAAgKIAKAAIAAAKIgKAAgEgkKAtOIAAgJIALAAIAAAJIgLAAgEgoYAtFIAAgKQAGgBACADQADACAAAGIgLAAgEgpdAsnIAAgLQAEAAADADQACACABAGIgKAAgEgNqAsSIAAgKIALAAIAAAKIgLAAgEgmpAsSIAAgKIAKAAIAAAKIgKAAgEgNVAsIIAAgKIAKAAIAAAKIgKAAgEgNBAr+IAAgKIAJAAIAAAKIgJAAgEgMuAr0IAAgJIAKAAIAAAJIgKAAgEgnjAroQgCgDgBgEIAKAAIAAAKQgEgBgDgCgEgL7ArXIAAgKIAKAAIAAAKIgKAAgEgqtArNIAKAAQgBAFgCACQgDADgEAAIAAgKgEgPEArCIALAAQAAAGgDACQgCADgGAAIAAgLgEgMDArAQgCgDAAgFIAKAAIAAAKQgGAAgCgCgEgOvAq4IAKAAQgBAFgCADQgDACgEAAIAAgKgEgObAquIAJAAQAAAFgCADQgDACgEAAIAAgKgEgpbAq2QgCgDAAgFIAKAAIAAAKQgGAAgCgCgEgMNAqsQgDgDAAgFIALAAIAAAKQgGABgCgDgEgOIAqkIAKAAQABAFgDADQgDADgFgBIAAgKgEgv1ApIQgCgDgBgFQAFABADACQADADgBAEQgEAAgDgCgEgH3Ao3IAKAAQAAAEgDADQgCACgFAAIAAgJgEAl4AoZIAKAAIAAAEQgFAAgFgEgEAlnAoMQgDgDABgFQAEAAADADQACACAAAFQgEAAgDgCgEAm/AndIAJAAQAAAEgCADQgDACgEAAIAAgJgEAm3AnQQgDgCABgFQAEAAADACQACADABAFQgGgBgCgCgEAmtAnGQgCgCAAgFQAEAAADACQACACABAGQgFAAgDgDgEAkhAm8QgCgCgBgGQAFAAADADQADACgBAGQgEAAgDgDgEAkXAmyQgCgDgBgFQAFAAADADQACACAAAFQgEAAgDgCgEgzbAmeQgCgDAAgFQAFABACACQADADAAAEQgGABgCgDgEAtRAmUQgDgDAAgFQAFABADACQACADAAAEQgFAAgCgCgEgzlAmUQgDgDAAgFQAGABACACQADADAAAEQgGAAgCgCgEAvHAmDIAKAAQgBAEgCADQgDACgEAAIAAgJgEgzvAmKQgDgDAAgEQAFgBADADQACADAAAEQgFAAgCgCgEgDfAl5IAKAAQgBAEgCADQgDACgEABIAAgKgEgz5AmAQgDgDAAgEQAFgBADADQACACAAAGQgFgBgCgCgEAlnAl2QgDgCABgFQAEAAADACQACADAAAFQgEgBgDgCgEAjRAliQgDgCAAgGIAKAAIAAALQgFAAgCgDgEgyVAlYQgDgDAAgFQAFAAADADQACACAAAFQgFAAgCgCgEAt3AlGIAKAAIAAgKIAJAAQAAAFgCADQgDADgEgBQgBAFgCADQgDACgEAAIAAgKgEgyfAlOQgDgDAAgFQAFABADACQACACAAAFQgFAAgCgCgEgypAlEQgCgDgBgFQAFABADACQADADgBAEQgEABgDgDgEAj3AkyIAKAAQgBAFgCADQgDACgEAAIAAgKgEgyzAk6QgCgDgBgFQAFABADACQACADAAAEQgEAAgDgCgEAwXAkpIAKAAIAAgKIAKAAQgBAEgCADQgDACgEABQAAAEgDADQgCACgFAAIAAgJgEgy9AkwQgDgDABgEQAEgBADADQACADAAAEQgEAAgDgCgEAkhAkmQgCgDgBgEQAFgBADADQADACgBAGQgEgBgDgCgEgDpAkAIAKAAQAAAGgDACQgCADgFAAIAAgLgEAwZAjqQgCgDAAgFQAFABACACQADADAAAEQgGABgCgDgEAvRAjiIAKAAIAAgKIAJAAQAAAFgCADQgDACgEAAQgBAFgCADQgDADgEgBIAAgKgEgDCAjiIAKAAQAAAFgCADQgDADgFgBIAAgKgEAwPAjgQgDgDAAgFQAGABACACQADADAAAEQgGAAgCgCgEgAzAjgQgCgDAAgFQAFABACACQADADAAAEQgGAAgCgCgEgBRAi4QgDgCAAgFQAFAAADACQACACAAAGQgFAAgCgDgEAByAh1IALAAQAAAEgDADQgCACgGAAIAAgJgEABDAhyQgDgDABgEQAEgBADADQACA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DQADACAAAFQgGAAgCgCgEAzDALwQgDgDAAgFQAGABACACQADADAAAEQgGABgCgDgEAy5ALmQgDgDAAgFQAFABADACQACADAAAEQgFAAgCgCgEAysALeIAAgJQAFgBADADQACADAAAEIgKAAgEg2cAKYIALAAQAAAFgDADQgCACgGAAIAAgKgEg3NAI0IAAgKIAJAAIAAAKIgJAAgEgxcAEmIAAgKQAFABADACQACADAAAEIgKAAgEgxjAEaQgDgDABgEQAEgBADADQACADAAAEQgEAAgDgCgEgxtAEQQgDgDABgEQAEgBADADQACACABAGQgGgBgCgCgEgx3AEGQgCgDAAgEQAEAAADACQACADABAFQgGgBgCgCgEgyBAD8QgCgCAAgFQAFAAACACQADACAAAGQgGAAgCgDgEA5uAD1IAAgLIAKAAIAAALIgKAAgEgyLADyQgDgCAAgGQAGAAACADQADACAAAGQgGAAgCgDgEgyYADqIAAgKQAFAAADADQACACAAAFIgKAAgEA54ADWIAAgKIAKAAIAAAKIgKAAgEgvFAClIAKAAQgBAEgCADQgDACgEABIAAgKgEA4eACbIAKAAQAAAFgCACQgDADgFAAIAAgKgEgv1ACOQgCgDgBgFQAFAAADADQADACgBAFQgEAAgDgCgEA4oAB8IALAAQAAAFgDADQgCACgGAAIAAgKgEA4zABfIAKAAQAAAEgDADQgCACgFAAIAAgJgEgtrABfIAKAAQgBAEgCADQgDACgEAAIAAgJgEgvaAA2IALAAQAAAGgDACQgCADgGAAIAAgLgEgsZAACQgCgCAAgDQAFgBACADQADABAAAFQgGgBgCgCgEguAgANIALAAQAAAEgDADQgCACgGABIAAgKgEA7cgDBIAAgKIALAAIAAAKIgLAAgEA54gJ5IAAgKIAKAAIAAAKIgKAAgEA5HgJ5IAAgKQAEAAADACQACACABAGIgKAAgEA6jgKuQgDgDABgFIAKAAIAAAKQgGABgCgDgEA4ogLJIAAgKQAGgBACADQADACAAAGIgLAAgEA6FgL+QgDgDAAgFIALAAIAAAKQgGAAgCgCgEA4KgMaIAAgJQAFgBADADQADADgBAEIgKAAgEA5ngNOQgCgDgBgFIAKAAIAAAKQgEAAgDgCgEA3ZgQoIAKAAQAAAFgDADQgCACgFAAIAAgKgEA1ZgRcQgCgDgBgFQAFAAADADQADACgBAFQgEAAgDgCgEA2zgSOQgCgDgBgEQAFgBADADQADACgBAGQgEgBgDgCgEA0TgTAQgDgDAAgFQAFAAADADQACACAAAFQgFAAgCgCgEA1WgUDIAAgLIAKAAIAAALIgKAAgEAyigVdIAKAAQABAFgDACQgDADgFAAIAAgKgEAysgVoIAKAAQAAAGgCACQgDADgFAAIAAgLgEAy2gVyIAKAAQAAAFgCADQgDACgFAAIAAgKgEAzAgV8IALAAQAAAFgDADQgCACgGAAIAAgKgEAzLgWGIAKAAQAAAFgDADQgCADgFgBIAAgKgEAzVgWQIAKAAQgBAFgCADQgCACgFAAIAAgKgEAzfgWQIAAAAgEAzfgWZIAKAAQgBAEgCADQgDACgEAAIAAgJgEAtbgaCQgDgDAAgFQAGAAACADQADACAAAFQgGAAgCgCgEAuUga7IAKAAQABAEgDADQgDACgFABIAAgKgEAtvgbwQgCgDAAgFQAEABADACQACADABAEQgFAAgDgCgEArPgbwQgDgDABgFQAEABADACQACADAAAEQgEAAgDgCgEAs9gcYQgCgCgBgFQAFAAADACQADACgBAGQgEAAgDgDgEAq5gdIIAKAAQgBAFgCADQgDADgEgBIAAgKgEAlRgg4IAKAAQgBAGgCACQgDADgEAAIAAgLgEAjEgiHIAAgLIAKAAIAAALIgKAAgEAhNgiHIAAgLQAEAAADADQACACABAGIgKAAgEAfKgjNIAAgKQAFAAADACQACADAAAFIgKAAgEAfKgjsIAKAAQAAAGgCACQgDADgFAAIAAgLgEAhtgjuQgCgDgBgFQAFAAADADQADACgBAFQgEAAgDgCgEAhZgj4QgDgDABgFIAJAAIAAAKQgEAAgDgCgEAfUgkAIALAAQAAAFgDADQgCACgGAAIAAgKgEAcrgkdIAAgKIAKAAIAAAKIgKAAgEAc/gk7IAAgLIAKAAIAAALIgKAAgEAbRglGIAAgKQAFAAACADQADACAAAFIgKAAgEAZ3gluIAAgJQAFgBACADQADADAAAEIgKAAgEAcZgmYQgDgCAAgGIAKAAIAAALQgFAAgCgDgEAa/gnAQgDgDAAgFIAKAAIAAAKQgFABgCgDgEAZYgnIIAKAAQAAAFgCADQgDACgFAAIAAgKgEAQVgpUIAAgKIAKAAIAAAKIgKAAgEAMRgp8IAAgJIAJAAIAAAJIgJAAgEAIggqjIAAgLIAKAAIAAALIgKAAgEAOcgq4IAAgKIALAAIAAAKIgLAAgEANCgrMIAAgKIALAAIAAAKIgLAAgEADCgrpIAAgKIAKAAIAAAKIgKAAgEADXgrzIAAgKIAKAAIAAAKIgKAAgEACRgrzIAAgKIAKAAIAAAKIgKAAgEAIDgsSIAAgKIAJAAIAAAKIgJAAgEAHQgscIAAgKIAKAAIAAAKIgKAAgEADhgsmIAAgKIAKAAIAAAKIgKAAgEgDVgs5IAAgKIAKAAIAAAKIgKAAgEgAhgtNIAAgKIAKAAIAAAKIgKAAgEgHGguAIAAgKIAKAAIAAAKIgKAAgEgEvguxIAAgLIAKAAIAAALIgKAAgEgGdgvGIAAgKIAKAAIAAAKIgKAAg");
	this.shape_24.setTransform(1528.8,708.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(126,126,126,0.502)").s().p("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");
	this.shape_25.setTransform(1527.8,710.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(46,46,46,0.188)").s().p("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AgEAq+gdSIAAgJIAKAAIAAAJIgKAAgEAnQgeaQgCgDgBgFIAKAAIAAAKQgEABgDgDgEAo7gfTIAAgLQAFAAADADQACACAAAGIgKAAgEAlEgf0QgCgDAAgFIAKAAIAAAKQgGABgCgDgEAkwggIQgDgDAAgEIAKAAIAAAJQgFAAgCgCgEAmwggtIAAgLQAEAAADADQACACABAGIgKAAgEAjJgicIAKAAQAAAFgCADQgDACgFAAIAAgKgEAjJgi6IAAgJQAFgBADADQACADAAAEIgKAAgEAfSgjGQgDgDAAgEIALAAIAAAKQgGgBgCgCgEAdXgl3IAAgKQAFAFABAFgEAcbgmVIAAgLQAGAAACADQADACAAAGIgLAAgEAbBgm+IAAgKQAGABACACQADADAAAEIgLAAgEAWpgnRIAKAAQAAAEgCADQgDACgFAAIAAgJgEAZngnlIAAgKQAGAAACACQADACAAAGIgLAAgEAWzgnvIALAAQAAAFgDACQgCADgGAAIAAgKgEAW+goOIAKAAQAAAFgDADQgCACgFAAIAAgKgEAWVgo1IAAgKQAFAAADACQADADgBAFIgKAAgEAP+go4QgCgCAAgFIAKAAIAAAKQgGgBgCgCgEAV4go/IAAgKQAEAAADACQACACABAGIgKAAgEAQQgpJIAKAAQgBAFgCACQgDADgEAAIAAgKgEAVZgpJIAAgLQAGAAACADQADACAAAGIgLAAgEAU7gpUIAAgKQAFAAADADQADACgBAFIgKAAgEAUegpeIAAgKQAEABADACQACACABAFIgKAAgEAT/gpoIAAgKQAGABACACQADADAAAEIgLAAgEAThgpyIAAgKQAFABADACQADADgBAEIgKAAgEAMMgqPIAAgKIAJAAIAAAKIgJAAgEAJrgqZIAKAAIAAAEQgFAAgFgEgEAHYgqwQgDgDAAgFIALAAIAAAKQgGAAgCgCgEANSgrMIAAgKQAEABADACQACADABAEIgKAAgEAMfgrWIAAgJQAFgBADADQADADgBAEIgKAAgEAJ/grfIAKAAQAAAEgCADQgDACgFAAIAAgJgEAJEgsIIAAgKQAEAAADADQACACABAFIgKAAgEgAwgswIAAgJIAKAAIAAAJIgKAAgEADmgtDIAAgKQAEAEAAAGgEACzgtXIAAgLQAFAAADADQACACAAAGIgKAAgEACCgtiIAAgKQAEAAADADQACACABAFIgKAAgEgHIgtkQgCgDgBgFIAKAAIAAAKQgEAAgDgCgEgAcguAIAAgKQAEABADACQACADAAAEIgJAAgEgFTgu8IAAgKQAGAAACADQADACAAAFIgLAAg");
	this.shape_26.setTransform(1529.3,708.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(94,94,94,0.376)").s().p("EgViAuUIAKAAQgBAFgCADQgDACgEAAIAAgKgEgWLAuUIAAgKIAKAAIAAAKIgKAAgEgh4AuUIAAgKIAJAAIAAAKIgJAAgEgT0AuAIAAgJIAJAAIAAAJIgJAAgEgdNAtjIAAgKIAKAAIAAAKIgKAAgEgZJAtZIAAgKQAFAAADACQADACgBAGIgKAAgEgaFAtZIAAgKIALAAIAAAKIgLAAgEgWLAs6IAAgKIAKAAIAAAKIgKAAgEggoAs6IAAgKIAKAAIAAAKIgKAAgEgSRAswIAAgKIAKAAIAAAKIgKAAgEghRAswIAAgKIAKAAIAAAKIgKAAgEgneAskQgDgDABgFIAJAAIAAAKQgEAAgDgCgEgPTAsTIAKAAIAAAEQgFAAgFgEgEgO/AsJIAKAAQAAAEgCADQgDACgFABIAAgKgEgT0AsTIAAgKIAJAAIAAAKIgJAAgEgj7AsTIAAgKIALAAIAAAKIgLAAgEgOqAr/IAKAAQAAAFgDACQgCACgFABIAAgKgEgokAsGQgCgCgBgFIAKAAIAAAKQgEgBgDgCgEgmkAr1IAKAAQAAAFgDACQgCADgFAAIAAgKgEgpqAroQgDgDAAgFIAKAAIAAAKQgFAAgCgCgEgnqAqvIAAgKQAEAAADACQACADABAFIgKAAgEgoxAqQIAAgKQAFAAADADQACACAAAFIgKAAgEgqUAqGIAAgKIAJAAIAAAKIgJAAgEgp3ApyIAAgKQAFABADACQACADAAAEIgKAAgEgJ8AoMQgDgDABgEQAEgBADADQACADAAAEQgEAAgDgCgEAm6Am+IAKAAQgBAFgCADQgDADgEgBIAAgKgEAliAnGQgCgDAAgFQAEABADACQACADABAEQgFABgDgDgEAt0Al2QgCgDAAgFQAFABACACQADACAAAFQgGAAgCgCgEAkcAl2QgDgDABgFQAEABADACQACACAAAFQgEAAgDgCgEAtqAlsQgDgDAAgFQAGABACACQADADAAAEQgGABgCgDgEAkSAlsQgDgDABgFQAEABADACQACADABAEQgGABgCgDgEgy6AlkIAKAAQgBAFgCADQgDADgEgBIAAgKgEAmKAlYQgCgDgBgEQAFgBADADQADADgBAEQgEAAgDgCgEgDaAlRIAKAAQAAAEgDADQgCACgFAAIAAgJgEAvqAk9IAJAAQAAAFgCACQgDACgEABIAAgKgEAvzAkzIAKAAQAAAFgCACQgDADgFAAIAAgKgEgCzAkzIAKAAQAAAFgCACQgDADgFAAIAAgKgEAtyAkoIAKAAIAAgKIAKAAQgBAFgCADQgDACgEAAQAAAGgDACQgCADgFAAIAAgLgEAlEAkIQgDgDAAgFQAFABADACQACADAAAEQgFAAgCgCgEAk6Aj+QgDgDAAgEQAFgBADADQACADAAAEQgFAAgCgCgEAkaAjtIAJAAQAAAEgCADQgDACgEABIAAgKgEgzCAjqQgCgCAAgFQAEAAADACQACADABAFQgGgBgCgCgEAxEAjZIAJAAQAAAFgCACQgDADgEAAIAAgKgEgzMAjgQgCgCAAgFQAFAAACACQADACAAAGQgGAAgCgDgEgzWAjWQgDgCAAgGQAGAAACADQADACAAAGQgGAAgCgDgEAvMAjEIAKAAQAAAFgDADQgCACgFAAIAAgKgEgDQAjEIAKAAQgBAFgCADQgDACgEAAIAAgKgEgzgAjMQgDgDAAgFQAFAAADADQACACAAAFQgFAAgCgCgEgzqAjCQgDgDAAgFQAFABADACQACACAAAFQgFAAgCgCgEgAaAi4QgCgDAAgFQAEABADACQACADABAEQgGABgCgDgEgz0Ai4QgCgDgBgFQAFABADACQADADgBAEQgEABgDgDgEgCpAimIAKAAQABAFgDADQgDACgFAAIAAgKgEAwHAidIAAgKQAFgBADADQACACAAAGIgKAAgEgA4AiQQgDgCAAgFQAFAAADACQACADAAAFQgFgBgCgCgEAB3AhMIAKAAQAAAFgCADQgDACgFAAIAAgKgEABIAg2QgDgCABgFQAEAAADACQACADABAFQgGgBgCgCgABQfpIAJAAQAAAEgCADQgDACgEAAIAAgJgAEEffIAJAAQAAAEgCADQgDACgEABIAAgKgEg4qAfcQgCgCAAgFQAEAAADACQACADABAFQgGgBgCgCgEg3GAe0QgDgDABgFQAEABADACQACACABAFQgGAAgCgCgACqeiIAJAAQAAAFgCADQgDADgEgBIAAgKgAEaeWQgCgDgBgEQAFgBADADQADADgBAEQgEAAgDgCgEg5SAeWQgDgDAAgEQAFgBADADQACADAAAEQgFAAgCgCgEAjJAd7IAAgKIAKAAIAAAKIgKAAgEg3uAduQgDgCA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FQgEAAgDgCgEAuIAPWQgDgDABgFQAEAAADADQACACABAFQgGAAgCgCgEg6vAO6IAAgJIAKAAIAAAJIgKAAgEg6GAOdIAAgKIAKAAIAAAKIgKAAgEAwUANyQgDgDAAgFQAFABADACQACADAAAEQgFABgCgDgEAyAANgIAKAAIAAgJIAKAAIAAgKIAKAAQgBAEgCADQgDACgEABQgBAEgCADQgCACgFAAQAAAFgDADQgCACgFAAIAAgKgEAwKANoQgDgDAAgFQAFABADACQACADAAAEQgFAAgCgCgEAwHANgQgEAAgCgBQgEgJAAgJIAKAAIAAgKIAKAAQAAAEgCADQgDACgFABIAAAKIAAAJIAAAAgEAz6ALmQgDgCABgFQAEAAADACQACACAAAGQgEAAgDgDgEAzwALcQgDgCABgGQAEAAADADQACACABAGQgGAAgCgDgEAyUALAIAKAAIAAgKIAJAAIAAgKIAKAAQAAAFgCADQgDACgFAAQAAAFgCADQgDADgEgBQgBAFgCADQgDACgEAAIAAgKgEA0sAIoQgDgCAAgGIALAAIAAALQgGAAgCgDgEg3IAICIAKAAQgBAFgCADQgDADgEgBIAAgKgEA1lAHGIAKAAQABAGgDACQgDADgFAAIAAgLgEgz+AGwQgCgDgBgFIAKAAIAAAKQgEABgDgDgEg0IAGmQgDgDABgFQAEABADACQACADAAAEQgEAAgDgCgEg0SAGcQgDgDABgEQAEgBADADQACADABAEQgGAAgCgCgEg0cAGSQgCgDAAgEQAEgBADADQACACABAGQgGgBgCgCgEA2YAGBIAKAAQgBAEgCADQgCACgFABIAAgKgEg0mAGIQgCgDAAgEQAFAAACACQADADAAAFQgGgBgCgCgEA4IAF+QgDgCABgFQAEAAADACQACACAAAGQgEAAgDgDgEg0wAF+QgDgCAAgFQAGAAACACQADACAAAGQgGAAgCgDgEgztAEIIAKAAQAAAFgCADQgDACgFAAIAAgKgEgzjAD+IAKAAIAAgKIALAAIAAgKIAKAAQAAAFgDADQgCACgFAAQAAAFgDADQgCADgGgBQAAAFgCADQgDACgFAAIAAgKgEgzEADhIAKAAIAAgKIAKAAQgBAEgCADQgDACgEABQgBAEgCADQgDACgEAAIAAgJgEgywADNIAJAAIAAgKIA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");
	this.shape_27.setTransform(1527.3,713.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(30,30,30,0.125)").s().p("EgalAvMIAKAAQAAAEgDADQgCACgFABIAAgKgEgV5AutIAKAAIAAAGQgFAAgFgGgEgWBAurQgCgDAAgFIAKAAIAAAKQgFAAgDgCgEghRAurQgCgDAAgFIAKAAIAAAKQgFAAgDgCgEgTjAuGIAKAAQAAAEgDADQgCACgFAAIAAgJgEgfvAtTIAAgKQAFAAADADQACACAAAFIgKAAgEgg/As/IAAgKQAFABADACQACADAAAEIgKAAgEgnCAs9QgDgDAAgFIAKAAIAAAKQgFABgCgDgEgSJAs1IAAgKQAFABACACQADADAAAEIgKAAgEgmnAsiIAKAAQAAAEgCADQgDACgFAAIAAgJgEgT3AsiIAAgKIAKAAIAAAKIgKAAgEgjpAsYIAAgKQAFAAADACQACADAAAFIgKAAgEgo6AsLQgDgCAAgFIAKAAIAAAKQgFAAgCgDgEgNJArlIAKAAQAAAFgCADQgDACgFAAIAAgKgEgqAArtQgDgDAAgFIAKAAIAAAKQgFAAgCgCgEgM1ArbIAKAAQAAAFgDADQgCADgFgBIAAgKgEgMhArRIAKAAQAAAFgDADQgCACgFAAIAAgKgEgqpArZQgCgDAAgFIAKAAIAAAKQgFAAgDgCgEgMNArIIAKAAQAAAEgCADQgDACgFAAIAAgJgEgnFArIIAAgKQAFgBACADQADACAAAGIgKAAgEgLlAqqIAAgLQAFAAACADQADACAAAGIgKAAgEgoLAqqIAAgLQAFAAADADQACACAAAGIgKAAgEgOjAqfIAAgKIAKAAIAAAKIgKAAgEgLvAqVIAAgKQAFABADACQACACAAAFIgKAAgEgOPAqVIAAgKIAKAAIAAAKIgKAAgEgN7AqLIAAgKIAKAAIAAAKIgKAAgEgpRAqLIAAgKQAFABADACQACADAAAEIgKAAgEgJFApaIAKAAIAAAEQgFAAgFgEgEgMNApaIAAgKQAFAAADACQACACAAAGIgKAAgEguYApXQgDgCAAgFIAKAAIAAAKQgFAAgCgDgEgInApFIAKAAQAAAGgDACQgCADgFAAIAAgLgEgsZAo7IAKAAQAAAFgCADQgDACgFAAIAAgKgEgJqAovQgDgDAAgFIAKAAIAAAKQgFABgCgDgEgsPAoxIAAgKQAFAFAAAFgEgsZAonIAAgKQAFABADACQACADAAAEIgKAAgEgwHAoRQgCgDAAgEIAKAAIAAAKQgFgBgDgCgEgG5AoAIAKAAQAAAFgDACQgCACgFABIAAgKgEgtpAn2IAAgLQAFAAADADQACACAAAGIgKAAgEgJZAnrIAAgKIAKAAIAAAKIgKAAgEgwJAnDIAAgJIAKAAIAAAJIgKAAgEAlLAm3QgCgDAAgEIAKAAIAAAKQgFgBgDgCgEgF9AmwIAAgKQAFAAACACQADADAAAFIgKAAgEgvXAmwIAAgKQAFAAADACQACADAAAFIgKAAgEAuaAmjQgDgCAAgFIAKAAIAAAKQgFAAgCgDgEgHNAmRIAAgKIAKAAIAAAKIgKAAgEAmtAmHIAAgKQAFABADACQACACAAAFIgKAAgEAtbAlgIAAgKIAKAAIAAAKIgKAAgEgECAlJQgDgCAAgFIAKAAIAAAKQgFAAgCgDgEgx3AlCIAAgLQAFAFAAAGgEAwZAkjIAKAAQAAAFgCADQgDACgFAAIAAgKgEAxLAjdIAAgKQAFAAACADQADACAAAFIgKAAgEgBvAiYIAAgKIAKAAIAAAKIgKAAgEABkAhjQgDgDAAgFIAKAAIAAAKQgFAAgCgCgEg3LAgVIAKAAQAAAFgDADQgCACgFAAIAAgKgEg4OAgTQgDgDAAgFIAKAAIAAAKQgFABgCgDgEg2tAfkIAAgKQAFAAACACQADACAAAGIgKAAgACTfPIAAgKIAKAAIAAAKIgKAAgEg43AfNQgCgDAAgFIAKAAIAAAKQgFAAgDgCgEAjUAevQgDgDAAgFIAKAAIAAAKQgFAAgCgCgEg3VAeeIAAgKQAFgBADADQACACAAAGIgKAAgEg5eAeHQgDgCAAgFIAKAAIAAAKQgFAAgCgDgEAurAdNIAKAAIAAAGQgFgBgFgFgAHndEIAKAAQAAAEgCADQgDACgFAAIAAgJgEg59AdLQgCgDAAgEIAKAAIAAAJQgFAAgDgCgAGPc3QgCgCAAgFIAKAAIAAAKQgFgBgDgCgEg5NAcwIAAgKIAKAAIAAAKIgKAAgAGrbzIAAgJIAKAAIAAAJIgKAAgEAvTAbgIAAgKQAFAAADACQACADAAAFIgKAAgEAtKAbdQgDgCAAgFIAKAAIAAAKQgFgBgCgCgEAldAbBIAAgKQAFAAADADQACACAAAFIgKAAgEAk/Aa3IAAgKQAFABADACQACACAAAFIgKAAgEAkhAatIAAgKQAFABACACQADADAAAEIgKAAgAItaQIAAgKIAKAAIAAAKIgKAAgAJLZ8IAAgKQAFAAADACQACACAAAGIgKAAgAMdZdIAKAAQAAAFgDADQgCACgFAAIAAgKgAM7ZJIAKAAQAAAFgDADQgCADgFgBIAAgKgEAtRAZJIAAgKQAFABACACQADADAAAEIgKAAgEg5rAYYIAAgLQAFAAACADQADACAAAGIgKAAgEAnDAYLQgCgDAAgFIAKAAIAAAKQgFAAgDgCgEAqTAXlIAKAAQAAAFgDADQgCACgFAAIAAgKgEg51AXSIAAgKQAFAAACACQADADAAAFIgKAAgEAqxAW+IAKAAQAAAFgCACQgDADgFAAIAAgKgEAnLAWVIAAgKIAKAAIAAAKIgKAAgAVrUKIAAgLQAFAFAAAGgEAjAATzQgDgDAAgFIAKAAIAAAKQgFAAgCgCgEAkXATEIAKAAQAAAEgDADQgCACgFABIAAgKgEAgzATBQgCgDAAgEIAKAAIAAAKQgFgBgDgCgAYhTBQgCgDAAgEIAKAAIAAAKQgFgBgDgCgEAkNASbIAAgKQAFAAACADQADACAAAFIgKAAgEg5rASHIAKAAQAAAFgDADQgCADgFgBIAAgKgEg7ZAR9IAAgJIAKAAIAAAJIgKAAgEAiBARqIAAgKQAFAAACACQADADAAAFIgKAAgEg5hARgIAKAAQAAAEgDADQgCACgFABIAAgKgEAhjARgIAAgKQAFAAACACQADACAAAGIgKAAgEAgdARgIAAgKIAKAAIAAAKIgKAAgEAgnARLIAAgKQAFAAACADQADACAAAFIgKAAgAZvRLIAAgKIAKAAIAAAKIgKAAgAbxQ3IAAgKIAKAAIAAAKIgKAAgEAu/AQaIAAgKQAFAEAAAGgEg45APJIAKAAQAAAFgCADQgDACgFAAIAAgKgEg6nAPAIAAgKIAKAAIAAAKIgKAAgEg51AOsIAAgKQAFAAACACQADACAAAGIgKAAgEg4YAMJQgDgDAAgEIAKAAIAAAKQgFgBgCgCgEg2ZAKeIAKAAQAAAEgCADQgDACgFABIAAgKgEg39AJ1IAAgKIAKAAIAAAKIgKAAgEg1dAJEIAAgKQAFAEAAAGgEg2ZAIbIAAgKQAFABADACQACADAAAEIgKAAgEA1jAHqIAAgKIAKAAIAAAKIgKAAgEA2VAGkIAAgKIAKAAIAAAKIgKAAgEA4DAGGIAAgLQAFAAACADQADACAAAGIgKAAgEg09AF5QgCgDAAgFIAKAAIAAAKQgFAAgDgCgEA57ADmIAKAAIAAAEQgFAAgFgEgEA5BADZQgCgCAAgFIAKAAIAAAKQgFAAgDgDgEA4kADPQgDgCAAgGIAKAAIAAALQgFAAgCgDgEA4hADHQgFAAgCgCQgDgDAAgFIAKAAIAAAKIAAAAgEgubAB4IAKAAQAAAFgDACQgCADgFAAIAAgKgEA63ABFIAKAAQAAAFgDADQgCACgFAAIAAgKgEgv8ABDQgDgDAAgEIAKAAIAAAJQgFAAgCgCgEgtBAAyIAKAAQAAAEgDADQgCACgFABIAAgKgEA7BAAoIAKAAQAAAEgDADQgCACgFABIAAgKgEgvXAAoIAAgKIAKAAIAAAKIgKAAgEA7LAAJIAKAAQAAAFgDADQgCACgFAAIAAgKgEA5dAAAIAAgJIAKAAIAAAJIgKAAgEA7VgAJIAAgKQAFAFAAAFgEA6tgAcIAAgKQAFgBACADQADACAAAGIgKAAgEA5ngAcIAAgKIAKAAIAAAKIgKAAgEA6PgAmIAAgKQAFAAADACQACADAAAFIgKAAgEA5ngKSIAKAAIAAAEQgFAAgFgEgEA63gKwIAKAAQAAAFgDACQgCADgFAAIAAgKgEA5LgLHQgCgDAAgFIAKAAIAAAKQgFAAgDgCgEA6tgL2IAAgKQAFAAACACQADACAAAGIgKAAgEA4tgMXQgCgDAAgFIAKAAIAAAKQgFAAgDgCgEA6PgNGIAAgKQAFgBADADQACACAAAGIgKAAgEA4GgOFQgDgDAAgFIAKAAIAAAKQgFABgCgDgEA5xgOXIAAgJQAFgBACADQADADAAAEIgKAAgEA5JgOgIAAgKIAKAAIAAAKIgKAAgEA0dgT1IAAgKIAKAAIAAAKIgKAAgEAtdgavQgCgDAAgFIAKAAIAAAKQgFABgDgDgEAuXgcHIAAgKQAFABACACQADADAAAEIgKAAgEArRgcdQgCgDAAgEIAKAAIAAAJQgFAAgDgCgEAolgecIAKAAIAAAEQgFAAgFgEgEAoJgepQgCgDAAgFIAKAAIAAAKQgFAAgDgCgEAl+ggDQgDgDAAgFIAKAAIAAAKQgFAAgCgCgEAo5ggLIAAgKQAFABACACQADACAAAFIgKAAgEAmtghlIAAgKQAFABADACQACACAAAFIgKAAgEAmPgh5IAAgKQAFABACACQADADAAAEIgKAAgEAl7gh5IAAgKIAKAAIAAAKIgKAAgEAjbgiqIAKAAQAAAFgDACQgCADgFAAIAAgKgEAhbgitQgCgCAAgGIAKAAIAAALQgFAAgDgDgEAfZgjzQgCgCAAgFIAKAAIAAAKQgFgBgDgCgEAfhgkPIAAgKIAKAAIAAAKIgKAAgEAh3gkZIAAgKQAFABACACQADACAAAFIgKAAgEAbzglhQgCgCAAgGIAKAAIAAALQgFAAgDgDgEAdfglzIAKAAQAAAFgDADQgCACgFAAIAAgKgEAaZgmJQgCgDAAgFIAKAAIAAAKQgFABgDgDgEAcjgnDIAAgKQAFAAADADQACACAAAFIgKAAgEAbJgnrIAAgJQAFgBADADQACADAAAEIgKAAgEAZvgnrIAAgJIAKAAIAAAJIgKAAgEAVjgoBQgCgCAAgFIAKAAIAAAKQgFgBgDgCgEAVGgoLQgDgCAAgFIAKAAIAAAKQgFAAgCgDgEAUngoVQgCgCAAgGIAKAAIAAALQgFAAgDgDgEAUJgofQgCgDAAgFIAKAAIAAAKQgFAAgDgCgEATsgopQgDgDAAgFIAKAAIAAAKQgFAAgCgCgEATNgozQgCgDAAgFIAKAAIAAAKQgFABgDgDgEAXjgpFIAAgJQAFAFAAAEgEATLgpYIAAgKIAKAAIAAAKIgKAAgEAPogplQgDgCAAgFIAKAAIAAAKQgFAAgCgDgEATVgp3IAAgKIAKAAIAAAKIgKAAgEAOOgp5QgDgDAAgFIAKAAIAAAKQgFAAgCgCgEAM0gqNQgDgDAAgFIAKAAIAAAKQgFABgCgDgEATfgqVIAAgKIAKAAIAAAKIgKAAgEAQ/gq8IAAgKQAFAEAAAGgEAKRgrRIAKAAQAAAGgCACQgDADgFAAIAAgLgEAP5grRIAAgKQAFAAADADQACACAAAFIgKAAgEAHCgrdQgDgDAAgFIAKAAIAAAKQgFAAgCgCgEAGPgrnQgCgDAAgFIAKAAIAAAKQgFABgDgDgEAGNgrvQgFABgDgDQgCgDAAgFIAKAAIAAAKIAAAAgEAKRgsgIAAgLQAFAAADADQACACAAAGIgKAAgEgAIgs3QgDgDAAgFIAKAAIAAAKQgFAAgCgCgEgEMgtpQgDgCAAgFIAKAAIAAAKQgFgBgCgCgEgF7gt9QgCgCAAgGIAKAAIAAALQgFAAgDgDgEABrguPIAAgKQAFABACACQADACAAAFIgKAAgEAA5guZIAAgKQAFABADACQACADAAAEIgKAAgEgChgujIAKAAQAAAFgDADQgCADgFgBIAAgKgEgDJgvKIAAgKQAFAAACACQADACAAAGIgKAAg");
	this.shape_28.setTransform(1526.6,711.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(190,190,190,0.753)").s().p("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");
	this.shape_29.setTransform(1525.8,710.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(254,254,254,0.996)").s().p("EgZXAvgIg9AAIgKAAIgJAAIg9AAIgKAAIg8AAIgKAAIAAgKIAAgVIAAgKIAAgxQAZAAAZgGQABAAAAgEIA8AAIAKAAIA7AAIAKAAIALAAIAnAAIAKAAIAKAAIAABFIAAALIAAAKIgKAAIgTAAIAAAKIgKAAgEgVyAvBIAAgKIAAgKQAAgEgCgDQgDgCgFgBIAAgJIAAgKIAAgKQABgFgDgDQgDgCgFAAIAAgKIAAgLIAAgKIAKAAIAKAAIAKAAQAGAAACgCQADgDAAgFIAKAAIAKAAQAEABADgDQACgDABgFIAJAAIAKAAIAKAAQAFAAADgCQACgDAAgFIAKAAIALAAIAKAAQAEAAADgCQACgDABgEIAKAAIAJAAQAFgBADgCQACgDAAgEIAKAAIAKAAIAKAAQAGgBACgCQADgCAAgFIAKAAIAKAAIAKAAIAAAKIAAAKQgBAEADADQADACAEAAIAAAKIAAAKQABAFACADQADACAEAAIAAAKIAAALIAAAKIgKAAIAAAKIgJAAIgKAAIgKAAIgKAAIAAAKIgLAAIgKAAIgKAAIgKAAIAAAKIgKAAIgJAAIgKAAIAAAJIgKAAIgKAAIgLAAIgKAAIAAAKIgKAAIgKAAIgKAAIgJAAIAAAKIgKAAIgKAAIgKAAIgLAAIAAAKIgKAAgEggGAvBIgJAAIgKAAIgKAAQAAgFgDgCQgCgDgFAAIgLAAIgKAAIgKAAQABgFgDgCQgDgCgFgBIgKAAIgJAAIgKAAIgKAAQAAgEgDgDQgCgCgFgBIgLAAIgKAAIgKAAQABgEgDgDQgDgCgFAAIgKAAIgJAAIgKAAQgBgFgCgDQgDgDgEABIgKAAIgLAAIgKAAIAAgKIAAgKIAAgKQAFAAADgDQACgCAAgGIAAgKIAAgKIAAgKQAGAAACgCQADgDAAgFIAAgJIAAgKIAKAAIAKAAQgBAEADADQACACAGABIAJAAIAKAAIAKAAQAAAEADADQACACAFAAIAKAAIALAAIAKAAQAAAFACADQACACAGAAIAKAAIAJAAIAKAAQABAFACADQADADAEgBIAKAAIAKAAIALAAQAAAFACADQACACAGAAIAKAAIAKAAIAJAAIAKAAQABAFACADQADACAEAAIAKAAIAAALIAAAKIAAAKIgKAAIAAAKIAAAKIAAAJIAAAKIgKAAIAAAKIAAAKIgKAAgEgm0AtJIgKAAQAAgEgCgDQgDgCgFgBIgJAAQgBgEgCgDQgDgDgEABIgKAAIgKAAQAAgGgDgCQgCgDgGABIgKAAQAAgFgCgDQgDgCgFAAIgKAAIgKAAQAAgGgCgCQgDgCgEAAIgKAAQgBgGgCgCQgDgDgEAAIgKAAQAAgFgDgCQgCgDgGAAIgKAAIgKAAQABgFgDgCQgDgCgFgBIgKAAQAAgEgCgDQgDgCgEgBIgKAAIAAgKIAAgJIAAgKIAAgKQAEAAADgDQACgCABgFIAAgLQAEAAADgCQACgDAAgFIAAgKIAAgKIAKAAIAKAAIAKAAIAKAAQAAAFADADQACADAGgBIAKAAQAAAFACADQACACAGAAIAKAAQgBAFADADQADACAEAAIAKAAIAKAAQAAAGADACQACADAFAAIAKAAQAAAFADACQACADAGAAIAKAAQAAAFACACQACACAGABIAKAAIAJAAQABAEACADQADACAEABIAKAAQAAAEADADQACACAFAAIAKAAQAAAFADADQACACAGAAIAKAAQAEABADACQACADABAEIgKAAIAAAKIAAAKIgKAAIAAALIAAAKIAAAKIgLAAIAAAKIAAAJIgKAAIAAAKIgKAAgEgPEAs2QAAgGgCgCQgDgDgFABIAAgKQAAgGgCgCQgDgCgEAAIAAgLQgBgFgCgCQgDgDgEAAIAAgKIAAgKQgBgEgCgDQgDgCgEgBIAAgJIAKAAQAEgBADgCQACgDABgEIAJAAQAFgBADgCQACgCAAgFIAKAAQAFAAADgDQACgCAAgFIAKAAQAGAAACgDQADgCAAgGIAKAAQAEAAADgCQACgDABgFIAKAAQAEAAADgCQACgDAAgFIAKAAQAFABADgDQADgDgBgFIAKAAQAFAAADgCQACgDAAgFIALAAQAFAAACgCQADgDAAgEIAKAAQAEgBADgCQACgDABgEIAJAAIAKAAIAKAAIAKAAIAAAKQAAAEADADQACACAFAAIAAAKQAAAFADADQACADAGgBIAAAKQAAAFACADQACACAGAAIAAALIAAAKIgKAAIAAAKIgLAAIgKAAIAAAKIgKAAIgKAAIAAAJIgKAAIgJAAIAAAKIgKAAIgKAAIAAAKIgKAAIgLAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAALIgJAAIgKAAIAAAKIgKAAIgKAAIgLAAIAAAKIgKAAIgKAAIAAAKIgKAAgEgtDAqVQgBgEgCgDQgDgCgEgBQAAgEgDgDQgCgDgFABIgLAAQAAgGgCgCQgDgDgFABIgKAAQABgFgDgDQgDgCgFAAQAAgGgCgCQgDgCgFAAIgJAAQgBgGgCgCQgDgDgEAAQgBgFgCgCQgDgDgEAAIgKAAQAAgFgDgCQgCgCgGgBQAAgEgCgDQgDgCgFgBIgKAAQABgEgDgDQgDgCgFgBIgKAAQAAgEgCgDQgDgDgEABQgBgGgCgCQgDgDgEABIgKAAQAAgFgDgDQgCgCgFAAQAAgGgDgCQgCgCgGAAIAAgLQAGAAACgCQADgDAAgFIAAgKQAFABACgDQADgDAAgFQAEAAADgCQACgDABgFIAAgJQAEgBADgCQACgDABgEQAEgBADgCQACgCAAgFIAKAAQABAFACACQADACAEABIAKAAQAAAEADADQACACAFABQAAAEADADQACACAGAAIAKAAQAAAFACADQACACAGAAQgBAFADADQACADAGgBIAJAAQABAFACADQADACAEAAIAKAAQAAAFADADQACACAFAAQAAAGADACQACADAFAAIALAAQAAAFACACQACADAGAAQAAAFACACQACACAGABIAKAAQgBAEADADQADACAEABIAKAAQABAEACADQADACAEAAQAAAFADADQACACAFAAIAKAAIAAAKIgKAAIAAAKIAAAKIgKAAIAAALIgKAAIAAAKIAAAKIgKAAIAAAKIgJAAIAAAJIAAAKIgKAAgEgI+ApuQAAgGgCgCQgDgCgFAAIAAgLQAAgFgCgCQgDgDgFAAQABgFgDgCQgDgCgFgBIAAgKQAAgEgCgDQgDgCgFgBQAAgEgCgDQgDgDgEABIAAgKIAAgKIAJAAQAFAAADgDQACgCAAgFQAFAAADgDQADgCgBgGIAKAAQAFAAADgCQACgDAAgFQAGAAACgCQADgDAAgFIAKAAQAEABADgDQACgDABgFIAKAAQAEAAADgCQACgDAAgFQAFAAADgCQACgDAAgEIAKAAQAFgBADgCQACgDAAgEQAFgBADgCQACgCAAgFIALAAQAFAAACgDQADgCAAgFQAEAAADgDQACgCABgGIAKAAQAEAAADgCQACgDAAgFQAFAAADgCQACgDAAgFIAKAAIAKAAQAAAFADADQACACAFAAIAAAKQAAAGADACQACADAGAAQAAAFACACQACADAGAAIAAAKQAAAEACADQACACAGABQgBAEADADQACACAGAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgLAAIAAAKIgKAAIgKAAIAAALIgKAAIAAAKIgKAAIgJAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAJIgLAAIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgJAAIAAAKIgKAAIgKAAIAAALIgKAAIAAAKIgLAAgEAuyAmwIgKAAIgJAAQgBgGgCgCQgDgDgEAAQgBgFgCgCQgDgDgEAAQAAgFgDgCQgCgCgFgBQAAgEgDgDQgCgCgGgBQAAgEgCgDQgDgCgFgBIAAgJIAAgKQAFgBADgCQACgCAAgFQAGAAACgDQADgCAAgFQAFAAACgDQADgCAAgGQAEAAADgCQACgDABgFQAEAAADgCQACgDABgFQAEABADgDQACgDAAgFQAFAAADgCQACgDAAgFQAFAAADgCQADgDgBgEQAFgBADgCQACgDAAgEIAAgKQAFAAADgDQACgCAAgFQAGAAACgDQADgCAAgGQAFAAACgCQADgDAAgFQAEAAADgCQACgDABgFQAEABADgDQACgDABgFQAEAAADgCQACgDAAgFQAFAAADgCQACgDAAgEIAKAAIAKAAQAAAEADADQACACAFAAQAAAFADADQACACAGAAQAAAFACADQACADAGgBQAAAFACADQADACAFAAQgBAFADADQACACAGAAIAJAAIAAALIgJAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAJIgLAAIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIgKAAIAAALIgKAAIAAAKIgJAAIAAAKIgKAAIAAAKIgKAAIAAAJIgKAAIAAAKIgLAAIAAAKIgKAAIAAAKIAAAKIgKAAIAAALIgKAAgEAkpAfPIgKAAIgKAAQAAgEgDgDQgCgCgFgBIgLAAIgKAAQAAgEgCgDQgDgCgFgBIgKAAIgKAAIAAgJIAAgKQAFgBADgCQACgCAAgFIAAgKIAAgLQAFAAADgCQADgDgBgFIAAgKIAAgKQAFAAADgCQACgDAAgFIAAgJIAAgKQAFgBADgCQACgCAAgFIAAgKIAAgLQAGAAACgCQADgDAAgFIAAgKIAAgKQAFAAACgCQADgDAAgFIAAgJIAAgKQAEgBADgCQACgCABgFIAAgKIAAgLQAEAAADgCQACgDABgFIAAgKIAJAAQABAFACADQADACAEAAIAKAAIAKAAQAAAFADADQACACAFAAIALAAIAKAAQAAAGACACQADADAFAAIAKAAIAAAKIAAAKIAAAKIgKAAIAAAJIAAAKIAAAKIgKAAIAAAKIAAAKIAAALIgKAAIAAAKIAAAKIAAAKIgLAAIAAAJIAAAKIAAAKIgKAAIAAAKIAAAKIAAALIgKAAIAAAKIAAAKIAAAKIgKAAIAAAJIAAAKIgKAAIAAAKIgJAAgEg6gAaQIgKAAIgKAAIgJAAIAAgKIAAgLIAAgKIAAgKIAAgKIAAgKQgBgEgCgDQgDgDgEABIAAgKIAAgKIAAgKIAAgLIAAgKQAAgEgDgFQgDgGgEgFIAAgKIAAgJIAAgKIAAgKIAAgKQgBgGgCgDQgDgGgEgGIAAgKIAAgKIAAgKIAAgJIAAgKIAKAAIAKAAIAKAAIAJAAIAKAAQAKAAAIgFQACgBAAgEIAKAAIALAAQAAAFACACQACACAGABIAAAKIAAAJIAAAKIAAAKIAAAKQAAALADAHQABACAGABIAAAKIAAAKIAAAKIAAAJIAAAKQAAALADAHQABACAGAAIAAAKIAAALIAAAKIAAAKIAAAKQAAAKADAIQABABAFAAIAAAKIAAAKIAAAKIAAALIgJAAIgKAAIgKAAIgKAAIgLAAIgKAAIAAAKIgKAAgAMlZxIgKAAQAAgFgDgCQgCgCgFgBQAAgEgDgDQgCgCgGgBQAAgEgCgDQgDgCgFgBIAAgJQAAgGgCgCQgDgDgFABQABgFgDgDQgDgCgFAAIAAgKIAAgLQAFAAADgCQADgDgBgFIAKAAQAFAAADgCQACgDAAgFQAGABACgDQADgDAAgFIAKAAQAEAAADgCQACgDABgFQAEAAADgCQACgDABgEIAJAAQAFgBADgCQACgDAAgEQAFgBADgCQADgCgBgFIAKAAQAFAAADgDQACgCAAgFQAGAAACgDQADgCAAgGIAKAAQAEAAADgCQACgDABgFQAEAAADgCQACgDABgFQAEABADgDQACgDAAgFIAKAAQAFAAADgCQADgDgBgFQAFAAADgCQACgDAAgEIAKAAQAAAEADADQACACAGAAQAAAFACADQACACAGAAIAAAKQAAAFACADQACACAGAAQgBAFADADQACACAGAAQgBAGADACQADADAEAAIAAAKIAAAKIAAAKIgJAAIgKAAIAAAJIgKAAIAAAKIgKAAIgLAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAALIgJAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgLAAIgKAAIAAAJIgKAAIAAAKIgKAAIgKAAIAAAKIgJAAIAAAKIgKAAgEAnmAYsQAAgGgCgCQgDgDgEAAQgBgFgCgCQgDgDgEAAIgKAAQAAgFgDgCQgCgCgFgBQAAgEgDgDQgCgCgGgBQAAgEgCgDQgDgCgFgBIAAgJIAAgKQAFgBADgCQACgCAAgFQAGAAACgDQADgCAAgFQAFAAACgDQADgCAAgGIAAgKQAEAAADgCQACgDABgFQAEABADgDQACgDABgFIAAgKQgBgEgCgDQgDgDgEABIgKAAQAAgGgDgCQgCgDgFABQAAgFgDgDQgCgCgGAAIAAgKQAGAAACgDQADgCAAgGQAFAAACgCQADgDAAgFIAAgKQAEABADgDQACgDABgFQAEAAADgCQACgDABgFQAEAAADgCQACgDAAgEIAAgKIAKAAQABAEACADQADACAEABIAKAAQAAAEADADQACACAFAAQAAAFADADQACACAGAAQAFAAACgCQADgDAAgFQAEAAADgCQACgDABgEQAEgBADgCQACgDABgEIAJAAIAKAAIAKAAQAAAEADADQACACAFABQAAAEADADQACACAFAAQAAAFADADQACACAGAAQAAAFACADQACADAGgBIAKAAIAAAKIAAAKIgKAAIAAALIgKAAIAAAKIAAAKIgLAAQAAAEADADQACACAGABIAKAAQAAAEACADQADACAFAAQgBAFADADQACACAGAAQgBAFADADQADADAEgBIAKAAQABAFACADQADACAEAAQAAAFADADQACACAFAAIAAALIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAJIAAAKIgJAAIAAAKIgKAAIAAAKIgKAAQAAgFgDgCQgCgCgFgBIgLAAQAAgEgCgDQgDgCgFgBQAAgEgCgDQgDgCgFgBQABgEgDgDQgDgDgFABIgKAAQAAgGgCgCQgDgDgEABQgBgFgCgDQgDgCgEAAIAAAKIgKAAIAAAKIgKAAIAAAJIgLAAIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAALIgKAAgASXWCIgKAAIgKAAIAAgKQAAgGgDgCQgCgDgFAAIAAgKQAAgFgDgCQgCgCgGgBIAAgKQAAgEgCgDQgDgCgFgBIAAgJIAAgKQAFgBADgCQACgCAAgFIALAAQAFAAACgDQADgCAAgFIAKAAQAEAAADgDQACgCABgGIAJAAQAFAAADgCQACgDAAgFIAKAAQAFAAADgCQACgDAAgFIAKAAQAGABACgDQADgDAAgFIAKAAQAEAAADgCQACgDABgFIAKAAQAEAAADgCQACgDAAgEIAKAAQAFgBADgCQADgDgBgEIAKAAQAFgBADgCQACgDAAgEIALAAQAFAAACgDQADgCAAgFIAKAAIAKAAQgBAFADACQADADAEAAIAAAKQABAEACADQADACAEABIAAAJIAAAKQABAFACADQADADAEgBIAAAKIAAAKIAAALIgKAAIgKAAIAAAKIgJAAIgKAAIAAAKIgKAAIgKAAIAAAKIgLAAIgKAAIAAAJIgKAAIgKAAIAAAKIgKAAIgJAAIAAAKIgKAAIgKAAIAAAKIgKAAIgLAAIAAAKIgKAAIgKAAIAAALIgKAAIgKAAIAAAKIgJAAgEAkAAUTQAAgFgCgCQgDgDgFAAIgKAAIgKAAQAAgFgCgCQgDgDgFAAIgJAAIgKAAQgBgEgCgDQgDgCgEgBIgKAAIgLAAQAAgEgCgDQgDgCgFgBIgKAAIgKAAQAAgEgCgDQgDgDgFABIgJAAQgBgGgCgCQgDgDgEABIgKAAIgKAAQAAgFgDgDQgCgCgGAAIgKAAIgKAAQABgGgDgCQgDgCgFAAIgKAAIgJAAIAAgLIAAgKIAAgKQAEABADgDQACgDAAgFIAAgKIAAgJQAFgBADgCQACgDAAgEIAAgKIAAgKQAFAAADgDQADgCgBgGIAKAAQAAAGADACQACADAFAAIALAAQAAAFACACQACADAGAAIAKAAIAKAAQgBAEADADQADACAEABIAKAAIAKAAQAAAEADADQACACAFABIAKAAIALAAQAAAEACADQACACAGAAIAKAAIAKAAQgBAFADADQADACAEAAIAKAAQABAFACADQADADAEgBIAKAAIAKAAQAAAFADADQACACAGAAIAKAAIAKAAQgBAFADADQACACAGAAIAAALIgKAAIAAAKIAAAKIAAAKIgKAAIAAAJIAAAKIAAAKIgKAAIAAAKIAAAKIgLAAgEAsIATYQABgFgDgDQgDgCgFAAQAAgGgCgCQgDgCgFAAQAAgGgCgCQgDgDgEAAQgBgFgCgCQgDgDgEAAQgBgFgCgCQgDgDgEAAQAAgEgDgDQgCgCgFgBIAAgKIAAgJIAKAAQAEgBADgCQACgDABgEQAEgBADgCQACgDABgEQAEAAADgDQACgCAAgFQAFAAADgDQACgCAAgGQAFAAADgCQADgDgBgFQAFAAADgCQACgDAAgFQAFABADgDQACgDAAgFQAGAAACgCQADgDAAgFQAFAAACgCQADgDAAgEQAEgBADgCQACgDABgEQAEgBADgCQACgDABgEQAEAAADgDQACgCAAgFQAFAAADgDQACgCAAgGIAKAAQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgFQAGABACgDQADgDAAgFIAKAAQAAAFACADQADADAFgBQgBAFADADQACACAGAAQgBAFADADQADACAEAAQABAGACACQADADAEAAQABAFACACQADADAEAAQAAAEADADQACACAFABIAAAKIgKAAIAAAJIgKAAIAAAKIgKAAIAAAKIgJAAIAAAKIgKAAIAAAKIgKAAIAAALIgKAAIAAAKIgLAAIgKAAIAAAKIgKAAIAAAKIgKAAIAAAJIgKAAIAAAKIgJAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAALIgLAAIAAAKIgKAAIAAAKIgKAAgAZPTOIgKAAIgKAAIgLAAIAAgKIAAgLIAAgKQAAgFgCgCQgDgDgFAAIAAgKIAAgKIAAgJIAAgKIAAgKQAFAAADgDQACgCAAgFIALAAIAKAAIAKAAIAKAAQAKgBAIgEQABAAAAgGIAKAAIAKAAIAKAAIALAAIAKAAQAEAAADgCQACgDABgFIAKAAIAJAAIAKAAIAKAAIAKAAIAKAAQAGAAACgCQADgDAAgFIAKAAIAKAAIAKAAIAJAAIAKAAIAAAKQABAFACADQADACAEAAIAAALIAAAKIAAAKIAAAKIAAAJIAAAKIAAAKIgKAAIAAAKIgKAAIgJAAIgKAAIgKAAIgKAAIgLAAIgKAAIAAAKIgKAAIgKAAIgKAAIgJAAIgKAAIgKAAIAAALIgKAAIgLAAIgKAAIgKAAIgKAAIgKAAIgJAAIAAAKIgKAAgEg56ATGQgCgCgFAAIgLAAIgKAAIgKAAQABgGgDgCQgDgDgFAAIgKAAIgJAAIgKAAQgBgFgCgCQgDgDgEAAIAAgKQAEABADgDQACgDABgFIAAgKIAAgJIAAgKQAEgBADgCQACgDABgEIAAgKIAAgLQAEAAADgCQACgDAAgFIAAgKIAAgKIAAgKQAFAAADgCQACgDAAgEIAAgKIAAgKIAAgKQAFAAADgDQADgCgBgGIAAgKIAAgKIAAgKQAFAAADgCQACgDAAgFIAAgJIAAgKIAAgKQAFAAADgDQACgCAAgFIALAAQAAAFACACQACADAGAAIAKAAIAKAAIAJAAQABAEACADQADACAEABIAKAAIAKAAQAAAEADADQACACAFABIAAAJIAAAKIgKAAIAAAKIAAAKIAAAKIAAALIgKAAIAAAKIAAAKIAAAKIAAAJIgKAAIAAAKIAAAKIAAAKIAAAKIgKAAIAAALIAAAKIAAAKIAAAKIgJAAIAAAJIAAAKIAAAKIgKAAIAAAKIAAAKIAAALQgBAFgCACQgDADgEAAQAAgGgDgCgEAxTAO2IgKAAQgBgGgCgCQgDgDgEAAQAAgFgDgCQgCgDgFAAQAAgFgDgCQgCgDgGAAQAAgEgCgDQgDgCgFgBQAAgEgCgDQgDgCgFgBIAAgJIAAgKQAFgBADgCQACgDAAgEQAFAAADgDQACgCAAgFQAGAAACgDQADgCAAgGQAFAAACgCQADgDAAgFQAEAAADgCQACgDABgFIAKAAQAEABADgDQACgDAAgFQAFAAADgCQACgDAAgFQAFAAADgCQADgDgBgEQAFgBADgCQACgDAAgEQAFgBADgCQACgDAAgEQAGAAACgDQADgCAAgFQAFAAACgDQADgCAAgGQAFAAACgCQACgDABgFQAEAAADgCQACgDABgFQAEABADgDQACgDAAgFQAFAAADgCQACgDAAgFIAKAAIAKAAQAAAFADADQACACAFAAQAAAFADADQACADAGgBQAAAFACADQACACAGAAQAAAFACADQADACAFAAQgBAGADACQACADAGAAQgBAFADACQADADAEAAIAAAKIgJAAIgKAAIAAAKIgKAAIAAAJIgKAAIAAAKIgLAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAALIgKAAIAAAKIgJAAIAAAKIgKAAIAAAKIgKAAIAAAJIgKAAIAAAKIgLAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAALIgJAAgEg3iAMpIgKAAIgKAAQAAgEgCgDQgDgDgFABQAAgGgCgCQgDgDgEABIgKAAQgBgFgCgDQgDgCgEAAQAAgGgDgCQgCgCgFAAIgLAAIAAgLIAAgKQAGAAACgCQADgDAAgFQAFABACgDQADgDAAgFIAAgKQAEAAADgCQACgDABgEIAAgKQAEgBADgCQACgDABgEQAEAAADgDQACgCAAgFIAAgLQAFAAADgCQACgDAAgFQAFAAADgCQADgDgBgFIAAgKQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgEIAAgKQAGgBACgCQADgDAAgEQAFAAACgDQADgCAAgFIAAgLQAEAAADgCQACgDABgFIAAgKQAEABADgDQACgDABgFIAJAAIAKAAQABAFACADQADADAEgBIAKAAQAAAFADADQACACAFAAQAAAFADADQACACAGAAIAKAAQAAAGACACQACADAGAAIAAAKIAAAKIAAAKIgKAAIAAAJIgKAAIAAAKIAAAKIgLAAIAAAKIAAAKIgKAAIAAALIgKAAIAAAKIAAAKIgKAAIAAAKIgKAAIAAAJIAAAKIgJAAIAAAKIgKAAIAAAKIAAAKIgKAAIAAALIAAAKIgKAAIAAAKIgLAAIAAAKIAAAJIgKAAgEA6CADwIgKAAIgJAAIgKAAQgBgGgCgCQgCgCgFAAIgKAAIgLAAQAAgGgCgCQgDgDgFAAIgKAAIgKAAIAAgKQAFAAADgCQADgDgBgFIAAgKIAAgKQAFAAADgCQACgDAAgEIAAgKIAAgKQAFAAADgDQACgCAAgFIAAgLIAAgKQAGAAACgCQADgDAAgFIAAgKIAAgKQAFAAACgCQADgDAAgEIAAgKQAFgBACgCQACgDABgEIAAgKIAAgLQAEAAADgCQACgDABgFIAAgKIAAgKQAEAAADgCQACgDAAgEIAAgIIAAgKIAKAAIAKAAIAKAAIAKAAQAAAEADADQACACAGABIAKAAIAKAAQgBAEADADQACABAGAAIAJAAIAKAAIAAAJIgKAAIAAAKIAAAKIAAAKIgJAAIAAALIAAAKIAAAKIgKAAIAAAKIAAAJIAAAKIgKAAIAAAKIAAAKIAAAKIgKAAIAAALIAAAKIAAAKIgLAAIAAAKIAAAJIAAAKIgKAAIAAAKIAAAKIAAAKIgKAAIAAALIAAAKIgKAAgEA3EgQPIgJAAQgBgFgCgCQgDgDgEAAIAAgKQgBgEgCgDQgCgCgFgBQAAgEgDgDQgCgCgFgBIAAgJQAAgGgDgCQgCgDgGABQAAgGgCgCQgDgCgFAAIAAgKQAAgGgCgCQgDgDgFAAQABgFgDgCQgDgDgFAAQAAgFgCgCQgDgDgFAAIAAgKQAAgEgCgDQgDgCgEgBQgBgEgCgDQgDgDgEABIAAgKQgBgGgCgCQgCgCgFAAQAAgGgDgCQgCgCgFAAIAAgLQAAgFgDgCQgCgDgGAAQAAgFgCgCQgDgDgFAAIAAgKQAFAAADgCQACgDAAgFQAGAAACgCQADgDAAgEIAKAAQAFgBACgCQACgDABgEQAEgBADgCQACgDABgEQAEAAADgDQACgCAAgFIAKAAIAKAAQABAFACACQACADAFAAQAAAEADADQACACAFABQAAAEADADQACACAGABIAAAJQAAAFACADQACACAGAAQAAAFACADQADADAFgBIAAAKQgBAFADADQACACAGAAQgBAGADACQADADAEAAIAAAKQABAEACADQADACAEABQABAEACADQADACAEABQABAEACADQACACAFAAIAAAKQAAAFADADQACADAFgBQAAAFADADQACACAGAAIAAAKQAAAGACACQACADAGAAQAAAFACACQADADAFAAIAAAKIAAAKIgKAAIAAAJIgKAAIAAAKIgLAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAgEAuBgaPQAAgFgDgCQgCgDgGAAQAAgEgCgDQgDgCgFgBIgKAAQABgEgDgDQgDgCgFgBQAAgEgCgDQgDgDgFABQAAgGgCgCQgDgDgEABQgBgGgCgCQgDgCgEAAIgKAAQAAgGgDgCQgCgCgFAAQAAgGgDgCQgCgDgGAAQAAgFgCgCQgDgDgFAAIgKAAQABgFgDgCQgDgDgFAAQAAgEgCgDQgDgCgFgBQAAgEgCgDQgDgCgEgBQgBgEgCgDQgDgDgEABIgKAAQAAgGgDgCQgCgDgFABQAAgGgDgCQgCgCgGAAIAAgKIAAgLQAGAAACgCQADgDAAgFQAFAAACgCQADgDAAgFQAEABADgDQACgDABgFQAEAAADgCQACgDABgFIAAgJQAEgBADgCQACgDAAgEIAKAAQABAEACADQADACAEABQAAAEADADQACACAFAAIAKAAQAAAFADADQACACAGAAQAAAFACADQACADAGgBQAAAFACADQADACAFAAIAKAAQgBAFADADQADACAEAAQABAGACACQADADAEAAQABAFACACQADADAEAAQAAAEADADQACACAFABIAKAAQAAAEADADQACACAGABQAAAEACADQACACAGAAQAAAFACADQADACAFAAQgBAFADADQACADAGgBIAJAAQABAFACADQADACAEAAQABAFACADQADACAEAAIAAALIAAAKIgKAAIAAAKIgKAAIAAAKIAAAJIgJAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAgEAotgeIQgBgGgCgCQgDgDgEAAQAAgFgDgCQgCgDgFAAIgLAAQAAgFgCgCQgDgDgFAAQAAgEgCgDQgDgCgFgBIgKAAQAAgEgCgDQgDgCgFgBQAAgEgCgDQgDgDgEABIgKAAQgBgGgCgCQgDgDgEABIgKAAQAAgFgDgDQgCgCgGAAQAAgFgCgDQgDgCgFAAIgKAAQABgGgDgCQgDgDgFAAQAAgFgCgCQgDgDgFAAIgJAAQgBgFgCgCQgDgCgEgBQgBgEgCgDQgDgCgEgBIgKAAQAAgEgDgDQgCgCgGgBIAAgJQAGgBACgCQADgDAAgEQAFgBACgCQADgCAAgFIAAgKQAEAAADgDQACgCABgGIAAgKQAEAAADgCQACgDABgFQAEABADgDQACgDAAgFIAKAAIAKAAQAAAFADADQACADAFgBQAAAFADADQACACAFAAIALAAQAAAFACADQACACAGAAQAAAGACACQADADAFAAIAKAAQgBAFADACQADADAEAAQABAFACACQADACAEABIAKAAQAAAEADADQACACAFABQAAAEADADQACACAFAAIALAAQAAAFACADQACACAGAAIAKAAQgBAFADADQACADAGgBQgBAFADADQADACAEAAIAKAAQABAFACADQADACAEAAQAAAGADACQACADAFAAIAKAAIAAAKIgKAAIAAAKIAAAKIgKAAIAAAJIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIgJAAIAAALIgKAAgEAjFghvIgKAAQAAgEgDgDQgCgDgFABQAAgGgDgCQgCgDgGABIgKAAQAAgFgCgDQgDgCgFAAIgKAAQAAgFgCgDQgDgCgFAAIgJAAQgBgGgCgCQgDgDgEAAIgKAAQAAgFgDgCQgCgDgFAAIgLAAQAAgFgCgCQgDgCgFgBIgKAAQABgEgDgDQgDgCgFgBQAAgEgCgDQgDgCgFgBIgJAAQgBgEgCgDQgDgDgEABIgKAAQAAgGgDgCQgCgDgFABIgLAAQAAgFgCgDQgDgCgFAAIAAgKQAFAAADgDQACgCAAgGIAAgKQAGAAACgCQADgDAAgFIAAgKQAFABACgDQADgDAAgFIAAgJQAEgBADgCQACgDABgEIAKAAIAJAAIAKAAQABAEACADQADACAEABQAAAEADADQACACAFAAIAKAAQAAAFADADQACACAGAAIAKAAQAAAFACADQADADAFgBIAKAAQgBAFADADQADACAEAAIAKAAQABAFACADQADACAEAAIAKAAQAAAGADACQACADAFAAIALAAQAAAFACACQACADAGAAQAAAFACACQADACAFABIAKAAQgBAEADADQADACAEABIAKAAQABAEACADQADACAEAAIAKAAIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAALIAAAKIgKAAIAAAKIAAAKIgJAAIAAAJIgKAAgEAXCgnXQABgEgDgDQgDgDgFABIgKAAIgJAAQgBgGgCgCQgDgDgEABIgKAAIgKAAQAAgFgDgDQgCgCgGAAIgKAAIgKAAQABgFgDgDQgDgCgFAAIgKAAIgJAAQgBgGgCgCQgDgDgEAAIgKAAIgKAAQAAgFgDgCQgCgDgGAAIgKAAIgKAAQABgFgDgCQgDgCgFgBIgKAAIgJAAQgBgEgCgDQgDgCgEgBIgKAAIgKAAIAAgKQAFAAACgCQADgDAAgEIAAgKIAAgKQAEAAADgDQACgCABgFIAAgLIAAgKQAEAAADgCQACgDABgFIAAgKIAJAAIAKAAIAKAAQAAAFADADQACADAFgBIAKAAIALAAQAAAFACADQACACAGAAIAKAAIAKAAQgBAFADADQADACAEAAIAKAAIAKAAQAAAGADACQACADAFAAIAKAAIALAAQAAAFACACQACADAGAAIAKAAIAKAAQgBAFADACQADACAEABIAKAAIAKAAQAAAEADADQACACAFABIAKAAIALAAIAKAAIAAAJIgKAAIAAAKIAAAKIAAAKIgLAAIAAAKIAAALIAAAKIgKAAIAAAKIAAAKIAAAJIgKAAgEAQpgpOIgKAAIgLAAQAAgFgCgDQgDgCgFAAIgKAAIgKAAIgKAAQAAgGgCgCQgDgDgEAAIgKAAIgKAAIgKAAIgLAAQAAgFgCgCQgDgDgFAAIgKAAIgKAAIgKAAQAAgFgCgCQgDgCgEgBIgKAAIgKAAIgKAAIgLAAQAAgEgCgDQgDgCgFgBIgKAAIgKAAIgKAAIAAgKIAAgJIAAgKIAAgKIAAgKQAFAAADgDQACgCAAgGIAAgKIAAgKIAAgKQAFABADgDQADgDgBgFIAKAAQAAAFADADQACACAFAAIALAAIAKAAIAKAAIAKAAQgBAFADADQADADAEgBIAKAAIAKAAIAKAAQAAAFADADQACACAFAAIALAAIAKAAIAKAAIAKAAQgBAFADADQADACAEAAIAKAAIAKAAIAKAAQAAAGADACQACADAFAAIALAAIAKAAIAKAAIAKAAQgBAFADACQADADAEAAIAAAKIgJAAIAAAKIAAAJIAAAKIAAAKIgKAAIAAAKIAAAKIAAALIAAAKIgKAAgEAKOgqoIgKAAQAAgFgCgDQgDgCgEAAIgKAAIgKAAIgKAAIgLAAQAAgGgCgCQgDgDgFAAIgKAAIgKAAIgKAAIgJAAQgBgFgCgCQgDgDgEAAIgKAAIgKAAIgLAAIgKAAQAAgFgCgCQgDgCgFgBIgKAAIgKAAIgJAAIgKAAQgBgEgCgDQgDgCgEgBIgKAAIgLAAIgKAAIAAgKQAFAAADgCQACgDAAgEIAAgKIAAgKIAAgKIAAgLQAGAAACgCQADgDAAgFIAAgKIAAgKIAAgKIAKAAQAAAFACADQACACAGAAIAKAAIAJAAIAKAAIAKAAQAAAFADADQACADAFgBIAKAAIALAAIAKAAIAKAAQgBAFADADQACACAGAAIAJAAIAKAAIAKAAIAKAAQAAAFADADQACACAFAAIALAAIAKAAIAKAAIAKAAQgBAGADACQADADAEAAIAKAAIAKAAIAKAAIAAAKIAAAKIAAAKIAAAJIAAAKIgKAAIAAAKIAAAKIAAAKIAAALIAAAKIgKAAgEADqgsCIgKAAIgKAAIgKAAIgKAAQAAgFgCgDQgDgCgEAAIgKAAIgKAAIgKAAIgLAAQAAgGgCgCQgDgDgFAAIgKAAIgKAAIgKAAIgJAAQgBgFgCgCQgDgDgEAAIgKAAIgKAAIgLAAIgKAAQAAgFgCgCQgDgCgFgBIgKAAIgKAAIgJAAIgIAAIAAgKIAAgKIAAgJIAAgKQADgBACgCQACgCABgFIAAgKIAAgLIAAgKIAAgKQAEABADgDQACgDAAgFIAKAAQABAFACADQADADAEgBIAKAAIAKAAIALAAIAKAAIAKAAQgBAFADADQACACAGAAIAJAAIAKAAIAKAAIAKAAQAAAFADADQACACAFAAIALAAIAKAAIAKAAIAKAAQgBAGADACQADADAEAAIAKAAIAKAAIAKAAIAKAAQAAAFADACQACADAGAAIAKAAIAKAAIAAAKIAAAKIgKAAIAAAJIAAAKIAAAKIAAAKIAAAKIgKAAIAAALIAAAKIgLAAgEgCtgtSIgKAAIgKAAIgKAAIgLAAQAAgFgCgDQgDgCgFAAIgKAAIgKAAIgKAAIgJAAIgKAAQgBgFgCgDQgDgCgEAAIgKAAIgLAAIgKAAIgKAAQABgGgDgCQgDgDgFAAIgKAAIgJAAIgKAAIgKAAIgKAAQAAgFgDgCQgCgDgGAAIgKAAIgKAAIgKAAIAAgKQAFABADgDQADgDgBgFIAAgKIAAgJIAAgKIAAgKQAFAAADgDQACgCAAgFIAAgLIAAgKIAAgKIAKAAQAAAFADADQACACAGAAIAKAAIAKAAIAKAAIAJAAIAKAAQABAFACADQADACAEAAIAKAAIAKAAIALAAIAKAAQAAAGACACQACADAGAAIAKAAIAJAAIAKAAIAKAAQAAAFADACQACADAFAAIAKAAIALAAIAKAAIAKAAIAKAAQgBAFADACQADACAEABIAKAAIAAAKIAAAJIAAAKIAAAKIAAAKIgKAAIAAAKIAAALIAAAKIAAAKIgJAAg");
	this.shape_30.setTransform(1525.8,709.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(142,142,142,0.565)").s().p("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");
	this.shape_31.setTransform(1527.3,710.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(78,78,78,0.314)").s().p("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");
	this.shape_32.setTransform(1524.8,708.7);

	// text
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#355490").s().p("Al9OKQiwhLiJiIQiIiIhKixQhOi2AAjIQAAjGBOi3QBKixCIiIQCJiICwhLQC3hNDGAAQDIAAC2BNQCxBLCICIQCICIBLCxQBNC3AADGQAADIhNC2QhLCxiICIQiICIixBLQi2BNjIAAQjGAAi3hNg");
	this.shape_33.setTransform(1334.8,689.1,1.083,1.083);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#4261B6").s().p("EgRlApqQoIjbmQmRQmRmQjcoIQjjoaAApMQAApMDjoZQDcoIGRmQQGQmRIIjbQIajkJLAAQJMAAIaDkQIIDbGQGRQGRGQDcIIQDjIZAAJMQAAJMjjIaQjcIImRGQQmQGRoIDbQoaDkpMAAQpLAAoajkg");
	this.shape_34.setTransform(1207.9,421.3);

	// column
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FEFEFE").ss(1,0,0,4).p("AmRjWQDwhLCfgDQC0gDDgBRIAAH7IsjAAg");
	this.shape_35.setTransform(738,217.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FEFEFE").s().p("AmRElIAAn7QDwhLCfgDQC0gDDgBRIAAH7g");
	this.shape_36.setTransform(738,217.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E4E4E4").s().p("AqXCFQkeg8ABhOQgBhQEeg2QEXg2GKAAQGFAAETA5QETA5ABBPQgBBQkTA5QkUA5mEAAQmCAAkfg9g");
	this.shape_37.setTransform(738,190.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FEFEFE").ss(1,0,0,4).p("AGSDXQjwBLifADQi1ADjfhRIAAn7IMjAAg");
	this.shape_38.setTransform(738,774.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FEFEFE").s().p("AmRDXIAAn7IMjAAIAAH7QjwBLifADIgNAAQixAAjWhOg");
	this.shape_39.setTransform(738,774.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E4E4E4").s().p("AqhCJQkTg5AAhQQAAhPETg5QETg5GGAAQGCAAEeA9QEdA8ABBOQgBBQkdA2QkXA2mJAAQmGAAkTg5g");
	this.shape_40.setTransform(738,802);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FEFEFE").ss(1,0,0,4).p("EAOyg0bIAAD9QgzAmheAmQi6BLjVAAMAAABadIA4AGQBGAKBFAQQDdAyB/BfIgHFUQjxCGl2AwQh1APh1AEIhbACQkhgOiPgYQkDgtj0h4IgIlUQCAhfDdgyQBugaBVgGMAAAhadQjRgZi8hLQg7gYgygZIgmgVIAAkNQGei2I/ARQEGAHDrA0QDvA0CmBZg");
	this.shape_41.setTransform(738,501.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FEFEFE").s().p("EgGyA3AQkDgtj0h4IgIlUQCAhfDdgyQBugaBVgGMAAAhadQjRgZi8hLQg7gYgygZIgmgVIAAkNQGei2I/ARQEGAHDrA0QDvA0CmBZIAAD9QgzAmheAmQi6BLjVAAMAAABadIA4AGQBGAKBFAQQDdAyB/BfIgHFUQjxCGl2AwQh1APh1AEIhbACQkhgOiPgYg");
	this.shape_42.setTransform(738,501.1);

	// diploma
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D7D1C2").s().p("AAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIgBAAIAAAAg");
	this.shape_43.setTransform(702.3,151);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E3DED2").s().p("AABADQgCgDAAgCQABABACAFg");
	this.shape_44.setTransform(696.9,139.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#BDAEA1").s().p("AinBLIAFgDIAYgMQADgBAEgHQAFgHACgIIAFgSIAAgDIACgVIAAgWIgDgvQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIACASIACAaIABAQQAAANgCAIIgEAXIgHAVIgEAHQADABAEgCIAFgCQALgDAEgIQAGgOACgHIAEgZIgCg1IgBgKQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAIACAFIABAUIABAOQABAKgCAZQgCAQgFAMIgGAMQgBACABACIAHgCIALgFIBXgiIATgGIAHgDIANgDIAWgIIAQgGIAfgLIAKgDIAFgCQAEgBAHgDQAJgCASgIIAEgBIAEAAQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIkcBqIgGABQgEAAgFADIgSAGIAAAAIgJADIgJAEIgBAAIACgCg");
	this.shape_45.setTransform(711,160.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C9C1B3").s().p("AADADIgHgFQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIABABIAFAEIABACg");
	this.shape_46.setTransform(811.4,133.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D7D1C2").s().p("AAFAEQgDgDgCAAIAAAAIgHgFQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAABgBQAEgCADAAIgCACIAEAFQAGABADAIIAAABIgFgFg");
	this.shape_47.setTransform(812,133.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#C9C1B3").s().p("AjLA7IgBgBIgCAAIADgDIAJgEIAFgCIAQgFIAKgDIADgBIAFgCIAPgFIAQgEIACgBIAQgFIAIgCIABgBQAEABAGgCIABAAQAHgEAOgDIAigIQAGgBAMgDIAUgEIANgDIAGgCIAIgBIAKgDIAGgBIABAAIAUgFIA+gOIAXgGIAggJQAFgCAJgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBIgDgDQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQAFAEABADIAAACIgBACQgNACgPAEIgVAFIgXAGIgYAFQgLACgLADIgUAEIgYAGIgNADIgTAEIgRADIgPAEIiRAnIgHADIgaAIQgEABAAADg");
	this.shape_48.setTransform(792.2,139.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#91091E").s().p("AAAAAIABAAIgBABg");
	this.shape_49.setTransform(760.7,141.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#91091E").s().p("AAAABIgBgBIABAAIACABIgBAAIgBAAg");
	this.shape_50.setTransform(758.5,158.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#91091E").s().p("AAAAAIABAAIAAAAIgBAAIAAAAg");
	this.shape_51.setTransform(758.8,157.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#91091E").s().p("AgCAAIAAAAIACAAIADAAIgBABg");
	this.shape_52.setTransform(758.7,158);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E3DED2").s().p("AAAAAIADAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgDABIACgBg");
	this.shape_53.setTransform(783.9,142.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E3DED2").s().p("AgDAAQADAAADAAIgBAAIgDABIAAAAIgCgBg");
	this.shape_54.setTransform(798.5,138.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E3DED2").s().p("AgCAAIAJgBIgCABIgLACQABgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAg");
	this.shape_55.setTransform(797.1,138.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E3DED2").s().p("AgJABIAOgCIAJgBIgBABIgaAEQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAg");
	this.shape_56.setTransform(794,139.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E3DED2").s().p("Ag1AQQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIAagIIARgFIA/gRIgFADQgOADgNAEIgIADIgFACIgDABIgPADIgZAIQgHAEgEAAQgEAAAAAEg");
	this.shape_57.setTransform(777.9,144.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D7D1C2").s().p("AjOA3QgBgFAFgBIAugOQAbgJAZgGIAygPIAogHIA2gNIAmgIIAwgLIAkgJQAWgHAPgCQABAAAAAAQABAAAAgBQABAAAAgBQABAAAAgBIACACQABAAAAAAQABABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBAAQgIABgEABIgTAFIgWAEIgEACIgaAGIgMADIgrAJIgCACIgBAAIgIABIgCAAIgKADIgFADIgDAAIgCABIgEAAIgZAFIgDACIgEAAIgTADIgOAEIgMADIgBABQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgFABIgCAAIgDABIgBAAIgSAGIgCAAQgEAAgCACIgCAAIgOAEIhGAVIgaAKg");
	this.shape_58.setTransform(792.6,140.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E3DED2").s().p("AgBAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAIgBABQgBgBgBAAg");
	this.shape_59.setTransform(690.8,171.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E3DED2").s().p("AgBAAIABAAIACAAIAAABQgDgBAAAAg");
	this.shape_60.setTransform(691.9,172);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D7D1C2").s().p("AAeAwIgOgOQgKgKgLgQIgPgSIgBgBQgFgIgEgEQgEgHgCgFQgDgHACgFIACgGIABACIAFAKQgBACABAFIAKATIAJAOIAPAUIARATIAMALIAEACQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAIgJgFg");
	this.shape_61.setTransform(686.6,165.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#C9C1B3").s().p("AAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIgBAAIAAABIAAgBg");
	this.shape_62.setTransform(679.8,144.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E3DED2").s().p("AgiAKIAqgNIBVgcIi5A/g");
	this.shape_63.setTransform(734.6,156.3,1,1,0,0,0,1.4,-0.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E3DED2").s().p("AkVBmQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAQAKgBAMgFIAWgIIBWgkQAOgFAbgNIA1gUIBTgcIgvASQgHADgDAAIgEACIgUAIIgUAIIgCABQgEAAgFADIgGADIgGACIgXAKIgVAJIgEABIgPAGIgLAEIgWAKIgfANQgOAEgOAHQgMAEgMACgAA3gZIAJgDIAUgHIARgGIABgBIAHgDIBWgcIAegKIAHgCIAugQIgBAEQgKABgHADIgcAIIi3A/g");
	this.shape_64.setTransform(720.9,162);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#C9C1B3").s().p("AkdCeQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIAFgJQAFgKACgFIAAgCIABgCQAEgRACgSQABgUAAgQIgEgmIgCgOIAAgDIgBgBIgBgFQAGABACgEQABAAAAgBQABAAABAAQAAAAABAAQABABAAAAQADADAEgBQACgDAEAAQAEAAADgEQADgCgBgGIgBgIQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAIACAQQACAMAEAAIAEgCIANgJQACgEgBgCQAFAGAKgDIAkgMIAlgGQAKgBAGgDIAHgDQAEgCADAAQADAAAGADQADAAADgBIAGgDIALgEIAagEIAdgHICBgjQAigKBCgVQANgEAEgDIAGgEIAKgDIAKgEQAOgIAHgIIgCAJQgBAEgEAGQgJANgVASIghAbQgUATgJASIgJAUQgFAKgKAEIgeALIgYAJIgmANQgBAAAAABQgBAAAAAAQgBABAAAAQAAAAAAABIgFACIgDABIgDAAIhdAiIgiAMIiRA3QAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAgBAAAAQAAgBAAAAQABgBAAgBQgDAFgJADIgJADQgBABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBIABgEIAEgIIgEAHQgEAIgIAEIgcAOIAAAAIgCAAIgBAAg");
	this.shape_65.setTransform(722.2,152.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#998877").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_66.setTransform(747.3,125.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D7D1C2").s().p("AAAAAIABAAIAAABQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_67.setTransform(688.9,137.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E9E6DA").s().p("AAAAAIAAAAIABAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_68.setTransform(720,140.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#998877").s().p("AgCAAIAAAAIAFAAIgDAAIgCAAg");
	this.shape_69.setTransform(746,125.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#BDAEA1").s().p("AADARQgDgRgDgRIgBgDQADACAAAFIADAQQACAJABAJIgCgEg");
	this.shape_70.setTransform(694.2,149.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#C9C1B3").s().p("AAJAaQgFgQgLgdIgDgJQAAAAABAAQAAAAAAABQABAAAAABQAAABAAAAQAHAOACALIAJAZIABAEIgCgDg");
	this.shape_71.setTransform(692.6,144.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#E9E6DA").s().p("AAPAuQgFgFgBgDIgFgOIgKgZIgMgUIgKgQQgDgEABgFQAEgBACABQACABAEgBQAHADACAGIABABQAFAGAHAOIADABIAAABIAEAIIADAEIADAFQAAACACAFQAFAJAHATIAAAJQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBIgDAAQgCADgEAAIgBAAIgCgBg");
	this.shape_72.setTransform(696,140.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#E9E6DA").s().p("AAIAvQgCgDgEgBQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQgIgbgHgNIAAAAIgEgHIgBgBIgKgSIgBgCIgIgLIAAgCIACgCIAEAAQAEgDAGAAIACgBIAIgDIAJAFIARAaIAMAVIAKAZIAFAPQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgDgBQAAAAgBABQAAAAAAAAQAAAAAAAAQAAABAAAAIAAABQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBgBIgDABQgEgCgDADIgHAEIgFgEg");
	this.shape_73.setTransform(693,141.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#BDAEA1").s().p("AhxCHQAAgBAAAAQAAgBABAAQAAgBABAAQABgBABAAIATgHQA7gVAOgHQAOgHADgKIABgNIAAgDIAFgHIAGgHQAEgDACgEQACgFAEgBQABAAAEgGIAIgJIANgMIADgBIABgBQABgEAEgDIAHgCIALgJIAGgGIAHgIIAFgFQACgCACgGIADgIIACgDIACgHQAEgMABgGIABgLIAAgJIABgKIgBgLIgBgTIACABIAAACIABAhQAAAPgCANIABABIgDAZIgDAHIgBAHIgDAHIgDAMIgEAHIgCADIgDADIgBAGIgBAAQgCADgCAFIgEAHIgCAEQgDAIgEADIgCADIgCAJIgCAIIgBABIACAEQgEAJgIADQgIAFgEABIgBAAQgCADgEACIgGACIhjAhIgPAEIgaAKg");
	this.shape_74.setTransform(740.6,141.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E3DED2").s().p("AjsBbQgDAAgBgFIgEgWIAAADQABAGgBADQgCAEgIACIgEABQgDAEgFgDQgDgCgDACQgEADgDgCIgBgBIgFgYIgCgMQACAAADADIAEgBQABgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQACgBADAAIAGABIADgDIABgCIACgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAABABAAQAAABAAAAQABAAAAAAQABABAAAAQABgBAAAAQgDgJABgFQACAEACAJIAFAOIAEACIADgDQACABAGgCIACgFIAAgBQACgCgBgDIgCgGIgBgHQABABABAEIACAFQAAACAEAEIALgDIADABQAEABAFgHQACAAADACQACgCAHgCIADACQAAAAABAAQAAgBAAAAQABAAAAAAQAAgBABAAQACABADgBIAKgCIADAAIACAAIAKgBIACgFQAFgBABgCIAFACQADABACgCQACgDAEABIADABQAEAAAAgDQABAAAAAAQABAAAAAAQABABABAAQAAAAABABIACgCIAAgCIABgCIABAEIAEABIACgCIABgBIAIgDQAFgBADACQACAAADgDQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAIACgCIAMgBQACgBADADQACAAACgFQADgCAFAAQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIAGACIACgCQABgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAIAFAAIADABQAAABAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABgCADgCIAFgBIAFABIAFAAQADAAABgBQACgCAEAAIADgDQADgBADACQACABADAAQAEAAABgCQADgEAEACIABAAIADgBIADAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAQAAAAABAAQgBgBAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQAFAEAEgDIAEABIAFgEQADgDABgDIACADQAAAAABABQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAgBAAAAQAIgCAEACQADAAACgDQADgDAGACQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIAEACIAFgBQAAAAABAAQAAgBABAAQAAgBABAAQAAgBAAAAQABAAAAAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQAAgBAAAAQABAAAAgBQAAgBABAAIAFgCQADgCACABQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBIAAABIACACQAGAAAEgEIAGgBQADgBABgDIAMgCQACgCAGgBQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQADgEAFgBIAJgBIACAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABgBQADgFAHABQAFABADgEIAGgCQAEABACAAIAGgFQAFABAMgFIABABIACABIACgCIAEgBIAFgGIAHgCQABgDADgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAAgBAAAAQADgFAEAAQABACgBAFQgDAKgEAIQgEAFgNAKQgGAFgFgBQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAABQgCAEgEgDQgBAAgBAAQAAgBgBAAQAAABgBAAQAAAAgBABQgBAEgJAEIgHADQgBABgEgBQgEgCgDADIgKADQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBABQgEAFgFgDQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABQgIACgCADQgCACgDgBQgBgBgBAAQAAAAgBABQAAAAgBAAQAAABgBABQgCAEgCAAIgEgEQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBABQgIAFgKAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAQgBADgCABQgGgDgDADQgJAAgHACIgBABQgDAAgIAEQgHACgFgBIgCADIgFgBQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQgBgBAAAAIgFAAIgFAAQgEACgCgCQgBAGgIgBIgEABQgEAEgFgCQgCAEgEAAIgEABQgEACgFAAIgBAAQgCgBgDACQgCABgCgBQgDgCgHAGIgDABQgIAAgEACQgCACgFgCIAAAFQgCAFgDgEQgFgEgIADQgKAEgEgBIgCAAIgMADIgEADQgEAFgEgDQgJgGgHAHQgCADgGgBQgMAAgFAFQAAABgBAAQAAAAgBAAQAAABAAAAQgBgBAAAAIgHgBQgDgBgCgCIgCACQgCAFgFgCQgGgBgCAFQgDADgDgCQgEgCgFACQgEACgDgBQABADgCACQgHgCgFACIgDAAQgGAAgDADQgFAAgBgFIABADQABAHgHACQgEAAgEAFQgCACgCAAIgBAAg");
	this.shape_75.setTransform(722.9,143.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#998877").s().p("AAyCWQgCgCgCgGIgCgCQgFgGgEgJIgBgBIgCAAIAAgBQAAgCgBgDIgCgDQgCgDgGgHIgEgFQgEgHgCgDIgGgGIgFgMIgBgCQgBgDgDgDIgDgIIgCgDIgFgHIgBAAQgBgEgEgFIgFgIQgDgFABgDQAAAAAAgBQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAgBQAAgDgDgDIgBgBIgCgHIgDgEIgEgMIgCgHIgEgFIgDgLIgEgPQAAgGgDgDIgBgDQgBgFADgCIgCgCIABgEQAEgFgCgGIAAgBQABgCgBgHIACgJIABgGIACgDQAFgCABgGIAEABQAFgCACgEIAGgIIAEgDIADgEQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABAAIABgDIACABIAAAAIACABIAFAEIABABIAAABIACACIAFAGIACACIAGAKIALAUIAGALIALAdIAJAZIACAFIAAACQAGAQAEAVIABADIABABIABAHIABADQAGAfAAAjQAAAegGAXIgBAFIgCADIgBABIgDACIgBgBg");
	this.shape_76.setTransform(689.3,150.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E9E6DA").s().p("AjkBZQgDgBgEACQgDgCgEgJIgKgXIgCgCIgDgFIgHgNIAAgBIgHgMIgMgQQgCgCABgEQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAABIADAAIANgDQAGACACgCQACgBADADIADgDIADABIAAACIABAAIAGgEIAFgBIAGAAIAEAAIAEAAIADgDQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABIAEACQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABABIACACQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAABAAIABgEQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIADACQAHgBACABQADgBABgEQAGgCADABQAGABACgBIAIACIADgDQAFgBABgCQAEgBACAEIAKgEIAEAAIACgBQABAAAAAAQABAAAAAAQABAAAAAAQABABABAAIACgCQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAFAAIADAAIAFgCQAAAAABAAQABAAAAAAQABgBAAAAQAAAAABAAIAEAAIADACIACAAIADgEQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQACABAJgDIADAAIAEgCQAEgCADADIABABIAQgEIALgCIACgBQACgDAFABIACADQACAAADgDQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIAEgBIAEAAIADgBQADAAALgDQAFgEAGACQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABgBQACgDAEABIASAAQACgBACgDIAEACQACAAADgCQABgBAJABIAHgEIAIgBQAGAAADgCIACgBQAJAGAHgHIADAAIAEgDIAIABIADgCIAGAAIAFAAQAEAAADgCQADgCADAAQAIACAKgGIABAAQACABAJgBIACgBQAFgEAGADQAEAAAEgEIAFADQAFgBACABIADgBIADgCQABAAAAABQABAAAAAAQABAAAAAAQABAAABgBIADgCIAEAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAIADAAIAGAAIADgCQAKAFAFgBIALAIIACADQABACAAALQABAFgBABQgBAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABIABADQAAAEgDACQgBAAAAAAQAAABABAAQAAABAAAAQAAABABAAQgBADgFABIAAACIAAABIgCAEIgFABIgGABIgBABQgDgBgDAEIAAAAQgGgCgCADIgDgBQgDABgEACIgHAFQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgEgCIgCADIgDgCQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAIgCgBQgDABgEAFIgCgBQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgDAEgCAAIgEgBIgFABQgCABgBAEIgHAAIgGABQgCAAgFgBIgDACIgDACQgEABgCgDQgGAIgEABQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAgBgBgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQgHAEgCADIgLAAIgDAEIgBAAIgCAAIgHACIgLABIgEAAQgFADgEAAIgEACIgFABQgEgCgEADIgFAGIgFgBQgDgCgCAAIgDADQgFADgDgBIgGAAIgCACIgHABQgFACgCgBQgCADgCABQgDgDgCABQgBAEgFAAIgCAAQgDABgGgBIgDABIgEAAQgBABgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBIgKAAQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIgBACQgDgCgCAAIgBABQAAAFgEgBIgJAAIgDABIgEACIgCgCIgGgBQgBADgDAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBAAAAAAIgCAEIgFgBIgDACQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgDACQgEgBgCABIgBABQgFAAgCABIgGAEQgFgDgEgDQAAAAAAAAQAAABAAAAQAAABAAAAQAAABABAAIgEAEIgDgDQgEABgCACIgEgBQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAgBIgDAFIgEABIgEADIgDgBIgBAAQgEACgDgDIgDgBIgDADQgDAAgEADIgPADIgGABQgEACgDgBIgDACIgEgBIgCADQgCACgEAAg");
	this.shape_77.setTransform(723.3,135.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#C9C1B3").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_78.setTransform(763.4,149.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D42939").s().p("AAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_79.setTransform(758.3,158);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#D42939").s().p("AAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAgBAAQAAAAAAABQgBgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_80.setTransform(759.5,153.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#D42939").s().p("AAAABQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAABg");
	this.shape_81.setTransform(778.8,154);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#C9C1B3").s().p("AgBAAIAAAAQABAAACAAIgDAAg");
	this.shape_82.setTransform(764.2,149.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#D42939").s().p("AAAAAIAAAAIABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAg");
	this.shape_83.setTransform(756.6,160);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#D42939").s().p("AgBAAIABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIAAABQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAAAgBAAg");
	this.shape_84.setTransform(759,156.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D42939").s().p("AgBAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAIAAABQgBAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape_85.setTransform(759.4,153.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D42939").s().p("AgBAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIACAAIgBABIgCgBg");
	this.shape_86.setTransform(758.9,156.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#D42939").s().p("AgBAAQABAAAAAAQAAAAAAAAQAAAAAAAAQABAAABAAIgDABIAAgBg");
	this.shape_87.setTransform(751.6,140.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#D42939").s().p("AAAAAIgBAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIACAAIgBABQABAAgBAAQAAAAAAgBQAAAAAAAAQgBAAAAAAg");
	this.shape_88.setTransform(759.2,155.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#BDAEA1").s().p("AAEABIgJgBIABgBIABAAIADABIAFAAIAAABIAAABg");
	this.shape_89.setTransform(772.4,145.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#D42939").s().p("AgBABIABgBIABAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAgCIACACIgBADg");
	this.shape_90.setTransform(759.3,154.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D42939").s().p("AgCAAIACAAIAAAAIABAAIABAAIAAABg");
	this.shape_91.setTransform(779.4,154.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#D42939").s().p("AgBABQAAAAABgBQAAAAAAAAQAAAAAAAAQAAABABAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAABABAAQAAAAABABIgBADIgCgCg");
	this.shape_92.setTransform(759.1,155.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#D42939").s().p("AgFAAQAAAAAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAIABABIAAABQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAIAAAAIACAAIABAAIAAABIADAAIgBACIgKgDg");
	this.shape_93.setTransform(777.9,153.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#D42939").s().p("AAAAFIgCgBIAAAAQACgDAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAABQAAgBABAAQAAAAAAAAQAAAAgBAAQAAgBAAAAIgBgCIABAAIACAAIgBAEIgBABIABABIAAADIgBAAIgBAAg");
	this.shape_94.setTransform(758.7,157.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D42939").s().p("AgCAHQABgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIAAgCQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAABAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIgBgBQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBgBQABAAAAAAQAAAAAAgBQAAAAAAAAQABABABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQgBAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIADAAIgDAPQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_95.setTransform(759.7,152.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#998877").s().p("AgLgEIAQAEIAIACIgBAAQgBgBgHAAIgEABIgNAEg");
	this.shape_96.setTransform(761.8,148.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#D7D1C2").s().p("AgSAHIABgGIAHgCIATgJQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIABABIACAAIADABIABAAIABABQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgEACQgHABgFADQgCAAgCABQgDABgCACIgDACQgDAAgCADIgEACQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBg");
	this.shape_97.setTransform(762,150.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#BDAEA1").s().p("AgSAKQACgEAEgBQADAAAEgEIAEgBQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAKgGQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABIABAFQgBADgDABIgHADQACABAHABIAHACQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAABAAIgMgCIgMACQgGACgGABIgBAAIgBgBg");
	this.shape_98.setTransform(751.8,158.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#998877").s().p("AixA7IgjgMIgDgBQAGgLABgPIABgDIAFADIAWgCQAHgCAMACIACABQACACADgBIAAAAIAFAFIAHgBQAIAAAPgFIBXgUIAugMIB1gdIBGgRIANgCIABABQACADgDACQgFAHgHACIhKAUIgHABIgEABIghAIQgHABgMAEIgHABIgMADIgVAGIhBAPIgPAEIgJACIgKADIgLADIgqAMIgBAAIgRAGIgRAGIgPAHIAAAAQAFADADABIADAAIAAABIgLgDg");
	this.shape_99.setTransform(788.5,139.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#998877").s().p("AkjCiIgGgEIgEgEIABgBQAIgBALgFIAEgBIADgCIABgBIASgHIASgHIAFgBQAHgBALgEIARgIIBpgoIAggMIB1grIAJgEIADgBIADgBIAFgCIATgGIAkgKQAfgLA9gTQALgEAPgKQAHgFAAgHIADgNQABgGAFgGQAEgGAFgMIAOgbIAHgUIADgNQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABAAIgDAcIAAABIAAADIgVBhIgCAKIgBgFIgTAFIgjALQgKACgFACIgGACIgRAFIgSAEIgbAJIgOAFQgOAGgHAAIgCABIgJAEIgbAJIgCAAIhBAaIgWAJIgJADIgOAFIgMAFIgFACIgLAEIgFACIgKAFIgPAEQgPAFgHAEIgyAUIgNAGIgSAHIgWAJIgMAFIgMAFIgLAEQgGACgGAAQgIAAgGgEg");
	this.shape_100.setTransform(721.4,153.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#E3DED2").s().p("AhEAaIAYgFIA3gNIAkgIIARgCIAEgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIAAgBQgDgJgHgEQgEgCAAgCIACgCIACgBIAFAAQAAAAAAABQAAAAAAABQAAAAAAAAQABABAAAAIAJAHQADADgCADQgCADACAGIAAABQgBACgFAAIgGAAIgdAHIgZAGIgeAHIgZAFIgWAEQAAAAAAgBQAAAAAAAAQABgBAAAAQABgBABAAg");
	this.shape_101.setTransform(806.3,135.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#BDAEA1").s().p("AjAA+QAAAAABAAQAAgBAAAAQAAgBABAAQAAgBABAAIAXgIICIgoIAvgLQAQgEAhgIIAegHIAzgLIAmgMQAJgCAFgGQAAgBABgBQAAAAAAgBQABAAAAgBQAAAAgBgBQgGgBgFACIgOAEIh4AcIhYAWIh0AdIgMABIgEgBQgJgIgUACIgVACQgFABgBgFIABgBIAAgIIgBgEIAAgDIgEgaQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQABAEADADQAEADAEgBIALgBIACAAQADgCAFgBQAIgEAEAFIAFgCIAEABQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBIADAAIADgFIAEAEQADACADgBIACgCQACAAADABIACgCIABAAIAEABIADAEIAGgDQADgBADACIgCAFQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAIAEAEQAAACgCABQACAEgBAHQACACAGABQAFgBAEgEQADADAEgBIAHgCIAagGIAHgBIAXgEIAWgGIAAAAQAHgDANgCIA4gPIASgEIAIgCQALgDAVgEIALgDIAHgCIAPgCIAXgHIATgEIAXgFIABABQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAQgEAAgDACQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIAJAHIABABIADACQABAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgiAKIkXBCIgaAIIgLADIgpAOQgKAEgEACIgJgDg");
	this.shape_102.setTransform(789.9,138.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#BDAEA1").s().p("AAAAAIAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_103.setTransform(765.3,131.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#D42939").s().p("AAAAAIAAAAIABABg");
	this.shape_104.setTransform(764.5,130.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#D42939").s().p("AAUBKIADgCQgEgFgFAFQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQgDgBgGACIgIACQgMABgMgDIgCgBIgDgDIgDAAQgHAEgFgCQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBAAAAQgBgBAAAAIgCgCQgBACgFgBIAAgFIACgYIADgYIAAgCIABgVIgBgfIAAgFIABgDIAAgBIACgBIACgBIgDgBIACgCIACACQAJABARgCIAbAAQARAAAJgDQALgEADABIgBgIIAaAkQgCACgCgFQgCgDgGgCQgGgCgCgDIgBgGIgBgGQgBAAgBgBQAAAAgBAAQAAAAAAAAQAAAAAAABIABAEIAAADQAAABgBAAQAAABABAAQAAAAAAABQAAAAABAAQgBABABAFQABAEgCABIACADIgCAAQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAAjgFAyQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAAAIABACIgCABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBAAQACABAAAFQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQADABAAAGIgGgBIgEACIgCABIgDgCg");
	this.shape_105.setTransform(757.9,134.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#D42939").s().p("AAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_106.setTransform(765.8,149.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#D42939").s().p("AAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAg");
	this.shape_107.setTransform(765.5,149.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#E9E6DA").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAIAAAAIgBABg");
	this.shape_108.setTransform(765.6,149.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#D7D1C2").s().p("AgEAAIACAAIAHAAIgFAAIgEAAg");
	this.shape_109.setTransform(757.9,121.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#BDAEA1").s().p("AgCAAIACAAIACAAIABABIgBAAQgCgBgCAAg");
	this.shape_110.setTransform(757.3,160.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#998877").s().p("AACAAIACAAIgEABIgDAAQACgBADAAg");
	this.shape_111.setTransform(744.3,125.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#998877").s().p("AAAABIgEgBIAAgBIAAAAIAEABQAAABAAAAQABAAAAAAQABAAAAgBQABAAAAAAIACABIgDABIgCgBg");
	this.shape_112.setTransform(758.2,161.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#C9C1B3").s().p("AAMAFIgKgFIgCAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQAAAAgBAAQgEgBgDAAIgDAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAJgBQAAAAAAAAQAAAAABAAQAAAAAAABQABAAABAAQAIADAJAHIAAAAIgBAAIgCgBg");
	this.shape_113.setTransform(689.9,134.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#C9C1B3").s().p("AAOAFQgOgKgPACQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAIALgCQAAAAABABQAAAAAAAAQABAAAAAAQABABABAAQAEABANAHIABADIgDgCg");
	this.shape_114.setTransform(691.7,134.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#D42939").s().p("AgVAHQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIAPgEIATgFQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIAJgCQgHAFgLABIgSAEQAAABABAAQAAAAAAAAQAAABABAAQAAAAABgBIAAABIgBAAQAAAAgBAAQAAABAAAAQAAAAAAgBQAAAAgBAAIgBAAIgCAAIgBAAIgDABg");
	this.shape_115.setTransform(746.9,124.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#C9C1B3").s().p("AgFAWIAGgYIAAgDQgCgDABgGQABgGAFgFIgDAOIgHAjIgBACIAAgEg");
	this.shape_116.setTransform(747.7,156.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#D7D1C2").s().p("AgBAGQgHgGgKAAIgEgBIAYgDIAHgCIAFABIAGABIACAAQAAAAAAABQAAAAABAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgLAAIgGAAQgDgBgEABIADAEQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABg");
	this.shape_117.setTransform(687.4,134.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#998877").s().p("AAhAOIhCgaQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAIAJACIAEACIACAAQAJABADADIADABIABABIACAAQACAAACACIAhAIQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABIABAAIgBAAIAAAFIgBAAIgDAAg");
	this.shape_118.setTransform(779.6,154.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#D42939").s().p("AAwARIgFgCIgEgCIAAAAIgDgBIhVgbIgCgBQABgBAEACIANADQADACACgCQAAABAAAAQABAAAAAAQAAAAAAABQAAAAgBAAQABAAAAABQABAAAAAAQABAAAAgBQAAAAABgBIACADQAAAAAAAAQAAAAABAAQAAgBAAAAQABAAAAgBIABADIABgBIACAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAQABABAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIABABQABABAAAAQAAAAABgBQAAAAAAAAQABAAAAgBQAAABAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAgBIACABIADABIACgBQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAABIACAAIABABIADgBIADACQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAIACAAIACADQAAAAAAAAQAAAAABAAQAAgBAAAAQABAAAAgBQAAABAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAABgBQAAAAAAAAIACACQADgDADADIABACIABAAIACAAIACABIABAAIACAAIAAABQgBAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIABgBIACAAIgBAEIAAAAIgDgBg");
	this.shape_119.setTransform(771.8,151.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#D42939").s().p("AAFAQIgFgDIAAAAIgCgBIgDgEIgCgCIgCgCQAAAAAAAAQABgBAAAAQABAAAAAAQAAABABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAABIACgCIACABIABgBIAAAAIAAAAIAAAAQAAgBAAAAQAAAAAAgBQABAAABAAQAAgBABAAIgCgEQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAIACgDIABgCIAAAAQADgBACACIgCAQIgBAHIAAAFQAAABAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIgBgBg");
	this.shape_120.setTransform(757.8,159.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#998877").s().p("AgjAGIAAgDIAEgBIBAgIIgBgBQABAAAAAAQABAAABAAQAAABAAAAQABABAAAAIgTADQACACADAAIAEACIgDABIg1ADQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABg");
	this.shape_121.setTransform(786,151.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#998877").s().p("AATAPQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgNgIgHgBIgBgBIgCAAQgEgCgIAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIAHgFQACgDAAgEIAeAXIAEADQAEACAAACIgCABg");
	this.shape_122.setTransform(754.6,159);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#C9C1B3").s().p("AgxANQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIAAADQABAAAEgCIAPgKIAbgNQABAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgIAJgEAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAVgEAOADIAEAAQAGAAAPAIQAEABAAADIgGgCQgMgFgHgBQgJgCgFAAIgXADIgYAGQgHACgEAAg");
	this.shape_123.setTransform(751.6,159.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#D42939").s().p("AA1AEQgBgEgEAAQgEAAgEAAIgEAAIgKgBIgFABIgIAAIgBAAIgGAAQgEAAgCgBIgBABQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIgCABIgMAAIgCgBIgCABIgDAAIgCAAIgFAAIgCAAIgGAAIgFgBIgBAEIgBAAIAAgBIAAgCQgCgGgFgDIgCgBIAEgBIADAAIAFAAQADABADgBIADAAIACAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAEAAIAEAAIAcAAIACABIAWAAIACAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIAEAAIACAAIADAAIABAAIADABIAFAHQAFAGACAIQgDgDgBgFg");
	this.shape_124.setTransform(755.9,123.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#91091E").s().p("AgTAfIgNgLIgFgFIgBAAIgBgBIgBAAIgBgBIgEgCIAAAAIgBgBIgFgCIgCgBIgBgBIgGgCIgCAAIgDgBIgDAAIgDgBIgBAAIgKgBQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAIAOgDIAPgFIgCgBIAAgEIADgGIAFgIQAFgEAEAAIACAAQADAAADAEQACADABAEIAAAAIAAAAIAGgBIAIgBIAUABIA9ABQADAAACAEIAEAKIAAABIAAACIABACIACAJIAAABIAAAEQAAAEABAFQgCABgDgBIgVAGIgHAAIgOABQgDABgDgBQgEgBgHABQgEABgDgCQgEgBgDABIgPABIgDgBQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAIgCABg");
	this.shape_125.setTransform(753.8,125.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#C9C1B3").s().p("AjTCKIgFgBIgCgCIgCAAIgCgCIgCgBIgEgCIgBgBIgBgCQgIgEgRgTQgNgNgJgOQgRgYgFgLIgBgJIgFgMIgJgVQABgBgEgJIgPguIgKgiIgBgDIAAgCIgBgCIgBAAIAAgCIAAgBIAAgBIgBgBIAAgEIgBgBIAAgFIgBgCIAAgBIgBgBIgBgEIAAgBQAAAAAAAAQABgBgBAAQAAAAAAgBQAAAAAAAAIAAgBIAAgDIgBgBIAAgDIAAgDQAEgCAJgBIgCADIABAGQABADADACQABAEACACIAAAIIABAEQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIAFAEIABAIIAFAFIgBAFQACAEADADQAGAGgBAGIAAACIAFAIQAEAGgDAEIADAEQgBAFAFACIABABIADAFQADADABADIADAHIACADIABAHIADACQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQADADACAGQABAEAEAEQADADADAHIAAADQADADgBACQAHAJACAIIACAFIAEAFQAAADACAEIADAGIABADQAFAHABAIIABAEQAAAAAAABQAAAAAAAAQABABgBAAQAAAAAAABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgKgDgIgIIgEgEIgCgBQACAFAIAGQAAABAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIAGAGIAGAFIAKAGIACABQAFAFAMADIAIgBQAMgCASgJIBIgeQAGgDAMgEIAVgJIAngPIALgFIASgIIA1gUIAOgGIAOgFQAJgBAQgIIBZgeIAGgBIARgGIAagJIAxgQIAKgCIAMgEIAGgCIAOgEIAHgBIAAADQgMAFgGAAIgIACIgHADIhyAkIglAOQgdAGgNAHIg+AXIgUAIQgNAGgHACQgFABgJAEIgUAKIgsASIh1AxQgPAGgMACg");
	this.shape_126.setTransform(713.5,158.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#BDAEA1").s().p("AjaC4IgIgDIgTgMIgKgKQgCgCACgDQgIgGgBgFQAAgBABAAQABAAAAABQABAAAAAAQABABAAABQAKAJAFACQAFACACAAQgDgQgCgDQgFgIgCgJIgCgEQgDgCgCgHQgCgGgEgGQgDgFgCgFQAAgEgFgGQgFgFgBgGQgBgCgCgCIgDgGIgDgGIgDgHQAAgDgCgDIgCgEQgCgIgJgGIgBgCQgEgIABgFQABgCgDgDQgFgGABgFQAAgEgFgGQgFgEAAgGQABgCgDgDQgCgBgBgFQAAgBAAgBQAAgBAAAAQgBgBAAAAQAAAAAAAAQgDgBgCgEIgCgGIgBgEQABgFgGgHQgFgIAFgFQACgCAGgBIAOgDIACgBIAEgBIAAgIQgBgTACgRQACgQAEgKQADgJAFgEQAFgFAIgBQAIAAAIAEQAEACABADQgBAEgFADIgNAOQgEAGgHgBQgBAGgFACIgBABIgCAIQgBAFAAADIAAANQABAEgDAGQAAABAAAAQAAABAAAAQAAAAAAABQAAAAABABIAAAAQgEAFADAFIADAIIAGAVIAHARIADAIQABAJAFAHIAHANQACACACAEIAGAMIAHAKQAEAGACAEQACAHAGAFQADADADAIIAKAOIAKAOQADAEAEAIIAJAOQAEADABAFIADAEQABABAAAAQAAAAABAAQAAAAABAAQABAAAAAAQABADgCADQgFANgFAGQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAAAIgDADQgKAFgMADQABACAEACQAOALAVgJIAugSQAPgGAUgJIAXgJIArgRIAMgEIApgSICRg2IC2g4IAHgBQACACgBADIgFAUIAAABIAAgCIAAgEIABgEIABgEIAAgCQAAgBgBAAQAAgBAAAAQgBAAgBAAQAAAAgBABIh0AiIjEBHIggANIg8AYIg1AVIg1AXIgbAKQgKAEgHAAIgFgBg");
	this.shape_127.setTransform(714.2,153.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#E3DED2").s().p("Aj2BYIgCAAIgCgDIgBgEIgBgBIgFgMQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABAAQAFgDADACQABABAkgQQASgFAOgHIAUgHIAugLIAtgMIBBgSIAqgPQAZgIARgEIANgBQAIgBAEgCIAHgGQACgBAGABQAVgFApgTQARgHAPgFIARgEIAKAAQACAAAAgEIAGAMIAFALQAFAMAAAKIgBgBQgDgHgaAIIggAKQgkALgfANIgDACIgOABIgLAIIgTAFIgUAGIgNAAQgFABgUAHQgQAHgoAKIhgAcQg7ARglAIQgKAEgDAAQgIAAgCgEg");
	this.shape_128.setTransform(791.2,124.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#E3DED2").s().p("AjTBzIgGgUIACAJQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgCgCIgCABIgBACQgEAFgFgBQgEgCgDADQgHAFgFgFIgEgHIAAgCIgEgMIAAgFQADgBADAEIAFAEIAHgEQAEgCADABIAFAAIACgCQABgBAEAAIgBgEQgOgqgTgbIgKgMQgGgIgJAEIgHACQgHACgGACIgCAAQgDgBgDgEIgBgCIgCgCQgDgBgBgDIgDgCQgEgGAAgCQACgCAIAAIASgBQADAAADABIgHgDQgBAAgBAAQAAgBgBAAQAAAAAAAAQAAgBAAAAIADgBIAEgBIAFAAQAJAAAHAEIgIgDIgCgCQABgCAEABIAjgEIDrgeIBigRIBCgMIBWgRIABAAQACgCAGgBIABAAIACAAIACAAIACgBIABAAIABABIABgBIABABIAGgBIACAAIADABIACAAIAFACIABAAIAHACIACABIAFADIACAAIAEADIABABIABABIABAAIADACQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQgDACgEgCIgHgDQgEACgNABIgCAAQgIAEgMAAIgDgBQgCgBgDACQgEACgEgCQgEgBgDACQgGAEgHgBQgDAAgCABQgHAEgHgBQgEAAgFACQgDACgDgBQgFAAgHACIgDABQgEgCgFACIgJAEQgEACgGgCQgDgBgDABQAAABAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQgEgBgFACIgIADQgNAAgFACIgEAAQgCACgHAAIgOABQgDAAgCACQgDADgDgCQgEAAgDACIgPAEIgMACQgJABgBABIgDgBQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAAAgBABIgHADIgGABIgNADQgDABgCgCQgDgCgDACIgLADIgDAAQgHAAgCAEQgBABAAAAQgBAAAAAAQgBABAAgBQgBAAAAAAQgFgCgHACQgEABgFAAQgFABgBACIgCABQgHACgDgBQgCAAgFACQgDACgDgCQAAgBgBAAQAAAAgBAAQAAgBgBABQAAAAgBAAQgGACgCADIgCAAQgDgBgGAAIgIAAQgEgCgDAFQgBAEgFgCIgDAAQgFABgCgBIgCACIgBABQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBIgCgBQgBAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgEAAIgDgCQgDADgKAAQgIgBgEAEQgDADgCAAIgCgDQgLACgGgBIgHABIgFACQgDABgCgBQgBACACAEIAPAVQADADgBACQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBgBIgPgTQgCgEgEgDIgEgBQgDABgDgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAEADADQAOAQANAeQAIAPAEANIAFAIQADADADgDQAFgDAEAEQABgFgBgEIgMgbQgCgFABgCQADAAABAFIALAXQABAEACABQABABAEgBIAIABQAFABADgDIAKgDIAKgCIAQgDQAHgCACgDQABgBAAgBQABAAAAAAQABAAAAAAQABABABAAQADAEAJgCQAHgCADgFIADABQACACAEgBQAEgCAEACQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAgBIABgDQAAAAAAAAQABAAAAAAQABAAAAABQABAAABABQAEAEAFgDQAEgDAJAAIAJgDIAHgBIADgDIAEAAQAHgEAGAFQAEgFANABQAAAAAAAAQABgBAAAAQAAgBAAAAQABgBAAgBQACgBABACIAAgCIAAgCIAJgBIARgBIAHAAQAFAAACgDQABgBAFABQAEgEAKgBIAGgCQAEgCACABQAFACADgEQADgCAEABQAEACABAAIADgEQAEgEAFAAQAAAAABABQAAAAAAAAQABAAAAAAQAAgBABAAIAIgCIAJgDQADgBAHAAIALgCIAEgBQACgBAFAAQAEABAKgGIADgBQAAAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAFAAAEgEQAEgEADACQADABADgDQACgDAEABQAAAAABABQABAAAAAAQABAAAAAAQABgBAAAAQAGgDAGAAQAEgHAIADIADgBQAEgFAEAEIAEgEQADgCADACIABgDQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIAFgBQABAAAAAAQABgBABAAQAAAAABABQABAAAAAAQAFAEAFgEIAGgEQADgCADABQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABAAIAFABQACgDAFgBIAIgCQAEgBAAgEQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIADgCQAAgDACgEIAAgFQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAABABQABAJgBAMIgCARIgLAMIgBABQgDAAgDADIgFAEIgEADQgDABgDgBIgFABQgDACgGAAQgDAAgCACQgCACgGAAQgEgBgDABQgDADgHAAQgFAAgDADQgCACgDAAQgMgBgHAHQgDgDgFACIgIADIgKAEIgOAFQgDABgDgBIgHABIgIADIgHADQgEACgDgBQgGABgDgBIgEADQgDADgCgBQgJgDgFAFIgCgBIgCgCQgFAHgEABQgHACgFgCQAAABgBAAQAAABAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAABgBAAQAAgBgBAAQgBAAgBAAQgDAFgHgBQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBABQgEAEgIgCQgFgDgCAEIAAABIgKADQgGABgEgBQgDgBgGAFQgEADgDgCQgEgDgCADQgDAEgFgCQgDADgEAAQgBAAgBAAQAAABgBAAQAAAAAAABQgBAAAAABQgCAFgEgDIgDgBQgMABgIAEQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgHgDgKAHQgDABgDgCQgBAEgGgCQgDADgGgCQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgDADgEgCIgGABQgDABgBACQgBADgDAAIgTACQgHADgIgBQgDAAgCABQgEADgEgCIgDACQgFAFgEgCQgDgBgFACQgGABgCgFQAAAEgCAFQAAAEgGABIgGACIgDABQgDAAgBgEg");
	this.shape_129.setTransform(719.4,137.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#91091E").s().p("AjUCiIAAgBIAAAAIABgCIABgDIAJgfIADgPIACgJIAAgBIACgGIAAgBIAIgrIAIgkQAIgcABgOQACgGADgBQAAAAgBgBQAAAAAAgBQAAAAABgBQAAAAABgBQACgBACACIALAGQAHADAGgDQADgCALAGQAPADAOgEQAFgBACABIADACIADAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABIgBAAIABAAIAEgBQACAAACgCQACgEAAgKQAAgCADgGQACgFABgIIAAgOIACgYIAAgdQgBgIAAgGIgBgOIABgDIgBgCQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQACgBAEACQAAAHABAEQAAADAEABIAIAEQAFADABADIABABQAAABABgBIAAABIABACIABAAIAAABIAEAFIAAABIABABIAAABIACACIAAABIABACIAEAIIACACIABAEIABADIABAFIAAAAIACAGIADAHIABADIACAIIAAACIAFAaIABADIAAACIgBAEIAAAJIgEAUIgDAIIAtAOIAAABIAOAEIABABIADABIASAGIAAABIACAAIAPAFIABABIABABIACAAIABABIADAAIABABIACABIAFABIABABIADABIACAAIABABIADAAIAAABIAAAAIAFACIACAAIABABIADABIABAAIADABIACAAIABABIABAAIACABQASAGATAEIASAFIABABIAFAAQgBABABgBIALADIADABQABAAAAAAQABAAAAAAQAAAAAAAAQAAABABAAIgHABIgcAGIgeAEIgFABIgBAEIABABIAAAAIAAACIAAABIAAABIABABIAAABIABAEIAAAAIAAABIAIAOIABACIgCAAQgRgCgTgIIgBgBQgDgEgEACIgBAAIgBgCIAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAAAgBAAIAAgBQgFAAgEgDIgCACIgBgBIAAgBIgGgCQgCgBgCAAQgCgDgFAAQgGAAgFgEQgKgCgFgDIgCgBQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgDABgJgEIgGgCQgJgEgEAAIgXgIIgBAAIgCgBIgCgBIgCAAIgBgBIgBAAIgCgBIgBAAIgCAAIgCAAIgDgCIgGgCIgBAAIgBgBIgBABQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIgFgCIgXgIIgDALIgCAPIgBAFIgBABIgBABQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAgBABQAAABAAAAQABABgBAAQAAABAAAAQAAABgBAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABIABAAIAAACQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIACABQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBgBIADACQAAAAgBABQAAAAAAABQAAAAAAAAQAAABgBAAIgBAAQABABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAIACACIAAABQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQABABABAAQAAABAAAAQABABAAAAQAAAAgBABIAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQABABAAABQABAAAAABQAAAAgBABQAAAAgBAAIACABIAAACIgCABIABACIAAABIgDABIACACQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgBABIAAADIgEABIgCAFIgBACIABACIgBABIgCAEIABAEQAAABAAAAQAAAAgBABQAAAAgBABQAAAAgBAAIAAABIgDADIgDABQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAABIgDAAIgBgBIgBgBIgCgBIgSgPQgGgFgJgFIgCAAIgBAAIgLAFQgUAKgKAGIgNAIQgEADgDAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAg");
	this.shape_130.setTransform(768.1,144);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#C9C1B3").s().p("AiMBoQgEgBgCgNQgCgOADgDQgBAAAAAAQAAgBgBAAQgBAAAAAAQgBAAgBABIgFABIgEgCQgCgCgKACQgIACgDgFQgHAIgJgBIgIgBIgHACQgaAJgGgPIgCgEIgBgCIgCgIIgBgDIgCgFIgCgHIAAgBIgBgBIgBgEIABgBQADgBAEAEIAIgBIAZgGIAugMQAwgMAsgLQBggcBVgcIASgGIBGgXIAfgLQAYgGAFAIIAEAOIABAOIABABIAAADIAAACIAAADIABACIgBAFIAAACQABAKgCAJIgBACIAAACQgCANgHAMQgDAGgHAIIgIAIIgEACIgVAFQAAAAgBABQgBAAAAAAQgBAAAAAAQgBgBAAAAIgEAAIjWA0Ig2AOQgeAHgPADIgCAAIgIABIgHACg");
	this.shape_131.setTransform(792,129.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#E3DED2").s().p("AjiByIgBgBIgBgCIgCgBIgCgEIAAgBIgCgCIgBgBIAAAAIgBgBQgBgEgEgFIgLgOQgGgGgBgIIAAgDIgBgCIgCgKIAAgCIAAgBIgBgCIAAgBQgEgPgGgGIgBgCQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAhgIIBCgOIAhgJIAmgLIELhRIAUgHQALgDAMADQAMADAJAGIANALIAMANQAIAJAJASIADAJQABADgDACQgFgDgFAEQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBgBIgEABQgBAEgEAAIgHABIgSAGQgBAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAIgCACQgCAAgEACIgGACQgDAAgDADIgCABIgDABQgEACgGABQgGAAgDACIgDADQAAAAgBAAQAAAAgBAAQAAABAAgBQgBAAAAAAQgBADgEAAIgFAAQgJABgDACQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgCgBQgCADgFADIgIAGIgCgDIgGAEQgCADgDgCQgDgCgDADIgCABIgNADQgCADgEABIgHABIgDACQgHAHgHgCQgDAAgDADQgGAGgGgDIgDACQAAABgBABQAAAAAAAAQgBABAAAAQgBAAAAgBQgFgCgEAEIgDgBIgDACQAAABAAAAQgBAAAAABQgBAAAAAAQgBABgBAAIgHAAQgEAAgCADQAAABgFAAIgEAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIgEgCQgFAAgHAEIgGACQgEAAgFADQgFAEgFgEIgCgBIgEAFQgCACgDABIgCgBIgBgCIgCACQgEAEgEgDQgBgBgBAAQgBAAAAAAQgBAAAAABQgBAAAAABQgDAFgGgBQgHAEgHAAIgFACQgCAEgEgDQgFgCgDAEQgDADgCgBIgGACIgRACIgCABQgFACgEAAQgCAEgFgBQgIgCgDAHQgBAFgEgCQgDgCgEABIgIADIgBAAQgEAAgGACIgLADQgJAAgEACg");
	this.shape_132.setTransform(788,120);

	// bg
	this.instance = new lib.moneyPilecopy();
	this.instance.setTransform(402.2,570.4,1,1,0,0,0,125.2,308.8);

	// shadow
	this.instance_1 = new lib.shadow_graphic("synched",0);
	this.instance_1.setTransform(489.3,911.7,1,1,0,0,0,396,82.4);
	this.instance_1.alpha = 0.191;

	// Layer 9
	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#C8DDE0").s().p("EiV/AXEMAAAgsWIZkDPQVohzWAhxUAsCgDiAB/AALUACBAALAyzABKQZbAlZAAiMBRYgCcMAAKAwrQkugSlZgQQqwghjNAGUgDMAAGg1KgA+Mg0hgA/MhxoAEGg");
	this.shape_133.setTransform(960,421.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#B5C6CB").s().p("EiV/gP0MApaAB/UADtAAMBCSgDIUBEtgDQAEugAEUAIQgAHAqRABTUApyABRAFYAAfQETAYG9hoQDegzCng5MAAKAlIMkr+ADDg");
	this.shape_134.setTransform(960,655.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#666E74").s().p("EiV+AbFMAAAgzMMAw1gC9MDe9ACUIcLiUMAAAA2Jg");
	this.shape_135.setTransform(959,907.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#BDDDE6").s().p("EiV/ga3MEr0AAAMAAKAwqMkr+AFEg");
	this.shape_136.setTransform(960,172);

	this.addChild(this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.instance_1,this.instance,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(959,540,1921,1081);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;