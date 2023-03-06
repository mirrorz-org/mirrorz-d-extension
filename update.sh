#!/usr/bin/env bash
kill -HUP `systemctl show --property MainPID mirrorzd.service | cut -d = -f 2`
