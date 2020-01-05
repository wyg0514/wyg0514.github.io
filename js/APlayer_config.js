const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    theme: '#b7daff',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.5,
    lrcType: 3,
    mutex: true,
    listFolded: false,

    audio: [
            // {
            //     name: '一直很安静',
            //     artist: '阿桑',
            //     lrc: '/music/lrc/一直很安静 - 阿桑.lrc',
            //     cover: 'https://p1.music.126.net/SpovasHBud2A1qXXADXsBg==/109951163167455610.jpg?param=300x300',
            //     url: 'http://q0fzyzixq.bkt.clouddn.com/audio/mp3/一直很安静 - 阿桑.mp3'
            // },
            {
                name: '庐州月',
                artist: '许嵩',
                lrc: '[00:00.00] 暂无歌词',
                cover: 'https://p1.music.126.net/SpovasHBud2A1qXXADXsBg==/109951163167455610.jpg?param=300x300',
                url: 'http://m10.music.126.net/20200105154348/97fff82dc893c1b7c22512f3edacaea2/ymusic/86de/4d7b/c0dc/b45d9ddf9d7837f0d0bb71707ee1decf.mp3'
            },
            {
                name: 'Walk Away',
                artist: 'Dia Frampton',
                lrc: '[00:00.00] 暂无歌词',
                cover: 'https://p1.music.126.net/SpovasHBud2A1qXXADXsBg==/109951163167455610.jpg?param=300x300',
                url: 'http://m10.music.126.net/20200105155313/c1145e4720b10c254ed439705f69647e/ymusic/3b54/c78e/cad4/48354c2210fa3aa64df1e9d206e38cb5.mp3'
            }
        ]
});