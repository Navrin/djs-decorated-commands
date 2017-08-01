# Discord.JS Decorated Commands

This is a project to bring the excellent syntaxical sugar of decorators to the world of Discord.JS command routing. Commands are described via decorators, and classes describe the categories. The basic concept for this library is.

```typescript
@Category({
    name: 'utils',
})
class Utilities {
    @command('ping')
    ping({ msg }: CommandParams) {
        msg.reply('Pong!');
    }

    @command({
        name: 'say_hello',
        aliases: ['hi_bot', 'heya_bot!'],
        unscoped: true, // doesn't require !utils hi_bot, just !hi_bot
    })
    greeter({ msg }: CommandParams) {
        msg.reply(`Hello, ${msg.author.tag}!`);
    }
}
```