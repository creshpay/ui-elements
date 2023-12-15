#!make

TAG = $(shell git describe --tags | sed -e 's/^v//')

PRERELEASE_TAG ?= rc
PUBLISH_FLAGS = publish --access public

PACKAGE_LOCK = package-lock.json
COVERAGE = .nyc_output coverage
ENVFILE = .env
SRC = src
SRC_FILES = $(shell find src -type f -name '[^test]*.ts')
DIST = dist
MODULES = node_modules node_modules/.bin

DOCKER = docker
COMPOSE ?= docker-compose
COMPOSE_FLAGS = --rm ${COMPOSE_SERVICE}
COMPOSE_SERVICE := build
RUN_IN_CONTAINER = docker-compose run --rm $(COMPOSE_SERVICE)

PM ?= npm
RM ?= rm
ifeq ($(CONTEXT), container)
	PM = $(RUN_IN_CONTAINER) npm
	RM = $(RUN_IN_CONTAINER) rm
endif

# TARGETS

.PHONY: all
all: $(DIST)

$(ENVFILE):
	cp $(ENVFILE).defaults $(ENVFILE)

.PHONY: env
env: $(ENVFILE)
	$(eval include $(ENVFILE))
	$(eval export $(shell sed 's/=.*//' $(ENVFILE)))

$(MODULES):
	$(PM) ci

$(DIST): $(MODULES) $(SRC_FILES)
	$(PM) run build
	@touch $(DIST)

.PHONY: publish
publish:
	$(PM) publish

coverage:
	$(PM) run coverage

package-lock.json:
	$(PM) i

.PHONY: clean
clean:
	$(RM) -rf $(DIST)

.PHONY: clean-coverage
clean-coverage:
	$(RM) -rf $(COVERAGE)

.PHONY: clean-modules
clean-modules:
	$(RM) -rf $(MODULES)/*
	$(RM) $(PACKAGE_LOCK)

.PHONY: clean-all
clean-all: clean clean-modules clean-coverage

.PHONY: test
test: $(MODULES)
	$(PM) t

.PHONY: container
container: package-lock.json
	$(COMPOSE) build ${COMPOSE_SERVICE}

.PHONY: shell
shell:
	$(COMPOSE) run $(COMPOSE_FLAGS) /bin/sh

.PHONY: release
release:
ifneq (,$(findstring n,$(MAKEFLAGS)))
	+npx standard-version -s --dry-run
else
	npx standard-version -s
endif

.PHONY: prerelease
prerelease:
ifneq (,$(findstring n,$(MAKEFLAGS)))
	+npx standard-version -s --prerelease $(PRERELEASE_TAG) --dry-run
else
	npx standard-version -s --prerelease $(PRERELEASE_TAG)
endif
