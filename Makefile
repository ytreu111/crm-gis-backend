up:
	docker compose up -d
	#pnpm start:dev

down:
	docker compose down

restart:
	docker compose down
	docker compose up -d
