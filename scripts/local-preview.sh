#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
export ASTRO_TELEMETRY_DISABLED=1
if [ "$#" -eq 0 ]; then
	set -- preview:local
fi
exec node .local-tools/node_modules/pnpm/bin/pnpm.cjs "$@"
