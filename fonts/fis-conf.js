fis.set("atm", {
    uploadService: 'http://wapstatic.kf0309.3g.qq.com/deploy',
    uploadConfig: {
        from: "./",
        to: '/data/wapstatic/guide/qqbrowser_trunk/fonts',
        ignore: /(^\.)|(\.zip$)/i
    }
});