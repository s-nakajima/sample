#!/bin/bash -ex

CURDIR=`pwd`

samples=`ls`
for sample in ${samples}
do
	if [ ! -d $sample ]; then
		continue
	fi

	echo "cd ${CURDIR}/${sample}"
	cd ${CURDIR}/${sample}

	for file in `ls`
	do
		if [ "$file" = "bower.json" ]; then
			echo "`which bower` --allow-root install"
			`which bower` --allow-root install
		fi
		if [ "$file" = "composer.json" ]; then
			echo "`which php` composer.phar install"
			`which php` composer.phar install
		fi
	done

	echo "cd ${CURDIR}"
	cd ${CURDIR}
done

#
#-- end of file --