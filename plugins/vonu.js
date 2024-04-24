import fetch from 'node-fetch';
import cheerio from 'cheerio';


const handler = async (m, {conn, args, command, usedPrefix}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.adult_xnxxdl

  if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `${tradutor.texto1}`;
  if (!args[0]) throw `${tradutor.texto2} ${usedPrefix + command} https://www.xnxx.com/video-14lcwbe8/rubia_novia_follada_en_cuarto_de_bano*`;
  try {
    await conn.reply(m.chat, tradutor.texto3, m);
    let xnxxLink = '';
    if (args[0].includes('xnxx')) {
      xnxxLink = args[0];
    } else {
      const index = parseInt(args[0]) - 1;
      if (index >= 0) {
        if (Array.isArray(global.videoListXXX) && global.videoListXXX.length > 0) {
          const matchingItem = global.videoListXXX.find((item) => item.from === m.sender);
          if (matchingItem) {
            if (index < matchingItem.urls.length) {
              xnxxLink = matchingItem.urls[index];
            } else {
              throw `${tradutor.texto4} ${matchingItem.urls.length}*`;
            }
          } else {
            throw `${texto5} (${usedPrefix + command} ${tradutor.texto5_1} ${usedPrefix}xnxxsearch <texto>*`;
          }
        } else {
          throw `${tradutor.texto6} (${usedPrefix + command} ${tradutor.texto6_1} ${usedPrefix}xnxxsearch <texto>*`;
        }
      }
    }
    const res = await xnxxdl(xnxxLink);
    const json = await res.result.files;
    conn.sendMessage(m.chat, {document: {url: json.high}, mimetype: 'video/mp4', fileName: res.result.title}, {quoted: m});
  } catch {
    throw `${tradutor.texto7}\n*◉ https://www.xnxx.com/video-14lcwbe8/rubia_novia_follada_en_cuarto_de_bano*`;
  }
};
handler.command = /^(xnxxdl)$/i;
export default handler;

async function xnxxdl(URL) {
}
