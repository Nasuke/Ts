
type lyrics = {
    time: number,
    text: string
}

function parseLyrics(lyric: string): lyrics[] {
    const lyrics: lyrics[] = []
    lyrics.push({ time: 29, text: 'dududu' })
    return lyrics
}

const lyricsInfo = parseLyrics("zyczyczyc")

for (let item of lyricsInfo) {
    console.log(item.time, item.text); // 会有自动提示
    // console.log(item.age); X -> 类型“lyrics”上不存在属性“age”
}

export {}