# mirrorz.d.json

This repo hosts scripts/meta that generate `mirrorz.d.json`, which are then used by [mirrorz-302](https://github.com/mirrorz-org/mirrorz-302)

## Setup

`config` directory is from `mirrorz-org/mirrorz-config`.

`parser` directory is from `mirrorz-org/mirrorz-parser`.

```bash
git clone git@github.com:mirrorz-org/mirrorz-config.git config
pushd config && ln -sf config/mirrors.cernet.edu.cn.json config.json && popd
git clone git@github.com:mirrorz-org/mirrorz-parser.git parser
pushd parser && ln -sf ../config/config.json config.json && npm i && popd
```

Use `node generate.js` to generate data in `/dist`
