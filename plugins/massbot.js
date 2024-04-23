import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  const name = conn.getName(m.sender);
  if (!text) {
    throw `مرحبن انا بوت ماش]😑[ *${name}*, كيف يمكنني مساعدتك مثلن  with *${usedPrefix + command}* (بوت هات نصيحه)\n\n 🧫 Example: *${usedPrefix + command}* Hi bot`;
  }
  
  m.react('❄');

  const msg = encodeURIComponent(text);
  
  const res = await fetch(`https://ultimetron.guruapi.tech/gpt3?prompt=${msg}`);

  const json = await res.json();
  
  
    let reply = json.completion;
    m.reply(reply);

};

handler.help = ['بوت'];
handler.tags = ['fun'];
handler.command = ['بوت', 'ماش'];

export default handler;
