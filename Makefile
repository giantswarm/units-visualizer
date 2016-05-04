build-and-run: build run

run:
	docker run -ti -p 8000:8000 -v ${PWD}/public:/usr/src/app/public oponder/unit-visualizer

build:
	docker build -t oponder/unit-visualizer .

simulate-up:
	echo "POST http://docker.dev:8000/message" | vegeta attack -duration=5s -body=json_bodies/add1.json -rate=200 -header="Content-type:application/json" -output=/dev/null

simulate-down:
	echo "POST http://docker.dev:8000/message" | vegeta attack -duration=5s -body=json_bodies/subtract1.json -rate=50 -header="Content-type:application/json" -output=/dev/null

simulate-reset:
	echo "POST http://docker.dev:8000/message" | vegeta attack -duration=1s -body=json_bodies/setTo0.json -rate=200 -header="Content-type:application/json" -output=/dev/null