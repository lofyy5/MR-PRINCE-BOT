const imglist = 'https://telegra.ph/file/525bbb55c7f2e4c0091bd.mp4'
let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`*الموضوع:*\n${text ? `${text}\n` : ''}\n*~_تمـ آلآشـآرهہ‏‏ لگ آنت وآ آصـدقآگ مـن قبل آلآدمـن_~ \n\n\n` + users.map(v => '│♪ @' + v.replace(/@.+/, '')).join`\n` + '\n⛾「 *تمت الإشارة للكل* 」⛾', null, {
        mentions: users
    })
}

handler.help = ['taga']
handler.tags = ['owner']
handler.command = ['taga']
handler.admin = true
handler.group = true

export default handler
