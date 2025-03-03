all: run

build-env:
	docker build -t primeng-test .

run: build-env
	docker run --rm -it \
	--name primeng-test \
	-p 4200:4200 \
	-v `pwd`:/app \
	-v /app/node_modules \
	primeng-test $(c)

build:
	make run c="npm run build"

develop:
	make run c="npm run start"

test:
	make run c="npm run test"
