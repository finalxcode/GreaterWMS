#!/bin/bash
cd /root/www/GreaterWMS/templates
yarn install --force
quasar build
quasar d
