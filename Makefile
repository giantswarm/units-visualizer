build-and-run: build run

run:
	docker run -ti -p 8000:8000 oponder/unit-visualizer

build:
	docker build -t oponder/unit-visualizer .

